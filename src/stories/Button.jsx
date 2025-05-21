import React, { useState } from "react";

const iconMappings = {
  violetFilled: {
    leftIcon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <g clipPath="url(#clip0)">
          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="12" height="12" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
    rightIcon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <g clipPath="url(#clip1)">
          <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip1">
            <rect width="12" height="12" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    )
  },
  // Add similar mappings here for other icon styles (use content from your static code)
};

const HyButton = ({
  label = "Button",
  size = "md", // xs, sm, md, lg, xl, 2xl
  color = "violet", // violet, white, emerald, red, amber, purple, slate, gray, etc.
  filled = true, // true=filled/bg, false=border/outline/text
  rounded = "md", // md, lg, xl, [10px], [5px]
  withRightIcon = true,
  withLeftIcon = true,
  isLoading = false,
  isVisible = true,
  outline = false,
  className = "",
  onClick,
  type = "button",
  style,
  icon = "violetFilled",
  as = "button",
  disabled = false,
  ...rest
}) => {
  // Button sizes
  const sizeMappings = {
    xs: "h-6 px-2 text-[11px] leading-[18px]",
    sm: "h-7 px-2 text-xs leading-tight",
    md: "h-8 px-2.5 text-sm leading-snug",
    lg: "h-10 px-3 text-base leading-relaxed",
    xl: "h-12 px-3.5 text-lg leading-[30px]",
    "2xl": "h-12 px-5 text-xl leading-[36px]", // as example
  };

  // Backgrounds
  let bg = "";
  if (filled) {
    switch (color) {
      case "violet": bg = "bg-violet-600 text-white outline outline-1 outline-offset-[-1px] outline-violet-600"; break;
      case "emerald": bg = "bg-emerald-700 text-white outline outline-1 outline-offset-[-1px] outline-emerald-700"; break;
      case "red": bg = "bg-red-600 text-white outline outline-1 outline-offset-[-1px] outline-red-600"; break;
      case "amber": bg = "bg-amber-300 text-gray-900 outline outline-1 outline-offset-[-1px] outline-amber-300"; break;
      case "white": bg = "bg-white text-gray-900 outline outline-1 outline-offset-[-1px] outline-gray-200"; break;
      case "gray": bg = "bg-gray-100 text-gray-900 outline outline-1 outline-offset-[-1px] outline-gray-500"; break;
      case "purple": bg = "bg-purple-100 text-violet-700 outline outline-1 outline-offset-[-1px] outline-purple-100"; break;
      case "emeraldLight": bg = "bg-emerald-100 text-emerald-800 outline outline-1 outline-offset-[-1px] outline-emerald-300"; break;
      case "emeraldSuperLight": bg = "bg-emerald-200 text-white outline outline-1 outline-offset-[-1px] outline-emerald-200"; break;
      case "redLight": bg = "bg-red-100 text-red-800 outline outline-1 outline-offset-[-1px] outline-red-300"; break;
      case "amberLight": bg = "bg-amber-100 text-gray-900 outline outline-1 outline-offset-[-1px] outline-amber-300"; break;
      case "gray300": bg = "bg-gray-300 text-gray-400 outline outline-1 outline-offset-[-1px] outline-gray-300"; break;
      default: bg = ""; break;
    }
  } else {
    // Outline/text variant (icon mapping could be different)
    bg = "bg-white text-violet-600";
  }

  // Rounding classes
  let rounding = "";
  if (rounded === "md") rounding = "rounded-md";
  else if (rounded === "lg") rounding = "rounded-lg";
  else if (rounded === "xl") rounding = "rounded-xl";
  else if (rounded === "full") rounding = "rounded-full";
  else if (typeof rounded === "string" && rounded.startsWith("["))
    rounding = `rounded-${rounded.replace(/\[|\]|px/g, "")}`;
  else rounding = rounded;

  // Determine icon
  const iconSet = iconMappings[icon] || iconMappings["violetFilled"];

  // Cursor pointer unless disabled/readonly/loader
  let cursor = isLoading || disabled ? "cursor-not-allowed" : "cursor-pointer";
  let opacity = disabled ? "opacity-60" : "";

  // Chose "button" vs "a"/"div"/etc. customizing as needed by use
  const Element = as;

  return (
    isVisible && (
      <Element
        {...rest}
        type={as === "button" ? type : undefined}
        className={[
          "inline-flex justify-center items-center gap-1.5 overflow-hidden font-medium font-['Inter']",
          sizeMappings[size] || sizeMappings["md"],
          bg,
          rounding,
          cursor,
          opacity,
          className,
        ].filter(Boolean).join(" ")}
        style={style}
        disabled={disabled}
        onClick={!disabled && !isLoading ? onClick : undefined}
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-busy={isLoading}
        role="button"
      >
        {withLeftIcon && <span data-svg-wrapper className="relative">{iconSet.leftIcon}</span>}

        <span className="justify-start">
          {isLoading ? (
            <span className="inline-block h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
          ) : (
            label
          )}
        </span>

        {withRightIcon && <span data-svg-wrapper className="relative">{iconSet.rightIcon}</span>}
      </Element>
    )
  );
};

// Variants
const HyButtonIcon = ({
  icon = "violetFilled",
  size = "6", // 6, 7, 8, 10, 12
  bg = "bg-violet-600",
  outline = "outline outline-1 outline-offset-[-1px] outline-violet-600",
  rounded = "rounded-md",
  className = "",
  style,
  onClick,
  isVisible = true,
  disabled = false,
  ...rest
}) => {
  const sizes = {
    "6": "size-6 p-1.5",
    "7": "size-7 p-1.5",
    "8": "size-8 p-1.5",
    "10": "size-10 p-1.5",
    "12": "size-12 p-1.5",
  };
  const iconSet = iconMappings[icon] || iconMappings["violetFilled"];
  let cursor = disabled ? "cursor-not-allowed" : "cursor-pointer";
  let opacity = disabled ? "opacity-60" : "";

  return (
    isVisible && (
      <button
        {...rest}
        className={[
          sizes[size] || sizes["6"],
          bg,
          outline,
          rounded,
          "inline-flex justify-center items-center gap-2 overflow-hidden",
          cursor,
          opacity,
          className,
        ].filter(Boolean).join(" ")}
        style={style}
        disabled={disabled}
        onClick={!disabled ? onClick : undefined}
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        role="button"
      >
        <span data-svg-wrapper className="relative">{iconSet.leftIcon}</span>
      </button>
    )
  );
};

export { HyButtonIcon };
export default HyButton;