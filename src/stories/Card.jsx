import React, { useState } from 'react';

const ColorCard = ({
  className = '',
  boxClassName = '',
  colorShades = [
    'bg-purple-50',
    'bg-purple-100',
    'bg-purple-200',
    'bg-purple-300',
    'bg-purple-400',
    'bg-purple-500',
    'bg-violet-600',
    'bg-violet-700',
    'bg-violet-800',
  ],
  icon = (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2054_7672)">
        <path d="M12.6665 2.80005H9.99984C9.64622 2.80005 9.30708 2.94052 9.05703 3.19057C8.80698 3.44062 8.6665 3.77976 8.6665 4.13338V12.1334C8.6665 12.8406 8.94746 13.5189 9.44755 14.019C9.94765 14.5191 10.6259 14.8 11.3332 14.8C12.0404 14.8 12.7187 14.5191 13.2188 14.019C13.7189 13.5189 13.9998 12.8406 13.9998 12.1334V4.13338C13.9998 3.77976 13.8594 3.44062 13.6093 3.19057C13.3593 2.94052 13.0201 2.80005 12.6665 2.80005Z"
          stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.66675 5.70003L7.33341 4.3667C7.08337 4.11674 6.7443 3.97632 6.39075 3.97632C6.03719 3.97632 5.69812 4.11674 5.44808 4.3667L3.56275 6.25203C3.31278 6.50207 3.17236 6.84115 3.17236 7.1947C3.17236 7.54825 3.31278 7.88733 3.56275 8.13737L9.56275 14.1374"
          stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.86667 9.46667H3.33333C2.97971 9.46667 2.64057 9.60715 2.39052 9.8572C2.14048 10.1072 2 10.4464 2 10.8V13.4667C2 13.8203 2.14048 14.1594 2.39052 14.4095C2.64057 14.6595 2.97971 14.8 3.33333 14.8H11.3333"
          stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.3335 12.1334V12.1401"
          stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_2054_7672">
          <rect width="16" height="16" fill="white" transform="translate(0 0.800049)" />
        </clipPath>
      </defs>
    </svg>
  ),
  title = 'Primary',
  subtitle = '9 colors',
  isVisible = true,
  showIcon = true,
  showSubtitle = true,
  widthClass = 'size-[211.20px]',
  roundedClass = 'rounded-2xl',
  ...props
}) => {
  if (!isVisible) return null;
  return (
    <section className={`size- inline-flex flex-col justify-start items-start gap-3 overflow-hidden ${className}`} {...props}>
      <div className={`${widthClass} bg-white ${roundedClass} outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between items-center overflow-hidden ${boxClassName}`}>
        <div className="w-[211.20px] flex-1 inline-flex justify-start items-start">
          {colorShades.map((shade, idx) => (
            <div key={idx} className={`flex-1 h-[217px] ${shade}`} />
          ))}
        </div>
      </div>
      <footer className="self-stretch pr-3 rounded-bl-lg rounded-br-lg flex flex-col justify-start items-start gap-1">
        <header className="self-stretch inline-flex justify-start items-center gap-2">
          {showIcon &&
            <span data-svg-wrapper className="relative">{icon}</span>
          }
          <span className="flex-1 h-5 justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug">{title}</span>
        </header>
        {showSubtitle && (
          <div className="self-stretch inline-flex justify-start items-center gap-1.5">
            <span className="justify-center text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">{subtitle}</span>
          </div>
        )}
      </footer>
    </section>
  );
};

const ColorCardSelected = ({
  isSelected = true,
  isVisible = true,
  widthClass = 'size-[211.20px]',
  boxClassName = 'rounded-xl',
  overlayRounded = 'rounded-2xl',
  overlayOutline = 'outline outline-2 outline-gray-500',
  overlayBorder = 'border-2 border-gray-200',
  overlayBg = 'bg-gray-900 opacity-80',
  showCheckbox = true,
  checked = false,
  onCheckboxChange = () => { },
  showIconButton = true,
  iconButtonOnClick = () => { },
  iconButtonIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2085_1182)">
        <path d="M6.4165 6.99996C6.4165 7.15467 6.47796 7.30304 6.58736 7.41244C6.69675 7.52183 6.84513 7.58329 6.99984 7.58329C7.15455 7.58329 7.30292 7.52183 7.41232 7.41244C7.52171 7.30304 7.58317 7.15467 7.58317 6.99996C7.58317 6.84525 7.52171 6.69688 7.41232 6.58748C7.30292 6.47808 7.15455 6.41663 6.99984 6.41663C6.84513 6.41663 6.69675 6.47808 6.58736 6.58748C6.47796 6.69688 6.4165 6.84525 6.4165 6.99996Z"
          fill="#344054" stroke="#101828" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.4165 11.0833C6.4165 11.238 6.47796 11.3864 6.58736 11.4958C6.69675 11.6052 6.84513 11.6667 6.99984 11.6667C7.15455 11.6667 7.30292 11.6052 7.41232 11.4958C7.52171 11.3864 7.58317 11.238 7.58317 11.0833C7.58317 10.9286 7.52171 10.7803 7.41232 10.6709C7.30292 10.5615 7.15455 10.5 6.99984 10.5C6.84513 10.5 6.69675 10.5615 6.58736 10.6709C6.47796 10.7803 6.4165 10.9286 6.4165 11.0833Z"
          fill="#344054" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.4165 2.91671C6.4165 3.07142 6.47796 3.21979 6.58736 3.32919C6.69675 3.43858 6.84513 3.50004 6.99984 3.50004C7.15455 3.50004 7.30292 3.43858 7.41232 3.32919C7.52171 3.21979 7.58317 3.07142 7.58317 2.91671C7.58317 2.762 7.52171 2.61362 7.41232 2.50423C7.30292 2.39483 7.15455 2.33337 6.99984 2.33337C6.84513 2.33337 6.69675 2.39483 6.58736 2.50423C6.47796 2.61362 6.4165 2.762 6.4165 2.91671Z"
          fill="#344054" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_2085_1182">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  checkboxIcon = (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.799805" y="1" width="16" height="16" rx="4" fill="white" />
      <rect x="0.799805" y="1" width="16" height="16" rx="4" stroke="#EAECF0" />
    </svg>
  ),
  colorShades = [
    'bg-purple-50',
    'bg-purple-100',
    'bg-purple-200',
    'bg-purple-300',
    'bg-purple-400',
    'bg-purple-500',
    'bg-violet-600',
    'bg-violet-700',
    'bg-violet-800',
  ],
  icon = (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2054_7693)">
        <path d="M13.4663 2.80005H10.7996C10.446 2.80005 10.1069 2.94052 9.85683 3.19057C9.60678 3.44062 9.46631 3.77976 9.46631 4.13338V12.1334C9.46631 12.8406 9.74726 13.5189 10.2474 14.019C10.7475 14.5191 11.4257 14.8 12.133 14.8C12.8402 14.8 13.5185 14.5191 14.0186 14.019C14.5187 13.5189 14.7996 12.8406 14.7996 12.1334V4.13338C14.7996 3.77976 14.6592 3.44062 14.4091 3.19057C14.1591 2.94052 13.8199 2.80005 13.4663 2.80005Z"
          stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.46655 5.70003L8.13322 4.3667C7.88318 4.11674 7.5441 3.97632 7.19055 3.97632C6.837 3.97632 6.49792 4.11674 6.24788 4.3667L4.36255 6.25203C4.11259 6.50207 3.97217 6.84115 3.97217 7.1947C3.97217 7.54825 4.11259 7.88733 4.36255 8.13737L10.3625 14.1374"
          stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.66647 9.46667H4.13314C3.77952 9.46667 3.44038 9.60715 3.19033 9.8572C2.94028 10.1072 2.7998 10.4464 2.7998 10.8V13.4667C2.7998 13.8203 2.94028 14.1594 3.19033 14.4095C3.44038 14.6595 3.77952 14.8 4.13314 14.8H12.1331"
          stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.1333 12.1334V12.1401"
          stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_2054_7693">
          <rect width="16" height="16" fill="white" transform="translate(0.799805 0.800049)" />
        </clipPath>
      </defs>
    </svg>
  ),
  title = 'Primary',
  subtitle = '9 colors',
  showIcon = true,
  showSubtitle = true,
  ...props
}) => {
  const [checkboxChecked, setCheckboxChecked] = useState(checked);
  if (!isVisible) return null;

  return (
    <section className={`size- relative inline-flex flex-col justify-start items-start gap-3`}>
      {/* <div className={`${widthClass} bg-white ${boxClassName} outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between items-center overflow-hidden`}>
        <div className="w-[211.20px] flex-1 inline-flex justify-start items-start">
          {colorShades.map((shade, idx) => (
            <div key={idx} className={`flex-1 h-[217px] ${shade}`} />
          ))}
        </div>
      </div> */}

      {isSelected && (
        <div className={`${widthClass} relative group`}>
  <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between items-center overflow-hidden">
    <div className="w-[211.20px] flex-1 inline-flex justify-start items-start">
      {colorShades.map((shade, idx) => (
        <div key={idx} className={`flex-1 h-[217px] ${shade}`} />
      ))}
    </div>
  </div>

  {/* Hover Overlay */}
  <div className={`absolute inset-0 z-10 ${overlayRounded} bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
    <div className="flex justify-between items-start p-3 h-full">
      {/* Left: Checkbox */}
      {showCheckbox && (
        <button
          type="button"
          className="relative z-20"
          aria-pressed={checkboxChecked}
          aria-label="Select"
          onClick={() => {
            setCheckboxChecked(!checkboxChecked);
            onCheckboxChange(!checkboxChecked);
          }}
        >
          {checkboxIcon}
        </button>
      )}
      
      {/* Right: 3-dot icon */}
      {showIconButton && (
        <button
          type="button"
          className="size-7 p-1.5 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer z-20"
          onClick={iconButtonOnClick}
          aria-label="More options"
        >
          <span data-svg-wrapper className="relative">{iconButtonIcon}</span>
        </button>
      )}
    </div>
  </div>
</div>
      )}
            <footer className="self-stretch pr-3 rounded-bl-lg rounded-br-lg flex flex-col justify-start items-start gap-1">
        <header className="self-stretch inline-flex justify-start items-center gap-2">
          {showIcon &&
            <span data-svg-wrapper className="relative">{icon}</span>
          }
          <span className="flex-1 h-5 justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug">{title}</span>
        </header>
        {showSubtitle && (
          <div className="self-stretch inline-flex justify-start items-center gap-1.5">
            <span className="justify-center text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">{subtitle}</span>
          </div>
        )}
      </footer>
    </section>
  );
};

export { ColorCard, ColorCardSelected };