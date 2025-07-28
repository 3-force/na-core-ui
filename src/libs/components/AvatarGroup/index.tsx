import { Tooltip } from 'react-tooltip'
import { twMerge } from 'tailwind-merge'
import { Avatar, type AvatarProps } from '../Avatar'

import React from 'react'
import 'react-tooltip/dist/react-tooltip.css'

type AvatarWithTooltip = Omit<AvatarProps, 'size' | 'shape' | 'variant'> & {
  id: string | number
  tooltip?: string
}

type AvatarGroupProps = {
  avatars: AvatarWithTooltip[]
  size?: AvatarProps['size']
  variant?: AvatarProps['variant']
  maxVisible?: number
  className?: string
  onClickMore?: () => void
}

export const AvatarGroup = ({
  avatars,
  size = 'sm',
  variant = 'image',
  maxVisible = 4,
  className,
  onClickMore,
}: AvatarGroupProps) => {
  const visibleAvatars = avatars.slice(0, maxVisible)
  const hiddenAvatarsCount = avatars.length - maxVisible

  const displayAvatars =
    hiddenAvatarsCount > 0 ? [...avatars.slice(0, maxVisible - 1), null] : visibleAvatars

  return (
    <div className={twMerge('flex -space-x-4', className)}>
      {displayAvatars.map((avatar) =>
        avatar ? (
          avatar.tooltip ? (
            <React.Fragment key={avatar.id}>
              <Avatar
                {...avatar}
                size={size}
                shape="circle"
                variant={variant}
                isLink
                data-tooltip-id={`avatar-tooltip-${avatar.id}`}
                data-tooltip-content={avatar.tooltip}
              ></Avatar>
              <Tooltip className="index-tooltip" id={`avatar-tooltip-${avatar.id}`} />
            </React.Fragment>
          ) : (
            <Avatar key={avatar.id} {...avatar} size={size} shape="circle" variant={variant} />
          )
        ) : (
          <Avatar
            isLink={true}
            key="extra"
            size={size}
            shape="circle"
            variant="text"
            as="a"
            onClick={onClickMore}
            className=" text-white border-2 border-white  bg-slate-700 hover:bg-slate-600 dark:border-zink-700"
          >
            {[`+${hiddenAvatarsCount}`]}
          </Avatar>
        ),
      )}
    </div>
  )
}
