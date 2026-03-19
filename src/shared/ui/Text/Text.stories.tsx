import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta = {
  title: 'UI/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['gradient', 'glow', 'glow-strong', 'hero', 'section-title', 'subtitle'],
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'span'],
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    as: 'span',
    children: 'Gradient Text',
  },
}

export const Glow: Story = {
  args: {
    variant: 'glow',
    as: 'span',
    children: 'Glowing Text',
  },
}

export const GlowStrong: Story = {
  args: {
    variant: 'glow-strong',
    as: 'span',
    children: 'Strong Glow Text',
  },
}

export const Hero: Story = {
  args: {
    variant: 'hero',
    as: 'h1',
    children: 'Hero Title',
  },
}

export const SectionTitle: Story = {
  args: {
    variant: 'section-title',
    as: 'h2',
    children: 'Section Title',
  },
}

export const Subtitle: Story = {
  args: {
    variant: 'subtitle',
    as: 'p',
    children: 'This is a subtitle with description text.',
  },
}

export const AllVariants: Story = {
  args: {
    children: 'Text Variant',
  },
  render: (_, { args }) => (
    <div className="flex flex-col gap-4">
      <Text variant="gradient" as="span">{args.children}</Text>
      <Text variant="glow" as="span">{args.children}</Text>
      <Text variant="glow-strong" as="span">{args.children}</Text>
      <Text variant="hero" as="h1">{args.children}</Text>
      <Text variant="section-title" as="h2">{args.children}</Text>
      <Text variant="subtitle" as="p">{args.children}</Text>
    </div>
  ),
}
