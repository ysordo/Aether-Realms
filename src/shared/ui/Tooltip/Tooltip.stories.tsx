import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {
  args: {
    position: 'top',
    content: 'This is a tooltip on top',
    children: (
      <button className="bg-primary text-white px-4 py-2 rounded">
        Hover me
      </button>
    ),
  },
}

export const Bottom: Story = {
  args: {
    position: 'bottom',
    content: 'This is a tooltip on bottom',
    children: (
      <button className="bg-primary text-white px-4 py-2 rounded">
        Hover me
      </button>
    ),
  },
}

export const Left: Story = {
  args: {
    position: 'left',
    content: 'This is a tooltip on left',
    children: (
      <button className="bg-primary text-white px-4 py-2 rounded">
        Hover me
      </button>
    ),
  },
}

export const Right: Story = {
  args: {
    position: 'right',
    content: 'This is a tooltip on right',
    children: (
      <button className="bg-primary text-white px-4 py-2 rounded">
        Hover me
      </button>
    ),
  },
}

export const RichContent: Story = {
  args: {
    position: 'top',
    content: (
      <div>
        <p className="text-white font-bold text-sm mb-1">Skill Name</p>
        <p className="text-slate-300 text-xs">This is a detailed skill description with multiple lines.</p>
      </div>
    ),
    children: (
      <button className="bg-primary text-white px-4 py-2 rounded">
        Hover for details
      </button>
    ),
  },
}

export const AllPositions: Story = {
  args: {
    position: 'top',
    content: 'Tooltip content',
    children: (
      <button className="bg-primary text-white px-4 py-2 rounded">Hover</button>
    ),
  },
  render: (_, { args }) => (
    <div className="grid grid-cols-3 gap-8 p-8">
      <Tooltip position="top" {...args}>Top</Tooltip>
      <Tooltip position="bottom" {...args}>Bottom</Tooltip>
      <Tooltip position="left" {...args}>Left</Tooltip>
      <Tooltip position="right" {...args}>Right</Tooltip>
    </div>
  ),
}
