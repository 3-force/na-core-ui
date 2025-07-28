import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonColor, ButtonVariant } from './index'
import Button from './index'

const meta: Meta<typeof Button> = {
  title: 'Components/UIElements/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['custom', 'soft', 'dashed', 'outline', 'ghost', 'link'],
    },
    color: {
      control: 'select',
      options: ['primary', 'green', 'orange', 'sky', 'yellow', 'red', 'purple', 'slate', 'light'],
    },
    statusDot: {
      control: 'select',
      options: [
        null,
        'primary',
        'green',
        'orange',
        'sky',
        'yellow',
        'red',
        'purple',
        'slate',
        'light',
      ],
      description: 'Color for the status dot notification',
    },
    rounded: {
      control: 'radio',
      options: ['full', 'md'],
      description: 'Defines the border radius of the button',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Defines the size of the button',
    },
    animation: {
      control: 'select',
      options: ['spin', 'bounce', 'ping', 'pulse', 'none'],
      description: 'Animation effect for the button',
    },
    positionIcon: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon relative to the button text',
    },
    as: {
      control: 'select',
      options: ['button', 'a'],
    },
    href: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'custom',
    color: 'primary',
  },
}

// Story type

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

const variants: ButtonVariant[] = ['custom', 'soft', 'dashed', 'outline', 'ghost', 'link']
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'icon'] as const
const animations = ['spin', 'bounce', 'ping', 'pulse', 'none'] as const
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      {sizes.map((size) => (
        <Button key={size} {...args} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
}

export const Rounded: Story = {
  render: (args) => (
    <div className="flex gap-2 justify-between container">
      <div className="flex gap-5">
        {variants.map((variant) => (
          <Button key={variant} className="capitalize" {...args} rounded="full" variant={variant}>
            {variant}
          </Button>
        ))}
      </div>
      <div className="flex gap-5">
        {variants.map((variant) => (
          <Button key={variant} {...args} size="icon" rounded="full" variant={variant}>
            <i className="ri-download-2-line"></i>
          </Button>
        ))}
      </div>
    </div>
  ),
}

export const withIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        {sizes
          .filter((s) => s !== 'icon')
          .map((size) => (
            <Button
              key={size + '-left'}
              {...args}
              size={size}
              icon={<i className="ri-download-2-line"></i>}
              positionIcon="left"
            >
              {`Label ${size} left`}
            </Button>
          ))}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        {sizes
          .filter((s) => s !== 'icon')
          .map((size) => (
            <Button
              key={size + '-right'}
              {...args}
              size={size}
              icon={<i className="ri-download-2-line"></i>}
              positionIcon="right"
            >
              {`Label ${size} right`}
            </Button>
          ))}
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        {sizes
          .filter((s) => s !== 'icon')
          .map((size) => (
            <Button
              key={size + '-left'}
              {...args}
              size={size}
              labelIcon
              icon={<i className="ri-download-2-line"></i>}
              positionIcon="left"
            >
              {`Label ${size} left`}
            </Button>
          ))}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        {sizes
          .filter((s) => s !== 'icon')
          .map((size) => (
            <Button
              key={size + '-right'}
              {...args}
              size={size}
              labelIcon
              icon={<i className="ri-download-2-line"></i>}
              positionIcon="right"
            >
              {`Label ${size} right`}
            </Button>
          ))}
      </div>
    </div>
  ),
}

export const Loading: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button {...args} loading>
        Loading
      </Button>
      <Button
        {...args}
        loading
        icon={
          <span role="img" aria-label="spinner">
            🔄
          </span>
        }
      ></Button>

      <Button {...args} loading={false} statusDot="sky" variant="dashed">
        teste
      </Button>
    </div>
  ),
  args: {
    loading: true,
    children: '',
  },
}

export const Animations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      {animations.map((animation) => (
        <Button key={animation} {...args} animation={animation}>
          {animation}
        </Button>
      ))}
    </div>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

const colors: ButtonColor[] = [
  'primary',
  'green',
  'orange',
  'sky',
  'yellow',
  'red',
  'purple',
  'slate',
  'light',
]

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {colors.map((color) => (
        <Button key={color} {...args} color={color}>
          {color}
        </Button>
      ))}
    </div>
  ),
}

export default meta
