import { tv } from 'tailwind-variants'

import { User2 } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

const avatarStatus = tv({
  base: 'absolute bg-red-400 border-2 border-white rounded-full dark:border-zink-700',
  variants: {
    shape: {
      square: '-top-1 ltr:-right-1 rtl:-left-1',
      circle: 'top-0 ltr:right-0 rtl:left-0',
    },
    size: {
      xs: 'size-2.5',
      sm: 'size-2.5',
      md: 'size-3',
      lg: 'size-3',
      xl: 'size-3.5 -top-1.5 ltr:-right-1.5 rtl:-left-1.5',
      '2xl': 'size-4 -top-1.5 ltr:-right-1.5 rtl:-left-1.5',
      '3xl': 'size-5 -top-2 ltr:-right-2 rtl:-left-2',
      '4xl': 'size-6 -top-2.5 ltr:-right-2.5 rtl:-left-2.5',
    },
    color: {
      red: 'bg-red-400',
      green: 'bg-green-400',
    },
  },
  defaultVariants: {
    shape: 'circle',
    size: 'md',
    color: 'red',
  },
  compoundVariants: [
    {
      shape: 'circle',
      size: 'xl',
      class: 'top-0.5 ltr:right-0.5 rtl:left-0.5',
    },
    {
      shape: 'circle',
      size: '2xl',
      class: 'top-0.5 ltr:right-0.5 rtl:left-0.5',
    },
    {
      shape: 'circle',
      size: '3xl',
      class: 'top-0.5 ltr:right-0.5 rtl:left-0.5',
    },
    {
      shape: 'circle',
      size: '4xl',
      class: 'top-1 ltr:right-1 rtl:left-1',
    },
  ],
})

const avatarIcon = tv({
  base: 'absolute left-0 right-0 inline-block size-10 mx-auto stroke-1 -bottom-1',
  variants: {
    color: {
      custom: 'fill-custom-200 dark:fill-custom-900',
      green: 'fill-green-200 dark:fill-green-900',
      orange: 'fill-orange-200 dark:fill-orange-900',
      yellow: 'fill-yellow-200 dark:fill-yellow-900',
    },
    shape: {
      circle: '',
      square: '',
    },
  },
})

const avatar = tv({
  base: 'flex items-center justify-center overflow-hidden relative',
  variants: {
    shape: {
      circle: 'rounded-full',
      square: 'rounded-md',
    },
    size: {
      xs: 'size-8 text-xs',
      sm: 'size-10 text-sm',
      md: 'size-12 text-[15px]',
      lg: 'size-14 text-[15px]',
      xl: 'size-16 text-xl',
      '2xl': 'size-20 text-2xl',
      '3xl': 'size-24 text-2xl',
      '4xl': 'size-28 text-3xl',
    },
    variant: {
      text: 'bg-custom-100 text-custom-500 dark:bg-custom-950',
      placeholder: 'bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-300',
      image: '',
    },
    bordered: {
      true: 'ring-1 ring-offset-2 ring-slate-200 dark:ring-offset-zink-700 dark:ring-zink-500',
    },
    color: {
      custom: '',
      green: '',
      orange: '',
      yellow: '',
    },
    link: {
      true: 'cursor-pointer',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'placeholder',
      color: 'green',
      class: 'bg-green-100 text-green-500 dark:bg-green-900',
    },
    {
      variant: 'placeholder',
      color: 'orange',
      class: 'bg-orange-100 text-orange-500 dark:bg-orange-950',
    },
    {
      variant: 'placeholder',
      color: 'yellow',
      class: 'bg-yellow-100 text-yellow-500 dark:bg-yellow-950',
    },
    {
      variant: 'placeholder',
      color: 'custom',
      class: 'bg-custom-100 text-custom-500 dark:bg-custom-950',
    },
  ],
  defaultVariants: {
    shape: 'circle',
    size: 'md',
    variant: 'text',
  },
})

export type AvatarProps = {
  shape?: 'circle' | 'square'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  variant?: 'text' | 'image' | 'placeholder'
  color?: 'custom' | 'green' | 'orange' | 'yellow'
  children?: React.ReactNode
  bordered?: boolean
  status?: boolean
  statusColor?: 'red' | 'green'
  src?: string
  className?: string
  as?: React.ElementType
  isLink?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  key?: React.Key
}

export type AvatarPropsWithAs = AvatarProps & {
  as: 'a'
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export function Avatar({
  shape = 'circle',
  size = 'md',
  variant = 'text',
  color = 'custom',
  bordered = false,
  status = false,
  statusColor = 'red',
  src,
  children,
  className,
  isLink = false,
  as,
  onClick,
  ...rest
}: AvatarProps | AvatarPropsWithAs) {
  const WrapperComponent = as || 'div'
  const base = avatar({ shape, size, variant, bordered, color, link: isLink })
  const statusDot = status ? (
    <span className={avatarStatus({ shape, size, color: statusColor })} />
  ) : null

  const content = src ? <img src={src} alt="" className="object-cover w-full h-full" /> : children

  return (
    <WrapperComponent className="relative inline-block" onClick={onClick}>
      <div className={twMerge(base, className)} {...rest}>
        {variant !== 'placeholder' ? content : <User2 className={avatarIcon({ color })} />}
      </div>
      {statusDot}
    </WrapperComponent>
  )
}
