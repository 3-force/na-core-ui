import { X } from 'lucide-react'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const badge = tv({
  base: 'inline-block text-xs font-medium px-2.5 py-0.5 border rounded transition-all duration-200 ease-linear',
  variants: {
    variant: {
      default: 'border-transparent',
      outline: 'bg-white dark:bg-zink-700',
      bordered: '',
      soft: 'bg-white dark:bg-zink-700',
      fill: '',
      link: 'border-transparent bg-white dark:border-transparent',
    },
    color: {
      custom: '',
      green: '',
      orange: '',
      sky: '',
      yellow: '',
      red: '',
      purple: '',
      slate: '',
    },
    shape: {
      square: 'rounded',
      pill: 'rounded-full',
    },
    iconOnly: {
      true: 'size-8 flex items-center justify-center p-0',
    },
    withIcon: {
      true: 'flex items-center',
    },
    dismissible: {
      true: 'flex items-center',
    },
    withIndicator: {
      true: 'flex items-center',
    },
    asLink: {
      true: '',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      color: 'custom',
      class: 'bg-custom-100 border-transparent text-custom-500 dark:bg-custom-500/20',
    },
    {
      variant: 'default',
      color: 'green',
      class: 'bg-green-100 border-transparent text-green-500 dark:bg-green-500/20',
    },
    {
      variant: 'default',
      color: 'orange',
      class: 'bg-orange-100 border-transparent text-orange-500 dark:bg-orange-500/20',
    },
    {
      variant: 'default',
      color: 'sky',
      class: 'bg-sky-100 border-transparent text-sky-500 dark:bg-sky-500/20',
    },
    {
      variant: 'default',
      color: 'yellow',
      class: 'bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20',
    },
    {
      variant: 'default',
      color: 'red',
      class: 'bg-red-100 border-transparent text-red-500 dark:bg-red-500/20',
    },
    {
      variant: 'default',
      color: 'purple',
      class: 'bg-purple-100 border-transparent text-purple-500 dark:bg-purple-500/20',
    },
    {
      variant: 'default',
      color: 'slate',
      class: 'bg-slate-100 border-transparent text-slate-500 dark:bg-slate-500/20',
    },
    {
      variant: 'outline',
      color: 'custom',
      class: 'border-custom-400 text-custom-500 dark:border-custom-700',
    },
    {
      variant: 'outline',
      color: 'green',
      class: 'border-green-400 text-green-500 dark:border-green-700',
    },
    {
      variant: 'outline',
      color: 'orange',
      class: 'border-orange-400 text-orange-500 dark:border-orange-700',
    },
    {
      variant: 'outline',
      color: 'sky',
      class: 'border-sky-400 text-sky-500 dark:border-sky-700',
    },
    {
      variant: 'outline',
      color: 'yellow',
      class: 'border-yellow-400 text-yellow-500 dark:border-yellow-700',
    },
    {
      variant: 'outline',
      color: 'red',
      class: 'border-red-400 text-red-500 dark:border-red-700',
    },
    {
      variant: 'outline',
      color: 'purple',
      class: 'border-purple-400 text-purple-500 dark:border-purple-700',
    },
    {
      variant: 'outline',
      color: 'slate',
      class: 'border-slate-400 text-slate-500 dark:border-slate-700',
    },
    {
      variant: 'bordered',
      color: 'custom',
      class:
        'bg-custom-100 border-custom-400 text-custom-500 dark:bg-custom-500/20 dark:border-custom-700',
    },
    {
      variant: 'bordered',
      color: 'green',
      class:
        'bg-green-100 border-green-400 text-green-500 dark:bg-green-500/20 dark:border-green-700',
    },
    {
      variant: 'bordered',
      color: 'orange',
      class:
        'bg-orange-100 border-orange-400 text-orange-500 dark:bg-orange-500/20 dark:border-orange-700',
    },
    {
      variant: 'bordered',
      color: 'sky',
      class: 'bg-sky-100 border-sky-400 text-sky-500 dark:bg-sky-500/20 dark:border-sky-700',
    },
    {
      variant: 'bordered',
      color: 'yellow',
      class:
        'bg-yellow-100 border-yellow-400 text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-700',
    },
    {
      variant: 'bordered',
      color: 'red',
      class: 'bg-red-100 border-red-400 text-red-500 dark:bg-red-500/20 dark:border-red-700',
    },
    {
      variant: 'bordered',
      color: 'purple',
      class:
        'bg-purple-100 border-purple-400 text-purple-500 dark:bg-purple-500/20 dark:border-purple-700',
    },
    {
      variant: 'bordered',
      color: 'slate',
      class:
        'bg-slate-100 border-slate-400 text-slate-500 dark:bg-slate-500/20 dark:border-slate-700',
    },
    {
      variant: 'soft',
      color: 'custom',
      class: 'border-custom-400 text-custom-500 dark:border-custom-700',
    },
    {
      variant: 'soft',
      color: 'green',
      class: 'border-green-400 text-green-500 dark:border-green-700',
    },
    {
      variant: 'soft',
      color: 'orange',
      class: 'border-orange-400 text-orange-500 dark:border-orange-700',
    },
    {
      variant: 'soft',
      color: 'sky',
      class: 'border-sky-400 text-sky-500 dark:border-sky-700',
    },
    {
      variant: 'soft',
      color: 'yellow',
      class: 'border-yellow-400 text-yellow-500 dark:border-yellow-700',
    },
    {
      variant: 'soft',
      color: 'red',
      class: 'border-red-400 text-red-500 dark:border-red-700',
    },
    {
      variant: 'soft',
      color: 'purple',
      class: 'border-purple-400 text-purple-500 dark:border-purple-700',
    },
    {
      variant: 'soft',
      color: 'slate',
      class: 'border-slate-400 text-slate-500 dark:border-slate-700',
    },
    {
      variant: 'fill',
      color: 'custom',
      class: 'bg-custom-500 border-custom-500 text-custom-50',
    },
    {
      variant: 'fill',
      color: 'green',
      class: 'bg-green-500 border-green-500 text-green-50',
    },
    {
      variant: 'fill',
      color: 'orange',
      class: 'bg-orange-500 border-orange-500 text-orange-50',
    },
    {
      variant: 'fill',
      color: 'sky',
      class: 'bg-sky-500 border-sky-500 text-sky-50',
    },
    {
      variant: 'fill',
      color: 'yellow',
      class: 'bg-yellow-500 border-yellow-500 text-yellow-50',
    },
    {
      variant: 'fill',
      color: 'red',
      class: 'bg-red-500 border-red-500 text-red-50',
    },
    {
      variant: 'fill',
      color: 'purple',
      class: 'bg-purple-500 border-purple-500 text-purple-50',
    },
    {
      variant: 'fill',
      color: 'slate',
      class: 'bg-slate-500 border-slate-500 text-slate-50',
    },
    {
      asLink: true,
      color: 'custom',
      class: 'cursor-pointer hover:bg-custom-200 dark:hover:bg-custom-400/30',
    },
    {
      asLink: true,
      color: 'green',
      class: 'cursor-pointer hover:bg-green-200 dark:hover:bg-green-400/30',
    },
    {
      asLink: true,
      color: 'orange',
      class: 'cursor-pointer hover:bg-orange-200 dark:hover:bg-orange-400/30',
    },
    {
      asLink: true,
      color: 'sky',
      class: 'cursor-pointer hover:bg-sky-200 dark:hover:bg-sky-400/30',
    },
    {
      asLink: true,
      color: 'yellow',
      class: 'cursor-pointer hover:bg-yellow-200 dark:hover:bg-yellow-400/30',
    },
    {
      asLink: true,
      color: 'red',
      class: 'cursor-pointer hover:bg-red-200 dark:hover:bg-red-400/30',
    },
    {
      asLink: true,
      color: 'purple',
      class: 'cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-400/30',
    },
    {
      asLink: true,
      color: 'slate',
      class: 'cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-400/30',
    },
    {
      asLink: true,
      variant: 'link',
      class: 'cursor-pointer hover:bg-transparent dark:hover:bg-transparent',
    },
    {
      variant: 'link',
      color: 'custom',
      class:
        'text-custom-500 hover:text-custom-600 dark:text-custom-400 dark:hover:text-custom-500',
    },
    {
      variant: 'link',
      color: 'green',
      class: 'text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-500',
    },
    {
      variant: 'link',
      color: 'orange',
      class:
        'text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500',
    },
    {
      variant: 'link',
      color: 'sky',
      class: 'text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500',
    },
    {
      variant: 'link',
      color: 'yellow',
      class:
        'text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-500',
    },
    {
      variant: 'link',
      color: 'red',
      class: 'text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500',
    },
    {
      variant: 'link',
      color: 'purple',
      class:
        'text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-500',
    },
    {
      variant: 'link',
      color: 'slate',
      class: 'text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-500',
    },
  ],
  defaultVariants: {
    variant: 'default',
    shape: 'square',
  },
})

type BadgeColor = 'custom' | 'green' | 'orange' | 'sky' | 'yellow' | 'red' | 'purple' | 'slate'

type BadgeProps = {
  children?: ReactNode
  color?: BadgeColor
  variant?: 'default' | 'outline' | 'bordered' | 'soft' | 'fill' | 'link'
  shape?: 'square' | 'pill'
  iconOnly?: boolean
  withIcon?: boolean
  icon?: ReactNode
  dismissible?: boolean
  indicator?: boolean
  as?: 'span' | 'a' // se for link
  href?: string
  className?: string
}

export function Badge({
  children,
  color = 'custom',
  variant = 'default',
  shape = 'square',
  icon,
  dismissible,
  indicator,
  as = 'span',
  href,
  className,
  iconOnly,
}: BadgeProps) {
  const Component = as

  const badgeClass = badge({
    variant,
    shape: shape,
    iconOnly: iconOnly,
    withIcon: !!icon,
    dismissible,
    withIndicator: indicator,
    asLink: as === 'a',
    color: color,
  })

  return (
    <Component href={as === 'a' ? href : undefined} className={twMerge(badgeClass, className)}>
      {indicator && (
        <span
          className={twMerge(
            'size-1.5 rounded-full inline-block ltr:mr-1 rtl:ml-1',
            `bg-${color}-500`,
          )}
        />
      )}
      {icon && (
        <span
          className={` size-3 inline-flex items-center justify-center ${
            iconOnly ? '' : 'ltr:mr-1 rtl:ml-1'
          }`}
        >
          {icon}
        </span>
      )}
      {children}
      {dismissible && (
        <a
          href="#!"
          className={twMerge(
            `transition text-${color}-400 hover:text-${color}-600`,
            'ltr:ml-1 rtl:mr-1',
          )}
        >
          <X className="size-3" />
        </a>
      )}
    </Component>
  )
}
