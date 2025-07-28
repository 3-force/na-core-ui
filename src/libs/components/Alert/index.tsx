import { AlertCircle, X } from 'lucide-react'
import type { ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'
import { AlertContextProvider } from '../../common/contexts/AlertContext'
import { useAlert } from '../../common/hooks/useAlert'

const alert = tv({
  base: 'text-sm rounded-md px-4 py-3',
  variants: {
    variant: {
      basic: '',
      solid: 'border border-transparent',
      bordered: 'border',
      content: 'flex gap-3 p-4',
      outline: 'bg-white dark:bg-zink-700 border',
      icon: 'flex gap-1 md:items-center',
      image: 'flex gap-2 md:items-center',
    },
    color: {
      custom:
        'text-custom-500 bg-custom-50 dark:bg-custom-400/20 border-custom-200 dark:border-custom-500/50',
      green:
        'text-green-500 bg-green-50 dark:bg-green-400/20 border-green-200 dark:border-green-500/50',
      orange:
        'text-orange-500 bg-orange-50 dark:bg-orange-400/20 border-orange-200 dark:border-orange-500/50',
      sky: 'text-sky-500 bg-sky-50 dark:bg-sky-400/20 border-sky-200 dark:border-sky-500/50',
      yellow:
        'text-yellow-500 bg-yellow-50 dark:bg-yellow-400/20 border-yellow-200 dark:border-yellow-500/50',
      red: 'text-red-500 bg-red-50 dark:bg-red-400/20 border-red-200 dark:border-red-500/50',
      purple:
        'text-purple-500 bg-purple-50 dark:bg-purple-400/20 border-purple-200 dark:border-purple-500/50',
      light:
        'text-slate-500 bg-slate-50 dark:bg-zink-400/20 dark:text-zink-200 border-slate-200 dark:border-zink-500',
    },
    borderColor: {
      none: '',
      default: 'border-transparent',
      custom: 'border-custom-200 dark:border-custom-500/50',
      green: 'border-green-200 dark:border-green-500/50',
      orange: 'border-orange-200 dark:border-orange-500/50',
      sky: 'border-sky-200 dark:border-sky-500/50',
      yellow: 'border-yellow-200 dark:border-yellow-500/50',
      red: 'border-red-200 dark:border-red-500/50',
      purple: 'border-purple-200 dark:border-purple-500/50',
      slate: 'border-slate-200 dark:border-zink-500',
      solid: 'border-custom-300 dark:border-custom-500',
    },
    solid: {
      true: '',
      false: '',
    },
    dismissible: {
      true: 'relative pr-12',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'custom',
      className: 'text-custom-50 bg-custom-500',
    },
    {
      variant: 'solid',
      color: 'green',
      className: 'text-green-50 bg-green-500',
    },
    {
      variant: 'solid',
      color: 'orange',
      className: 'text-orange-50 bg-orange-500',
    },
    {
      variant: 'solid',
      color: 'sky',
      className: 'text-sky-50 bg-sky-500',
    },
    {
      variant: 'solid',
      color: 'yellow',
      className: 'text-yellow-50 bg-yellow-500',
    },
    {
      variant: 'solid',
      color: 'red',
      className: 'text-red-50 bg-red-500',
    },
    {
      variant: 'solid',
      color: 'purple',
      className: 'text-purple-50 bg-purple-500',
    },
    {
      variant: 'solid',
      color: 'light',
      className: 'text-slate-50 bg-slate-500 dark:bg-zink-700/20 dark:text-zink-200',
    },
    {
      variant: 'outline',
      color: 'custom',
      className: 'text-custom-500 border-custom-300 bg-white dark:bg-zink-700',
    },
    {
      variant: 'outline',
      color: 'green',
      className: 'text-green-500 border-green-300 bg-white dark:bg-zink-700',
    },
    {
      variant: 'outline',
      color: 'orange',
      className: 'text-orange-500 border-orange-300 bg-white dark:bg-zink-700',
    },
    {
      variant: 'outline',
      color: 'sky',
      className: 'text-sky-500 border-sky-300 bg-white dark:bg-zink-700',
    },
    {
      variant: 'outline',
      color: 'yellow',
      className: 'text-yellow-500 border-yellow-300 bg-white dark:bg-zink-700',
    },
    {
      variant: 'outline',
      color: 'red',
      className: 'text-red-500 border-red-300 bg-white dark:bg-zink-700',
    },
    {
      variant: 'outline',
      color: 'purple',
      className: 'text-purple-500 border-purple-300 bg-white dark:bg-zink-700',
    },
    {
      variant: 'outline',
      color: 'light',
      className: 'text-slate-500 border-slate-300 bg-white dark:bg-zink-700',
    },
  ],
  defaultVariants: {
    variant: 'basic',
    color: 'custom',
    borderColor: 'none',
  },
})

const alertClose = tv({
  base: 'absolute top-0 bottom-0 right-0 p-3 transition',
  variants: {
    color: {
      custom:
        'text-custom-200 hover:text-custom-500 dark:text-custom-400/50 dark:hover:text-custom-500',
      green: 'text-green-200 hover:text-green-500 dark:text-green-400/50 dark:hover:text-green-500',
      orange:
        'text-orange-200 hover:text-orange-500 dark:text-orange-400/50 dark:hover:text-orange-500',
      sky: 'text-sky-200 hover:text-sky-500 dark:text-sky-400/50 dark:hover:text-sky-500',
      yellow:
        'text-yellow-200 hover:text-yellow-500 dark:text-yellow-400/50 dark:hover:text-yellow-500',
      red: 'text-red-200 hover:text-red-500 dark:text-red-400/50 dark:hover:text-red-500',
      purple:
        'text-purple-200 hover:text-purple-500 dark:text-purple-400/50 dark:hover:text-purple-500',
      light: 'text-slate-200 hover:text-slate-500 dark:text-zink-300 dark:hover:text-zink-200',
    },
    solid: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      solid: true,
      color: 'custom',
      className: 'hover:text-custom-100',
    },
    {
      solid: true,
      color: 'green',
      className: 'hover:text-green-100',
    },
    {
      solid: true,
      color: 'orange',
      className: 'hover:text-orange-100',
    },
    {
      solid: true,
      color: 'sky',
      className: 'hover:text-sky-100',
    },
    {
      solid: true,
      color: 'yellow',
      className: 'hover:text-yellow-100',
    },
    {
      solid: true,
      color: 'red',
      className: 'hover:text-red-100',
    },
    {
      solid: true,
      color: 'purple',
      className: 'hover:text-purple-100',
    },
    {
      solid: true,
      color: 'light',
      className: 'hover:text-slate-100',
    },
  ],
})

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof alert> {
  children: ReactNode
  dismissible?: boolean
  as?: ElementType
}

export interface AlertImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
}

export interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export interface AlertCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const AlertBold: React.FC<AlertProps> = ({ children }) => {
  return <span className="font-bold">{children}</span>
}

const AlertIcon: React.FC<AlertIconProps> = ({ children }) => {
  return <>{children ?? <AlertCircle className="h-4"></AlertCircle>}</>
}

const AlertClose: React.FC<AlertCloseProps> = ({ className }) => {
  const { handleAlertToggle } = useAlert()
  return (
    <button
      className={twMerge(
        'absolute top-0 bottom-0 right-0 p-3 transition text-custom-200 hover:text-custom-500 dark:text-custom-400/50 dark:hover:text-custom-500',
        className,
      )}
      onClick={handleAlertToggle}
    >
      <X className="h-5"></X>
    </button>
  )
}

const AlertImage: React.FC<AlertImageProps> = ({ src, className, alt }) => {
  return <img src={src} alt={alt} className={className} />
}

const AlertContent: React.FC<AlertProps> = ({ children, as: Component = 'div' }) => {
  return <Component>{children}</Component>
}

const Alert: React.FC<AlertProps> = ({
  variant,
  color,
  borderColor,
  className,
  children,
  dismissible,
  ...rest
}) => {
  return (
    <AlertContextProvider>
      <div
        className={twMerge(alert({ variant, color, borderColor, dismissible }), className)}
        {...rest}
      >
        {children}
        {dismissible && (
          <AlertClose
            className={alertClose({
              color,
              solid: variant === 'solid',
            })}
          />
        )}
      </div>
    </AlertContextProvider>
  )
}

const AlertExport = Object.assign(Alert, {
  Bold: AlertBold,
  Icon: AlertIcon,
  Close: AlertClose,
  Image: AlertImage,
  Content: AlertContent,
})

export default AlertExport
