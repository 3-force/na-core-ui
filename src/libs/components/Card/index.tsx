import { ChevronRight } from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

type CardVariant = 'default' | 'border' | 'dashed' | 'fill' | 'modern'

type CardColor = 'custom' | 'green' | 'orange' | 'sky' | 'yellow' | 'red' | 'purple' | 'slate'

type UISlotsProps = {
  slots?: {
    base?: string
    title?: string
    content?: string
    link?: string
    img?: string
    body?: string
    subtitle?: string
  }
}

type CardProps = {
  variant: CardVariant
  title?: string
  subtitle?: string
  linkText?: string
  linkHref?: string
  className?: string
  imgUrl?: string
  imgAlt?: string
  position?: 'vertical' | 'horizontal'
  imgBottom?: boolean
  animation?: boolean
  as?: 'a' | 'div'
  uiSlots?: UISlotsProps
  color?: CardColor
  children?: React.ReactNode
}

const card = tv({
  slots: {
    base: 'card',
    title: 'mb-4 text-15',
    content: 'mb-4 text-slate-500 dark:text-zink-200',
    link: 'inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600',
    img: '',
    body: 'card-body',
    subtitle: 'mb-4 text-xs font-medium uppercase',
    ghostWrapper: '',
  },
  variants: {
    variant: {
      default: {
        base: '',
      },
      border: { base: 'border' },
      dashed: { base: 'border border-dashed' },
      fill: { base: '', title: 'text-white' },
      modern: { base: '' },
    },
    color: {
      custom: { base: '' },
      green: { base: '' },
      orange: { base: '' },
      sky: { base: '' },
      yellow: { base: '' },
      red: { base: '' },
      purple: { base: '' },
      slate: { base: '' },
    },
    as: {
      a: {
        base: 'block',
      },
      div: '',
    },
    imgBottom: {
      true: '',
      false: '',
    },
    animation: {
      true: {
        base: 'overflow-hidden transition group/card hover:shadow-lg cursor-pointer',
        img: 'transition-transform duration-500 ease-in-out group-hover/card:scale-105',
      },
    },
    position: {
      vertical: {},
      horizontal: {
        base: 'sm:flex',
        body: 'flex flex-col h-full',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    colors: 'custom',
  },
  compoundVariants: [
    {
      imgBottom: true,
      position: 'horizontal',
      class: {
        img: 'rounded-r-md',
        base: 'flex flex-row-reverse',
      },
    },
    {
      imgBottom: false,
      position: 'horizontal',
      class: {
        img: 'rounded-l-md',
      },
    },
    {
      imgBottom: true,
      position: 'vertical',
      class: {
        img: 'rounded-b-md',
        base: 'flex flex-col-reverse',
      },
    },
    {
      imgBottom: false,
      position: 'vertical',
      class: {
        img: 'rounded-t-md',
      },
    },
    {
      variant: 'border',
      color: 'custom',
      class: {
        base: 'border-custom-200 dark:border-custom-800',
      },
    },
    {
      variant: 'dashed',
      color: 'custom',
      class: {
        base: 'border-custom-200 dark:border-custom-800',
      },
    },
    {
      variant: 'fill',
      color: 'custom',
      class: {
        base: 'bg-custom-500 border-custom-500 dark:bg-custom-800 dark:border-custom-800',
        content: 'dark:text-custom-300 text-custom-200',
        link: 'text-custom-300 hover:text-custom-100',
      },
    },
    {
      variant: 'modern',
      color: 'custom',
      class: {
        base: 'bg-custom-100 border-custom-200 dark:bg-custom-400/20 dark:border-custom-600',
        title: 'text-custom-500 dark:text-custom-200',
        subtitle: 'text-custom-400',
        content: 'text-custom-400',
        link: 'text-custom-400 hover:text-custom-600',
      },
    },
    {
      variant: 'border',
      color: 'green',
      class: {
        base: 'border-green-200 dark:border-green-800',
      },
    },
    {
      variant: 'dashed',
      color: 'green',
      class: {
        base: 'border-green-200 dark:border-green-800',
      },
    },
    {
      variant: 'fill',
      color: 'green',
      class: {
        base: 'bg-green-500 border-green-500 dark:bg-green-800 dark:border-green-800',
        content: 'dark:text-green-300 text-green-200',
        link: 'text-green-300 hover:text-green-100',
      },
    },
    {
      variant: 'modern',
      color: 'green',
      class: {
        base: 'bg-green-100 border-green-200 dark:bg-green-400/20 dark:border-green-600',
        title: 'text-green-500 dark:text-green-200',
        subtitle: 'text-green-400',
        content: 'text-green-400',
        link: 'text-green-400 hover:text-green-600',
      },
    },
    {
      variant: 'border',
      color: 'orange',
      class: {
        base: 'border-orange-200 dark:border-orange-800',
      },
    },
    {
      variant: 'dashed',
      color: 'orange',
      class: {
        base: 'border-orange-200 dark:border-orange-800',
      },
    },
    {
      variant: 'fill',
      color: 'orange',
      class: {
        base: 'bg-orange-500 border-orange-500 dark:bg-orange-800 dark:border-orange-800',
        content: 'dark:text-orange-300 text-orange-200',
        link: 'text-orange-300 hover:text-orange-100',
      },
    },
    {
      variant: 'modern',
      color: 'orange',
      class: {
        base: 'bg-orange-100 border-orange-200 dark:bg-orange-400/20 dark:border-orange-600',
        title: 'text-orange-500 dark:text-orange-200',
        subtitle: 'text-orange-400',
        content: 'text-orange-400',
        link: 'text-orange-400 hover:text-orange-600',
      },
    },
    {
      variant: 'border',
      color: 'sky',
      class: {
        base: 'border-sky-200 dark:border-sky-800',
      },
    },
    {
      variant: 'dashed',
      color: 'sky',
      class: {
        base: 'border-sky-200 dark:border-sky-800',
      },
    },
    {
      variant: 'fill',
      color: 'sky',
      class: {
        base: 'bg-sky-500 border-sky-500 dark:bg-sky-800 dark:border-sky-800',
        content: 'dark:text-sky-300 text-sky-200',
        link: 'text-sky-300 hover:text-sky-100',
      },
    },
    {
      variant: 'modern',
      color: 'sky',
      class: {
        base: 'bg-sky-100 border-sky-200 dark:bg-sky-400/20 dark:border-sky-600',
        title: 'text-sky-500 dark:text-sky-200',
        subtitle: 'text-sky-400',
        content: 'text-sky-400',
        link: 'text-sky-400 hover:text-sky-600',
      },
    },
    {
      variant: 'border',
      color: 'yellow',
      class: {
        base: 'border-yellow-200 dark:border-yellow-800',
      },
    },
    {
      variant: 'dashed',
      color: 'yellow',
      class: {
        base: 'border-yellow-200 dark:border-yellow-800',
      },
    },
    {
      variant: 'fill',
      color: 'yellow',
      class: {
        base: 'bg-yellow-500 border-yellow-500 dark:bg-yellow-800 dark:border-yellow-800',
        content: 'dark:text-yellow-300 text-yellow-200',
        link: 'text-yellow-300 hover:text-yellow-100',
      },
    },
    {
      variant: 'modern',
      color: 'yellow',
      class: {
        base: 'bg-yellow-100 border-yellow-200 dark:bg-yellow-400/20 dark:border-yellow-600',
        title: 'text-yellow-500 dark:text-yellow-200',
        subtitle: 'text-yellow-400',
        content: 'text-yellow-400',
        link: 'text-yellow-400 hover:text-yellow-600',
      },
    },
    {
      variant: 'border',
      color: 'red',
      class: {
        base: 'border-red-200 dark:border-red-800',
      },
    },
    {
      variant: 'dashed',
      color: 'red',
      class: {
        base: 'border-red-200 dark:border-red-800',
      },
    },
    {
      variant: 'fill',
      color: 'red',
      class: {
        base: 'bg-red-500 border-red-500 dark:bg-red-800 dark:border-red-800',
        content: 'dark:text-red-300 text-red-200',
        link: 'text-red-300 hover:text-red-100',
      },
    },
    {
      variant: 'modern',
      color: 'red',
      class: {
        base: 'bg-red-100 border-red-200 dark:bg-red-400/20 dark:border-red-600',
        title: 'text-red-500 dark:text-red-200',
        subtitle: 'text-red-400',
        content: 'text-red-400',
        link: 'text-red-400 hover:text-red-600',
      },
    },
    {
      variant: 'border',
      color: 'purple',
      class: {
        base: 'border-purple-200 dark:border-purple-800',
      },
    },
    {
      variant: 'dashed',
      color: 'purple',
      class: {
        base: 'border-purple-200 dark:border-purple-800',
      },
    },
    {
      variant: 'fill',
      color: 'purple',
      class: {
        base: 'bg-purple-500 border-purple-500 dark:bg-purple-800 dark:border-purple-800',
        content: 'dark:text-purple-300 text-purple-200',
        link: 'text-purple-300 hover:text-purple-100',
      },
    },
    {
      variant: 'modern',
      color: 'purple',
      class: {
        base: 'bg-purple-100 border-purple-200 dark:bg-purple-400/20 dark:border-purple-600',
        title: 'text-purple-500 dark:text-purple-200',
        subtitle: 'text-purple-400',
        content: 'text-purple-400',
        link: 'text-purple-400 hover:text-purple-600',
      },
    },
    {
      variant: 'border',
      color: 'slate',
      class: {
        base: 'border-slate-200 dark:border-slate-800',
      },
    },
    {
      variant: 'dashed',
      color: 'slate',
      class: {
        base: 'border-slate-200 dark:border-slate-800',
      },
    },
    {
      variant: 'fill',
      color: 'slate',
      class: {
        base: 'bg-slate-500 border-slate-500 dark:bg-slate-800 dark:border-slate-800',
        content: 'dark:text-slate-300 text-slate-200',
        link: 'text-slate-300 hover:text-slate-100',
      },
    },
    {
      variant: 'modern',
      color: 'slate',
      class: {
        base: 'bg-slate-100 border-slate-200 dark:bg-slate-400/20 dark:border-slate-600',
        title: 'text-slate-500 dark:text-slate-200',
        subtitle: 'text-slate-400',
        content: 'text-slate-400',
        link: 'text-slate-400 hover:text-slate-600',
      },
    },
  ],
})

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  title,
  linkText,
  linkHref,
  position = 'vertical',
  imgBottom = false,
  className,
  animation = false,
  color = 'custom',
  subtitle,
  uiSlots,
  children,
  imgUrl,
  imgAlt = '',
  as = 'div',
}) => {
  const {
    base,
    body,
    title: titleClass,
    content,
    link,
    img,
    subtitle: subtitleClass,
  } = card({
    color: color,
    variant: variant,
    as: as,
    imgBottom: imgBottom,
    position: position,
    animation: animation,
  })

  const Container = as === 'a' ? 'a' : 'div'

  return (
    <Container className={twMerge(base(), className)}>
      {imgUrl && (
        <div className="relative ">
          <img className={twMerge(img(), uiSlots?.slots?.img)} src={imgUrl} alt={imgAlt} />
        </div>
      )}

      <div className={twMerge(body(), uiSlots?.slots?.body)}>
        {title && <h6 className={twMerge(titleClass(), uiSlots?.slots?.title)}>{title}</h6>}
        {subtitle && (
          <p className={twMerge(subtitleClass(), uiSlots?.slots?.subtitle)}>{subtitle}</p>
        )}
        <div className={twMerge(content(), uiSlots?.slots?.content)}>{children}</div>
        {linkText && linkHref && (
          <a className={twMerge(link(), uiSlots?.slots?.link)} href={linkHref}>
            {linkText} <ChevronRight className="inline-block size-4" />
          </a>
        )}
      </div>
    </Container>
  )
}
