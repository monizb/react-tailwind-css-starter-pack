import React, { useState } from 'react';

const icons = {
  dropdown: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_dropdown)">
        <path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_dropdown">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  envelope: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_envelope)">
        <path d="M1.5 3.5C1.5 3.23478 1.60536 2.98043 1.79289 2.79289C1.98043 2.60536 2.23478 2.5 2.5 2.5H9.5C9.76522 2.5 10.0196 2.60536 10.2071 2.79289C10.3946 2.98043 10.5 3.23478 10.5 3.5V8.5C10.5 8.76522 10.3946 9.01957 10.2071 9.20711C10.0196 9.39464 9.76522 9.5 9.5 9.5H2.5C2.23478 9.5 1.98043 9.39464 1.79289 9.20711C1.60536 9.01957 1.5 8.76522 1.5 8.5V3.5Z" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.5 3.5L6 6.5L10.5 3.5" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_envelope">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  info: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_info)">
        <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 4.80653 10.0259 3.66193 9.18198 2.81802C8.33807 1.97411 7.19347 1.5 6 1.5C4.80653 1.5 3.66193 1.97411 2.81802 2.81802C1.97411 3.66193 1.5 4.80653 1.5 6Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 8V8.005" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6.5C6.22488 6.50068 6.44341 6.42554 6.62033 6.28672C6.79724 6.1479 6.9222 5.9535 6.97502 5.73492C7.02785 5.51633 7.00546 5.28632 6.91146 5.08203C6.81747 4.87774 6.65737 4.7111 6.457 4.609C6.25809 4.50711 6.03055 4.47552 5.8114 4.51936C5.59226 4.56321 5.39439 4.67992 5.25 4.8505" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_info">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  arrow: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_arrow)">
        <path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_arrow">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
};

const outlineColorMap = {
  default: 'outline-gray-500',
  focus: 'outline-violet-600',
  disabled: 'outline-gray-300',
};
const labelColorMap = {
  default: 'text-slate-700',
  focus: 'text-gray-900',
  disabled: 'text-gray-400',
};
const bgColorMap = {
  default: 'bg-white',
  focus: 'bg-white',
  disabled: 'bg-gray-200',
};
const valueColorMap = {
  default: 'text-gray-500',
  focus: 'text-gray-900',
  disabled: 'text-gray-400',
  placeholder: 'text-gray-500',
};

const hintColorMap = {
  default: 'text-gray-500',
  focus: 'text-gray-500',
  disabled: 'text-gray-500',
};

const fontWeightValue = {
  default: 'font-normal',
  focus: 'font-normal',
  disabled: 'font-medium'
}

const InputSelectMerged = ({
  isVisible = true,
  label = 'Email',
  state = 'default', // 'default' | 'focus' | 'disabled'
  leadingText = 'http://',
  leadingOption = 'US',
  trailingIcons = ['info', 'arrow'],
  value = 'olivia@untitledui.com',
  placeholder = '|',
  hint = 'This is a hint text to help user.',
  onValueChange,
  disabled = false,
  // for dropdown interaction
  dropdownOptions = ['US', 'CA', 'FR'],
  onDropdownChange,
  dropdownValue = 'US',
}) => {
  // For dropdown logic
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // For interactive value
  const [inputValue, setInputValue] = useState(value);

  // For dropdown selected value (for variant mode)
  const [currentDropdown, setCurrentDropdown] = useState(dropdownValue);

  if (!isVisible) return null;

  const handleDropdownClick = () => {
    if (disabled) return;
    setDropdownOpen(open => !open);
  };

  const handleDropdownOptionClick = (option) => {
    setCurrentDropdown(option);
    setDropdownOpen(false);
    if (onDropdownChange) onDropdownChange(option);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (onValueChange) onValueChange(e.target.value);
  };

  // Compose styles
  const outlineClass = outlineColorMap[state] || outlineColorMap['default'];
  const labelClass = labelColorMap[state] || labelColorMap['default'];
  const inputBgClass = bgColorMap[state] || bgColorMap['default'];
  const valueClass = valueColorMap[state] || valueColorMap['default'];
  const hintClass = hintColorMap[state] || hintColorMap['default'];
  const placeholderClass = valueColorMap['placeholder'];
  const fontWeightClass = fontWeightValue[state];
  const labelWeight = state === 'disabled' ? 'font-medium' : 'font-medium';

  return (
    <section className="size- inline-flex flex-col justify-start items-start">
      <div
        data-arrow="true"
        data-hint="true"
        data-input-box="true"
        data-label="true"
        data-leading-dropdown="true"
        data-leading-options="true"
        data-leading-text="true"
        data-left-icon="true"
        data-placeholder="true"
        data-right-actions="true"
        data-right-icon="true"
        data-size="sm"
        className="w-80 flex flex-col justify-start items-start gap-1.5"
      >
        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
          <label className={`justify-start ${labelClass} text-[11px] ${labelWeight} font-['Inter'] leading-[18px]`}>
            {label}
          </label>
          <div
            className={`w-80 h-7 pr-0.5 py-2 rounded-md outline outline-1 outline-offset-[-1px] ${outlineClass} inline-flex justify-start items-center ${inputBgClass}`}
          >
            {/* Leading */}
            <div className="size- flex justify-start items-center">
              {/* Leading Text */}
              <span className="h-7 px-2 py-2.5 rounded-tl-lg rounded-bl-lg border-r border-gray-300 flex justify-start items-center">
                <span className="justify-start text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">
                  {leadingText}
                </span>
              </span>
              {/* Dropdown */}
              <button
                type="button"
                disabled={disabled}
                onClick={handleDropdownClick}
                className={`h-7 px-2 py-2.5 rounded-tl-lg rounded-bl-lg border-r border-gray-300 flex justify-start items-center relative cursor-pointer hover:bg-gray-50 ${
                  disabled ? 'pointer-events-none opacity-50' : ''
                }`}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                <span className="justify-start text-slate-700 text-[11px] font-normal font-['Inter'] leading-[18px] select-none">{currentDropdown}</span>
                <span data-svg-wrapper className="relative ml-1">
                  {icons.dropdown}
                </span>
                {dropdownOpen && (
                  <ul className="absolute left-0 top-[150%] z-20 min-w-max bg-white shadow border border-gray-200 rounded text-xs font-normal mt-1">
                    {dropdownOptions.map((opt) => (
                      <li
                        key={opt}
                        className={`cursor-pointer px-2 py-1 hover:bg-violet-50 ${opt === currentDropdown ? 'bg-violet-100 text-violet-600' : ''}`}
                        onClick={() => handleDropdownOptionClick(opt)}
                        tabIndex={0}
                        role="option"
                        aria-selected={opt === currentDropdown}
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            </div>
            {/* Input */}
            <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
              <span data-svg-wrapper className="relative">
                {icons.envelope}
              </span>
              <input
                type="text"
                disabled={disabled || state === 'disabled'}
                value={inputValue}
                placeholder={placeholder}
                onChange={handleInputChange}
                className={`flex-1 bg-transparent border-none outline-none p-0 m-0 w-full ${value ? valueClass : placeholderClass} text-xs ${fontWeightClass} font-['Inter'] leading-tight`}
                style={{ minWidth: 0 }}
                aria-label={label}
              />
            </div>
            {/* Trailing Icons (actions) */}
            <div className="size- flex justify-start items-center">
              {trailingIcons.map((iconName, idx) => (
                <button
                  key={iconName + idx}
                  type="button"
                  disabled={disabled}
                  className={`size-6 p-1.5 rounded-md flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-gray-100 focus:bg-gray-200 transition ${disabled ? 'pointer-events-none opacity-50' : ''}`}
                  tabIndex={0}
                  aria-label={iconName + ' icon'}
                >
                  <span data-svg-wrapper className="relative">
                    {icons[iconName] || null}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        {hint && (
          <div className={`self-stretch justify-start ${hintClass} text-[11px] font-normal font-['Inter'] leading-[18px]`}>
            {hint}
          </div>
        )}
      </div>
    </section>
  );
};

// Variant for default (hover state for border)
export const StateHoverVariant = ({
  variant = 'default', // 'default' | 'focus' | 'disabled'
  ...props
}) => {
  // Map variant to correct highlight
  let state = 'default';
  if (variant === 'focus') state = 'focus';
  if (variant === 'disabled') state = 'disabled';

  // Default values for each variant as seen in the original code
  let defaults = {
    label: 'Email',
    leadingText: 'http://',
    leadingOption: 'US',
    value: 'olivia@untitledui.com',
    dropdownValue: 'US',
    placeholder: '|',
    hint: 'This is a hint text to help user.',
    trailingIcons: ['info', 'arrow'],
    dropdownOptions: ['US', 'CA', 'FR'],
  };

  if (variant === 'focus') {
    defaults = {
      ...defaults,
      label: 'Email',
      value: '',
      placeholder: '|',
      state: 'focus',
      hint: 'This is a hint text to help user.',
      trailingIcons: ['info', 'arrow'],
      dropdownValue: 'US',
    };
  } else if (variant === 'disabled') {
    defaults = {
      ...defaults,
      label: 'Email',
      value: 'olivia@untitledui.com',
      state: 'disabled',
      hint: 'This is a hint text to help user.',
      trailingIcons: ['info', 'arrow'],
      dropdownValue: 'US',
    };
  } else {
    defaults = {
      ...defaults,
      state: 'default',
    };
  }

  return <InputSelectMerged {...defaults} {...props} />;
};

export default StateHoverVariant;