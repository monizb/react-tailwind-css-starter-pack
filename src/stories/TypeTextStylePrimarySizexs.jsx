import React from 'react';

const TypeTextStylePrimarySizexs = ({
  isVisible = true,
  title = "Button",
  showLeftIcon = true,
  showRightIcon = true,
  leftIcon = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2041_177)">
        <path
          d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2041_177">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  rightIcon = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2041_179)">
        <path
          d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z"
          stroke="#344054"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2041_179">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  onClick = undefined,
  disabled = false,
  className = "",
  buttonType = "button",
  as = "button",
  tabIndex = 0,
  ...props
}) => {
  if (!isVisible) return null;
  const Tag = as;

  return (
    <Tag
      type={Tag === "button" ? buttonType : undefined}
      onClick={disabled ? undefined : onClick}
      tabIndex={disabled ? -1 : tabIndex}
      className={`h-6 px-2 py-[3px] bg-violet-600 rounded-md outline outline-1 outline-offset-[-1px] outline-violet-600 inline-flex justify-center items-center gap-1.5 overflow-hidden transition-colors duration-150 ${
        disabled
          ? "opacity-50 pointer-events-none"
          : "hover:bg-violet-700 cursor-pointer"
      } ${className}`}
      aria-disabled={disabled}
      {...props}
    >
      {showLeftIcon && (
        <span data-svg-wrapper className="relative">
          {leftIcon}
        </span>
      )}
      <span className="justify-start text-white text-[11px] font-medium font-['Inter'] leading-[18px]">{title}</span>
      {showRightIcon && (
        <span data-svg-wrapper className="relative">
          {rightIcon}
        </span>
      )}
    </Tag>
  );
};

export default TypeTextStylePrimarySizexs;