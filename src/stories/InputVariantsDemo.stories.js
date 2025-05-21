import { fn } from '@storybook/test';
import InputVariantsDemo from './InputVariantsDemo';

export default {
  title: 'Form/InputField',
  component: InputVariantsDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'InputField is a versatile and accessible text input with various visual states (default, focus, active, error, disabled), optional start and end add-ons, and country code dropdown. All icon, addon, hint, label, and interactivity features are enabled by default. Use the controls to preview all prop/state combinations.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'focus', 'active', 'error', 'disabled'],
      description: 'Visual state of the input field.',
      table: {
        category: 'State',
      },
    },
    required: {
      control: 'boolean',
      description: 'Mark field as required.',
      table: {
        category: 'Validation',
      },
    },
    error: {
      control: 'boolean',
      description: 'Show error state.',
      table: {
        category: 'Validation',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input.',
      table: {
        category: 'State',
      },
    },
    startAddon: {
      control: 'boolean',
      description: "Show the 'http://' start addon.",
      table: { category: 'Addon' },
    },
    endActions: {
      control: 'boolean',
      description: 'Show end action icons (eye/arrow).',
      table: { category: 'Addon' },
    },
    showStartAddon: {
      control: 'boolean',
      description: "Control visibility of start addon (usually 'http://').",
      table: { category: 'Addon' },
    },
    showRightAddon: {
      control: 'boolean',
      description: 'Show or hide right-side (end) icons.',
      table: { category: 'Addon' },
    },
    countryDropdown: {
      control: 'boolean',
      description: 'Enable the country code dropdown menu.',
      table: { category: 'Dropdown' },
    },
    countryOptions: {
      control: 'object',
      description: 'Available country options for dropdown.',
      table: { category: 'Dropdown' },
    },
    dropdownValue: {
      control: 'text',
      description: 'Currently selected country code.',
      table: { category: 'Dropdown' },
    },
    onDropdownChange: {
      control: false,
      action: 'dropdown changed',
      table: { category: 'Dropdown' },
    },
    label: {
      control: 'text',
      description: 'Input field label.',
      table: { category: 'Text' },
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder text.',
      table: { category: 'Text' },
    },
    hint: {
      control: 'text',
      description: 'Optional hint shown below input.',
      table: { category: 'Text' },
    },
    value: {
      control: 'text',
      description: 'Input value.',
      table: { category: 'Text' },
    },
    iconDropdown: {
      control: 'boolean',
      description: 'Show the dropdown arrow icon.',
      table: { category: 'Icons' },
    },
    iconEmail: {
      control: 'boolean',
      description: 'Show the email icon as input prefix.',
      table: { category: 'Icons' },
    },
    iconEye: {
      control: 'boolean',
      description: 'Enable eye (show/hide) icon at input end.',
      table: { category: 'Icons' },
    },
    iconArrow: {
      control: 'boolean',
      description: 'Show additional arrow at input end.',
      table: { category: 'Icons' },
    },
    inputType: {
      control: { type: 'select' },
      options: ['text', 'email', 'password'],
      description: 'Input element type.',
      table: { category: 'Input' },
    },
    name: { control: 'text', table: { category: 'Input' } },
    id: { control: 'text', table: { category: 'Input' } },
    onChange: {
      control: false,
      action: 'input changed',
      table: { category: 'Events' },
    },
    onBlur: { control: false, action: 'input blur', table: { category: 'Events' } },
    onFocus: { control: false, action: 'input focus', table: { category: 'Events' } },
    className: { control: false, table: { category: 'Style' } },
    inputClassName: { control: false, table: { category: 'Style' } },
    labelClassName: { control: false, table: { category: 'Style' } },
    leftAddon: { control: 'text', description: 'Start addon text', table: { category: 'Addon' } },
    showEye: { control: 'boolean', description: 'Show the eye icon at end.', table: { category: 'Icons' } },
    showArrow: { control: 'boolean', description: 'Show the arrow icon at end.', table: { category: 'Icons' } },
    isVisible: {
      control: false,
      table: { category: 'Presentation' },
    },
  },
  args: {
    variant: 'default',
    required: true,
    error: false,
    disabled: false,
    startAddon: true,
    endActions: true,
    showStartAddon: true,
    showRightAddon: true,
    countryDropdown: true,
    countryOptions: ['US', 'IN', 'FR'],
    dropdownValue: 'US',
    onDropdownChange: fn(),
    label: 'Email',
    placeholder: 'Email address',
    hint: 'This is a hint text to help user.',
    value: 'olivia@untitledui.com',
    iconDropdown: true,
    iconEmail: true,
    iconEye: true,
    iconArrow: true,
    inputType: 'text',
    name: 'email',
    id: 'storybook-input-field',
    onChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
    leftAddon: 'http://',
    showEye: true,
    showArrow: true,
    isVisible: true,
  },
};

/**
 * The default InputField story renders all possible field states (default, focus, active, error, disabled, and label-default preview)
 * with all features (dropdown, icons, add-ons, hints, required, etc) enabled.
 */
export const Default = {
  name: 'All States (Full Example)',
  args: {
    // All interactive states are visible in the demo
    isVisible: true,
  },
};

/**
 * Controls the input state to 'default' with all features enabled.
 */
export const StateDefault = {
  name: 'State: Default Enabled',
  args: {
    variant: 'default',
    error: false,
    disabled: false,
    isVisible: true,
  },
};

/**
 * Shows the input field with focus state.
 */
export const StateFocus = {
  name: 'State: Focus',
  args: {
    variant: 'focus',
    error: false,
    disabled: false,
    isVisible: true,
  },
};

/**
 * Shows the input field in active state (valid, accent outline).
 */
export const StateActive = {
  name: 'State: Active',
  args: {
    variant: 'active',
    error: false,
    disabled: false,
    isVisible: true,
  },
};

/**
 * Shows the input field in error state with error styling.
 */
export const StateError = {
  name: 'State: Error',
  args: {
    variant: 'error',
    error: true,
    disabled: false,
    isVisible: true,
  },
};

/**
 * Shows the input field in disabled state.
 */
export const StateDisabled = {
  name: 'State: Disabled',
  args: {
    variant: 'disabled',
    disabled: true,
    isVisible: true,
  },
};

/**
 * Shows the input field with no start addon, only the email icon, country disabled.
 */
export const NoStartAddon = {
  name: "Without Start Addon",
  args: {
    startAddon: false,
    showStartAddon: false,
    leftAddon: '',
    countryDropdown: false,
    iconEmail: true,
    isVisible: true,
  },
};

/**
 * Shows the input field with country dropdown but no icons.
 */
export const CountryDropdownOnly = {
  name: "With Country Dropdown Only",
  args: {
    startAddon: false,
    showStartAddon: false,
    leftAddon: '',
    countryDropdown: true,
    iconDropdown: true,
    iconEmail: false,
    iconEye: false,
    iconArrow: false,
    showEye: false,
    showArrow: false,
    isVisible: true,
  },
};

/**
 * Shows the input field with no end actions, only input and label.
 */
export const NoEndActions = {
  name: "Without End Actions",
  args: {
    endActions: false,
    showRightAddon: false,
    iconEye: false,
    iconArrow: false,
    showEye: false,
    showArrow: false,
    isVisible: true,
  },
};

/**
 * Shows the input field as required and disabled simultaneously.
 */
export const RequiredAndDisabled = {
  name: "Required & Disabled",
  args: {
    required: true,
    disabled: true,
    variant: 'disabled',
    isVisible: true,
  },
};

/**
 * Showcases a password type input (with eye reveal icon).
 */
export const InputTypePassword = {
  name: "Input Type: Password",
  args: {
    inputType: 'password',
    iconEye: true,
    showEye: true,
    isVisible: true,
  },
};

/**
 * Allows live toggling of variants from controls (dropdown).
 */
export const StateVariantsDropdown = {
  name: "Select State Variant (Dropdown)",
  args: {
    // All other features as default; variant can be switched via SB controls.
    isVisible: true,
  },
  parameters: {
    controls: { include: ['variant', 'error', 'disabled'] },
    docs: {
      description: {
        story:
          'Use Storybook controls panel to switch the input state between "default", "focus", "active", "error", "disabled" variants.',
      },
    },
  },
};