import React, { useState } from 'react';

const BUTTON_STYLES = {
  Primary: {
    base: 'bg-violet-600 text-white outline-violet-600',
    hover: 'hover:bg-violet-700 hover:outline-violet-700',
  },
  Secondary: {
    base: 'bg-white text-violet-600 outline-violet-600',
    hover: 'hover:bg-violet-50 hover:outline-violet-700',
  },
  Danger: {
    base: 'bg-red-600 text-white outline-red-600',
    hover: 'hover:bg-red-700 hover:outline-red-700',
  },
};

const SIZES = {
  xl: {
    width: 'w-[418px]',
    height: 'h-12',
    text: 'text-lg leading-[30px]',
  },
  md: {
    width: 'w-[300px]',
    height: 'h-10',
    text: 'text-base leading-[24px]',
  },
  sm: {
    width: 'w-[200px]',
    height: 'h-8',
    text: 'text-sm leading-[20px]',
  },
};

const Frame2 = ({
  isVisible = true,
  width = 'w-[471px]',
  height = 'h-[742px]',
  borderRadius = 'rounded-3xl',
  backgroundColor = 'bg-white',
  imageSrc = 'https://placehold.co/434x356',
  showImage = true,
  previewLabel = 'Preview',
  showPreviewLabel = true,
  previewLabelClass = 'text-black text-base font-medium font-[\'Inter\'] leading-[18px]',
  title = 'Figma design to storybook',
  showTitle = true,
  titleClass = 'text-black text-sm font-medium font-[\'Inter\'] leading-[18px]',
  showIcon = true,
  icon = (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11.5842" cy="11.2261" r="10.7006" fill="#FDFDFD" stroke="#E6E6E6"/>
    </svg>
  ),
  divider = true,
  buttonLabel = 'Publish to storybook',
  showButton = true,
  buttonOnClick,
  buttonLoading = false,
  buttonDisabled = false,
  buttonStyle = 'Primary', // Primary, Secondary, Danger
  buttonSize = 'xl',
  leftButtonIcon = null,
  showLeftButtonIcon = false,
  rightButtonIcon = null,
  showRightButtonIcon = false,
  githubTokenLabel = 'GitHub Token',
  showGithubTokenInput = true,
  githubTokenValue = '',
  onGithubTokenChange,
  githubTokenPlaceholder = '',
  repositoryNameLabel = 'Repository Name',
  showRepositoryNameInput = true,
  repositoryNameValue = '',
  onRepositoryNameChange,
  repositoryNamePlaceholder = '',
  customForm = null, // if supplied, replaces both inputs
  customImageNode = null,
  customHeaderIcon = null,
}) => {
  const [localGithubToken, setLocalGithubToken] = useState(githubTokenValue);
  const [localRepositoryName, setLocalRepositoryName] = useState(repositoryNameValue);

  const handleGithubTokenChange = (e) => {
    setLocalGithubToken(e.target.value);
    if (onGithubTokenChange) onGithubTokenChange(e);
  };
  const handleRepositoryNameChange = (e) => {
    setLocalRepositoryName(e.target.value);
    if (onRepositoryNameChange) onRepositoryNameChange(e);
  };
  if (!isVisible) return null;
  return (
    <section className={`${width} ${height} relative ${backgroundColor} ${borderRadius} overflow-hidden`}>
      {showImage && (
        <figure className="absolute left-[18.54px] top-[98.75px]">
          {customImageNode ? customImageNode : (
            <img
              className="w-[433.92px] h-[356.34px]"
              src={imageSrc}
              alt={previewLabel}
            />
          )}
        </figure>
      )}
      {showPreviewLabel && (
        <header className="w-[422.23px] left-[24.38px] top-[72.79px] absolute justify-start">
          <span className={previewLabelClass}>{previewLabel}</span>
        </header>
      )}
      {showTitle && (
        <header className="w-[422.23px] left-[53.46px] top-[16.23px] absolute justify-start">
          <span className={titleClass}>{title}</span>
        </header>
      )}
      {showIcon && (
        <div className="left-[24.38px] top-[14.03px] absolute" data-svg-wrapper>
          {customHeaderIcon ? customHeaderIcon : icon}
        </div>
      )}
      {divider && (
        <hr className="w-[471px] h-0 left-0 top-[47.52px] absolute outline outline-1 outline-offset-[-0.50px] outline-neutral-200" />
      )}
      {showButton && (
        <button
          type="button"
          className={`
            absolute left-[24px] top-[668px]
            inline-flex justify-center items-center gap-1.5 overflow-hidden 
            px-3.5 py-[3px]
            ${SIZES[buttonSize]?.width || SIZES.xl.width}
            ${SIZES[buttonSize]?.height || SIZES.xl.height}
            rounded-xl outline outline-1 outline-offset-[-1px] cursor-pointer
            ${BUTTON_STYLES[buttonStyle]?.base || BUTTON_STYLES.Primary.base}
            ${BUTTON_STYLES[buttonStyle]?.hover || BUTTON_STYLES.Primary.hover}
            ${buttonDisabled ? 'opacity-50 pointer-events-none' : ''}
          `}
          onClick={buttonOnClick}
          disabled={buttonDisabled || buttonLoading}
          data-show-left-icon={showLeftButtonIcon}
          data-show-right-icon={showRightButtonIcon}
          data-style={buttonStyle}
          data-size={buttonSize}
        >
          {showLeftButtonIcon && leftButtonIcon && <span className="mr-2">{leftButtonIcon}</span>}
          <span className={`${SIZES[buttonSize]?.text || SIZES.xl.text} font-medium font-['Inter']`}>
            {buttonLoading ? 'Loading...' : buttonLabel}
          </span>
          {showRightButtonIcon && rightButtonIcon && <span className="ml-2">{rightButtonIcon}</span>}
        </button>
      )}
      <main className="w-[418px] left-[24px] top-[477.49px] absolute inline-flex flex-col justify-start items-start gap-5">
        {customForm ||
          <>
            {showGithubTokenInput && (
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label className="self-stretch justify-start text-black text-base font-medium font-['Inter'] leading-[18px]" htmlFor="github-token-input">
                  {githubTokenLabel}
                </label>
                <input
                  id="github-token-input"
                  className="self-stretch h-[38.70px] bg-white rounded-lg border border-neutral-200 px-3 py-2 text-base font-['Inter']"
                  type="text"
                  placeholder={githubTokenPlaceholder}
                  value={typeof onGithubTokenChange === 'function' ? githubTokenValue : localGithubToken}
                  onChange={typeof onGithubTokenChange === 'function' ? onGithubTokenChange : handleGithubTokenChange}
                  style={{ outline: 'none' }}
                />
              </div>
            )}
            {showRepositoryNameInput && (
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label className="self-stretch justify-start text-black text-base font-medium font-['Inter'] leading-[18px]" htmlFor="repo-name-input">
                  {repositoryNameLabel}
                </label>
                <input
                  id="repo-name-input"
                  className="self-stretch h-[38.70px] bg-white rounded-lg border border-neutral-200 px-3 py-2 text-base font-['Inter']"
                  type="text"
                  placeholder={repositoryNamePlaceholder}
                  value={typeof onRepositoryNameChange === 'function' ? repositoryNameValue : localRepositoryName}
                  onChange={typeof onRepositoryNameChange === 'function' ? onRepositoryNameChange : handleRepositoryNameChange}
                  style={{ outline: 'none' }}
                />
              </div>
            )}
          </>
        }
      </main>
    </section>
  );
};

export default Frame2;