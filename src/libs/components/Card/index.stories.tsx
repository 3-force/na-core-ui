import type { Meta, StoryFn } from '@storybook/react'
import { Card } from './index'

export default {
  title: 'Components/UIElements/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Card is a versatile component that can be used to display content in a structured format. It supports various styles and configurations, including different variants, colors, and positions for images.',
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'border', 'dashed', 'fill', 'modern'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['custom', 'green', 'orange', 'sky', 'yellow', 'red', 'purple', 'slate'],
      },
    },
    position: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
      },
    },
    imgBottom: {
      control: {
        type: 'boolean',
      },
    },
    animation: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

const Template: StoryFn<typeof Card> = (args) => (
  <div className="flex items-center justify-center">
    <Card {...args} className="max-w-sm" />
  </div>
)

const TemplateColors: StoryFn<typeof Card> = (args) => (
  <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
    {colors.map((color) => (
      <Card key={color} {...args} title={`${args.title} (${color})`} color={color} />
    ))}
  </div>
)

const colors = ['custom', 'green', 'orange', 'sky', 'yellow', 'red', 'purple', 'slate'] as const

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
  title: 'Default Card',
  linkText: 'Learn more',
  linkHref: '#',
  color: 'custom',
  children:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
}

export const Border = TemplateColors.bind({})
Border.args = {
  variant: 'border',
  title: 'Border Card',
  children:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  linkText: 'Learn more',
  linkHref: '#',
}

export const Dashed = TemplateColors.bind({})
Dashed.args = {
  variant: 'dashed',
  title: 'Dashed Card',
  children:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  linkText: 'Learn more',
  linkHref: '#',
}

export const Fill = TemplateColors.bind({})
Fill.args = {
  variant: 'fill',
  title: 'Fill Card',
  children:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  linkText: 'Learn more',
  linkHref: '#',
}

export const Modern = TemplateColors.bind({})
Modern.args = {
  variant: 'modern',
  title: 'Modern Card',
  children:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  linkText: 'Learn more',
  linkHref: '#',
}

export const HorizontalWithImage = Template.bind({})
HorizontalWithImage.args = {
  variant: 'default',
  title: 'Horizontal Card',
  linkText: 'Learn more',
  linkHref: '#',
  color: 'red',
  position: 'horizontal',
  imgUrl: 'https://placehold.co/200',
  imgAlt: 'Placeholder Image',
}

export const VerticalWithAnimation = Template.bind({})
VerticalWithAnimation.args = {
  variant: 'default',
  title: 'Vertical Card',
  linkText: 'Learn more',
  linkHref: '#',
  color: 'purple',
  position: 'vertical',
  animation: true,
  imgUrl: 'https://placehold.co/200',
  imgAlt: 'Placeholder Image',
}
