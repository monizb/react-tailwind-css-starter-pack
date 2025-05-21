import React, { useState } from 'react';

const ICONS = {
  purpleCircle: {
    svg: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <g>
          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#742AE9" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    ),
  },
  grayCircle: {
    svg: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <g>
          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#101828" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    ),
  },
  filledWhiteCircle: {
    svg: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <g>
          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    ),
  },
}

const Checkmarks = {
  grayCheck: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <g>
        <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  ),
  whiteCheck: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <g>
        <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  ),
};

const getColorClass = (color, variant) => {
  if (variant === 'outline') {
    return {
      bg: `bg-white`,
      text: `text-${color}-600`,
      outline: `outline outline-1 outline-${color}-200`,
    };
  }
  if (variant === 'flat') {
    return {
      bg: `bg-${color}-600`,
      text: 'text-white',
      outline: `outline outline-1 outline-${color}-600`,
    };
  }
  if (variant === 'solid') {
    return {
      bg: `bg-${color}-700`,
      text: 'text-white',
      outline: `outline outline-1 outline-${color}-700`,
    };
  }
  if (variant === 'subtle') {
    return {
      bg: `bg-${color}-100`,
      text: `text-${color}-700`,
      outline: `outline outline-1 outline-${color}-300`,
    };
  }
  if (variant === 'muted') {
    return {
      bg: `bg-${color}-200`,
      text: 'text-white',
      outline: `outline outline-1 outline-${color}-200`,
    };
  }
  if (variant === 'ghost') {
    return {
      bg: 'bg-transparent',
      text: `text-${color}-600`,
      outline: '',
    };
  }
  if (variant === 'gray') {
    return {
      bg: 'bg-gray-100',
      text: 'text-gray-900',
      outline: 'outline outline-1 outline-gray-200',
    };
  }
  if (variant === 'disabled') {
    return {
      bg: 'bg-gray-300',
      text: 'text-gray-400',
      outline: 'outline outline-1 outline-gray-300',
    };
  }
  return {
    bg: '',
    text: '',
    outline: '',
  };
};

const sizeMap = {
  xs: {
    height: 'h-6', px: 'px-2', py: 'py-[3px]', text: 'text-[11px]', rounded: 'rounded-md',
    icon: 12, gap: 'gap-1.5'
  },
  sm: {
    height: 'h-7', px: 'px-2', py: 'py-[3px]', text: 'text-xs', rounded: 'rounded-md',
    icon: 12, gap: 'gap-1.5'
  },
  md: {
    height: 'h-8', px: 'px-2.5', py: 'py-[3px]', text: 'text-sm', rounded: 'rounded-lg',
    icon: 16, gap: 'gap-1.5'
  },
  lg: {
    height: 'h-10', px: 'px-3', py: 'py-[3px]', text: 'text-base', rounded: 'rounded-[10px]',
    icon: 20, gap: 'gap-1.5'
  },
  xl: {
    height: 'h-12', px: 'px-3.5', py: 'py-[3px]', text: 'text-lg', rounded: 'rounded-xl',
    icon: 24, gap: 'gap-1.5'
  }
};

const HyButton = ({
  left,
  top,
  width,
  height,
  variant = "flat",
  color = "violet",
  title = "Button",
  leftIcon = 'circle',
  rightIcon = 'check',
  showLeftIcon = true,
  showRightIcon = true,
  isVisible = true,
  disabled = false,
  size = "xs",
  customClass = "",
  onClick = () => {},
  hideBorder = false,
  underline = false,
  ...props
}) => {
  if (!isVisible) return null;

  const colorClass = getColorClass(color, variant);
  const sz = sizeMap[size] || sizeMap.xs;
  const textClass = typeof colorClass.text === "string" ? colorClass.text : "";
  const borderClass = hideBorder ? "" : colorClass.outline;
  const baseStyle =
    `${sz.height} ${sz.px} ${sz.py} absolute ${colorClass.bg} ${sz.rounded} inline-flex justify-center items-center ${sz.gap} overflow-hidden ${borderClass} ${customClass}`;
  const style = {};
  if (left) style.left = left;
  if (top) style.top = top;
  if (width) style.width = width;
  if (height) style.height = height;

  const CursorClass = !disabled ? "cursor-pointer" : "cursor-not-allowed opacity-60";
  const hoverClass = !disabled ? "hover:brightness-95" : "";

  // ICONS
  let leftSvg = null;
  let rightSvg = null;
  if (showLeftIcon) {
    leftSvg = ICONS.purpleCircle.svg;
  }
  if (showRightIcon) {
    rightSvg = Checkmarks.grayCheck;
  }

  return (
    <button
      type="button"
      style={style}
      className={`group ${baseStyle} ${CursorClass} ${hoverClass}`}
      onClick={onClick}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      {...props}
    >
      {showLeftIcon && <span data-svg-wrapper className="relative">{leftSvg}</span>}
      <span
        className={
          `justify-start font-medium font-['Inter'] ${textClass} ${underline ? "underline" : ""}`
        }
        style={{
          lineHeight:
            size === "xs"
              ? "18px"
              : size === "sm"
              ? "18px"
              : size === "md"
              ? "22px"
              : size === "lg"
              ? "26px"
              : "30px"
        }}
      >
        {title}
      </span>
      {showRightIcon && <span data-svg-wrapper className="relative">{rightSvg}</span>}
    </button>
  );
};

const variantsList = [
  { title: "Primary Flat", color: "violet", variant: "flat" },
  { title: "Primary Outline", color: "violet", variant: "outline" },
  { title: "Primary Subtle", color: "violet", variant: "subtle" },
  { title: "Primary Solid", color: "violet", variant: "solid" },
  { title: "Primary Ghost", color: "violet", variant: "ghost" },
  { title: "Disabled", color: "gray", variant: "disabled", disabled: true },
];

const allSizes = ["xs", "sm", "md", "lg", "xl"];

const HyButtonPanel = ({
  showAllVariants = true,
  showGrid = false
}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <main className="relative w-full min-h-[800px] bg-gray-50 rounded-[5px] border border-violet-500 overflow-auto">
      {/* Button Demos */}
      <section aria-label="hy-buttons-sample" className="flex flex-wrap p-12 gap-8">
        {/* Base variants */}
        {showAllVariants && variantsList.map((v, i) =>
          allSizes.map((sz) => (
            <HyButton
              key={v.title + sz}
              title={`${v.title} (${sz})`}
              color={v.color}
              variant={v.variant}
              size={sz}
              onClick={() => setClicked(!clicked)}
              underline={sz === "lg" || sz === "xl"}
              disabled={v.disabled}
              left={undefined} top={undefined}
              style={{position: "static"}}
              customClass="transition"
            />
          ))
        )}
        {/* Minimal icon only (circle) */}
        <HyButton
          title=""
          size="xs"
          variant="flat"
          color="violet"
          showLeftIcon={true}
          showRightIcon={false}
          aria-label="Circle Only"
          onClick={() => setClicked(!clicked)}
        />
        {/* Circle with check */}
        <HyButton
          title=""
          size="xs"
          variant="flat"
          color="violet"
          showLeftIcon={true}
          showRightIcon={true}
          aria-label="Circle and Check"
        />
      </section>
      {/* Example with disabled/hidden */}
      <section className="p-12">
        <HyButton
          title="This is hidden"
          isVisible={false}
        />
      </section>
      {/* Grid Example if enabled */}
      {showGrid && (
        <section className="p-12">
          <header className="mb-3 font-bold text-lg">All variants as grid</header>
          <div className="grid grid-cols-6 gap-6">
            {variantsList.map((v) =>
              allSizes.map((sz) => (
                <HyButton
                  key={v.title + sz + "grid"}
                  title={v.title}
                  variant={v.variant}
                  color={v.color}
                  size={sz}
                />
              ))
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export { HyButton, HyButtonPanel };
export default HyButton;