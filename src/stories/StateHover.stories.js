import { fn } from '@storybook/test';
import StateHover from './StateHover';

export default {
  title: 'Example/StateHover',
  component: StateHover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    widthClass: {
      control: { type: 'select' },
      options: ['w-80', 'w-40', 'w-full'],
      description: 'Width utility class',
    },
    inputValue: {
      control: 'text',
      description: 'Value of the input',
    },
    inputPlaceholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    showLabel: { control: 'boolean' },
    isVisible: { control: 'boolean' },
    showInputIcon: { control: 'boolean' },
    showRightActions: { control: 'boolean' },
    isInputDisabled: { control: 'boolean' },
    showHint: { control: 'boolean' },
    hoverableInput: { control: 'boolean' },
    focusableInput: { control: 'boolean' },
    label: { control: 'text' },
    hintText: { control: 'text' },
    // Note: leadingGroup, rightActions, inputIcon are not controlled as they are complex objects/elements
  },
  args: {
    isVisible: true,
    widthClass: 'w-80',
    showLabel: true,
    label: 'Email',
    labelClass: "text-slate-700 text-[11px] font-medium font-['Inter'] leading-[18px]",
    leadingGroup: [
      {
        type: 'text',
        content: 'http://',
        className: "text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]",
        containerClass: 'h-7 px-2 py-2.5 rounded-tl-lg rounded-bl-lg border-r border-gray-300 flex justify-start items-center',
      },
      {
        type: 'dropdown',
        content: 'US',
        icon: (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2085_479)">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_2085_479">
                <rect width="12" height="12" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ),
        className: "text-slate-700 text-[11px] font-normal font-['Inter'] leading-[18px]",
        containerClass: 'h-7 px-2 py-2.5 rounded-tl-lg rounded-bl-lg border-r border-gray-300 flex justify-start items-center gap-1',
      },
    ],
    showInputIcon: true,
    inputIcon: (
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
    inputValue: 'olivia@untitledui.com',
    inputPlaceholder: 'Enter your email',
    isInputDisabled: false,
    onInputChange: fn(),
    inputClass: "flex-1 justify-start text-gray-500 text-xs font-normal font-['Inter'] leading-tight",
    showRightActions: true,
    rightActions: [
      {
        icon: (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2085_490)">
              <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 4.80653 10.0259 3.66193 9.18198 2.81802C8.33807 1.97411 7.19347 1.5 6 1.5C4.80653 1.5 3.66193 1.97411 2.81802 2.81802C1.97411 3.66193 1.5 4.80653 1.5 6Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 8V8.005" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6.5C6.22488 6.50068 6.44341 6.42554 6.62033 6.28672C6.79724 6.1479 6.9222 5.9535 6.97502 5.73492C7.02785 5.51633 7.00546 5.28632 6.91146 5.08203C6.81747 4.87774 6.65737 4.7111 6.457 4.609C6.25809 4.50711 6.03055 4.47552 5.8114 4.51936C5.59226 4.56321 5.39439 4.67992 5.25 4.8505" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_2085_490">
                <rect width="12" height="12" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ),
        onClick: fn(),
        tooltip: 'Show Info',
        ariaLabel: 'Show Info',
      },
      {
        icon: (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2085_496)">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_2085_496">
                <rect width="12" height="12" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ),
        onClick: fn(),
        tooltip: 'More Options',
        ariaLabel: 'More Options',
      },
    ],
    hintText: 'This is a hint text to help user.',
    showHint: true,
    hintClass: "text-gray-500 text-[11px] font-normal font-['Inter'] leading-[18px]",
    hoverableInput: true,
    focusableInput: true,
    inputBoxClass: 'pr-0.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-500 inline-flex justify-start items-center',
  },
  // For booleans in Controls UI
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

// Default: everything enabled
export const Default = {
  name: 'Default (All Features Enabled)',
  args: {},
};

// Size Variants Dropdown stories
export const SmallWidth = {
  name: 'Small Width (w-40)',
  args: {
    widthClass: 'w-40',
  },
};

export const LargeWidth = {
  name: 'Large Width (w-full)',
  args: {
    widthClass: 'w-full',
  },
};

// Label visibility
export const WithoutLabel = {
  name: 'Without Label',
  args: {
    showLabel: false,
  },
};

// Input icon visibility
export const WithoutInputIcon = {
  name: 'Without Input Icon',
  args: {
    showInputIcon: false,
  },
};

// Right actions visibility
export const WithoutRightActions = {
  name: 'Without Right Actions',
  args: {
    showRightActions: false,
  },
};

// Disabled input
export const DisabledInput = {
  name: 'Input Disabled',
  args: {
    isInputDisabled: true,
  },
};

// No hint
export const WithoutHint = {
  name: 'Without Hint',
  args: {
    showHint: false,
  },
};

// Not hoverable
export const NotHoverable = {
  name: 'Not Hoverable',
  args: {
    hoverableInput: false,
  },
};

// Not focusable
export const NotFocusable = {
  name: 'Not Focusable',
  args: {
    focusableInput: false,
  },
};

// Not visible (shows nothing)
export const NotVisible = {
  name: 'Not Visible',
  args: {
    isVisible: false,
  },
};

// Only Label and Input
export const OnlyLabelAndInput = {
  name: 'Only Label and Input',
  args: {
    showLabel: true,
    showInputIcon: false,
    showRightActions: false,
    showHint: false,
    leadingGroup: [],
  },
};

// Only Input (No Label, No Hint, No Side Actions)
export const OnlyInput = {
  name: 'Only Input',
  args: {
    showLabel: false,
    showInputIcon: false,
    showRightActions: false,
    showHint: false,
    leadingGroup: [],
  },
};

// Custom Hint Text
export const CustomHint = {
  name: 'Custom Hint Text',
  args: {
    hintText: 'Your email will be used for account recovery.',
  },
};

// All boolean states (combinations for booleans)
export const AllBooleansOff = {
  name: 'All Boolean Features Off',
  args: {
    showLabel: false,
    showInputIcon: false,
    showRightActions: false,
    showHint: false,
    hoverableInput: false,
    focusableInput: false,
    isVisible: true,
  },
};

export const OnlyHoverable = {
  name: 'Only Hoverable',
  args: {
    showLabel: false,
    showInputIcon: false,
    showRightActions: false,
    showHint: false,
    hoverableInput: true,
    focusableInput: false,
    isVisible: true,
  },
};

export const OnlyFocusable = {
  name: 'Only Focusable',
  args: {
    showLabel: false,
    showInputIcon: false,
    showRightActions: false,
    showHint: false,
    hoverableInput: false,
    focusableInput: true,
    isVisible: true,
  },
};