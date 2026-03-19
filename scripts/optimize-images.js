#!/usr/bin/env node

/**
 * Image Optimization Script for Aether Realms
 * 
 * This script:
 * - Converts images to WebP and AVIF formats
 * - Generates multiple sizes (thumbnail, medium, large)
 * - Creates placeholder blur-up images
 * - Optimizes PNG/JPG files
 */

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PROJECT_ROOT = join(__dirname, '..')
const PUBLIC_DIR = join(PROJECT_ROOT, 'public')
const IMAGES_DIR = join(PUBLIC_DIR, 'images')
const OPTIMIZED_DIR = join(PUBLIC_DIR, 'optimized')

// Image sizes to generate
const SIZES = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 300, height: 300 },
  medium: { width: 600, height: 600 },
  large: { width: 1200, height: 1200 },
}

/**
 * Check if sharp is available (optional dependency)
 */
let sharp
try {
  sharp = (await import('sharp')).default
  console.log('✓ Sharp loaded successfully')
} catch (error) {
  console.log('⚠ Sharp not installed. Install with: npm install -D sharp')
  console.log('Running in basic mode without image optimization.')
  return
}

/**
 * Generate blur-up placeholder (base64)
 */
async function generateBlurPlaceholder(imagePath) {
  try {
    const { data, info } = await sharp(imagePath)
      .resize(10, 10, { fit: 'inside' })
      .jpeg({ quality: 50 })
      .toBuffer({ resolveWithObject: true })

    const base64 = `data:image/jpeg;base64,${data.toString('base64')}`
    return base64
  } catch (error) {
    console.error(`Error generating placeholder for ${imagePath}:`, error.message)
    return null
  }
}

/**
 * Generate multiple sizes and formats
 */
async function optimizeImage(inputPath, outputPath, filename) {
  const name = filename.slice(0, filename.lastIndexOf('.'))

  try {
    // Generate sizes
    for (const [sizeName, { width, height }] of Object.entries(SIZES)) {
      // WebP format
      await sharp(inputPath)
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(join(outputPath, `${name}-${sizeName}.webp`))

      // AVIF format (better compression)
      await sharp(inputPath)
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .avif({ quality: 70, effort: 9 })
        .toFile(join(outputPath, `${name}-${sizeName}.avif`))

      console.log(`  ✓ Generated ${sizeName} (${width}x${height})`)
    }

    // Generate blur placeholder
    const placeholder = await generateBlurPlaceholder(inputPath)
    if (placeholder) {
      writeFileSync(
        join(outputPath, `${name}-placeholder.json`),
        JSON.stringify({ placeholder })
      )
      console.log(`  ✓ Generated blur placeholder`)
    }
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error.message)
  }
}

/**
 * Main optimization function
 */
async function optimizeAllImages() {
  console.log('\n🚀 Starting image optimization...\n')

  // Create optimized directory
  if (!existsSync(OPTIMIZED_DIR)) {
    mkdirSync(OPTIMIZED_DIR, { recursive: true })
    console.log(`✓ Created ${OPTIMIZED_DIR}`)
  }

  // Check if images directory exists
  if (!existsSync(IMAGES_DIR)) {
    console.log(`⚠ Images directory not found: ${IMAGES_DIR}`)
    console.log('Creating sample directory structure...')
    mkdirSync(IMAGES_DIR, { recursive: true })
    return
  }

  // Get all images
  const files = readdirSync(IMAGES_DIR).filter((file) =>
    /\.(png|jpg|jpeg|webp|avif)$/i.test(file)
  )

  if (files.length === 0) {
    console.log('No images found to optimize.')
    return
  }

  console.log(`Found ${files.length} images to optimize\n`)

  // Process each image
  for (const file of files) {
    console.log(`Processing: ${file}`)
    const inputPath = join(IMAGES_DIR, file)
    const outputPath = join(OPTIMIZED_DIR, extname(file).slice(1))

    if (!existsSync(outputPath)) {
      mkdirSync(outputPath, { recursive: true })
    }

    await optimizeImage(inputPath, outputPath, file)
    console.log('')
  }

  console.log('✅ Image optimization complete!\n')
  console.log('Usage in components:')
  console.log(`
  <picture>
    <source srcSet="/optimized/avif/hero-thumbnail.avif" type="image/avif" />
    <source srcSet="/optimized/webp/hero-thumbnail.webp" type="image/webp" />
    <img src="/images/hero.jpg" alt="Hero" loading="lazy" />
  </picture>
  `)
}

// Run optimization
optimizeAllImages().catch(console.error)
