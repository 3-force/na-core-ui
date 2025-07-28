const preset = require('./tailwind-preset')

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/simplebar-react/**/*',
    './node_modules/apexcharts/**/*',
    './node_modules/@fullcalendar/**/*',
    './node_modules/swiper/**/*',
    './node_modules/prismjs/**/**/*',
    './node_modules/flatpickr/**/*',
    './node_modules/react-toastify/**/*',
    './node_modules/lightbox.js-react/**/*',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  presets: [preset],
}
