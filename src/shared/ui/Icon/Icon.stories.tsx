import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    name: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = {
  args: {
    name: 'discord',
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    name: 'check',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    name: 'trophy',
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    name: 'crystal_ball',
    size: 'xl',
  },
}

export const AllSizes: Story = {
  args: {
    name: 'play_circle',
    size: 'md',
  },
  render: (args) => (
    <div className="flex items-end gap-4">
      <div className="text-center">
        <Icon {...args} size="sm" />
        <p className="text-xs mt-1 text-gray-400">SM</p>
      </div>
      <div className="text-center">
        <Icon {...args} size="md" />
        <p className="text-xs mt-1 text-gray-400">MD</p>
      </div>
      <div className="text-center">
        <Icon {...args} size="lg" />
        <p className="text-xs mt-1 text-gray-400">LG</p>
      </div>
      <div className="text-center">
        <Icon {...args} size="xl" />
        <p className="text-xs mt-1 text-gray-400">XL</p>
      </div>
    </div>
  ),
}

export const IconGrid: Story = {
  args: {
    name: 'play_circle',
    size: 'md',
  },
  render: (args) => (
    <div className="grid grid-cols-4 gap-4">
      {['play_circle', 'trophy', 'settings', 'close', 'discord', 'twitter', 'check', 'cards', 'swords', 'casino', 'mystery', 'crystal_ball'].map((icon) => (
        <div key={icon} className="flex flex-col items-center gap-1">
          <Icon {...args} name={icon} />
          <span className="text-[8px] text-gray-400">{icon}</span>
        </div>
      ))}
    </div>
  ),
}
