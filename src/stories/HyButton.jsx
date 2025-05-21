import React from 'react';

const iconSvgs = {
  violet: {
    border: 'stroke-violet-600',
    fill: 'text-violet-600',
    svg: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <g clipPath="url(#clip0)">
          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="12" height="12" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
  },
  white: {
    border: 'stroke-white',
    fill: 'text-white',
    svg: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <g clipPath="url(#clip0)">
          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="12" height="12" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
  },
}

const HyButton = ({
  // Layout
  left = 0,
  top = 0,
  width = 'auto',
  height = 'auto',
  px = 'px-2',
  py = 'py-[3px]',
  gap = 'gap-1.5',

  // Visuals
  rounded = 'rounded-md',
  bgColor = 'bg-violet-600',
  outline = 'outline outline-1 outline-offset-[-1px] outline-violet-600',
  border = '',
  shadow = '',
  hover = '',
  font = 'font-["Inter"]',

  // Text
  label = 'Button',
  labelColor = 'text-white',
  labelSize = 'text-[11px]',
  fontWeight = 'font-medium',
  leading = 'leading-[18px]',
  underline = false,

  // Icons
  leftIcon = iconSvgs.violet.svg,
  rightIcon = iconSvgs.white.svg,
  iconColor = 'text-white',

  // States
  isVisible = true,
  isDisabled = false,
  isLoading = false,

  // Others
  onClick,
  tabIndex = 0,
  as = 'button',
  children,
  ...rest
}) => {

  if (!isVisible) return null;
  const Tag = as;

  return (
    <Tag
      type="button"
      disabled={isDisabled}
      aria-busy={isLoading}
      tabIndex={tabIndex}
      onClick={e => {
        if (!isDisabled && onClick) onClick(e);
      }}
      style={{ left, top, width, height, position: 'absolute' }}
      className={[
        `inline-flex items-center justify-center overflow-hidden absolute`,
        bgColor,
        border,
        shadow,
        outline,
        rounded,
        px,
        py,
        gap,
        hover,
        isDisabled ? 'opacity-60 pointer-events-none cursor-not-allowed' : 'cursor-pointer select-none',
        rest.className
      ].join(' ')}
      {...rest}
    >
      {leftIcon && (
        <span data-svg-wrapper className={`relative flex-shrink-0 ${iconColor}`}>
          {leftIcon}
        </span>
      )}
      <span className={[
        "justify-start truncate whitespace-nowrap",
        labelColor,
        labelSize,
        font,
        fontWeight,
        leading,
        underline ? 'underline' : ''
      ].join(' ')}>
        {isLoading
          ? <span className="animate-pulse">Loading...</span>
          : label || children}
      </span>
      {rightIcon && (
        <span data-svg-wrapper className={`relative flex-shrink-0 ${iconColor}`}>
          {rightIcon}
        </span>
      )}
    </Tag>
  );
};

// Example container for previewing a grid of button variants (optional)
const HyButtonShowcase = ({
  isVisible = true,
  buttons = [],
  ...rest
}) => {
  if (!isVisible) return null;

  return (
    <section
      className={`relative w-full min-h-[1528px] overflow-auto flex flex-wrap items-start`}
    >
      {buttons.map((props, idx) => (
        <HyButton key={idx} {...props} />
      ))}
    </section>
  );
};

export default HyButton;
export { HyButtonShowcase };