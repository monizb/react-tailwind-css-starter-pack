import React from 'react';

const HyCard = ({
  // Card container
  className = '',
  style = {},

  // Card main wrapper visibility
  isVisible = true,
  dataAttributes = {},

  // Main image
  showMainImage = true,
  mainImageSrc = 'https://placehold.co/247x92',
  mainImageAlt = '',
  mainImageClassName = 'self-stretch h-24 rounded-xl',

  // Absolute SVG badge (avatar/brand logo on card image)
  showCardSvgBadge = true,
  cardSvgBadge = (
    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="63" height="63" rx="31.5" fill="white"/>
      <rect x="1.5" y="1.5" width="63" height="63" rx="31.5" stroke="#F2F4F7" strokeWidth="3"/>
      <rect x="10.7358" y="13" width="44.5283" height="40" fill="url(#pattern0_2087_2539)"/>
      <defs>
        <pattern id="pattern0_2087_2539" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_2087_2539" transform="matrix(0.000706215 0 0 0.000786163 -0.169492 -0.264151)" />
        </pattern>
        <image id="image0_2087_2539" width="1920" height="1920" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAeACAYAAAAvokrGAAAKrmlDQ1..."/>
      </defs>
    </svg>
  ),
  cardSvgBadgeClassName = 'left-[20px] top-[60px] absolute',

  // Card title, subtitle
  showHeader = true,
  title = 'Statics Ads',
  titleClassName = 'self-stretch justify-center text-gray-900 text-sm font-medium font-[\'Inter\'] leading-snug',
  subTitle = 'Created 3 months ago',
  subTitleClassName = 'justify-center text-gray-500 text-xs font-normal font-[\'Inter\'] leading-none',

  // Card avatars
  showAvatars = true,
  cardAvatars = [
    {
      show: true,
      avatarSvg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" fill="url(#pattern0_2087_2561)" />
          <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" stroke="white" strokeWidth="1.5" />
          <defs>
            <pattern id="pattern0_2087_2561" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_2087_2561" transform="scale(0.0015625)" />
            </pattern>
            <image id="image0_2087_2561" width="640" height="640" preserveAspectRatio="none" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJR..."/>
          </defs>
        </svg>
      ),
      className: "w-5 h-6 relative"
    },
    {
      show: true,
      avatarSvg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" fill="url(#pattern0_2087_2563)" />
          <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" stroke="white" strokeWidth="1.5" />
          <defs>
            <pattern id="pattern0_2087_2563" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_2087_2563" transform="scale(0.0015625)" />
            </pattern>
            <image id="image0_2087_2563" width="640" height="640" preserveAspectRatio="none" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJR..." />
          </defs>
        </svg>
      ),
      className: "w-5 h-6 relative"
    },
    {
      show: true,
      avatarSvg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" fill="url(#pattern0_2087_2565)" />
          <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" stroke="white" strokeWidth="1.5" />
          <defs>
            <pattern id="pattern0_2087_2565" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_2087_2565" transform="scale(0.0015625)" />
            </pattern>
            <image id="image0_2087_2565" width="640" height="640" preserveAspectRatio="none" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJR..." />
          </defs>
        </svg>
      ),
      className: "w-5 h-6 relative"
    }
  ],
  // "+N" avatar
  showExtraAvatar = true,
  extraAvatarCount = 5,
  extraAvatarClass = "size-6 relative bg-purple-100 rounded-[200px] outline outline-2 outline-white",
  extraAvatarTextClass = "left-[7px] top-[9px] absolute text-center justify-start text-violet-700 text-[8px] font-medium font-['Inter'] leading-none",
  extraAvatarText = "",
  // for backward compatibility:
  extraAvatarLabel = null,

  // Accessibility
  mainImageAriaLabel = '',

  // Outer card (for optionally hiding card)
  containerTag: Container = 'section',
}) => {
  if (!isVisible) return null;
  return (
    <Container
      className={`w-64 inline-flex flex-col justify-start items-start ${className}`}
      style={style}
      {...dataAttributes}
    >
      <article className="self-stretch px-1 pt-1 pb-4 relative bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-start gap-4 overflow-hidden">
        {showMainImage && (
          <img
            className={mainImageClassName}
            src={mainImageSrc}
            alt={mainImageAlt}
            aria-label={mainImageAriaLabel}
          />
        )}
        {showCardSvgBadge && (
          <div data-svg-wrapper className={cardSvgBadgeClassName}>
            {cardSvgBadge}
          </div>
        )}
        <header className="self-stretch px-4 pt-5 rounded-bl-lg rounded-br-lg outline outline-1 outline-offset-[-1px] flex flex-col justify-start items-start gap-1">
          {showHeader && (
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className={titleClassName}>{title}</div>
              <div className={subTitleClassName}>{subTitle}</div>
            </div>
          )}
        </header>
        <footer className="self-stretch px-4 inline-flex justify-start items-start gap-2">
          <div className="size- flex justify-start items-start">
            {showAvatars &&
              cardAvatars.map(
                (avat, i) =>
                  avat.show && (
                    <div className={avat.className} key={i}>
                      <div data-svg-wrapper data-placeholder="False" data-size="xs" data-state="Default" data-status-icon="False" data-text="False" className="left-0 top-0 absolute">
                        {avat.avatarSvg}
                      </div>
                    </div>
                  )
              )}
            {showExtraAvatar && (
              <div className={extraAvatarClass}>
                <div className={extraAvatarTextClass}>
                  {extraAvatarLabel || `+${extraAvatarCount}`}
                </div>
              </div>
            )}
          </div>
        </footer>
      </article>
    </Container>
  );
};

export default HyCard;