import React, { useState } from 'react';

const VARIANTS = {
  primary: 'bg-violet-600 outline-violet-600 text-white',
  secondary: 'bg-white outline-neutral-200 text-violet-600',
};

const SIZES = {
  xl: 'w-[418px] h-12 px-3.5 py-[3px]',
  lg: 'w-[350px] h-10 px-3.5 py-[2px]',
  md: 'w-[250px] h-8 px-3 py-1',
  sm: 'w-[180px] h-7 px-2 py-1',
};

const Frame2 = ({
  isVisible = true,
  previewLabel = 'Preview',
  headerTitle = 'Figma design to storybook',
  imageUrl = 'https://placehold.co/434x356',
  showLeftIcon = false,
  showRightIcon = false,
  buttonText = 'Publish to storybook',
  buttonVariant = 'primary',
  buttonState = 'default', // 'default', 'loading', 'disabled'
  buttonSize = 'xl',
  onButtonClick,
  showGithubTokenInput = true,
  showRepoNameInput = true,
  githubTokenLabel = 'GitHub Token',
  repoNameLabel = 'Repository Name',
  githubTokenValue = '',
  repoNameValue = '',
  onGithubTokenChange,
  onRepoNameChange,
  isGithubTokenDisabled = false,
  isRepoNameDisabled = false,
  showDivider = true,
  showPreview = true,
  className = '',
}) => {
  const [internalGithubToken, setInternalGithubToken] = useState(githubTokenValue);
  const [internalRepoName, setInternalRepoName] = useState(repoNameValue);

  const handleGithubTokenChange = (e) => {
    setInternalGithubToken(e.target.value);
    onGithubTokenChange && onGithubTokenChange(e);
  };

  const handleRepoNameChange = (e) => {
    setInternalRepoName(e.target.value);
    onRepoNameChange && onRepoNameChange(e);
  };

  if (!isVisible) return null;

  return (
    <section className={`w-[471px] h-[742px] relative bg-white rounded-3xl overflow-hidden ${className}`}>
      {showPreview && (
        <img
          className="w-[433.92px] h-[356.34px] left-[18.54px] top-[98.75px] absolute"
          src={imageUrl}
          alt={previewLabel}
        />
      )}

      {showPreview && (
        <header className="w-[422.23px] left-[24.38px] top-[72.79px] absolute justify-start text-black text-base font-medium font-['Inter'] leading-[18px]">
          {previewLabel}
        </header>
      )}

      <header className="w-[422.23px] left-[53.46px] top-[16.23px] absolute justify-start text-black text-sm font-medium font-['Inter'] leading-[18px]">
        {headerTitle}
      </header>

      <div data-svg-wrapper className="left-[24.38px] top-[14.03px] absolute">
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.5842" cy="11.2261" r="10.7006" fill="#FDFDFD" stroke="#E6E6E6" />
        </svg>
      </div>

      {showDivider && (
        <hr className="w-[471px] h-0 left-0 top-[47.52px] absolute outline outline-1 outline-offset-[-0.50px] outline-neutral-200" />
      )}

      { ((buttonState !== 'hidden')) && (
        <button
          type="button"
          className={
            `${SIZES[buttonSize] ?? SIZES.xl} left-[24px] top-[668px] absolute rounded-xl outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-1.5 overflow-hidden
            ${VARIANTS[buttonVariant] ?? VARIANTS.primary}
            ${buttonState === 'disabled' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-violet-700 cursor-pointer transition-colors'}`
          }
          onClick={buttonState === 'disabled' ? undefined : onButtonClick}
          disabled={buttonState === 'disabled'}
          data-show-left-icon={showLeftIcon}
          data-show-right-icon={showRightIcon}
          data-size={buttonSize}
          data-state={buttonState}
          data-style={buttonVariant.charAt(0).toUpperCase() + buttonVariant.slice(1)}
          data-type="Text"
        >
          {showLeftIcon && <span className="mr-2">{/* Insert left icon here */}</span>}
          <span className="justify-start text-lg font-medium font-['Inter'] leading-[30px]">
            {buttonState === 'loading' ? (
              <span>
                <svg className="animate-spin inline w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Loading...
              </span>
            ) : (
              buttonText
            )}
          </span>
          {showRightIcon && <span className="ml-2">{/* Insert right icon here */}</span>}
        </button>
      )}

      <main
        className="w-[418px] left-[24px] top-[477.49px] absolute inline-flex flex-col justify-start items-start gap-5"
        aria-label="inputs"
      >
        {showGithubTokenInput && (
          <section className="self-stretch flex flex-col justify-start items-start gap-2">
            <label className="self-stretch justify-start text-black text-base font-medium font-['Inter'] leading-[18px]">
              {githubTokenLabel}
            </label>
            <input
              type="text"
              className="self-stretch h-[38.70px] bg-white rounded-lg border border-neutral-200 px-3 focus:outline-none focus:border-violet-700 transition-colors"
              value={githubTokenValue !== undefined ? githubTokenValue : internalGithubToken}
              onChange={handleGithubTokenChange}
              disabled={isGithubTokenDisabled}
              placeholder="Enter your token"
              aria-label={githubTokenLabel}
            />
          </section>
        )}

        {showRepoNameInput && (
          <section className="self-stretch flex flex-col justify-start items-start gap-2">
            <label className="self-stretch justify-start text-black text-base font-medium font-['Inter'] leading-[18px]">
              {repoNameLabel}
            </label>
            <input
              type="text"
              className="self-stretch h-[38.70px] bg-white rounded-lg border border-neutral-200 px-3 focus:outline-none focus:border-violet-700 transition-colors"
              value={repoNameValue !== undefined ? repoNameValue : internalRepoName}
              onChange={handleRepoNameChange}
              disabled={isRepoNameDisabled}
              placeholder="your-org/my-repo"
              aria-label={repoNameLabel}
            />
          </section>
        )}
      </main>
    </section>
  );
};

export default Frame2;