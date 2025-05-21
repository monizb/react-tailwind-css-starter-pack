import React, { useState } from 'react';

const DynamicInput = ({
  isVisible = true,
  widthClass = 'w-80',
  showLabel = true,
  label = 'Email',
  labelClass = 'text-slate-700 text-[11px] font-medium font-[\'Inter\'] leading-[18px]',
  leadingGroup: leadingGroupProp = [
    {
      type: 'text',
      content: 'http://',
      className: 'text-gray-500 text-[11px] font-normal font-[\'Inter\'] leading-[18px]',
      containerClass: 'h-7 px-2 py-2.5 rounded-tl-lg rounded-bl-lg border-r border-gray-300 flex justify-start items-center',
    },
    {
      type: 'dropdown',
      content: 'US',
      icon: (isDisabled) => (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2085_479)">
            <path d="M3 4.5L6 7.5L9 4.5" stroke={isDisabled ? "#667085" : "#344054"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_2085_479">
              <rect width="12" height="12" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      dropdownOptions: ['US', 'UK', 'IN'],
      className: 'text-slate-700 text-[11px] font-normal font-[\'Inter\'] leading-[18px]',
      containerClass: 'h-7 px-2 py-2.5 rounded-tl-lg rounded-bl-lg border-r border-gray-300 flex justify-start items-center gap-1',
    },
  ],
  showInputIcon = true,
  inputIcon: inputIconProp = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2085_483)">
        <path d="M1.5 3.5C1.5 3.23478 1.60536 2.98043 1.79289 2.79289C1.98043 2.60536 2.23478 2.5 2.5 2.5H9.5C9.76522 2.5 10.0196 2.60536 10.2071 2.79289C10.3946 2.98043 10.5 3.23478 10.5 3.5V8.5C10.5 8.76522 10.3946 9.01957 10.2071 9.20711C10.0196 9.39464 9.76522 9.5 9.5 9.5H2.5C2.23478 9.5 1.98043 9.39464 1.79289 9.20711C1.60536 9.01957 1.5 8.76522 1.5 8.5V3.5Z" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.5 3.5L6 6.5L10.5 3.5" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_2085_483">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  inputValue = 'olivia@untitledui.com',
  inputPlaceholder = 'Enter your email',
  isInputDisabled = false,
  isError = false,
  onInputChange,
  inputClass = 'flex-1 justify-start text-gray-500 text-xs font-normal font-[\'Inter\'] leading-tight',
  showRightActions = true,
  rightActions: rightActionsProp = [
    {
      icon: (isDisabled) => (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2085_490)">
            <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 4.80653 10.0259 3.66193 9.18198 2.81802C8.33807 1.97411 7.19347 1.5 6 1.5C4.80653 1.5 3.66193 1.97411 2.81802 2.81802C1.97411 3.66193 1.5 4.80653 1.5 6Z" stroke={isDisabled ? "#667085" : "#344054"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8V8.005" stroke={isDisabled ? "#667085" : "#344054"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6.5C6.22488 6.50068 6.44341 6.42554 6.62033 6.28672C6.79724 6.1479 6.9222 5.9535 6.97502 5.73492C7.02785 5.51633 7.00546 5.28632 6.91146 5.08203C6.81747 4.87774 6.65737 4.7111 6.457 4.609C6.25809 4.50711 6.03055 4.47552 5.8114 4.51936C5.59226 4.56321 5.39439 4.67992 5.25 4.8505" stroke={isDisabled ? "#667085" : "#344054"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_2085_490">
              <rect width="12" height="12" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      onClick: () => {},
      tooltip: 'Show Info',
      ariaLabel: 'Show Info',
    },
    {
      icon: (isDisabled) => (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2085_496)">
            <path d="M3 4.5L6 7.5L9 4.5" stroke={isDisabled ? "#667085" : "#344054"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_2085_496">
              <rect width="12" height="12" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      onClick: () => {},
      tooltip: 'More Options',
      ariaLabel: 'More Options',
    },
  ],
  hintText = 'This is a hint text to help user.',
  showHint = true,
  hintClass = 'text-gray-500 text-[11px] font-normal font-[\'Inter\'] leading-[18px]',
  hoverableInput = false,
  focusableInput = true,
  inputBoxClass = 'pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-500 inline-flex justify-start items-center',
}) => {
  const [value, setValue] = useState(inputValue);
  const [inputFocused, setInputFocused] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(Array(leadingGroupProp.length).fill(false));
  const [dropdownValues, setDropdownValues] = useState(
    leadingGroupProp.map(item => (item.type === 'dropdown' ? item.content : null))
  );

  if (!isVisible) return null;

  // Determine outline color
  let outlineColor = 'outline-gray-500';
  if (isError) {
    outlineColor = '!outline-[#D92D20]';
  } else if (isInputDisabled) {
    outlineColor = '!outline-[#D0D5DD]';
  } else if (inputFocused) {
    outlineColor = '!outline-[#8a3ffc]';
  }

  // Disabled background - remove opacity from here
  const disabledBg = isInputDisabled ? 'bg-[#EAECF0] cursor-not-allowed' : 'bg-white';
  const disabledLabelClass = isInputDisabled ? 'text-[#98A2B3]' : '';
  const disabledHintClass = isInputDisabled ? 'text-[#98A2B3]' : '';


  // Resolve leadingGroup and rightActions to ensure icons are functions if not already
  const leadingGroup = leadingGroupProp.map(item => ({
    ...item,
    icon: typeof item.icon === 'function' ? item.icon : () => item.icon,
  }));

  const rightActions = rightActionsProp.map(action => ({
    ...action,
    icon: typeof action.icon === 'function' ? action.icon : () => action.icon,
  }));
  
  const resolvedInputIcon = typeof inputIconProp === 'function' ? inputIconProp(isInputDisabled) : inputIconProp;


  return (
    <section className="inline-flex flex-col justify-start items-start">
      <form className={`${widthClass} flex flex-col justify-start items-start gap-1.5`}>
        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
          {showLabel && (
            <label className={`justify-start ${labelClass} ${disabledLabelClass}`}>{label}</label>
          )}
          <div
            className={
              `${widthClass} h-7 ${inputBoxClass.replace(/outline-[^\s]+/, '')} ${outlineColor} ${disabledBg}`
            }
            tabIndex={isInputDisabled ? -1 : 0} // Allow focus for disabled state for screen readers if needed, but actions are disabled
          >
            <nav className="flex justify-start items-center">
              {leadingGroup.map((item, idx) => (
                <div className={item.containerClass} key={idx} style={{ position: 'relative' }}>
                  {item.type === 'dropdown' ? (
                    <>
                      <button
                        type="button"
                        className={`${item.className} flex items-center gap-1 bg-transparent border-none outline-none ${isInputDisabled ? 'text-[#98A2B3]' : ''}`}
                        disabled={isInputDisabled}
                        onClick={() => {
                          if (isInputDisabled) return;
                          setDropdownOpen(open =>
                            open.map((v, i) => (i === idx ? !v : false))
                          );
                        }}
                        tabIndex={isInputDisabled ? -1 : 0}
                        style={{ background: 'none' }}
                      >
                        <span>{dropdownValues[idx]}</span>
                        <span className="relative ml-1">{item.icon(isInputDisabled)}</span>
                      </button>
                      {dropdownOpen[idx] && !isInputDisabled && (
                        <ul className="absolute left-0 top-8 z-10 bg-white border border-gray-200 rounded shadow-md min-w-[60px]">
                          {item.dropdownOptions &&
                            item.dropdownOptions.map(option => (
                              <li
                                key={option}
                                className="px-3 py-1 text-xs hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  setDropdownValues(vals =>
                                    vals.map((v, i) => (i === idx ? option : v))
                                  );
                                  setDropdownOpen(open =>
                                    open.map((v, i) => (i === idx ? false : v))
                                  );
                                }}
                              >
                                {option}
                              </li>
                            ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <span className={`${item.className} ${isInputDisabled ? 'text-[#98A2B3]' : ''}`}>{item.content}</span>
                  )}
                </div>
              ))}
            </nav>
            <main className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
              {showInputIcon && (
                <span data-svg-wrapper className="relative">
                  {/* inputIcon is expected to handle its own disabled coloring if needed, or be #667085 by default */}
                  {resolvedInputIcon}
                </span>
              )}
              <input
                type="text"
                className={`${inputClass} bg-transparent p-0 border-0 outline-none w-full ${isInputDisabled ? 'text-[#98A2B3]' : ''}`}
                value={value}
                placeholder={inputPlaceholder}
                disabled={isInputDisabled}
                onChange={e => {
                  if (isInputDisabled) return;
                  setValue(e.target.value);
                  onInputChange && onInputChange(e.target.value);
                }}
                onFocus={() => !isInputDisabled && focusableInput && setInputFocused(true)}
                onBlur={() => !isInputDisabled && focusableInput && setInputFocused(false)}
                style={{ fontFamily: 'Inter' }}
              />
            </main>
            <aside className="flex justify-start items-center">
              {showRightActions && rightActions.map((action, idx) => (
                <button
                  type="button"
                  key={idx}
                  className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition"
                  onClick={action.onClick}
                  aria-label={action.ariaLabel || ''}
                  tabIndex={isInputDisabled ? -1 : 0}
                  title={action.tooltip || ''}
                  disabled={isInputDisabled}
                >
                  <span data-svg-wrapper className="relative">
                    {action.icon(isInputDisabled)}
                  </span>
                </button>
              ))}
            </aside>
          </div>
        </div>
        {showHint && (
          <footer className={`self-stretch justify-start ${hintClass} ${disabledHintClass}`}>
            {hintText}
          </footer>
        )}
      </form>
    </section>
  );
};

export default DynamicInput;