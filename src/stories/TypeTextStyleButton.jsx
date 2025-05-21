import React from 'react';

const ICON_VARIANTS = {
  success: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2041_537)">
        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_2041_537">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  warning: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_warning)">
        <circle cx="6" cy="6" r="5" stroke="yellow" strokeWidth="2" fill="none"/>
      </g>
      <defs>
        <clipPath id="clip0_warning">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  error: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_error)">
        <circle cx="6" cy="6" r="5" stroke="red" strokeWidth="2" fill="none"/>
      </g>
      <defs>
        <clipPath id="clip0_error">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
};

const END_ICON_VARIANTS = {
  success: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2041_539)">
        <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_2041_539">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  warning: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="4" stroke="#facc15" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
  error: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="4" stroke="#f87171" strokeWidth="1.2" fill="none"/>
    </svg>
  )
};

const SIZE_VARIANTS = {
  sm: "h-7 px-2 py-[3px] text-xs",
  md: "h-8 px-3 py-1 text-sm",
  lg: "h-10 px-4 py-2 text-base",
  xl: "h-12 px-6 py-3 text-lg"
};

const BG_VARIANTS = {
  success: "bg-emerald-800",
  warning: "bg-yellow-600",
  error: "bg-red-600"
};

const TEXT_COLOR_VARIANTS = {
  success: "text-white",
  warning: "text-white",
  error: "text-white"
};

const TypeTextStyleButton = ({
  title = "Button",
  startIcon = true,
  endIcon = true,
  isVisible = true,
  onClick,
  variant = "success",
  size = "sm",
  disabled = false,
  className = "",
  ...props
}) => {
  if (!isVisible) return null;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
      className={`
        ${SIZE_VARIANTS[size]}
        ${BG_VARIANTS[variant]}
        rounded-md inline-flex justify-center items-center gap-1.5 overflow-hidden
        font-['Inter'] font-medium leading-tight
        ${TEXT_COLOR_VARIANTS[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${!disabled && 'hover:bg-emerald-700 active:bg-emerald-900 transition-colors'}
        ${className}
      `}
      {...props}
    >
      {startIcon && (
        <span data-svg-wrapper className="relative">
          {ICON_VARIANTS[variant]}
        </span>
      )}
      <span className={`justify-start ${TEXT_COLOR_VARIANTS[variant]} select-none pointer-events-none`}>
        {title}
      </span>
      {endIcon && (
        <span data-svg-wrapper className="relative">
          {END_ICON_VARIANTS[variant]}
        </span>
      )}
    </button>
  );
};

export default TypeTextStyleButton;