import React from 'react';

const TypeColorStateDefault = ({
  isVisible = true,
  containerClassName = '',
  cardClassName = '',
  showColorBands = true,
  colorBands = [
    'bg-purple-50',
    'bg-purple-100',
    'bg-purple-200',
    'bg-purple-300',
    'bg-purple-400',
    'bg-purple-500',
    'bg-violet-600',
    'bg-violet-700',
    'bg-violet-800'
  ],
  colorBandHeight = 'h-56',
  bandWrapperClassName = '',
  showIcon = true,
  iconSvg = (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2054_7672)">
        <path d="M12.6665 2.80005H9.99984C9.64622 2.80005 9.30708 2.94052 9.05703 3.19057C8.80698 3.44062 8.6665 3.77976 8.6665 4.13338V12.1334C8.6665 12.8406 8.94746 13.5189 9.44755 14.019C9.94765 14.5191 10.6259 14.8 11.3332 14.8C12.0404 14.8 12.7187 14.5191 13.2188 14.019C13.7189 13.5189 13.9998 12.8406 13.9998 12.1334V4.13338C13.9998 3.77976 13.8594 3.44062 13.6093 3.19057C13.3593 2.94052 13.0201 2.80005 12.6665 2.80005Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.66675 5.70003L7.33341 4.3667C7.08337 4.11674 6.7443 3.97632 6.39075 3.97632C6.03719 3.97632 5.69812 4.11674 5.44808 4.3667L3.56275 6.25203C3.31278 6.50207 3.17236 6.84115 3.17236 7.1947C3.17236 7.54825 3.31278 7.88733 3.56275 8.13737L9.56275 14.1374" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.86667 9.46667H3.33333C2.97971 9.46667 2.64057 9.60715 2.39052 9.8572C2.14048 10.1072 2 10.4464 2 10.8V13.4667C2 13.8203 2.14048 14.1594 2.39052 14.4095C2.64057 14.6595 2.97971 14.8 3.33333 14.8H11.3333" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.3335 12.1334V12.1401" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_2054_7672">
          <rect width="16" height="16" fill="white" transform="translate(0 0.800049)"/>
        </clipPath>
      </defs>
    </svg>
  ),
  showTitle = true,
  title = 'Primary',
  titleClassName = '',
  showDescription = true,
  description = '9 colors',
  descriptionClassName = '',
}) => (
  isVisible && (
    <section className={`size- inline-flex flex-col justify-start items-start gap-3 overflow-hidden ${containerClassName}`}>
      <div className={`size-52 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between items-center overflow-hidden ${cardClassName}`}>
        {showColorBands && (
          <div className={`w-52 flex-1 inline-flex justify-start items-start ${bandWrapperClassName}`}>
            {colorBands.map((bandClass, idx) => (
              <div key={idx} className={`flex-1 ${colorBandHeight} ${bandClass}`} />
            ))}
          </div>
        )}
      </div>
      <footer className="self-stretch pr-3 rounded-bl-lg rounded-br-lg flex flex-col justify-start items-start gap-1">
        <div className="self-stretch inline-flex justify-start items-center gap-2">
          {showIcon && (
            <span data-svg-wrapper className="relative">
              {iconSvg}
            </span>
          )}
          {showTitle && (
            <span className={`flex-1 h-5 justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug ${titleClassName}`}>{title}</span>
          )}
        </div>
        {showDescription && (
          <div className={`self-stretch inline-flex justify-start items-center gap-1.5 ${descriptionClassName}`}>
            <span className="justify-center text-gray-500 text-xs font-normal font-['Inter'] leading-none">{description}</span>
          </div>
        )}
      </footer>
    </section>
  )
);

export default TypeColorStateDefault;