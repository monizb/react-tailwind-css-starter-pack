import React from 'react';

const FrameCard = ({
  isVisible = true,
  imageSrc = 'https://placehold.co/434x356',
  imageAlt = 'Preview image',
  showTopLabel = true,
  topLabel = 'Figma to storybook',
  showPreviewLabel = true,
  previewLabel = 'Preview',
  showIcon = true,
  icon = (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11.5842" cy="11.2261" r="10.7006" fill="#FDFDFD" stroke="#E6E6E6"/>
    </svg>
  ),
  onPublish = () => {},
  showPublishButton = true,
  publishButtonText = 'Publish to storybook',
  isPublishDisabled = false,
  cardClassName = '',
  imageClassName = '',
  topLabelClassName = '',
  previewLabelClassName = '',
  iconClassName = '',
  publishButtonClassName = '',
  children,
}) => {
  if (!isVisible) return null;
  return (
    <section className={`w-[471px] h-[742px] relative bg-white rounded-3xl overflow-hidden ${cardClassName}`}>
      {/* Preview Image */}
      <img
        className={`w-[433.92px] h-[356.34px] left-[18.54px] top-[98.75px] absolute ${imageClassName}`}
        src={imageSrc}
        alt={imageAlt}
      />
      {/* Preview Label */}
      {showPreviewLabel && (
        <span
          className={`w-[422.23px] left-[24.38px] top-[72.79px] absolute justify-start text-black text-base font-medium font-['Inter'] leading-[18px] ${previewLabelClassName}`}
        >
          {previewLabel}
        </span>
      )}
      {/* Top Section Label */}
      {showTopLabel && (
        <header
          className={`w-[422.23px] left-[53.46px] top-[16.23px] absolute justify-start text-black text-base font-medium font-['Inter'] leading-[18px] ${topLabelClassName}`}
        >
          {topLabel}
        </header>
      )}
      {/* Left Icon */}
      {showIcon && (
        <span className={`left-[24.38px] top-[14.03px] absolute ${iconClassName}`}>
          {icon}
        </span>
      )}
      {/* Divider */}
      <hr className="w-[471px] h-0 left-0 top-[47.52px] absolute outline outline-1 outline-offset-[-0.50px] outline-neutral-200" />
      {/* Publish Button */}
      {showPublishButton && (
        <button
          type="button"
          onClick={isPublishDisabled ? undefined : onPublish}
          className={`
            w-[418px] h-12 px-3.5 py-[3px] left-[24px] top-[668px] absolute
            bg-violet-600 rounded-xl outline outline-1 outline-offset-[-1px] outline-violet-600
            inline-flex justify-center items-center gap-1.5 overflow-hidden
            ${isPublishDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-violet-700 cursor-pointer'}
            transition
            ${publishButtonClassName}
          `}
          disabled={isPublishDisabled}
        >
          <span className="justify-start text-white text-lg font-medium font-['Inter'] leading-[30px]">
            {publishButtonText}
          </span>
        </button>
      )}
      {children}
    </section>
  )
};

export default FrameCard;