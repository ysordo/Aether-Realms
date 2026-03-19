import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'elevated', 'outlined', 'hero'] },
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    children: <div><h3 className="text-white font-bold">Card Title</h3><p className="text-gray-400 mt-2">Content</p></div>,
  },
}
export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'lg',
    children: <div><h3 className="text-white font-bold">Elevated Card</h3><p className="text-gray-400 mt-2">Shadow effect</p></div>,
  },
}
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 'md',
    children: <div><h3 className="text-white font-bold">Outlined Card</h3><p className="text-gray-400 mt-2">Border only</p></div>,
  },
}

export const AllVariants: Story = {
  args: { padding: 'md', children: <h3 className="text-white font-bold">Card</h3> },
  render: (_, { args }) => (
    <div className="grid grid-cols-2 gap-4">
      <Card variant="default" {...args}><h3 className="text-white font-bold">Default</h3></Card>
      <Card variant="elevated" {...args}><h3 className="text-white font-bold">Elevated</h3></Card>
      <Card variant="outlined" {...args}><h3 className="text-white font-bold">Outlined</h3></Card>
      <Card variant="hero" {...args}><h3 className="text-white font-bold">Hero</h3></Card>
    </div>
  ),
}
