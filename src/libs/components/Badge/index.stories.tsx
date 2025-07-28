// Badge.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Gift } from 'lucide-react'
import { Badge } from './'

const colors = ['custom', 'green', 'orange', 'sky', 'yellow', 'red', 'purple', 'slate'] as const
const variants = ['default', 'outline', 'bordered', 'soft', 'fill', 'link'] as const
const shapes = ['square', 'pill', 'iconOnly'] as const

const meta: Meta<typeof Badge> = {
  title: 'Components/UIElements/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: colors,
    },
    variant: {
      control: 'select',
      options: variants,
    },
    shape: {
      control: 'select',
      options: shapes,
    },
    as: {
      control: 'select',
      options: ['span', 'a'],
    },
    dismissible: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    withIcon: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    iconOnly: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    indicator: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },

    icon: {
      type: 'symbol',
    },
  },
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <Badge key={color} color={color}>
          {color}
        </Badge>
      ))}
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <Badge key={color} color={color} variant="outline">
          {color}
        </Badge>
      ))}
    </div>
  ),
}

export const Bordered: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <Badge key={color} color={color} variant="bordered">
          {color}
        </Badge>
      ))}
    </div>
  ),
}

export const SoftOutline: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <Badge key={color} color={color} variant="soft">
          {color}
        </Badge>
      ))}
    </div>
  ),
}

export const Filled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <Badge key={color} color={color} variant="fill">
          {color}
        </Badge>
      ))}
    </div>
  ),
}

export const PillShape: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <Badge key={color} color={color} shape="pill">
          {color}
        </Badge>
      ))}
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <Badge key={color} color={color} variant="default" icon={<Gift className="size-3" />}>
          {color}
        </Badge>
      ))}
    </div>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap gap-5 flex-col">
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <Badge key={color} color={color} iconOnly icon={<Gift className="size-3" />}></Badge>
        ))}

        {colors.map((color) => (
          <Badge
            key={color}
            color={color}
            iconOnly
            shape="pill"
            icon={<Gift className="size-3" />}
          ></Badge>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <Badge
            key={color}
            color={color}
            iconOnly
            as="a"
            icon={<Gift className="size-3" />}
          ></Badge>
        ))}

        {colors.map((color) => (
          <Badge
            as="a"
            key={color}
            color={color}
            iconOnly
            shape="pill"
            icon={<Gift className="size-3" />}
          ></Badge>
        ))}

        {colors.map((color) => (
          <Badge
            as="a"
            variant="link"
            key={color}
            color={color}
            iconOnly
            shape="pill"
            icon={<Gift className="size-3" />}
          ></Badge>
        ))}
      </div>
    </div>
  ),
}

export const WithIndicator: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <Badge key={color} color={color} variant="outline" indicator>
          {color}
        </Badge>
      ))}
    </div>
  ),
}

export const Dismissible: Story = {
  render: () => (
    <div className="flex flex-col flex-wrap gap-5">
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <Badge key={color} color={color} variant="default" dismissible>
            Closable
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <Badge key={color} color={color} variant="outline" dismissible>
            Closable
          </Badge>
        ))}
      </div>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <div className="flex flex-wrap gap-5 flex-col">
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <Badge key={color} color={color} variant="link" as="a" href="#">
            {color}
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <Badge key={color} color={color} variant="default" as="a" href="#">
            {color}
          </Badge>
        ))}
      </div>
    </div>
  ),
}
