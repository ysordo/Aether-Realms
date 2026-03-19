import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'gold', 'blue', 'slate', 'green', 'red', 'cyan', 'orange', 'purple', 'white'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { variant: 'primary', size: 'md', children: 'Primary' } }
export const Gold: Story = { args: { variant: 'gold', size: 'md', children: 'Gold' } }
export const Blue: Story = { args: { variant: 'blue', size: 'md', children: 'Blue' } }
export const Small: Story = { args: { variant: 'primary', size: 'sm', children: 'Small Badge' } }

export const AllVariants: Story = {
  args: { size: 'md' },
  render: (_, { args }) => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="primary" {...args}>Primary</Badge>
      <Badge variant="gold" {...args}>Gold</Badge>
      <Badge variant="blue" {...args}>Blue</Badge>
      <Badge variant="slate" {...args}>Slate</Badge>
      <Badge variant="green" {...args}>Green</Badge>
      <Badge variant="red" {...args}>Red</Badge>
      <Badge variant="cyan" {...args}>Cyan</Badge>
      <Badge variant="orange" {...args}>Orange</Badge>
      <Badge variant="purple" {...args}>Purple</Badge>
      <Badge variant="white" {...args}>White</Badge>
    </div>
  ),
}

export const RarityExample: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="slate">Common</Badge>
      <Badge variant="blue">Rare</Badge>
      <Badge variant="purple">Epic</Badge>
      <Badge variant="gold">Legendary</Badge>
    </div>
  ),
}
