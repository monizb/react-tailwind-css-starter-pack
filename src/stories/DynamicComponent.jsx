import React from 'react';

const DynamicButton = (props) => {
  const {
    buttonText,
    iconVisible = true,
    success = true,
    size = 'xs',
    isDisabled = false,
    onClick,
    customClass = '',
    textColor = 'white',
    iconColor = '#344054',
    isLoading = false,
  } = props;

  const buttonHeight = size === 'xs' ? 'h-6' : 'h-8'; // Example of dynamic sizing

  const bgColor = success ? 'bg-emerald-700' : 'bg-red-700'; // Example of dynamic color

  return (
    <button
      className={`px-2 py-[3px] rounded-md inline-flex justify-center items-center gap-1.5 overflow-hidden ${buttonHeight} ${bgColor} ${customClass} ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {iconVisible && success && !isLoading && (
        <div data-svg-wrapper className="relative">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_12192)">
              <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1_12192">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
      {isLoading && (
          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
      )}
      <span className={`justify-start text-${textColor} text-[11px] font-medium font-['Inter'] leading-[18px]`}>
        {buttonText}
      </span>
      {iconVisible && !success && !isLoading && (
        <div data-svg-wrapper className="relative">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_12194)">
              <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1_12194">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
    </button>
  );
};

export default DynamicButton;