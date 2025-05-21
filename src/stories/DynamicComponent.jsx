
import React from 'react';

const DynamicComponent = (props) => {
  const {
    title,
    iconLeft,
    iconRight,
    isVisible = true,
    bgColor = 'Light-Yellow-_hy-fill-yellow-300',
    textColor = 'gray-900',
    textSize = 'xs',
    fontWeight = 'medium',
    rounded = 'md',
    leftIconOutlineColor = 'gray-900',
    rightIconOutlineColor = 'slate-700',
    onClick,
    isDisabled = false,
  } = props;

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`h-6 px-2 py-[3px] bg-${bgColor} rounded-${rounded} inline-flex justify-center items-center gap-1.5 overflow-hidden ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {iconLeft && (
        <div className="w-3 h-3 relative overflow-hidden">
          <div className={`w-2.5 h-2.5 left-[1px] top-[1px] absolute outline outline-1 outline-offset-[-0.50px] outline-${leftIconOutlineColor}`} />
        </div>
      )}
      <div className={`justify-start text-${textColor} text-${textSize} font-${fontWeight} font-['Inter'] leading-none`}>
        {title}
      </div>
      {iconRight && (
        <div className="w-3 h-3 relative overflow-hidden">
          <div className="w-3 h-3 left-0 top-0 absolute" />
          <div className={`w-2 h-2 left-[1.50px] top-[1.50px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-${rightIconOutlineColor}`} />
        </div>
      )}
    </button>
  );
};

export default DynamicComponent;
