import React from 'react';

const BUTTON_SIZES = {
  xs: {
    wrapper: 'h-6 px-2 py-[3px] rounded-md text-[11px] leading-[18px]',
    icon: 'size-6 p-1.5 rounded-md',
    iconSvg: { width: 12, height: 12 },
  },
  sm: {
    wrapper: 'h-7 px-2 py-[3px] rounded-md text-xs leading-tight',
    icon: 'size-7 p-1.5 rounded-md',
    iconSvg: { width: 14, height: 14 },
  },
  md: {
    wrapper: 'h-8 px-2.5 py-[3px] rounded-lg text-sm leading-snug',
    icon: 'size-8 p-1.5 rounded-lg',
    iconSvg: { width: 16, height: 16 },
  },
  lg: {
    wrapper: 'h-10 px-3 py-[3px] rounded-[10px] text-base leading-relaxed',
    icon: 'size-10 p-1.5 rounded-[10px]',
    iconSvg: { width: 20, height: 20 },
  },
  xl: {
    wrapper: 'h-12 px-3.5 py-[3px] rounded-xl text-lg leading-[30px]',
    icon: 'size-12 p-1.5 rounded-xl',
    iconSvg: { width: 24, height: 24 },
  },
};

const VARIANTS = {
  solid: bg => bg,
  soft: bg => bg,
  outlined: bg => bg,
  text: () => '',
};

const COLOR_MAP = {
  violet: {
    solid: 'bg-violet-600 text-white outline outline-1 outline-offset-[-1px] outline-violet-600',
    soft: 'bg-violet-700 text-white outline outline-1 outline-offset-[-1px] outline-violet-700',
    outlined: 'bg-white text-violet-600 outline outline-1 outline-offset-[-1px] outline-violet-600',
    text: 'bg-transparent text-violet-600',
    plain: 'bg-violet-600 text-white'
  },
  emerald: {
    solid: 'bg-emerald-700 text-white outline outline-1 outline-offset-[-1px] outline-emerald-700',
    soft: 'bg-emerald-800 text-white',
    outlined: 'bg-white text-emerald-700 outline outline-1 outline-offset-[-1px] outline-emerald-700',
    text: 'bg-transparent text-emerald-700',
    plain: 'bg-emerald-700 text-white'
  },
  amber: {
    solid: 'bg-amber-300 text-gray-900',
    soft: 'bg-amber-400 text-gray-900',
    outlined: 'bg-white text-amber-700 outline outline-1 outline-offset-[-1px] outline-gray-200',
    text: 'bg-transparent text-amber-700',
    plain: 'bg-amber-300 text-gray-900'
  },
  red: {
    solid: 'bg-red-600 text-white',
    soft: 'bg-red-700 text-white',
    outlined: 'bg-white text-red-600 outline outline-1 outline-offset-[-1px] outline-gray-200',
    text: 'bg-transparent text-red-600',
    plain: 'bg-red-600 text-white'
  },
  gray: {
    solid: 'bg-gray-100 text-gray-900 outline outline-1 outline-offset-[-1px] outline-gray-200',
    soft: 'bg-gray-300 text-gray-400 outline outline-1 outline-offset-[-1px] outline-gray-300',
    outlined: 'bg-white text-gray-400 outline outline-1 outline-offset-[-1px] outline-gray-300',
    text: 'bg-transparent text-gray-400',
    plain: 'bg-gray-100 text-gray-900'
  },
  slate: {
    solid: 'bg-transparent text-slate-700',
    soft: 'bg-transparent text-slate-700',
    outlined: 'bg-transparent text-slate-700',
    text: 'bg-transparent text-slate-700'
  },
  white: {
    solid: 'bg-white text-gray-900 outline outline-1 outline-offset-[-1px] outline-gray-200',
    soft: 'bg-white text-gray-900 outline outline-1 outline-offset-[-1px] outline-gray-500',
    outlined: 'bg-white text-gray-900 outline outline-1 outline-offset-[-1px] outline-gray-300',
    text: 'bg-transparent text-gray-900',
    plain: 'bg-white text-gray-900'
  },
  purple: {
    solid: 'bg-purple-100 text-violet-700 outline outline-1 outline-offset-[-1px] outline-purple-100',
    outlined: 'bg-white text-violet-700 outline outline-1 outline-offset-[-1px] outline-purple-100',
    soft: 'bg-purple-100 text-violet-700 outline outline-1 outline-offset-[-1px] outline-purple-100',
    text: 'bg-transparent text-violet-700',
    plain: 'bg-purple-100 text-violet-700'
  },
  amberSoft: {
    solid: 'bg-amber-100 text-gray-900 outline outline-1 outline-offset-[-1px] outline-amber-300',
    soft: 'bg-amber-300 text-amber-700',
    outlined: 'bg-white text-amber-700 outline outline-1 outline-offset-[-1px] outline-amber-300',
    text: 'bg-transparent text-amber-700'
  },
  redSoft: {
    solid: 'bg-red-100 text-red-800 outline outline-1 outline-offset-[-1px] outline-red-300',
    soft: 'bg-red-300 text-red-700',
    outlined: 'bg-white text-red-600 outline outline-1 outline-offset-[-1px] outline-red-300',
    text: 'bg-transparent text-red-700',
    plain: 'bg-red-100 text-red-800'
  },
  emeraldSoft: {
    solid: 'bg-emerald-100 text-emerald-800 outline outline-1 outline-offset-[-1px] outline-emerald-300',
    soft: 'bg-emerald-300 text-emerald-700',
    outlined: 'bg-white text-emerald-700 outline outline-1 outline-offset-[-1px] outline-emerald-300',
    text: 'bg-transparent text-emerald-800',
    plain: 'bg-emerald-100 text-emerald-800'
  }
};

function getButtonColor({ color, variant, disabled }) {
  if (disabled) {
    if (variant === 'outlined')
      return 'bg-white text-gray-400 outline outline-1 outline-offset-[-1px] outline-gray-300';
    return 'bg-gray-300 text-gray-400 outline outline-1 outline-offset-[-1px] outline-gray-300';
  }
  // special soft variants
  if (color === 'amber' && variant === 'soft') return COLOR_MAP.amberSoft.solid;
  if (color === 'red' && variant === 'soft') return COLOR_MAP.redSoft.solid;
  if (color === 'emerald' && variant === 'soft') return COLOR_MAP.emeraldSoft.solid;
  return COLOR_MAP[color] && COLOR_MAP[color][variant]
    ? COLOR_MAP[color][variant]
    : COLOR_MAP[color]?.plain || '';
}

function getTextClasses({ color, variant, disabled, underline }) {
  let base = '';
  if (disabled) return 'text-gray-400 font-medium font-[Inter]';
  if (color === 'amber') {
    base = variant === 'soft' ? 'text-gray-900 font-medium font-[Inter]' : 'text-amber-700 font-medium font-[Inter]';
  } else if (color === 'emerald') {
    base = variant === 'soft' ? 'text-emerald-800 font-medium font-[Inter]' : 'text-emerald-700 font-medium font-[Inter]';
  } else if (color === 'red') {
    base = variant === 'soft' ? 'text-red-800 font-medium font-[Inter]' : 'text-red-600 font-medium font-[Inter]';
  } else if (color === 'purple') {
    base = 'text-violet-700 font-medium font-[Inter]';
  } else if (color === 'slate') {
    base = 'text-slate-700 font-medium font-[Inter]';
  } else if (color === 'gray') {
    base = variant === 'soft' ? 'text-gray-400 font-medium font-[Inter]' : 'text-gray-900 font-medium font-[Inter]';
  } else if (color === 'white') {
    base = 'text-gray-900 font-medium font-[Inter]';
  } else {
    base = 'text-white font-medium font-[Inter]';
  }
  if (underline) base += ' underline';
  return base;
}

// For icon colors: if not disabled, based on color, else gray.
function getIconStroke({ color, variant, disabled }) {
  if (disabled) return '#98A2B3';
  // Based on button: default all white; outlined/text depends
  // (can be enhanced for more colors if needed)
  if (variant === 'outlined' || variant === 'text') {
    if (color === 'amber') return '#101828';
    if (color === 'gray') return '#344054';
    if (color === 'violet' || color === 'purple') return '#8A3FFC';
    if (color === 'emerald') return '#027A48';
    if (color === 'red') return '#D92D20';
    if (color === 'slate') return '#344054';
  }
  if (color === 'amber') return '#101828';
  if (color === 'violet' || color === 'purple') return 'white';
  if (color === 'emerald') return 'white';
  if (color === 'red') return 'white';
  if (color === 'gray') return '#344054';
  if (color === 'slate') return '#344054';
  return 'white';
}

const ICON_SVGS = {
  circle: (stroke, size) => (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none"><g>
      <circle cx={size / 2} cy={size / 2} r={(size / 2 - 1)} stroke={stroke} strokeWidth={size / 10}
        strokeLinecap="round" strokeLinejoin="round" />
    </g></svg>
  ),
  ring: (stroke, size) => (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none"><g>
      <circle cx={size / 2} cy={size / 2} r={size / 2 - 1.2} stroke={stroke} strokeWidth={size / 10}
        strokeLinecap="round" strokeLinejoin="round" />
    </g></svg>
  ),
};

const HyButton = ({
  children,
  label = 'Button',
  size = 'md',
  color = 'violet',
  variant = 'solid', // solid | soft | outlined | text
  underline = false,
  icon = null,
  iconSide = 'left', // left/right
  isVisible = true,
  disabled = false,
  className = '',
  style,
  iconType = null, // "circle" or "ring" or null
  onClick,
  ...props
}) => {
  if (!isVisible) return null;

  // Defensive fallback.
  const sizeObj = BUTTON_SIZES[size] || BUTTON_SIZES.md;
  const colorClass = getButtonColor({ color, variant, disabled });
  const textClass = getTextClasses({ color, variant, disabled, underline });

  const stateClass =
    disabled ? 'cursor-not-allowed opacity-50 pointer-events-none'
      : 'transition-colors hover:brightness-90 active:scale-[.98] cursor-pointer';

  // Used for maintaining spacing/gap
  const gap = icon ? (size === 'xs' ? 'gap-1.5' : 'gap-2') : '';

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${sizeObj.wrapper} inline-flex justify-center items-center ${gap} overflow-hidden ${colorClass} ${stateClass} ${className}`}
      style={style}
      {...props}
      onClick={!disabled ? onClick : undefined}
    >
      {icon && iconSide === 'left' && (
        <span className="inline-flex items-center">
          {icon}
        </span>
      )}
      {iconType && iconSide === 'left' && (
        <span className="inline-flex items-center">
          {ICON_SVGS[iconType](getIconStroke({ color, variant, disabled }), sizeObj.iconSvg.width)}
        </span>
      )}
      <span className={`justify-start ${textClass}`}>{children || label}</span>
      {iconType && iconSide === 'right' && (
        <span className="inline-flex items-center ml-1.5">
          {ICON_SVGS[iconType](getIconStroke({ color, variant, disabled }), sizeObj.iconSvg.width)}
        </span>
      )}
      {icon && iconSide === 'right' && (
        <span className="inline-flex items-center ml-1.5">
          {icon}
        </span>
      )}
    </button>
  );
};

// Showcase grid
export const HyButtonShowcase = ({
  buttons = []
}) => (
  <section
    className="w-[2116px] h-[1528px] relative rounded-[5px] border border-violet-500 overflow-hidden"
    style={{
      display: 'block',
      position: 'relative',
      minWidth: 320,
      width: '100%',
      height: 'auto',
    }}
  >
    {buttons.map((btn, i) => (
      <div
        key={btn.key || i}
        className={`${btn.absolute ? 'absolute' : ''} ${btn.left ? `left-[${btn.left}px]` : ''} ${btn.top ? `top-[${btn.top}px]` : ''}`}
        style={{ left: btn.left, top: btn.top, position: btn.absolute ? 'absolute' : undefined }}
      >
        <HyButton {...btn} />
      </div>
    ))}
  </section>
);

export default HyButton;