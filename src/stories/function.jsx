import React, { useState } from 'react';

const BUTTON_SIZE_STYLES = {
  xs: {
    container: 'h-6 px-2 py-[3px] rounded-md text-[11px] leading-[18px]',
    icon: { size: 12 },
    text: 'text-[11px] leading-[18px]',
    font: 'font-medium font-[Inter]',
  },
  sm: {
    container: 'h-7 px-2 py-[3px] rounded-md text-xs leading-tight',
    icon: { size: 12 },
    text: 'text-xs leading-tight',
    font: 'font-medium font-[Inter]',
  },
  md: {
    container: 'h-8 px-2.5 py-[3px] rounded-lg text-sm leading-snug',
    icon: { size: 16 },
    text: 'text-sm leading-snug',
    font: 'font-medium font-[Inter]',
  },
  lg: {
    container: 'h-10 px-3 py-[3px] rounded-[10px] text-base leading-relaxed',
    icon: { size: 20 },
    text: 'text-base leading-relaxed',
    font: 'font-medium font-[Inter]',
  },
  xl: {
    container: 'h-12 px-3.5 py-[3px] rounded-xl text-lg leading-[30px]',
    icon: { size: 24 },
    text: 'text-lg leading-[30px]',
    font: 'font-medium font-[Inter]',
  },
  icon_xs: {
    container: 'size-6 p-1.5 rounded-md',
    icon: { size: 12 },
  },
  icon_sm: {
    container: 'size-7 p-1.5 rounded-md',
    icon: { size: 14 },
  },
  icon_md: {
    container: 'size-8 p-1.5 rounded-lg',
    icon: { size: 16 },
  },
  icon_lg: {
    container: 'size-10 p-1.5 rounded-[10px]',
    icon: { size: 20 },
  },
  icon_xl: {
    container: 'size-12 p-1.5 rounded-xl',
    icon: { size: 24 },
  },
};

const BUTTON_COLOR_STYLES = {
  violet: {
    solid: 'bg-violet-600 outline outline-1 outline-offset-[-1px] outline-violet-600 text-white hover:bg-violet-700',
    neutral: 'bg-white outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 hover:bg-violet-50',
    ghost: ' text-violet-600',
    icon: 'bg-violet-600 outline outline-1 outline-offset-[-1px] outline-violet-600 text-white hover:bg-violet-700',
    border: 'border-violet-500',
    iconStroke: '#742AE9',
    iconFill: 'none',
  },
  white: {
    solid: 'bg-white outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 hover:bg-slate-50',
    ghost: 'text-gray-900',
    icon: 'bg-white outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-900 hover:bg-gray-50',
    border: 'border-gray-200',
    iconStroke: '#101828',
    iconFill: 'none',
  },
  slate: {
    solid: 'text-slate-700',
    ghost: 'text-slate-700',
    icon: '',
    border: '',
    iconStroke: '#667085',
    iconFill: 'none',
  },
  error: {
    solid: 'bg-red-600 text-white',
    ghost: 'text-red-600',
    icon: 'bg-red-600 text-white',
    border: 'border-red-600',
    iconStroke: '#D92D20',
    iconFill: 'none',
  },
  warning: {
    solid: 'bg-amber-300 text-gray-900',
    ghost: 'text-amber-700',
    icon: 'bg-amber-300 text-gray-900',
    border: 'border-amber-300',
    iconStroke: '#B54708',
  },
  success: {
    solid: 'bg-emerald-700 text-white',
    ghost: 'text-emerald-700',
    icon: 'bg-emerald-700 text-white',
    border: 'border-emerald-700',
    iconStroke: '#027A48',
  },
  disabled: {
    solid: 'bg-gray-300 outline outline-1 outline-offset-[-1px] outline-gray-300 text-gray-400 cursor-not-allowed opacity-70',
    icon: 'bg-gray-300 outline outline-1 outline-offset-[-1px] outline-gray-300 text-gray-400',
    iconStroke: '#D0D5DD',
    iconFill: 'none',
  },
  default: {
    solid: 'bg-gray-100 outline outline-1 outline-offset-[-1px] outline-gray-500 text-gray-900',
    border: 'border-gray-200',
    iconStroke: '#101828',
    ghost: '',
    icon: '',
  },
  info: {
    solid: 'bg-purple-100 text-violet-700',
    icon: 'bg-purple-100',
    border: 'border-purple-100',
    iconStroke: '#742AE9',
  },
};

const ICON_VARIANTS = {
  circle: 'M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z',
  circleAlt: 'M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z',
  thickCircle: 'M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z'
};

function getTailwindBorder(classes = '', isActive = false, isFocused = false) {
  return [
    classes,
    isActive ? 'ring-2 ring-violet-400' : '',
    isFocused ? 'ring-2 ring-violet-400' : '',
  ].join(' ');
}

function getButtonColor({
  color = 'violet',
  ghost = false,
  disabled = false,
  solidOverride = false,
}) {
  if (disabled && BUTTON_COLOR_STYLES.disabled) {
    return BUTTON_COLOR_STYLES.disabled.solid;
  }
  if (ghost && BUTTON_COLOR_STYLES[color]) {
    return BUTTON_COLOR_STYLES[color].ghost || '';
  }
  return (
    (solidOverride && BUTTON_COLOR_STYLES[color]?.solid) ||
    (BUTTON_COLOR_STYLES[color]?.solid ?? BUTTON_COLOR_STYLES['default'].solid)
  );
}

function getButtonIconColor({
  color = 'violet',
  ghost = false,
  disabled = false,
}) {
  if (disabled && BUTTON_COLOR_STYLES.disabled) {
    return BUTTON_COLOR_STYLES.disabled.icon;
  }
  if (ghost && BUTTON_COLOR_STYLES[color]) {
    return BUTTON_COLOR_STYLES[color].icon || '';
  }
  return BUTTON_COLOR_STYLES[color]?.icon ?? BUTTON_COLOR_STYLES['default'].icon;
}

export function HyButton({
  size = 'md',
  color = 'violet',
  text = 'Button',
  solid = true,
  ghost = false,
  disabled = false,
  rounded = true,
  className = '',
  style = {},
  icon = true,
  iconRight = true,
  iconLeft = true,
  iconOnly = false,
  iconProps = {},
  iconStroke,
  iconFill,
  borderClass = '',
  onClick,
  children,
  isVisible = true,
  animate = false,
  underline = false,
  testId = '',
  ariaLabel = '',
  iconVariant = 'circle',
  iconSize,
  ...rest
}) {
  // Interactivity
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(false);

  if (!isVisible) return null;

  // Sizes/Style resolution
  const sizeStyle =
    iconOnly && size in BUTTON_SIZE_STYLES
      ? BUTTON_SIZE_STYLES['icon_' + size] || BUTTON_SIZE_STYLES['icon_md']
      : BUTTON_SIZE_STYLES[size] || BUTTON_SIZE_STYLES.md;

  const buttonRole = 'button';

  const baseIconColor = color === 'white' ? '#101828' : BUTTON_COLOR_STYLES[color]?.iconStroke || '#742AE9';
  const baseTextColor = ghost ? BUTTON_COLOR_STYLES[color]?.ghost ?? '' : BUTTON_COLOR_STYLES[color]?.solid ?? '';
  const focusRing = focused ? 'ring-2 ring-violet-400' : '';

  // Event handlers for focus/active
  const eventHandlers = {
    onFocus: () => setFocused(true),
    onBlur: () => {
      setFocused(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') setActive(true);
    },
    onKeyUp: (e) => {
      if (e.key === 'Enter' || e.key === ' ') setActive(false);
    }
  };

  const combinedClass =
    [
      'inline-flex justify-center items-center gap-1.5 overflow-hidden select-none transition-colors duration-75 focus:outline-none cursor-pointer',
      getButtonColor({ color, ghost, disabled, solidOverride: solid }),
      underline ? 'underline' : '',
      sizeStyle.container,
      className,
      disabled ? 'cursor-not-allowed opacity-70' : 'hover:opacity-85',
      focused ? 'ring-2 ring-violet-400' : '',
    ].join(' ');

  // Semantic: <button> should be used for accessible controls
  return (
    <button
      data-testid={testId}
      aria-label={ariaLabel || text}
      type="button"
      tabIndex={0}
      role={buttonRole}
      className={combinedClass}
      style={style}
      disabled={disabled}
      {...eventHandlers}
      onClick={!disabled ? onClick : undefined}
      {...rest}
    >
      {iconLeft && (
        <span className="relative" data-svg-wrapper>
          <svg
            width={iconSize || sizeStyle.icon?.size || 12}
            height={iconSize || sizeStyle.icon?.size || 12}
            viewBox={`0 0 ${iconSize || sizeStyle.icon?.size || 12} ${iconSize || sizeStyle.icon?.size || 12}`}
            fill={iconFill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d={ICON_VARIANTS[iconVariant] || ICON_VARIANTS.circle}
              stroke={iconStroke || baseIconColor}
              strokeWidth={1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={iconFill || 'none'}
            />
          </svg>
        </span>
      )}
      {!iconOnly && (
        <span
          className={`justify-start ${baseTextColor} ${sizeStyle.font} ${underline ? 'underline' : ''} ${sizeStyle.text}`}
        >
          {children || text}
        </span>
      )}
      {iconRight && (
        <span className="relative" data-svg-wrapper>
          <svg
            width={iconSize || sizeStyle.icon?.size || 12}
            height={iconSize || sizeStyle.icon?.size || 12}
            viewBox={`0 0 ${iconSize || sizeStyle.icon?.size || 12} ${iconSize || sizeStyle.icon?.size || 12}`}
            fill={iconFill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d={ICON_VARIANTS.thickCircle}
              stroke={iconStroke || baseIconColor}
              strokeWidth={1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={iconFill || 'none'}
            />
          </svg>
        </span>
      )}
    </button>
  );
}

// Example gallery/playground of all button states
export default function HyButtonGallery() {
  // For brevity, just a demonstration of core variants and important color/size states
  return (
    <section className="relative w-[2116px] h-[1528px] bg-white grid">
      <main className="absolute inset-0 flex flex-wrap gap-3">
        {/* Primary Buttons (Violet) */}
        <HyButton size="xs" color="violet" text="Button" style={{ position: 'absolute', left: 40, top: 40 }} />
        <HyButton size="sm" color="violet" text="Button" style={{ position: 'absolute', left: 40, top: 296 }} />
        <HyButton size="md" color="violet" text="Button" style={{ position: 'absolute', left: 40, top: 568 }} />
        <HyButton size="lg" color="violet" text="Button" style={{ position: 'absolute', left: 40, top: 856 }} />
        <HyButton size="xl" color="violet" text="Button" style={{ position: 'absolute', left: 40, top: 1176 }} />

        {/* Secondary (Neutral) */}
        <HyButton size="xs" color="white" text="Button" style={{ position: 'absolute', left: 166, top: 40 }} />
        <HyButton size="xs" color="white" text="Button" style={{ position: 'absolute', left: 40, top: 107 }} />
        <HyButton size="sm" color="white" text="Button" style={{ position: 'absolute', left: 166, top: 296 }} />
        <HyButton size="md" color="white" text="Button" style={{ position: 'absolute', left: 166, top: 568 }} />
        <HyButton size="lg" color="white" text="Button" style={{ position: 'absolute', left: 166, top: 856 }} />
        <HyButton size="xl" color="white" text="Button" style={{ position: 'absolute', left: 166, top: 1176 }} />

        {/* Success, Error, Warning */}
        <HyButton size="xs" color="success" text="Button" style={{ position: 'absolute', left: 544, top: 40 }} />
        <HyButton size="xs" color="error" text="Button" style={{ position: 'absolute', left: 796, top: 40 }} />
        <HyButton size="xs" color="warning" text="Button" style={{ position: 'absolute', left: 670, top: 40 }} />
        <HyButton size="sm" color="success" text="Button" style={{ position: 'absolute', left: 544, top: 296 }} />
        <HyButton size="sm" color="error" text="Button" style={{ position: 'absolute', left: 796, top: 296 }} />
        <HyButton size="sm" color="warning" text="Button" style={{ position: 'absolute', left: 670, top: 296 }} />
        <HyButton size="md" color="success" text="Button" style={{ position: 'absolute', left: 544, top: 568 }} />
        <HyButton size="md" color="error" text="Button" style={{ position: 'absolute', left: 796, top: 568 }} />
        <HyButton size="md" color="warning" text="Button" style={{ position: 'absolute', left: 670, top: 568 }} />
        <HyButton size="lg" color="success" text="Button" style={{ position: 'absolute', left: 544, top: 856 }} />
        <HyButton size="lg" color="error" text="Button" style={{ position: 'absolute', left: 796, top: 856 }} />
        <HyButton size="lg" color="warning" text="Button" style={{ position: 'absolute', left: 670, top: 856 }} />
        <HyButton size="xl" color="success" text="Button" style={{ position: 'absolute', left: 544, top: 1176 }} />
        <HyButton size="xl" color="error" text="Button" style={{ position: 'absolute', left: 796, top: 1176 }} />
        <HyButton size="xl" color="warning" text="Button" style={{ position: 'absolute', left: 670, top: 1176 }} />
        {/* ... Continue with icon-only, semantic, APIs for semantic colors etc as needed ... */}
      </main>
    </section>
  );
}