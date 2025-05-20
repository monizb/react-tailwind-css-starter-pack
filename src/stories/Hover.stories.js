import { fn } from '@storybook/test';
import StateHover from '../StateHover';

export default {
  title: 'Example/StateHover',
  component: StateHover,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isVisible: true,
    containerClassName: '',
    inputBoxClassName: '',
    label: 'Email',
    showLabel: true,
    showHint: true,
    hint: 'This is a hint text to help user.',
    hintClassName: '',
    disabled: false,
    leadingText1: 'http://',
    showLeadingText1: true,
    leadingText2: 'US',
    showLeadingText2: true,
    showLeadingDropdown: true,
    showLeadingDropdownIcon: true,
    mainPlaceholder: 'olivia@untitledui.com',
    showLeftIcon: true,
    showRightIcon: true,
  },
  // For documentation and controls
  argTypes: {
    isVisible: { control: 'boolean', description: 'Whether input is visible' },
    containerClassName: { control: 'text', description: 'Custom container class names' },
    inputBoxClassName: { control: 'text', description: 'Custom input box class names' },
    label: { control: 'text', description: 'Label of the field' },
    showLabel: { control: 'boolean', description: 'Show/Hide label' },
    showHint: { control: 'boolean', description: 'Show/Hide hint' },
    hint: { control: 'text', description: 'Hint text' },
    hintClassName: { control: 'text', description: 'Custom class for hint' },
    disabled: { control: 'boolean', description: 'Disables the input' },
    leadingText1: { control: 'text', description: 'Leading text 1' },
    showLeadingText1: { control: 'boolean', description: 'Show/Hide leading text 1' },
    leadingText2: { control: 'text', description: 'Leading text 2' },
    showLeadingText2: { control: 'boolean', description: 'Show/Hide leading text 2' },
    showLeadingDropdown: { control: 'boolean', description: 'Show/Hide leading dropdown' },
    showLeadingDropdownIcon: { control: 'boolean', description: 'Show/Hide leading dropdown icon' },
    mainPlaceholder: { control: 'text', description: 'Main placeholder text' },
    showLeftIcon: { control: 'boolean', description: 'Show/Hide left icon' },
    showRightIcon: { control: 'boolean', description: 'Show/Hide right icon' },
  },
};

/**
 * Default controls all elements on
 */
export const Default = {
  args: {
    // Uses default args from export default
  },
};

/**
 * Disabled state
 */
export const Disabled = {
  args: {
    disabled: true,
  },
  name: 'Disabled',
};

/**
 * No Label
 */
export const WithoutLabel = {
  args: {
    showLabel: false,
  },
  name: 'Without Label',
};

/**
 * Without Hint
 */
export const WithoutHint = {
  args: {
    showHint: false,
  },
  name: 'Without Hint',
};

/**
 * Without Leading Texts
 */
export const NoLeadingTexts = {
  args: {
    showLeadingText1: false,
    showLeadingText2: false,
  },
  name: 'No Leading Text 1 & 2',
};

/**
 * Only LeadingText1 Shown
 */
export const OnlyLeadingText1 = {
  args: {
    showLeadingText1: true,
    showLeadingText2: false,
  },
  name: 'Only Leading Text 1',
};

/**
 * Only LeadingText2 Shown
 */
export const OnlyLeadingText2 = {
  args: {
    showLeadingText1: false,
    showLeadingText2: true,
  },
  name: 'Only Leading Text 2',
};

/**
 * Hide Leading Dropdown and Icon
 */
export const NoLeadingDropdownAndIcon = {
  args: {
    showLeadingDropdown: false,
    showLeadingDropdownIcon: false,
  },
  name: 'No Leading Dropdown/Dropdown Icon',
};

/**
 * No Left Icon
 */
export const WithoutLeftIcon = {
  args: {
    showLeftIcon: false,
  },
  name: 'Without Left Icon',
};

/**
 * No Right Icon
 */
export const WithoutRightIcon = {
  args: {
    showRightIcon: false,
  },
  name: 'Without Right Icon',
};

/**
 * No Icons
 */
export const NoIcons = {
  args: {
    showLeftIcon: false,
    showRightIcon: false,
  },
  name: 'No Icons',
};

/**
 * Hidden State
 */
export const Hidden = {
  args: {
    isVisible: false,
  },
  name: 'Hidden',
};

/**
 * Just Placeholder, no leading/trailing
 */
export const OnlyPlaceholder = {
  args: {
    showLabel: false,
    showHint: false,
    showLeadingText1: false,
    showLeadingDropdown: false,
    showLeadingText2: false,
    showLeadingDropdownIcon: false,
    showLeftIcon: false,
    showRightIcon: false,
  },
  name: 'Only Placeholder',
};

/**
 * Custom Container and Input Classes
 */
export const CustomClasses = {
  args: {
    containerClassName: 'border-2 border-blue-300',
    inputBoxClassName: 'ring-2 ring-green-300',
    hintClassName: 'text-red-400 italic',
  },
  name: 'Custom Class Names',
};