import type { StorybookConfig } from '@storybook/react-vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/na-core-ui/'
    }

    config.plugins = config.plugins || []
    config.plugins?.push(tsconfigPaths())
    config.plugins?.push(viteStaticCopy({ targets: [{ src: '.nojekyll', dest: '.' }] }))
    return config
  },
}

export default config
