import React from 'react';

const TypeTextStylePrimarySizexs = ({
  title = 'Button',
  isVisible = true,
  isDisabled = false,
  onClick,
  className = '',
  style = {},
  tabIndex = 0,
  as = "button", // can also be 'div', 'span', 'a', etc. for different usages
  ...props
}) => {
  if (!isVisible) return null;

  const Tag = as;

  return (
    <Tag
      type={as === "button" ? "button" : undefined}
      className={`h-6 px-2 py-[3px] bg-violet-600 rounded-md outline outline-1 outline-offset-[-1px] outline-violet-600 inline-flex justify-center items-center gap-1.5 overflow-hidden
        transition
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-violet-700 cursor-pointer"}
        ${className}
      `}
      style={style}
      disabled={as === "button" ? isDisabled : undefined}
      tabIndex={isDisabled ? -1 : tabIndex}
      aria-disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      {...props}
    >
      <span className="justify-start text-white text-[11px] font-medium font-['Inter'] leading-[18px]">{title}</span>
    </Tag>
  );
};

export default TypeTextStylePrimarySizexs;