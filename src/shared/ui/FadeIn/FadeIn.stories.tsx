import type { Meta, StoryObj } from '@storybook/react'
import { FadeIn } from './FadeIn'

const meta = {
  title: 'UI/FadeIn',
  component: FadeIn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right', 'none'],
    },
    delay: {
      control: { type: 'range', min: 0, max: 2, step: 0.1 },
    },
    duration: {
      control: { type: 'range', min: 0.1, max: 2, step: 0.1 },
    },
    distance: {
      control: { type: 'range', min: 0, max: 100, step: 10 },
    },
  },
} satisfies Meta<typeof FadeIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="bg-primary/20 p-6 rounded-lg text-white">
        Fade In Content
      </div>
    ),
    direction: 'up',
    delay: 0,
    duration: 0.6,
  },
}

export const FromLeft: Story = {
  args: {
    children: (
      <div className="bg-primary/20 p-6 rounded-lg text-white">
        Fades from left
      </div>
    ),
    direction: 'left',
  },
}

export const FromRight: Story = {
  args: {
    children: (
      <div className="bg-primary/20 p-6 rounded-lg text-white">
        Fades from right
      </div>
    ),
    direction: 'right',
  },
}

export const FromDown: Story = {
  args: {
    children: (
      <div className="bg-primary/20 p-6 rounded-lg text-white">
        Fades from above
      </div>
    ),
    direction: 'down',
  },
}

export const WithDelay: Story = {
  args: {
    children: (
      <div className="bg-primary/20 p-6 rounded-lg text-white">
        Fades in with 0.5s delay
      </div>
    ),
    delay: 0.5,
  },
}

export const AllDirections: Story = {
  args: {
    children: <div className="bg-base-100 p-4 rounded text-white">Content</div>,
  },
  render: (_, { args }) => (
    <div className="grid grid-cols-2 gap-4">
      <FadeIn direction="up">{args.children}</FadeIn>
      <FadeIn direction="down">{args.children}</FadeIn>
      <FadeIn direction="left">{args.children}</FadeIn>
      <FadeIn direction="right">{args.children}</FadeIn>
    </div>
  ),
}
