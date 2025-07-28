import type { Preview } from '@storybook/react'
import 'react-tooltip/dist/react-tooltip.css'
import '../src/libs/assets/scss/themes.scss'

export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direção do layout',
    defaultValue: 'ltr',
    toolbar: {
      icon: 'transfer',
      items: [
        { value: 'ltr', title: 'Left to Right' },
        { value: 'rtl', title: 'Right to Left' },
      ],
      showName: true,
    },
  },
  mode: {
    name: 'Mode',
    description: 'Modo de exibição',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light Mode' },
        { value: 'dark', title: 'Dark Mode' },
      ],
      showName: true,
    },
  },
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      document.documentElement.setAttribute('dir', context.globals.direction || 'ltr')
      document.documentElement.setAttribute('data-mode', context.globals.mode || 'light')
      return Story()
    },
  ],
}

export default preview
