import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, type AvatarProps } from './'

type Story = StoryObj<AvatarProps>

const colors = ['custom', 'green', 'orange', 'yellow'] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const

const meta: Meta<AvatarProps> = {
  title: 'Components/UIElements/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    shape: 'circle',
    size: 'md',
    variant: 'text',
    color: 'custom',
  },
  argTypes: {
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    variant: {
      control: 'select',
      options: ['text', 'image', 'placeholder'],
    },
    color: {
      control: 'select',
      options: ['custom', 'green', 'orange', 'yellow'],
    },
    statusColor: {
      control: 'select',
      options: ['red', 'green'],
    },
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'A',
  },
}

export const Image: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        {sizes.map((size) => (
          <Avatar
            status
            statusColor="green"
            key={size}
            variant="image"
            size={size}
            src={`https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70)}`}
          ></Avatar>
        ))}
      </div>
      <div className="flex gap-3">
        {sizes.map((size) => (
          <Avatar
            status
            statusColor="green"
            key={size}
            variant="image"
            size={size}
            shape="square"
            src={`https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70)}`}
          ></Avatar>
        ))}
      </div>
    </div>
  ),
  args: {
    variant: 'image',
    src: 'https://i.pravatar.cc/100?img=3',
  },
}

export const PlaceholderCustom: Story = {
  render: () => {
    return (
      <div className="flex flex-col  gap-4">
        <div className="flex gap-3">
          {colors.map((color) => (
            <Avatar key={color} variant="placeholder" color={color}></Avatar>
          ))}
        </div>
        <div className="flex gap-3">
          {colors.map((color) => (
            <Avatar key={color} variant="placeholder" color={color} shape="square"></Avatar>
          ))}
        </div>
      </div>
    )
  },
}

export const Bordered: Story = {
  render: () => (
    <div className="flex gap-3">
      <Avatar variant="image" src="https://i.pravatar.cc/100?img=5" bordered></Avatar>
      <Avatar
        shape="square"
        variant="image"
        src="https://i.pravatar.cc/100?img=5"
        bordered
      ></Avatar>
    </div>
  ),
}

export const WithStatus: Story = {
  render: () => (
    <div className="flex gap-3">
      <Avatar variant="text" status statusColor="red" className="bg-green-100 text-green-500">
        A
      </Avatar>
      <Avatar
        variant="text"
        shape="square"
        status
        statusColor="green"
        className="bg-red-100 text-red-500"
      >
        B
      </Avatar>
    </div>
  ),
  args: {
    variant: 'text',
    children: 'A',
    status: true,
    statusColor: 'green',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4 items-end">
        {sizes.map((size) => (
          <Avatar key={size} size={size} variant="text">
            {size.toUpperCase()}
          </Avatar>
        ))}
      </div>
      <div className="flex gap-4 items-end">
        {sizes.map((size) => (
          <Avatar key={size} size={size} variant="text" shape="square">
            {size.toUpperCase()}
          </Avatar>
        ))}
      </div>
    </div>
  ),
}

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar shape="circle" size="xl">
        A
      </Avatar>
      <Avatar shape="square" size="xl">
        A
      </Avatar>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-4">
      <Avatar size="sm" src="https://i.pravatar.cc/100?img=1" variant="image" />
      <Avatar size="sm" src="https://i.pravatar.cc/100?img=2" variant="image" />
      <Avatar size="sm" src="https://i.pravatar.cc/100?img=3" variant="image" />
      <Avatar size="sm" variant="text">
        +99
      </Avatar>
    </div>
  ),
}

export default meta
