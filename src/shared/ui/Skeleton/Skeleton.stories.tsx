import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', false],
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    variant: 'text',
    width: 200,
    height: 20,
  },
}

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 100,
    height: 100,
  },
}

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 200,
    height: 150,
  },
}

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    width: 200,
    height: 100,
  },
}

export const CardSkeleton: Story = {
  render: () => (
    <div className="bg-base-100 p-4 rounded-xl space-y-3">
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="text" width={150} height={20} />
      <Skeleton variant="text" width={120} height={16} />
      <Skeleton variant="rounded" width={200} height={40} />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Skeleton variant="text" width={100} height={20} />
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="rectangular" width={80} height={60} />
      <Skeleton variant="rounded" width={100} height={50} />
    </div>
  ),
}
