import { Loader2 } from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

export type ButtonVariant = 'custom' | 'soft' | 'dashed' | 'outline' | 'ghost' | 'link'

export type ButtonColor =
  | 'primary'
  | 'green'
  | 'orange'
  | 'sky'
  | 'yellow'
  | 'red'
  | 'purple'
  | 'slate'
  | 'light'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ButtonColor
  children: React.ReactNode
  as?: 'button' | 'a'
  href?: string
  icon?: React.ReactNode
  positionIcon?: 'left' | 'right'
  loading?: boolean
  animation?: 'spin' | 'bounce' | 'ping' | 'pulse' | 'none'
  rounded?: 'full' | 'md' | 'none'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon'
  statusDot?: ButtonColor
  labelIcon?: boolean
}

const button = tv({
  base: 'btn flex items-center justify-center relative',
  variants: {
    variant: {
      custom: '',
      soft: '',
      dashed: 'border-dashed',
      outline: 'bg-white',
      ghost: 'bg-white',
      link: 'bg-white border-white',
    },
    color: {
      primary: '',
      green: '',
      orange: '',
      sky: '',
      yellow: '',
      red: '',
      purple: '',
      slate: '',
      light: '',
    },
    size: {
      xs: 'text-xs px-2 py-1',
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-5 py-2.5',
      xl: 'text-xl px-6 py-3',
      icon: 'size-[37.5px] p-0',
    },
    rounded: {
      full: 'rounded-full',
      md: 'rounded-md',
      none: '',
    },
    animation: {
      spin: 'animate-spin',
      bounce: 'animate-bounce',
      ping: 'animate-ping',
      pulse: 'animate-pulse',
      none: 'animate-none',
    },
    labelIcon: {
      true: '',
      false: '',
    },
    positionIcon: {
      left: '',
      right: '',
    },
  },
  compoundVariants: [
    ...(() => {
      const variants = ['custom', 'soft', 'dashed', 'outline', 'ghost', 'link'] as const
      const colors = [
        'primary',
        'green',
        'orange',
        'sky',
        'yellow',
        'red',
        'purple',
        'slate',
        'light',
      ] as const
      const colorClassMap: Record<string, Record<string, string>> = {
        custom: {
          primary:
            'text-white bg-custom-500 border-custom-500 hover:bg-custom-600 hover:border-custom-600 focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20',
          green:
            'text-white bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/10',
          orange:
            'text-white bg-orange-500 border-orange-500 hover:bg-orange-600 hover:border-orange-600 focus:bg-orange-600 focus:border-orange-600 focus:ring focus:ring-orange-100 active:bg-orange-600 active:border-orange-600 active:ring active:ring-orange-100 dark:ring-orange-400/10',
          sky: 'text-white bg-sky-500 border-sky-500 hover:bg-sky-600 hover:border-sky-600 focus:bg-sky-600 focus:border-sky-600 focus:ring focus:ring-sky-100 active:bg-sky-600 active:border-sky-600 active:ring active:ring-sky-100 dark:ring-sky-400/20',
          yellow:
            'text-white bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 focus:bg-yellow-600 focus:border-yellow-600 focus:ring focus:ring-yellow-100 active:bg-yellow-600 active:border-yellow-600 active:ring active:ring-yellow-100 dark:ring-yellow-400/10',
          red: 'text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20',
          purple:
            'text-white bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600 focus:bg-purple-600 focus:border-purple-600 focus:ring focus:ring-purple-100 active:bg-purple-600 active:border-purple-600 active:ring active:ring-purple-100 dark:ring-purple-400/10',
          slate:
            'text-white bg-slate-500 border-slate-500 hover:bg-slate-600 hover:border-slate-600 focus:bg-slate-600 focus:border-slate-600 focus:ring focus:ring-slate-100 active:bg-slate-600 active:border-slate-600 active:ring active:ring-slate-100 dark:ring-slate-400/20',
          light:
            'text-slate-500 bg-slate-200 border-slate-200 hover:bg-slate-300 hover:border-slate-300 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:ring-zink-600',
        },
        soft: {
          primary:
            'text-custom-500 bg-custom-100 hover:text-white hover:bg-custom-600 focus:text-white focus:bg-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:ring active:ring-custom-100 dark:bg-custom-500/20 dark:text-custom-500 dark:hover:bg-custom-500 dark:hover:text-white dark:focus:bg-custom-500 dark:focus:text-white dark:active:bg-custom-500 dark:active:text-white dark:ring-custom-400/20',
          green:
            'text-green-500 bg-green-100 hover:text-white hover:bg-green-600 focus:text-white focus:bg-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:ring active:ring-green-100 dark:bg-green-500/20 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white dark:focus:bg-green-500 dark:focus:text-white dark:active:bg-green-500 dark:active:text-white dark:ring-green-400/10',
          orange:
            'text-orange-500 bg-orange-100 hover:text-white hover:bg-orange-600 focus:text-white focus:bg-orange-600 focus:ring focus:ring-orange-100 active:text-white active:bg-orange-600 active:ring active:ring-orange-100 dark:bg-orange-500/20 dark:text-orange-500 dark:hover:bg-orange-500 dark:hover:text-white dark:focus:bg-orange-500 dark:focus:text-white dark:active:bg-orange-500 dark:active:text-white dark:ring-orange-400/10',
          sky: 'text-sky-500 bg-sky-100 hover:text-white hover:bg-sky-600 focus:text-white focus:bg-sky-600 focus:ring focus:ring-sky-100 active:text-white active:bg-sky-600 active:ring active:ring-sky-100 dark:bg-sky-500/20 dark:text-sky-500 dark:hover:bg-sky-500 dark:hover:text-white dark:focus:bg-sky-500 dark:focus:text-white dark:active:bg-sky-500 dark:active:text-white dark:ring-sky-400/20',
          yellow:
            'text-yellow-500 bg-yellow-100 hover:text-white hover:bg-yellow-600 focus:text-white focus:bg-yellow-600 focus:ring focus:ring-yellow-100 active:text-white active:bg-yellow-600 active:ring active:ring-yellow-100 dark:bg-yellow-500/20 dark:text-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-white dark:focus:bg-yellow-500 dark:focus:text-white dark:active:bg-yellow-500 dark:active:text-white dark:ring-yellow-400/10',
          red: 'text-red-500 bg-red-100 hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-custom-400/20',
          purple:
            'text-purple-500 bg-purple-100 hover:text-white hover:bg-purple-600 focus:text-white focus:bg-purple-600 focus:ring focus:ring-purple-100 active:text-white active:bg-purple-600 active:ring active:ring-purple-100 dark:bg-purple-500/20 dark:text-purple-500 dark:hover:bg-purple-500 dark:hover:text-white dark:focus:bg-purple-500 dark:focus:text-white dark:active:bg-purple-500 dark:active:text-white dark:ring-purple-400/10',
          slate:
            'text-slate-500 bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-500 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20',
          light:
            'text-slate-500 bg-slate-100 hover:text-white hover:bg-slate-300 focus:text-white focus:bg-slate-300 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:text-slate-500 dark:hover:bg-zink-600 dark:hover:text-white dark:focus:bg-zink-600 dark:focus:text-white dark:active:bg-zink-600 dark:active:text-white dark:ring-zink-600',
        },
        dashed: {
          primary:
            'bg-white border-dashed text-custom-500 border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20',
          green:
            'bg-white border-dashed text-green-500 border-green-500 hover:text-green-500 hover:bg-green-50 hover:border-green-600 focus:text-green-600 focus:bg-green-50 focus:border-green-600 active:text-green-600 active:bg-green-50 active:border-green-600 dark:bg-zink-700 dark:ring-green-400/10 dark:hover:bg-green-800/20 dark:focus:bg-green-800/20 dark:active:bg-green-800/20',
          orange:
            'bg-white border-dashed text-orange-500 border-orange-500 hover:text-orange-500 hover:bg-orange-50 hover:border-orange-600 focus:text-orange-600 focus:bg-orange-50 focus:border-orange-600 active:text-orange-600 active:bg-orange-50 active:border-orange-600 dark:bg-zink-700 dark:ring-orange-400/10 dark:hover:bg-orange-800/20 dark:focus:bg-orange-800/20 dark:active:bg-orange-800/20',
          sky: 'bg-white border-dashed text-sky-500 border-sky-500 hover:text-sky-500 hover:bg-sky-50 hover:border-sky-600 focus:text-sky-600 focus:bg-sky-50 focus:border-sky-600 active:text-sky-600 active:bg-sky-50 active:border-sky-600 dark:bg-zink-700 dark:ring-sky-400/20 dark:hover:bg-sky-800/20 dark:focus:bg-sky-800/20 dark:active:bg-sky-800/20',
          yellow:
            'bg-white border-dashed text-yellow-500 border-yellow-500 hover:text-yellow-500 hover:bg-yellow-50 hover:border-yellow-600 focus:text-yellow-600 focus:bg-yellow-50 focus:border-yellow-600 active:text-yellow-600 active:bg-yellow-50 active:border-yellow-600 dark:bg-zink-700 dark:ring-yellow-400/10 dark:hover:bg-yellow-800/20 dark:focus:bg-yellow-800/20 dark:active:bg-yellow-800/20',
          red: 'bg-white border-dashed text-red-500 border-red-500 hover:text-red-500 hover:bg-red-50 hover:border-red-600 focus:text-red-600 focus:bg-red-50 focus:border-red-600 active:text-red-600 active:bg-red-50 active:border-red-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20 dark:active:bg-red-800/20',
          purple:
            'bg-white border-dashed text-purple-500 border-purple-500 hover:text-purple-500 hover:bg-purple-50 hover:border-purple-600 focus:text-purple-600 focus:bg-purple-50 focus:border-purple-600 active:text-purple-600 active:bg-purple-50 active:border-purple-600 dark:bg-zink-700 dark:ring-purple-400/10 dark:hover:bg-purple-800/20 dark:focus:bg-purple-800/20 dark:active:bg-purple-800/20',
          slate:
            'bg-white border-dashed text-slate-500 border-slate-500 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-600 focus:text-slate-600 focus:bg-slate-50 focus:border-slate-600 active:text-slate-600 active:bg-slate-50 active:border-slate-600 dark:bg-zink-700 dark:ring-slate-400/20 dark:hover:bg-slate-800/20 dark:focus:bg-slate-800/20 dark:active:bg-slate-800/20',
          light:
            'bg-white border-dashed text-slate-500 border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-50 focus:border-slate-300 active:text-slate-600 active:bg-slate-50 active:border-slate-300 dark:bg-zink-700 dark:ring-zink-600 dark:hover:bg-zink-800/20 dark:focus:bg-zink-800/20 dark:active:bg-zink-800/20',
        },
        outline: {
          primary:
            'bg-white text-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500 dark:ring-custom-400/20 dark:focus:bg-custom-500',
          green:
            'bg-white text-green-500 border-green-500 hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:bg-zink-700 dark:hover:bg-green-500 dark:ring-green-400/10 dark:focus:bg-green-500',
          orange:
            'bg-white text-orange-500 border-orange-500 hover:text-white hover:bg-orange-600 hover:border-orange-600 focus:text-white focus:bg-orange-600 focus:border-orange-600 focus:ring focus:ring-orange-100 active:text-white active:bg-orange-600 active:border-orange-600 active:ring active:ring-orange-100 dark:bg-zink-700 dark:hover:bg-orange-500 dark:ring-orange-400/10 dark:focus:bg-orange-500',
          sky: 'bg-white text-sky-500 border-sky-500 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 focus:ring focus:ring-sky-100 active:text-white active:bg-sky-600 active:border-sky-600 active:ring active:ring-sky-100 dark:bg-zink-700 dark:hover:bg-sky-500 dark:ring-sky-400/20 dark:focus:bg-sky-500',
          yellow:
            'bg-white text-yellow-500 border-yellow-500 hover:text-white hover:bg-yellow-600 hover:border-yellow-600 focus:text-white focus:bg-yellow-600 focus:border-yellow-600 focus:ring focus:ring-yellow-100 active:text-white active:bg-yellow-600 active:border-yellow-600 active:ring active:ring-yellow-100 dark:bg-zink-700 dark:hover:bg-yellow-500 dark:ring-yellow-400/10 dark:focus:bg-yellow-500',
          red: 'bg-white text-red-500 border-red-500 hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:bg-zink-700 dark:hover:bg-red-500 dark:ring-custom-400/20 dark:focus:bg-red-500',
          purple:
            'bg-white text-purple-500 border-purple-500 hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:text-white focus:bg-purple-600 focus:border-purple-600 focus:ring focus:ring-purple-100 active:text-white active:bg-purple-600 active:border-purple-600 active:ring active:ring-purple-100 dark:bg-zink-700 dark:hover:bg-purple-500 dark:ring-purple-400/10 dark:focus:bg-purple-500',
          slate:
            'bg-white text-slate-500 border-slate-500 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:border-slate-600 active:ring active:ring-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500 dark:ring-slate-400/20 dark:focus:bg-slate-500',
          light:
            'bg-white text-slate-500 border-slate-200 hover:text-white hover:bg-slate-300 hover:border-slate-300 focus:text-white focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-600 dark:ring-zink-600 dark:focus:bg-zink-600',
        },
        ghost: {
          primary:
            'bg-white text-custom-500 hover:text-custom-500 hover:bg-custom-100 focus:text-custom-500 focus:bg-custom-100 active:text-custom-500 active:bg-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500/10 dark:focus:bg-custom-500/10 dark:active:bg-custom-500/10',
          green:
            'bg-white text-green-500 hover:text-green-500 hover:bg-green-100 focus:text-green-500 focus:bg-green-100 active:text-green-500 active:bg-green-100 dark:bg-zink-700 dark:hover:bg-green-500/10 dark:focus:bg-green-500/10 dark:active:bg-green-500/10',
          orange:
            'bg-white text-orange-500 hover:text-orange-500 hover:bg-orange-100 focus:text-orange-500 focus:bg-orange-100 active:text-orange-500 active:bg-orange-100 dark:bg-zink-700 dark:hover:bg-orange-500/10 dark:focus:bg-orange-500/10 dark:active:bg-orange-500/10',
          sky: 'bg-white text-sky-500 hover:text-sky-500 hover:bg-sky-100 focus:text-sky-500 focus:bg-sky-100 active:text-sky-500 active:bg-sky-100 dark:bg-zink-700 dark:hover:bg-sky-500/10 dark:focus:bg-sky-500/10 dark:active:bg-sky-500/10',
          yellow:
            'bg-white text-yellow-500 hover:text-yellow-500 hover:bg-yellow-100 focus:text-yellow-500 focus:bg-yellow-100 active:text-yellow-500 active:bg-yellow-100 dark:bg-zink-700 dark:hover:bg-yellow-500/10 dark:focus:bg-yellow-500/10 dark:active:bg-yellow-500/10',
          red: 'bg-white text-red-500 hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-700 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10',
          purple:
            'bg-white text-purple-500 hover:text-purple-500 hover:bg-purple-100 focus:text-purple-500 focus:bg-purple-100 active:text-purple-500 active:bg-purple-100 dark:bg-zink-700 dark:hover:bg-purple-500/10 dark:focus:bg-purple-500/10 dark:active:bg-purple-500/10',
          slate:
            'bg-white text-slate-500 hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10',
          light:
            'bg-white text-slate-500 hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-zink-600/10 dark:focus:bg-zink-600/10 dark:active:bg-zink-600/10',
        },
        link: {
          primary:
            'bg-white border-white text-custom-500 hover:text-custom-700 focus:text-custom-700 active:text-custom-700 dark:bg-zink-700 dark:border-zink-700',
          green:
            'bg-white border-white text-green-500 hover:text-green-700 focus:text-green-700 active:text-green-700 dark:bg-zink-700 dark:border-zink-700',
          orange:
            'bg-white border-white text-orange-500 hover:text-orange-700 focus:text-orange-700 active:text-orange-700 dark:bg-zink-700 dark:border-zink-700',
          sky: 'bg-white border-white text-sky-500 hover:text-sky-700 focus:text-sky-700 active:text-sky-700 dark:bg-zink-700 dark:border-zink-700',
          yellow:
            'bg-white border-white text-yellow-500 hover:text-yellow-700 focus:text-yellow-700 active:text-yellow-700 dark:bg-zink-700 dark:border-zink-700',
          red: 'bg-white border-white text-red-500 hover:text-red-700 focus:text-red-700 active:text-red-700 dark:bg-zink-700 dark:border-zink-700',
          purple:
            'bg-white border-white text-purple-500 hover:text-purple-700 focus:text-purple-700 active:text-purple-700 dark:bg-zink-700 dark:border-zink-700',
          slate:
            'bg-white border-white text-slate-500 hover:text-slate-700 focus:text-slate-700 active:text-slate-700 dark:bg-zink-700 dark:border-zink-700',
          light:
            'bg-white border-white text-slate-500 hover:text-slate-700 focus:text-slate-700 active:text-slate-700 dark:bg-zink-700 dark:border-zink-700',
        },
      }
      // labelIcon compound variants for paddings, using correct literal types
      type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
      type Position = 'left' | 'right'
      const labelIconPadding: Record<Size, { left: string; right: string }> = {
        xs: {
          left: "py-1 text-xs ltr:pl-[calc(theme('spacing.1')_+_26px)] rtl:pr-[calc(theme('spacing.1')_+_26px)] px-1.5",
          right:
            "py-1 text-xs rtl:pl-[calc(theme('spacing.1')_+_26px)] ltr:pr-[calc(theme('spacing.1')_+_26px)] px-1.5",
        },
        sm: {
          left: "px-2 py-1.5 ltr:pl-[calc(theme('spacing.2')_+_30px)] rtl:pr-[calc(theme('spacing.2')_+_30px)] text-xs",
          right:
            "px-2 py-1.5 rtl:pl-[calc(theme('spacing.2')_+_30px)] ltr:pr-[calc(theme('spacing.2')_+_30px)] text-xs",
        },
        md: {
          left: "px-2.5 py-2 ltr:pl-[calc(theme('spacing.2')_*_5.5)] rtl:pr-[calc(theme('spacing.2')_*_5.5)] text-xs",
          right:
            "px-2.5 py-2 rtl:pl-[calc(theme('spacing.2')_*_5.5)] ltr:pr-[calc(theme('spacing.2')_*_5.5)] text-xs",
        },
        lg: {
          left: "relative ltr:pl-[calc(theme('spacing.3')_*_4.2)] rtl:pr-[calc(theme('spacing.3')_*_4.2)]",
          right:
            "relative rtl:pl-[calc(theme('spacing.3')_*_4.2)] ltr:pr-[calc(theme('spacing.3')_*_4.2)]",
        },
        xl: {
          left: "relative px-4 py-2.5 ltr:pl-[calc(theme('spacing.4')_+_44.5px)] rtl:pr-[calc(theme('spacing.4')_+_44.5px)]",
          right:
            "relative px-4 py-3 rtl:pl-[calc(theme('spacing.4')_+_44.5px)] ltr:pr-[calc(theme('spacing.4')_+_44.5px)]",
        },
      }
      const labelIconCompounds = (Object.keys(labelIconPadding) as Size[]).flatMap((size) => [
        {
          labelIcon: true,
          size: size,
          positionIcon: 'left' as Position,
          class: labelIconPadding[size].left,
        },
        {
          labelIcon: true,
          size: size,
          positionIcon: 'right' as Position,
          class: labelIconPadding[size].right,
        },
      ])
      return [
        ...variants.flatMap((variant) =>
          colors.map((color) => ({
            variant,
            color,
            class: colorClassMap[variant][color],
          })),
        ),
        ...labelIconCompounds,
      ]
    })(),
  ],
  defaultVariants: {
    variant: 'custom',
    color: 'primary',
    size: 'md',
    rounded: 'md',
    labelIcon: false,
    positionIcon: 'left',
  },
})

const statusDotColor = tv({
  base: 'relative inline-flex size-2 rounded-full',
  variants: {
    color: {
      primary: 'bg-custom-500',
      green: 'bg-green-500',
      orange: 'bg-orange-500',
      sky: 'bg-sky-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500',
      purple: 'bg-purple-500',
      slate: 'bg-slate-500',
      light: 'bg-slate-200',
    },
  },
})

const statusPingColor = tv({
  base: 'absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping',
  variants: {
    color: {
      primary: 'bg-custom-400',
      green: 'bg-green-400',
      orange: 'bg-orange-400',
      sky: 'bg-sky-400',
      yellow: 'bg-yellow-400',
      red: 'bg-red-400',
      purple: 'bg-purple-400',
      slate: 'bg-slate-400',
      light: 'bg-slate-200',
    },
  },
})

const Button: React.FC<ButtonProps> = ({
  variant = 'custom',
  color = 'primary',
  children,
  as = 'button',
  href,
  icon,
  positionIcon = 'left',
  loading = false,
  animation,
  rounded = 'md',
  size = 'md',
  statusDot = undefined,
  labelIcon = false,
  ...rest
}) => {
  const iconWidth: Record<string, string> = {
    xs: 'w-[26px]',
    sm: 'w-[30px]',
    md: 'w-[34px]',
    lg: 'w-[37.5px]',
    xl: 'w-[44.5px]',
  }
  const iconClassBase =
    'bg-white/10 flex absolute -bottom-[1px] -top-[1px] items-center justify-center'
  const iconClassLeft = 'ltr:-left-[1px] rtl:-right-[1px]'
  const iconClassRight = 'rtl:-left-[1px] ltr:-right-[1px]'

  const className = twMerge(
    button({ variant, color, size, rounded, animation, labelIcon, positionIcon }),
    rest.className,
  )
  const statusDotClass = statusDot ? statusDotColor({ color: statusDot }) : ''
  const statusPingClass = statusDot ? statusPingColor({ color: statusDot }) : ''

  const content = (
    <>
      {labelIcon && icon && positionIcon === 'left' && (
        <i
          className={twMerge(iconWidth[size], iconClassBase, iconClassLeft, 'ri-download-2-line')}
        ></i>
      )}
      {loading && (
        <Loader2 className={`size-4 animate-spin ${!!children && 'ltr:mr-2 rtl:ml-2'}`} />
      )}
      {!loading && icon && !labelIcon && positionIcon === 'left' && (
        <span className="inline-flex items-center justify-center ltr:mr-2 rtl:ml-2">{icon}</span>
      )}
      {statusDot && (
        <span className="absolute flex size-2 -top-1 ltr:-right-1 rtl:-left-1">
          <span className={statusPingClass}></span>
          <span className={statusDotClass}></span>
        </span>
      )}
      {children}
      {labelIcon && icon && positionIcon === 'right' && (
        <i
          className={twMerge(iconWidth[size], iconClassBase, iconClassRight, 'ri-download-2-line')}
        ></i>
      )}
      {!loading && icon && !labelIcon && positionIcon === 'right' && (
        <span className="inline-flex items-center justify-center ltr:ml-2 rtl:mr-2">{icon}</span>
      )}
    </>
  )
  if (as === 'a' && href) {
    const anchorPropList = [
      'download',
      'href',
      'hrefLang',
      'media',
      'ping',
      'rel',
      'target',
      'type',
      'referrerPolicy',
      'className',
      'id',
      'style',
      'title',
      'tabIndex',
      'aria-label',
      'aria-current',
      'aria-disabled',
      'onClick',
      'onMouseEnter',
      'onMouseLeave',
      'onFocus',
      'onBlur',
      'children',
    ]
    const anchorProps: Record<string, unknown> = {}
    Object.entries(rest).forEach(([key, value]) => {
      if (anchorPropList.includes(key)) {
        anchorProps[key] = value
      }
    })
    return (
      <a {...anchorProps} href={href} className={className}>
        {content}
      </a>
    )
  }
  return (
    <button {...rest} type={rest.type || 'button'} className={className}>
      {content}
    </button>
  )
}

export default Button
