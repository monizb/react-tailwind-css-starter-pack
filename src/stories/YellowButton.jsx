import React from 'react';

const Alert = (props) => {
  const {
    isVisible = true,
    type = 'warning', // 'warning', 'info', 'success', 'error'
    size = 'xs', // 'xs', 'sm', 'md', 'lg'
    state = 'default', // 'default', 'hover', 'active', 'disabled'
    title,
    showIcon = true,
    iconType = 'warning', // 'warning', 'info', 'success', 'error',
    showClose = false,
    onClose,
    className = '',
  } = props;

  const typeColors = {
    warning: {
      bg: 'bg-amber-300',
      text: 'text-gray-900',
      iconStroke: '#101828',
      closeIconStroke: '#344054',
    },
    info: {
      bg: 'bg-blue-300',
      text: 'text-gray-900',
      iconStroke: '#101828',
      closeIconStroke: '#344054',
    },
    success: {
      bg: 'bg-green-300',
      text: 'text-gray-900',
      iconStroke: '#101828',
      closeIconStroke: '#344054',
    },
    error: {
      bg: 'bg-red-300',
      text: 'text-gray-900',
      iconStroke: '#101828',
      closeIconStroke: '#344054',
    },
  };

  const sizeStyles = {
    xs: {
      height: 'h-6',
      padding: 'px-2 py-[3px]',
      text: 'text-[11px]',
      leading: 'leading-[18px]',
    },
    sm: {
      height: 'h-8',
      padding: 'px-3 py-[5px]',
      text: 'text-[12px]',
      leading: 'leading-[20px]',
    },
    md: {
      height: 'h-10',
      padding: 'px-4 py-[7px]',
      text: 'text-[14px]',
      leading: 'leading-[22px]',
    },
    lg: {
      height: 'h-12',
      padding: 'px-5 py-[9px]',
      text: 'text-[16px]',
      leading: 'leading-[24px]',
    },
  };

  const currentColor = typeColors[type];
  const currentSize = sizeStyles[size];

  const renderIcon = () => {
    switch (iconType) {
      case 'warning':
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_12200)">
              <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke={currentColor.iconStroke} strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1_12200">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case 'info':
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5" stroke={currentColor.iconStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="3" r="0.5" fill={currentColor.iconStroke} />
            <path d="M6 5V9" stroke={currentColor.iconStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'success':
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6.2L4.5 9L10 3" stroke={currentColor.iconStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="6" r="5" stroke={currentColor.iconStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'error':
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L9 9M3 9L9 3" stroke={currentColor.iconStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="6" r="5" stroke={currentColor.iconStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    isVisible && (
      <section className={`rounded-md inline-flex justify-center items-center gap-1.5 overflow-hidden ${currentColor.bg} ${currentSize.height} ${currentSize.padding} ${className}`}>
        {showIcon && (
          <div data-svg-wrapper className="relative">
            {renderIcon()}
          </div>
        )}
        {title && (
          <div className={`justify-start ${currentColor.text} ${currentSize.text} font-medium font-['Inter'] ${currentSize.leading}`}>{title}</div>
        )}
        {showClose && (
          <button onClick={onClose} data-svg-wrapper className="relative">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_12202)">
                <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z" stroke={currentColor.closeIconStroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1_12202">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        )}
      </section>
    )
  );
};

export default Alert;
