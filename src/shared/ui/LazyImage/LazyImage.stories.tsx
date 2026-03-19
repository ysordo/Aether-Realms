import type { Meta, StoryObj } from '@storybook/react'
import { LazyImage } from './LazyImage'

const meta = {
  title: 'UI/LazyImage',
  component: LazyImage,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof LazyImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Random image',
    aspectRatio: 'aspect-[4/3]',
  },
}

export const Portrait: Story = {
  args: {
    src: 'https://picsum.photos/300/400',
    alt: 'Portrait image',
    aspectRatio: 'aspect-[3/4]',
  },
}

export const Square: Story = {
  args: {
    src: 'https://picsum.photos/300/300',
    alt: 'Square image',
    aspectRatio: 'aspect-square',
  },
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <LazyImage src="https://picsum.photos/200/200" alt="Image 1" aspectRatio="aspect-square" />
      <LazyImage src="https://picsum.photos/200/201" alt="Image 2" aspectRatio="aspect-square" />
      <LazyImage src="https://picsum.photos/200/202" alt="Image 3" aspectRatio="aspect-square" />
      <LazyImage src="https://picsum.photos/200/203" alt="Image 4" aspectRatio="aspect-square" />
    </div>
  ),
}
