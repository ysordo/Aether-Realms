import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    icon: { control: 'text' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { variant: 'primary', size: 'md', children: 'Primary Button' } }
export const Secondary: Story = { args: { variant: 'secondary', size: 'md', children: 'Secondary Button' } }
export const Outline: Story = { args: { variant: 'outline', size: 'md', children: 'Outline Button' } }
export const Ghost: Story = { args: { variant: 'ghost', size: 'md', children: 'Ghost Button' } }
export const WithIcon: Story = { args: { variant: 'primary', size: 'md', icon: 'play_arrow', children: 'Play Now' } }
export const Small: Story = { args: { variant: 'primary', size: 'sm', children: 'Small Button' } }
export const Large: Story = { args: { variant: 'primary', size: 'lg', children: 'Large Button' } }

export const AllVariants: Story = {
  args: { children: 'Button' },
  render: (_, { args }) => (
    <div className="flex gap-4 flex-wrap">
      <Button variant="primary" {...args}>Primary</Button>
      <Button variant="secondary" {...args}>Secondary</Button>
      <Button variant="outline" {...args}>Outline</Button>
      <Button variant="ghost" {...args}>Ghost</Button>
    </div>
  ),
}
