import type { Meta, StoryObj } from '@storybook/react'
import { AlertCircle, AlertTriangle, CheckCircle, MoveRight } from 'lucide-react'
import Alert from './'

const meta: Meta<typeof Alert> = {
  title: 'Components/UIElements/Alert',
  component: Alert,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Alert>

const colors = ['custom', 'green', 'orange', 'sky', 'yellow', 'red', 'purple', 'light'] as const

export const Basic: Story = {
  render: () => (
    <div className="space-y-4">
      {colors.map((color) => (
        <Alert key={color} color={color}>
          <Alert.Bold>{color}</Alert.Bold> alert! You should check in on some of those fields below.
        </Alert>
      ))}
    </div>
  ),
}

export const Bordered: Story = {
  render: () => (
    <div className="space-y-4">
      {colors.map((color) => (
        <Alert key={color} color={color} variant="bordered">
          <Alert.Bold>{color}</Alert.Bold> alert! You should check in on some of those fields below.
        </Alert>
      ))}
    </div>
  ),
}

export const Content: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert color="custom" variant="content">
        <AlertCircle className="inline-block size-4 mt-0.5 shrink-0" />
        <Alert.Content>
          <h6 className="mb-1">Hi! A simple Primary alert —check it out!</h6>
          <ul className="ml-2 list-disc list-inside">
            <li>Send the billing agreement</li>
            <li>Send over all the documentation.</li>
            <li>Meeting with Daron to review the intake form</li>
          </ul>
        </Alert.Content>
      </Alert>
      <Alert color="green" variant="content">
        <CheckCircle className="inline-block size-4 mt-0.5 shrink-0" />
        <Alert.Content>
          <h6 className="mb-1">Yey! Everything worked!</h6>
          <ul className="ml-2 list-disc list-inside">
            <li>Send the billing agreement</li>
            <li>Send over all the documentation.</li>
          </ul>
        </Alert.Content>
      </Alert>
      <Alert color="yellow" variant="content">
        <AlertCircle className="inline-block size-4 mt-0.5 shrink-0" />
        <Alert.Content>
          <h6 className="mb-1">Uh oh, something went wrong!</h6>
          <p>Check yourself, you're not looking too good.</p>
        </Alert.Content>
      </Alert>
      <Alert color="red" variant="content">
        <AlertTriangle className="inline-block size-4 mt-0.5 shrink-0" />
        <Alert.Content>
          <h6 className="mb-1">Something is very wrong!</h6>
          <p className="mb-2">Change a few things up and try submitting again.</p>
          <a href="#" className="font-semibold text-red-600 hover:text-red-700">
            Read More <MoveRight className="inline-block h-4 align-middle" />
          </a>
        </Alert.Content>
      </Alert>
    </div>
  ),
}

export const Dismissible: Story = {
  render: () => (
    <div className="space-y-4">
      {colors.map((color) => (
        <Alert key={color} color={color} dismissible>
          <Alert.Bold>{color}</Alert.Bold> alert! You should check in on some of those fields below.
        </Alert>
      ))}
    </div>
  ),
}

export const Solid: Story = {
  render: () => (
    <div className="space-y-4">
      {colors.map((color) => (
        <Alert key={color} color={color} variant="solid" dismissible>
          <Alert.Bold>{color}</Alert.Bold> alert! You should check in on some of those fields below.
        </Alert>
      ))}
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="space-y-4">
      {colors.map((color) => (
        <Alert key={color} color={color} variant="icon">
          <Alert.Icon />
          <Alert.Bold>{color}</Alert.Bold> alert! You should check in on some of those fields below.
        </Alert>
      ))}
    </div>
  ),
}

export const WithImage: Story = {
  render: () => (
    <div className="space-y-4">
      {colors.map((color) => (
        <Alert key={color} color={color} variant="image">
          <Alert.Image
            src={`https://ui-avatars.com/api/?name=${color}&background=random&size=64`}
            alt={color}
            className="size-8 rounded-full"
          />
          <Alert.Bold>{color}</Alert.Bold> alert! You should check in on some of those fields below.
        </Alert>
      ))}
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div className="space-y-4">
      {colors.map((color) => (
        <Alert key={color} color={color} variant="outline">
          <Alert.Bold>{color}</Alert.Bold> alert! You should check in on some of those fields below.
        </Alert>
      ))}
    </div>
  ),
}
