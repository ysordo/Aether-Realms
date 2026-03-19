import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'gold', 'white', 'inherit'],
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'primary',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'primary',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    color: 'primary',
  },
}

export const Gold: Story = {
  args: {
    size: 'md',
    color: 'gold',
  },
}

export const White: Story = {
  args: {
    size: 'md',
    color: 'white',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="text-center">
        <Spinner size="sm" />
        <p className="text-xs mt-2 text-gray-400">SM</p>
      </div>
      <div className="text-center">
        <Spinner size="md" />
        <p className="text-xs mt-2 text-gray-400">MD</p>
      </div>
      <div className="text-center">
        <Spinner size="lg" />
        <p className="text-xs mt-2 text-gray-400">LG</p>
      </div>
      <div className="text-center">
        <Spinner size="xl" />
        <p className="text-xs mt-2 text-gray-400">XL</p>
      </div>
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div className="flex items-center gap-6 bg-base-100 p-4 rounded">
      <Spinner size="md" color="primary" />
      <Spinner size="md" color="gold" />
      <Spinner size="md" color="white" />
      <Spinner size="md" color="inherit" />
    </div>
  ),
}
