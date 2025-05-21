import { fn } from '@storybook/test';
import StateHoverVariant from './Input';

export default {
  title: 'Form/InputSelectMerged',
  component: StateHoverVariant,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A composite input field with a leading dropdown, icons, and hint text. Supports state styling for default, focus, and disabled.',
      },
    },
  },
  args: {
    isVisible: true,
    label: 'Email',
    state: 'default',
    leadingText: 'http://',
    leadingOption: 'US',
    trailingIcons: ['info', 'arrow'],
    value: 'olivia@untitledui.com',
    placeholder: '|',
    hint: 'This is a hint text to help user.',
    onValueChange: fn(),
    disabled: false,
    dropdownOptions: ['US', 'CA', 'FR'],
    onDropdownChange: fn(),
    dropdownValue: 'US',
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'focus', 'disabled'],
      description: '`default` | `focus` | `disabled` - Visual input state',
    },
    isVisible: {
      control: { type: 'boolean' },
      description: 'Hide/Show input field',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text above the field',
    },
    leadingText: {
      control: { type: 'text' },
      description: 'Text shown before the dropdown selector',
    },
    leadingOption: {
      control: { type: 'text' },
      description: 'Default dropdown value',
    },
    trailingIcons: {
      control: { type: 'object' },
      description: 'Array of icon names for trailing actions',
    },
    value: {
      control: { type: 'text' },
      description: 'The input value',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Input placeholder',
    },
    hint: {
      control: { type: 'text' },
      description: 'Helper or hint text below the field',
    },
    dropdownOptions: {
      control: { type: 'object' },
      description: 'Options array for left dropdown',
    },
    dropdownValue: {
      control: { type: 'text' },
      description: 'Currently selected dropdown value',
    },
    onValueChange: {
      action: 'input changed',
      description: 'Input value change callback',
      table: { category: 'Events' },
    },
    onDropdownChange: {
      action: 'dropdown changed',
      description: 'Dropdown value change callback',
      table: { category: 'Events' },
    },
  },
};

export const Default = {
  name: 'Default',
  args: {
    state: 'default',
    disabled: false,
    isVisible: true,
    value: 'olivia@untitledui.com',
    hint: 'This is a hint text to help user.',
    placeholder: '|',
    trailingIcons: ['info', 'arrow'],
    dropdownValue: 'US',
    dropdownOptions: ['US', 'CA', 'FR'],
    onValueChange: fn(),
    onDropdownChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard input with dropdown and icons in the default state.',
      },
    },
  },
};

export const Focused = {
  name: 'Focused State',
  args: {
    state: 'focus',
    disabled: false,
    isVisible: true,
    value: '',
    hint: 'This is a hint text to help user.',
    placeholder: '|',
    trailingIcons: ['info', 'arrow'],
    dropdownValue: 'US',
    dropdownOptions: ['US', 'CA', 'FR'],
    onValueChange: fn(),
    onDropdownChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Input in focus state (active border, label color, empty value).',
      },
    },
  },
};

export const Disabled = {
  name: 'Disabled State',
  args: {
    state: 'disabled',
    disabled: true,
    isVisible: true,
    value: 'olivia@untitledui.com',
    hint: 'This is a hint text to help user.',
    placeholder: '|',
    trailingIcons: ['info', 'arrow'],
    dropdownValue: 'US',
    dropdownOptions: ['US', 'CA', 'FR'],
    onValueChange: fn(),
    onDropdownChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with disabled styling, non-interactive and grayed out.',
      },
    },
  },
};

export const NoHint = {
  name: 'Without Hint Text',
  args: {
    state: 'default',
    disabled: false,
    isVisible: true,
    value: 'olivia@untitledui.com',
    hint: '',
    placeholder: 'Enter email',
    trailingIcons: ['info', 'arrow'],
    dropdownValue: 'US',
    dropdownOptions: ['US', 'CA', 'FR'],
    onValueChange: fn(),
    onDropdownChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default input with the hint text omitted.',
      },
    },
  },
};

export const OnlyOneTrailingIcon = {
  name: 'Single Trailing Icon',
  args: {
    state: 'default',
    disabled: false,
    isVisible: true,
    value: 'olivia@untitledui.com',
    hint: 'Using only the info icon as an action.',
    placeholder: '|',
    trailingIcons: ['info'],
    dropdownValue: 'US',
    dropdownOptions: ['US', 'CA', 'FR'],
    onValueChange: fn(),
    onDropdownChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Renders just one icon (info) on the trailing side.',
      },
    },
  },
};

export const WithDifferentDropdownDefault = {
  name: 'Dropdown Default FR',
  args: {
    state: 'default',
    disabled: false,
    isVisible: true,
    value: 'user@frenchmail.fr',
    hint: 'Dropdown shows "FR" by default.',
    placeholder: 'Adresse électronique',
    trailingIcons: ['arrow'],
    dropdownValue: 'FR',
    dropdownOptions: ['US', 'CA', 'FR'],
    onValueChange: fn(),
    onDropdownChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Changes dropdown default to "FR" and trailing icon to "arrow".',
      },
    },
  },
};

export const Hidden = {
  name: 'Invisible',
  args: {
    isVisible: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Component is hidden when `isVisible` is false.',
      },
    },
  },
};

export const NoLeadingText = {
  name: 'No Leading Text',
  args: {
    state: 'default',
    disabled: false,
    isVisible: true,
    label: 'Email',
    leadingText: '',
    value: 'someone@mail.com',
    hint: 'No left text, only dropdown and input.',
    placeholder: 'Email',
    trailingIcons: ['info', 'arrow'],
    dropdownValue: 'US',
    dropdownOptions: ['US', 'CA', 'FR'],
    onValueChange: fn(),
    onDropdownChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Renders without any text before the dropdown selector.',
      },
    },
  },
};

export const EmptyInput = {
  name: 'Empty Input',
  args: {
    state: 'default',
    disabled: false,
    isVisible: true,
    value: '',
    hint: 'Shows the placeholder when input value is empty.',
    placeholder: 'Type your info',
    trailingIcons: ['info', 'arrow'],
    dropdownValue: 'US',
    dropdownOptions: ['US', 'CA', 'FR'],
    onValueChange: fn(),
    onDropdownChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field is empty and placeholder is visible.',
      },
    },
  },
};