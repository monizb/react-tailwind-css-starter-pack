import React, { useState } from "react";

// SVG helper components for dropdown and email icons
const DropdownIcon = ({ className = "", ...props }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const DropdownIconRed = ({ className = "", ...props }) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path d="M3 5L6 8L9 5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const EmailIcon = ({ className = "", ...props }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip1)">
      <path
        d="M1.5 3.5C1.5 3.23478 1.60536 2.98043 1.79289 2.79289C1.98043 2.60536 2.23478 2.5 2.5 2.5H9.5C9.76522 2.5 10.0196 2.60536 10.2071 2.79289C10.3946 2.98043 10.5 3.23478 10.5 3.5V8.5C10.5 8.76522 10.3946 9.01957 10.2071 9.20711C10.0196 9.39464 9.76522 9.5 9.5 9.5H2.5C2.23478 9.5 1.98043 9.39464 1.79289 9.20711C1.60536 9.01957 1.5 8.76522 1.5 8.5V3.5Z"
        stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M1.5 3.5L6 6.5L10.5 3.5"
        stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip1">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const EmailIconRed = ({ className = "", ...props }) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip1)">
      <path
        d="M1.5 4C1.5 3.73478 1.60536 3.48043 1.79289 3.29289C1.98043 3.10536 2.23478 3 2.5 3H9.5C9.76522 3 10.0196 3.10536 10.2071 3.29289C10.3946 3.48043 10.5 3.73478 10.5 4V9C10.5 9.26522 10.3946 9.51957 10.2071 9.70711C10.0196 9.89464 9.76522 10 9.5 10H2.5C2.23478 10 1.98043 9.89464 1.79289 9.70711C1.60536 9.51957 1.5 9.26522 1.5 9V4Z"
        stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M1.5 4L6 7L10.5 4"
        stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip1">
        <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const EyeIcon = ({ className = "", ...props }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip2)">
      <path
        d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 4.80653 10.0259 3.66193 9.18198 2.81802C8.33807 1.97411 7.19347 1.5 6 1.5C4.80653 1.5 3.66193 1.97411 2.81802 2.81802C1.97411 3.66193 1.5 4.80653 1.5 6Z"
        stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M6 8V8.005" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6 6.5C6.22488 6.50068 6.44341 6.42554 6.62033 6.28672C6.79724 6.1479 6.9222 5.9535 6.97502 5.73492C7.02785 5.51633 7.00546 5.28632 6.91146 5.08203C6.81747 4.87774 6.65737 4.7111 6.457 4.609C6.25809 4.50711 6.03055 4.47552 5.8114 4.51936C5.59226 4.56321 5.39439 4.67992 5.25 4.8505"
        stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip2">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const EyeIconRed = ({ className = "", ...props }) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip2)">
      <path
        d="M1.5 6.5C1.5 7.09095 1.6164 7.67611 1.84254 8.22208C2.06869 8.76804 2.40016 9.26412 2.81802 9.68198C3.23588 10.0998 3.73196 10.4313 4.27792 10.6575C4.82389 10.8836 5.40905 11 6 11C6.59095 11 7.17611 10.8836 7.72208 10.6575C8.26804 10.4313 8.76412 10.0998 9.18198 9.68198C9.59984 9.26412 9.93131 8.76804 10.1575 8.22208C10.3836 7.67611 10.5 7.09095 10.5 6.5C10.5 5.30653 10.0259 4.16193 9.18198 3.31802C8.33807 2.47411 7.19347 2 6 2C4.80653 2 3.66193 2.47411 2.81802 3.31802C1.97411 4.16193 1.5 5.30653 1.5 6.5Z"
        stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M6 8.5V8.505" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6 7C6.22488 7.00068 6.44341 6.92554 6.62033 6.78672C6.79724 6.6479 6.9222 6.4535 6.97502 6.23492C7.02785 6.01633 7.00546 5.78632 6.91146 5.58203C6.81747 5.37774 6.65737 5.2111 6.457 5.109C6.25809 5.00711 6.03055 4.97552 5.8114 5.01936C5.59226 5.06321 5.39439 5.17992 5.25 5.3505"
        stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip2">
        <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

// Input variant mapping for states
const outlineMap = {
  default: "outline-gray-300",
  focus: "outline-gray-500",
  active: "outline-violet-600",
  error: "outline-red-600",
  disabled: "outline-gray-300",
};
const bgMap = {
  default: "bg-white",
  focus: "bg-white",
  active: "bg-white",
  error: "bg-white",
  disabled: "bg-gray-200",
};
const labelColorMap = {
  default: "text-gray-500",
  focus: "text-slate-700",
  active: "text-gray-900",
  error: "text-gray-500",
  disabled: "text-gray-400",
};
const inputTextColorMap = {
  default: "text-gray-900 font-medium",
  focus: "text-gray-500 font-normal",
  active: "text-gray-900 font-medium",
  error: "text-gray-900 font-medium",
  disabled: "text-gray-400 font-medium",
};
const inputValueColorMap = {
  default: "text-gray-900",
  focus: "text-gray-500",
  active: "text-gray-900",
  error: "text-gray-900",
  disabled: "text-gray-400",
};

// Input variant mapping for outline on hover/focus/active
const getOutlineColor = (variant) => outlineMap[variant] || outlineMap.default;
const getBgColor = (variant) => bgMap[variant] || bgMap.default;
const getLabelColor = (variant) => labelColorMap[variant] || labelColorMap.default;
const getInputTextClasses = (variant) => inputTextColorMap[variant] || inputTextColorMap.default;
const getInputValueColor = (variant) => inputValueColorMap[variant] || inputValueColorMap.default;

// Main InputField Component
const InputField = ({
  label,
  placeholder,
  hint,
  value,
  name,
  disabled = false,
  error = false,
  required = false,
  variant = "default", // 'default' | 'focus' | 'active' | 'error' | 'disabled'
  startAddon = true,
  endActions = true,
  countryDropdown = true,
  countryOptions = ["US"],
  dropdownValue = "US",
  onDropdownChange,
  onChange,
  leftAddon = "http://",
  iconDropdown = true,
  iconEmail = true,
  iconEye = true,
  iconArrow = true,
  iconSize = 24,
  inputType = "text",
  onBlur,
  onFocus,
  showArrow = true,
  showEye = true,
  showStartAddon = true,
  showRightAddon = true,
  className = "",
  inputClassName = "",
  labelClassName = "",
  id,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Determine which styles and icons to use based on states
  // error state takes precedence
  let actualVariant = variant;
  if (error) actualVariant = "error";
  if (disabled) actualVariant = "disabled";

  // Disabled field disables input/controls
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  // Handle dropdown open/close (for country code)
  const handleDropdown = () => !disabled && setDropdownOpen((open) => !open);

  // Country code options
  const DropdownOptionsList = () =>
    countryOptions.length > 1 ? (
      <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-md border border-gray-200 min-w-[60px]">
        {countryOptions.map((opt) => (
          <button
            key={opt}
            className={`block w-full px-3 py-1 text-xs hover:bg-slate-100 text-slate-700 text-left`}
            onClick={() => {
              if (onDropdownChange) onDropdownChange(opt);
              setDropdownOpen(false);
            }}
            type="button"
            disabled={disabled}
          >
            {opt}
          </button>
        ))}
      </div>
    ) : null;

  // Start-addon: typically 'http://'
  // Dropdown: typically country code (US)
  // Main value area
  // End actions: two icons (eye and arrow)
  return (
    <section className={`w-80 flex flex-col justify-start items-start gap-1.5 ${className}`}>
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className={`justify-start text-[11px] font-['Inter'] leading-[18px] font-medium ${getLabelColor(actualVariant)} ${labelClassName}`}
          >
            {label}
            {required && <span className="text-red-600 ml-0.5">*</span>}
          </label>
        )}
        <div
          className={`w-80 h-7 pr-0.5 py-2 ${getBgColor(actualVariant)} rounded-md outline outline-1 outline-offset-[-1px] ${getOutlineColor(
            actualVariant
          )} inline-flex justify-start items-center transition-all duration-100`}
        >
          {/* Start Addon (http://) */}
          {showStartAddon && startAddon && (
            <span className="h-7 px-2 py-2.5 rounded-tl-lg rounded-bl-lg border-r border-gray-300 flex justify-start items-center select-none">
              <span className="justify-start text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">
                {leftAddon}
              </span>
            </span>
          )}

          {/* Country dropdown */}
          {countryDropdown && (
            <div className="relative h-7 px-2 py-2.5 rounded-tl-lg rounded-bl-lg border-r border-gray-300 flex justify-start items-center cursor-pointer select-none"
              tabIndex={disabled ? -1 : 0}
              onClick={handleDropdown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="menu"
              style={{ minWidth: 40 }}
            >
              <span className={`justify-start text-slate-700 text-[11px] font-normal font-['Inter'] leading-[18px]`}>
                {dropdownValue}
              </span>
              {iconDropdown &&
                (error ? <DropdownIconRed className="ml-1" /> : <DropdownIcon className="ml-1" />)}
              {isDropdownOpen && <DropdownOptionsList />}
            </div>
          )}

          {/* Main input field */}
          <div className="flex-1 h-7 pl-2 flex justify-start items-center gap-2">
            {iconEmail &&
              (error ? <EmailIconRed /> : <EmailIcon />)}
            <input
              id={id}
              type={inputType}
              name={name}
              value={inputValue}
              onChange={handleInputChange}
              disabled={disabled}
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder={placeholder}
              className={`flex-1 bg-transparent outline-none border-none ${getInputValueColor(actualVariant)} text-xs font-['Inter'] leading-tight ${inputClassName}`}
              autoComplete="off"
              required={required}
              aria-invalid={!!error}
              aria-disabled={!!disabled}
              style={{ minWidth: 10 }}
              {...props}
            />
          </div>

          {/* End actions: icons */}
          {(showRightAddon || endActions) && (
            <span className="flex justify-start items-center">
              {/* Eye Icon */}
              {showEye && (
                <button
                  type="button"
                  tabIndex={disabled ? -1 : 0}
                  className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 overflow-hidden hover:bg-slate-100 cursor-pointer transition"
                  disabled={disabled}
                  aria-label="Show/Hide"
                  style={{
                    pointerEvents: disabled ? "none" : undefined,
                  }}
                >
                  {error ? <EyeIconRed /> : <EyeIcon />}
                </button>
              )}
              {/* Arrow Dropdown Icon */}
              {showArrow && (
                <button
                  type="button"
                  tabIndex={disabled ? -1 : 0}
                  className="size-6 p-1.5 rounded-md flex justify-center items-center gap-2 overflow-hidden hover:bg-slate-100 cursor-pointer transition"
                  disabled={disabled}
                  aria-label="Show/Hide Dropdown"
                  style={{
                    pointerEvents: disabled ? "none" : undefined,
                  }}
                >
                  {error ? <DropdownIconRed /> : <DropdownIcon />}
                </button>
              )}
            </span>
          )}
        </div>
      </div>
      {hint && (
        <span className="self-stretch justify-start text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]">
          {hint}
        </span>
      )}
    </section>
  );
};

// Main wrapper that demonstrates all field variants and positions
const InputVariantsDemo = ({
  isVisible = true,
  ...props
}) => {
  const [dropdownVal1, setDropdownVal1] = useState("US");
  const [dropdownVal2, setDropdownVal2] = useState("US");
  const [dropdownVal3, setDropdownVal3] = useState("US");
  const [dropdownVal4, setDropdownVal4] = useState("US");
  const [dropdownVal5, setDropdownVal5] = useState("US");

  if (!isVisible) return null;

  return (
    <section className="w-[400px] h-[684px] relative rounded-[5px] border border-purple-500 overflow-hidden bg-white">
      {/* Default (empty, no label, no placeholder) */}
      <div className="left-[40px] top-[40px] absolute inline-flex flex-col justify-start items-start">
        <InputField
          {...props}
          label={props.label1}
          value={props.value1}
          placeholder={props.placeholder1}
          hint={props.hint1}
          showStartAddon={false}
          countryDropdown={false}
          showEye={false}
          showArrow={false}
          showRightAddon={false}
          startAddon={false}
        />
      </div>
      {/* Focus state (with label, placeholder, dropdown) */}
      <div className="left-[40px] top-[143px] absolute inline-flex flex-col justify-start items-start">
        <InputField
          {...props}
          id="focus"
          variant="focus"
          label={props.label2 || "Email"}
          value={props.value2 || "olivia@untitledui.com"}
          placeholder={props.placeholder2 || "Email address"}
          hint={props.hint2 || "This is a hint text to help user."}
          countryDropdown
          countryOptions={["US", "IN", "FR"]}
          dropdownValue={dropdownVal1}
          onDropdownChange={setDropdownVal1}
          iconDropdown
          iconEmail
          showStartAddon={true}
          showEye={true}
          showArrow={true}
        />
      </div>
      {/* Active state (with label, valid, accent outline) */}
      <div className="left-[40px] top-[246px] absolute inline-flex flex-col justify-start items-start">
        <InputField
          {...props}
          id="active"
          variant="active"
          label={props.label3 || "Email"}
          value={props.value3 || "|"}
          placeholder={props.placeholder3}
          hint={props.hint3 || "This is a hint text to help user."}
          countryDropdown
          countryOptions={["US", "IN", "FR"]}
          dropdownValue={dropdownVal2}
          onDropdownChange={setDropdownVal2}
          iconDropdown
          iconEmail
          showStartAddon={true}
          showEye={true}
          showArrow={true}
        />
      </div>
      {/* Disabled state */}
      <div className="left-[40px] top-[349px] absolute inline-flex flex-col justify-start items-start">
        <InputField
          {...props}
          id="disabled"
          variant="disabled"
          label={props.label4 || "Email"}
          value={props.value4 || "olivia@untitledui.com"}
          placeholder={props.placeholder4}
          hint={props.hint4 || "This is a hint text to help user."}
          countryDropdown
          disabled
          countryOptions={["US", "IN", "FR"]}
          dropdownValue={dropdownVal3}
          onDropdownChange={setDropdownVal3}
          iconDropdown
          iconEmail
          showStartAddon={true}
          showEye={true}
          showArrow={true}
        />
      </div>
      {/* Error state */}
      <div className="left-[40px] top-[567.50px] absolute inline-flex flex-col justify-start items-start">
        <InputField
          {...props}
          id="error"
          error
          variant="error"
          label={props.label5 || "Email"}
          value={props.value5 || "olivia@untitledui.com"}
          placeholder={props.placeholder5}
          hint={props.hint5 || "This is a hint text to help user."}
          countryDropdown
          countryOptions={["US", "IN", "FR"]}
          dropdownValue={dropdownVal4}
          onDropdownChange={setDropdownVal4}
          iconDropdown
          iconEmail
          showStartAddon={true}
          showEye={true}
          showArrow={true}
        />
      </div>
      {/* Label default (with placeholder, neutral outline) */}
      <div className="left-[40px] top-[452px] absolute inline-flex flex-col justify-start items-start">
        <InputField
          {...props}
          id="default"
          label={props.label6 || "Email"}
          value={props.value6 || "olivia@untitledui.com"}
          placeholder={props.placeholder6}
          hint={props.hint6 || "This is a hint text to help user."}
          countryDropdown
          countryOptions={["US", "IN", "FR"]}
          dropdownValue={dropdownVal5}
          onDropdownChange={setDropdownVal5}
          iconDropdown
          iconEmail
          showStartAddon={true}
          showEye={true}
          showArrow={true}
        />
      </div>
    </section>
  );
};

export default InputVariantsDemo;