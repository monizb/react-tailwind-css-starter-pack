
import React from 'react';

const Alert = (props) => {
  const {
    title,
    bgColor = 'bg-amber-300',
    textColor = 'text-gray-900',
    iconColor = '#101828',
    outlineIconColor = '#344054',
    size = 'h-6',
    textSize = 'text-xs',
    rounded = 'rounded-md',
    hasOutlineIcon = true,
    hasInnerIcon = true,
    isVisible = true,
    className = '',
    px = 'px-2',
    py = 'py-[3px]',
    iconWidth = '12',
    iconHeight = '12',
  } = props;

  if (!isVisible) {
    return null;
  }

  return (
    <section className={`${size} ${px} ${py} ${bgColor} ${rounded} inline-flex justify-center items-center gap-1.5 overflow-hidden ${className}`}>
      {hasInnerIcon && (
        <div data-svg-wrapper className="relative">
          <svg width={iconWidth} height={iconHeight} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2041_209)">
              <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_2041_209">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
      <div className={`justify-start ${textColor} ${textSize} font-medium font-['Inter'] leading-none`}>{title}</div>
      {hasOutlineIcon && (
        <div data-svg-wrapper className="relative">
          <svg width={iconWidth} height={iconHeight} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2041_211)">
              <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z" stroke={outlineIconColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_2041_211">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
    </section>
  );
};

export default Alert;