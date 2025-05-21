import React from 'react';

const IconSvg = ({
  stroke = 'white',
  strokeWidth = 1.2,
  circleStroke,
  kind = 'default',
  iconSize = 12,
  circle = true,
  circleStrokeColor,
  ...props
}) => {
  // Customize SVG icons according to icon size
  if (iconSize === 24) {
    // 24px
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={circleStrokeColor || stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (iconSize === 20) {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
        <path
          d="M10 18.3333C14.6024 18.3333 18.3333 14.6023 18.3333 10C18.3333 5.3976 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66663 5.3976 1.66663 10C1.66663 14.6023 5.39765 18.3333 10 18.3333Z"
          stroke={circleStrokeColor || stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (iconSize === 16) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
        <g>
          <path
            d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33337 8 1.33337C4.3181 1.33337 1.33337 4.3181 1.33337 8C1.33337 11.6819 4.3181 14.6667 8 14.6667Z"
            stroke={circleStrokeColor || stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }
  // 13px or 12px
  if (iconSize === 13) {
    // e.g. for underlined
    return (
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" {...props}>
        <path
          d="M6 11.5C8.76142 11.5 11 9.26142 11 6.5C11 3.73858 8.76142 1.5 6 1.5C3.23858 1.5 1 3.73858 1 6.5C1 9.26142 3.23858 11.5 6 11.5Z"
          stroke={circleStrokeColor || stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (iconSize === 14) {
    // 14px (rounded icon)
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
        <g>
          <path
            d="M1.75 7C1.75 7.68944 1.8858 8.37213 2.14963 9.00909C2.41347 9.64605 2.80018 10.2248 3.28769 10.7123C3.7752 11.1998 4.35395 11.5865 4.99091 11.8504C5.62787 12.1142 6.31056 12.25 7 12.25C7.68944 12.25 8.37213 12.1142 9.00909 11.8504C9.64605 11.5865 10.2248 11.1998 10.7123 10.7123C11.1998 10.2248 11.5865 9.64605 11.8504 9.00909C12.1142 8.37213 12.25 7.68944 12.25 7C12.25 6.31056 12.1142 5.62787 11.8504 4.99091C11.5865 4.35395 11.1998 3.7752 10.7123 3.28769C10.2248 2.80018 9.64605 2.41347 9.00909 2.14963C8.37213 1.8858 7.68944 1.75 7 1.75C6.31056 1.75 5.62787 1.8858 4.99091 2.14963C4.35395 2.41347 3.7752 2.80018 3.28769 3.28769C2.80018 3.7752 2.41347 4.35395 2.14963 4.99091C1.8858 5.62787 1.75 6.31056 1.75 7Z"
            stroke={circleStrokeColor || stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }
  // Default: 12
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
      <g>
        <path
          d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
          stroke={circleStrokeColor || stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

const hyButton = ({
  children,
  size = 'md', // xs, sm, md, lg, xl
  color = 'primary', // primary, secondary, success, warning, error, info, muted, white, gray, danger, custom
  variant = 'solid', // solid, outline, ghost, flat, underlined
  leftIcon = true,
  rightIcon = true,
  icon = null, // custom icon component
  customClass = '',
  className = '',
  as = 'button', // For semantic tag
  text = 'Button',
  isVisible = true,
  disabled = false,
  fullWidth = false,
  onClick,
  underline = false,
  left = '',
  top = '',
  absolute = false,
  px,
  py,
  h,
  spacing = '',
  border = '',
  outline = '',
  outlineColor = '',
  outlineOffset = '',
  radius = '',
  overflow = '',
  fontSize = '',
  fontWeight = '',
  fontFamily = '',
  leading = '',
  iconProps = {},
  leftIconProps = {},
  rightIconProps = {},
  iconStrokeColor,
  rightIconStrokeColor,
  leftIconStrokeColor,
  textClass = '',
  leftIconVisible = undefined,
  rightIconVisible = undefined,
  ...props
}) => {
  if (!isVisible) return null;

  const asTag = as || 'button';
  // Map size to Tailwind classes (used from static sample)
  const sizeMap = {
    xs: {
      h: 'h-6',
      px: 'px-2',
      py: 'py-[3px]',
      radius: 'rounded-md',
      fontSize: 'text-[11px]',
      leading: 'leading-[18px]',
      iconSize: 12,
      gap: 'gap-1.5',
    },
    sm: {
      h: 'h-7',
      px: 'px-2',
      py: 'py-[3px]',
      radius: 'rounded-md',
      fontSize: 'text-xs',
      leading: 'leading-tight',
      iconSize: 12,
      gap: 'gap-1.5',
    },
    md: {
      h: 'h-8',
      px: 'px-2.5',
      py: 'py-[3px]',
      radius: 'rounded-lg',
      fontSize: 'text-sm',
      leading: 'leading-snug',
      iconSize: 16,
      gap: 'gap-1.5',
    },
    lg: {
      h: 'h-10',
      px: 'px-3',
      py: 'py-[3px]',
      radius: 'rounded-[10px]',
      fontSize: 'text-base',
      leading: 'leading-relaxed',
      iconSize: 16,
      gap: 'gap-1.5',
    },
    xl: {
      h: 'h-12',
      px: 'px-3.5',
      py: 'py-[3px]',
      radius: 'rounded-xl',
      fontSize: 'text-lg',
      leading: 'leading-[30px]',
      iconSize: 24,
      gap: 'gap-1.5',
    },
  };

  // Underline & concise, special class sets
  if (variant === 'underlined' && size === 'xs') {
    sizeMap.xs.fontSize = 'text-[11px] underline';
    sizeMap.xs.leading = 'leading-[15px]';
  }
  if (variant === 'underlined' && size === 'sm') {
    sizeMap.sm.fontSize = 'text-xs underline';
  }

  // Map color+variant to Tailwind (sample is massive, so mapping main obvious ones)
  const colorClassTable = {
    primary: {
      solid: 'bg-violet-600 text-white outline outline-1 outline-offset-[-1px] outline-violet-600',
      outline: 'bg-white text-violet-600 outline outline-1 outline-offset-[-1px] outline-violet-600',
      ghost: 'text-violet-600',
      flat: 'bg-purple-100 text-violet-700 outline outline-1 outline-offset-[-1px] outline-purple-100',
      underlined: 'text-violet-700 underline',
      custom: '',
    },
    secondary: {
      solid: 'bg-white text-gray-900 outline outline-1 outline-offset-[-1px] outline-gray-200',
      outline: 'bg-gray-100 text-gray-900 outline outline-1 outline-offset-[-1px] outline-gray-200',
      ghost: 'text-gray-900',
    },
    success: {
      solid: 'bg-emerald-700 text-white outline outline-1 outline-offset-[-1px] outline-emerald-700',
      outline: 'bg-emerald-100 text-emerald-800 outline outline-1 outline-offset-[-1px] outline-emerald-300',
      flat: 'bg-emerald-200 text-white outline outline-1 outline-offset-[-1px] outline-emerald-200',
      underlined: 'text-emerald-800 underline',
    },
    danger: {
      solid: 'bg-red-600 text-white outline outline-1 outline-offset-[-1px] outline-red-600',
      outline: 'bg-red-100 text-red-600 outline outline-1 outline-offset-[-1px] outline-red-100',
      flat: 'bg-red-200 text-white outline outline-1 outline-offset-[-1px] outline-red-200',
      underlined: 'text-red-600 underline',
    },
    warning: {
      solid: 'bg-amber-300 text-gray-900 outline outline-1 outline-offset-[-1px] outline-amber-300',
      outline: 'bg-amber-100 text-amber-700 outline outline-1 outline-offset-[-1px] outline-amber-300',
      flat: 'bg-amber-200 text-white outline outline-1 outline-offset-[-1px] outline-amber-200',
      underlined: 'text-amber-700 underline',
    },
    info: {
      solid: 'bg-violet-700 text-white outline outline-1 outline-offset-[-1px] outline-violet-700',
    },
    muted: {
      solid: 'bg-gray-100 text-gray-900 outline outline-1 outline-offset-[-1px] outline-gray-200',
      outline: 'bg-gray-300 text-white outline outline-1 outline-offset-[-1px] outline-gray-300',
      flat: 'bg-gray-300 text-white outline outline-1 outline-offset-[-1px] outline-gray-300',
      ghost: 'text-gray-400',
      custom: '',
    },
    white: {
      solid: 'bg-white text-gray-900 outline outline-1 outline-offset-[-1px] outline-gray-200',
    },
    gray: {
      solid: 'bg-gray-100 text-gray-900 outline outline-1 outline-offset-[-1px] outline-gray-200',
      underlined: 'text-gray-900 underline',
    },
    custom: {
      solid: '',
    },
  };

  // Choose main color key & style
  const colorKey = color in colorClassTable ? color : 'primary';
  const variantKey = variant in colorClassTable[colorKey] ? variant : 'solid';

  // Compose className for button
  const cfg = sizeMap[size] || sizeMap.md;
  let baseCls =
    `${cfg.h} ${cfg.px} ${cfg.py} ${cfg.radius} inline-flex justify-center items-center ${cfg.gap} cursor-pointer font-medium font-['Inter'] ${leading || cfg.leading} ${fontWeight || ''} ${fontSize || cfg.fontSize} ${spacing} ${overflow ? overflow : 'overflow-hidden'} ${fullWidth ? 'w-full' : ''} select-none transition-colors duration-75 active:opacity-75 ` +
    (className || '') +
    (customClass || '');

  // Add color/variant mapping
  baseCls += ' ' + colorClassTable[colorKey][variantKey];

  // Border, outline.
  if (border) baseCls += ` ${border}`;
  if (outline) baseCls += ` ${outline}`;
  if (outlineColor) baseCls += ` outline-${outlineColor}`;
  if (outlineOffset) baseCls += ` outline-offset-${outlineOffset}`;
  if (textClass) baseCls += ` ${textClass}`;

  // Underline
  if (underline) baseCls += ' underline';

  // States: Disabled
  if (disabled) baseCls += ' opacity-60 pointer-events-none select-none';

  // Absolute
  if (absolute && left && top) baseCls += ` absolute left-[${left}] top-[${top}]`;

  // Icon strokes per color
  const iconStroke = iconStrokeColor
    ? iconStrokeColor
    : colorKey === 'white'
    ? '#101828'
    : colorKey === 'danger'
    ? '#D92D20'
    : colorKey === 'success'
    ? '#027A48'
    : colorKey === 'warning'
    ? '#B54708'
    : colorKey === 'primary'
    ? '#742AE9'
    : 'white';

  // Default iconStroke for left/right
  const leftStroke = leftIconStrokeColor || iconStroke;
  const rightStroke = rightIconStrokeColor || (colorKey === 'secondary' ? '#344054' : iconStroke);

  // Decide if icons should be present
  const showLeftIcon = typeof leftIconVisible === 'boolean' ? leftIconVisible : leftIcon !== false;
  const showRightIcon = typeof rightIconVisible === 'boolean' ? rightIconVisible : rightIcon !== false;

  // Click
  const handleClick = e => {
    if (disabled) return;
    if (onClick) onClick(e);
  };

  // Semantic wrap
  const Tag = asTag;

  return (
    <Tag
      tabIndex={disabled ? -1 : 0}
      type={Tag === 'button' ? 'button' : undefined}
      className={baseCls}
      aria-disabled={disabled ? true : undefined}
      disabled={Tag === 'button' ? disabled : undefined}
      onClick={handleClick}
      {...props}
    >
      {showLeftIcon && (
        <div data-svg-wrapper className="relative">
          {icon ? (
            React.cloneElement(icon, { ...iconProps })
          ) : (
            <IconSvg stroke={leftStroke} iconSize={cfg.iconSize} {...iconProps} {...leftIconProps} />
          )}
        </div>
      )}
      <span
        className={`justify-start whitespace-nowrap ${colorKey === 'muted' ? 'text-gray-400' : ''} ${
          underline ? 'underline' : ''
        }`}
      >
        {children || text}
      </span>
      {showRightIcon && (
        <div data-svg-wrapper className="relative">
          {icon ? (
            React.cloneElement(icon, { ...iconProps })
          ) : (
            <IconSvg stroke={rightStroke} iconSize={cfg.iconSize} {...iconProps} {...rightIconProps} />
          )}
        </div>
      )}
    </Tag>
  );
};

// Example variants mapping (as per snippet rules)
hyButton.Sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
hyButton.Colors = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'info',
  'muted',
  'white',
  'gray',
  'custom',
];
hyButton.Variants = ['solid', 'outline', 'ghost', 'flat', 'underlined'];

export default hyButton;