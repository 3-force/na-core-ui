import { Transition } from '@headlessui/react'
import React, {
  createContext,
  type ElementType,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

interface DropdownContextType {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleOpen: () => void
}

const DropDownContext = createContext<DropdownContextType | undefined>(undefined)

interface DropdownProps {
  children?: ReactNode
  as?: ElementType
  className?: string
}

const Dropdown = ({ as: Component = 'div', children, className }: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setOpen((previousState) => !previousState)
  }, []) // Empty dependency array

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(open)
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (open && toggleOpen) {
          toggleOpen()
        }
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [open, toggleOpen]) // Include toggleOpen as a dependency

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <Component ref={dropdownRef} className={`dropdown ${className}`}>
        {children}
      </Component>
    </DropDownContext.Provider>
  )
}

interface TriggerProps {
  children: ReactNode
  type?: ElementType
  className?: string
  id?: string
  href?: string
}

export const Trigger: React.FC<TriggerProps> = ({ type, children, className, id }) => {
  const context = useContext(DropDownContext)
  if (!context) {
    throw new Error('Trigger must be used within a Dropdown component')
  }
  const { open, toggleOpen } = context

  const getClassNameButton = className
    ? className
    : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
  const getClassNameLink = className
    ? className
    : 'transition-all duration-200 ease-linear bg-white border-dashed dropdown-toggle text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:focus:ring-custom-400/20 dark:bg-custom-400/20 '
  return (
    <>
      {type === 'a' ? (
        <Link
          id={id}
          to="/#"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()
            toggleOpen()
          }}
          className={getClassNameLink + (open ? ' show' : '')}
        >
          {children}
        </Link>
      ) : (
        <button id={id} onClick={toggleOpen} className={getClassNameButton}>
          {children}
        </button>
      )}
    </>
  )
}

interface ContentProps {
  as?: ElementType
  align?: 'left' | 'right'
  className?: string
  width?: string
  contentClasses?: string
  children: ReactNode
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'right-end' | 'start-end'
}

const Content: React.FC<ContentProps> = ({
  as: Component = 'div',
  className,
  children,
  placement = 'bottom-start',
}) => {
  const context = useContext(DropDownContext)
  if (!context) {
    throw new Error('Content must be used within a Dropdown component')
  }
  const { open, setOpen } = context

  const dropdownVariants = tv({
    base: 'absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-max dark:bg-zink-400',
    variants: {
      state: {
        open: 'scale-100 opacity-100 transition-all',
        closed: 'scale-50 opacity-0',
        leave: 'duration-200 ease-in-out scale-95',
      },
      placement: {
        'bottom-start': 'top-0 right-0 m-0 translate-y-[54px] bottom-0 left-0',
        'bottom-end': 'top-0 right-0 m-0 translate-y-[39px] bottom-0 left-0',
        'top-start': 'top-auto right-auto bottom-0 left-0 m-0 -translate-y-[95px]',
        'top-end':
          'top-auto left-auto right-0 bottom-0 m-0 -translate-x-[58px] -translate-y-[30px]',
        'right-end': '',
        'start-end': 'top-0 left-0 right-auto bottom-auto m-0 translate-y-[20px]',
      },
      isRtl: {
        true: '',
        false: '',
      },
      isDiv: {
        true: '',
        false: 'inline-table',
      },
    },
    compoundVariants: [
      {
        isRtl: true,
        placement: 'right-end',
        className: 'top-0 right-auto left-0 bottom-auto m-0 translate-y-[54px]',
      },

      {
        isRtl: false,
        placement: 'right-end',
        className: 'top-0 right-0 left-auto bottom-auto m-0 translate-y-[54px]',
      },
    ],
  })

  const isRtl = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl'

  const dropdownElementRef = useRef<HTMLDivElement>(null)

  return (
    <Transition
      show={open}
      enter="transition duration-200 ease-out"
      enterFrom="scale-50 opacity-0"
      enterTo="scale-100 opacity-100"
      leave="transition duration-200 ease-in"
      leaveFrom="scale-100 opacity-100"
      leaveTo="scale-50 opacity-0"
    >
      <Component
        ref={dropdownElementRef}
        onClick={() => setOpen(false)}
        className={twMerge(
          dropdownVariants({
            state: open ? 'open' : 'closed',
            placement,
            isRtl: isRtl,
            isDiv: Component === 'div',
          }),
          className,
        )}
      >
        {children}
      </Component>
    </Transition>
  )
}

Dropdown.Content = Content
Dropdown.Trigger = Trigger

export default Dropdown
