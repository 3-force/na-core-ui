import type { Meta, StoryObj } from '@storybook/react'
import { AvatarGroup } from './'

const avatars = [
  { id: 1, src: 'https://i.pravatar.cc/100?img=1' },
  { id: 2, src: 'https://i.pravatar.cc/100?img=2' },
  { id: 3, src: 'https://i.pravatar.cc/100?img=3' },
  { id: 4, src: 'https://i.pravatar.cc/100?img=4' },
  { id: 5, src: 'https://i.pravatar.cc/100?img=5' },
  { id: 6, src: 'https://i.pravatar.cc/100?img=6' },
]

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/UIElements/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  args: {
    avatars,
    size: 'sm',
  },
}

export default meta
type Story = StoryObj<typeof AvatarGroup>

export const Default: Story = {
  args: {
    maxVisible: 4,
  },
}

export const WithOverflow: Story = {
  args: {
    maxVisible: 4,
    avatars: avatars,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AvatarGroup avatars={avatars} size="sm" />
      <AvatarGroup avatars={avatars} size="md" />
      <AvatarGroup avatars={avatars} size="lg" />
      <AvatarGroup avatars={avatars} size="xl" />
    </div>
  ),
}

export const WithTooltip: Story = {
  render: () => (
    <AvatarGroup
      avatars={[
        { id: 1, src: 'https://i.pravatar.cc/100?img=1', tooltip: 'User 1' },
        { id: 2, src: 'https://i.pravatar.cc/100?img=2', tooltip: 'User 2' },
        { id: 3, src: 'https://i.pravatar.cc/100?img=3', tooltip: 'User 3' },
        { id: 4, src: 'https://i.pravatar.cc/100?img=4', tooltip: 'User 4' },
      ]}
      size="sm"
      maxVisible={3}
    />
  ),
}
