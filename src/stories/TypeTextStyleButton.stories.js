import { fn } from '@storybook/test';
import TypeTextStyleButton from './TypeTextStyleButton';

const VARIANT_OPTIONS = ['success', 'warning', 'error'];
const SIZE_OPTIONS = ['sm', 'md', 'lg', 'xl'];

export default {
  title: 'Example/TypeTextStyleButton',
  component: TypeTextStyleButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      description: 'Visual/semantic style of the button',
      options: VARIANT_OPTIONS,
      control: { type: 'select' },
      table: { defaultValue: { summary: 'success' } },
    },
    size: {
      description: 'Size of the button',
      options: SIZE_OPTIONS,
      control: { type: 'select' },
      table: { defaultValue: { summary: 'sm' } },
    },
    startIcon: {
      description: 'Show start icon',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: true } },
    },
    endIcon: {
      description: 'Show end icon',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: true } },
    },
    isVisible: {
      description: 'Show/hide the button',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: true } },
    },
    disabled: {
      description: 'Disable the button',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: false } },
    },
    title: {
      description: 'Button text',
      control: { type: 'text' },
      table: { defaultValue: { summary: 'Button' } },
    },
    onClick: { action: 'clicked', table: { type: { summary: 'function' } } },
    className: { control: false },
  },
  args: {
    title: 'Button',
    startIcon: true,
    endIcon: true,
    isVisible: true,
    onClick: fn(),
    variant: 'success',
    size: 'sm',
    disabled: false,
    className: '',
  },
};

export const Default = {
  args: {
    title: 'Button',
    startIcon: true,
    endIcon: true,
    isVisible: true,
    onClick: fn(),
    variant: 'success',
    size: 'sm',
    disabled: false,
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully featured button with all props enabled (default state).',
      },
    },
  },
};

export const WithoutStartIcon = {
  name: 'No Start Icon',
  args: {
    startIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button without a start icon.',
      },
    },
  },
};

export const WithoutEndIcon = {
  name: 'No End Icon',
  args: {
    endIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button without an end icon.',
      },
    },
  },
};

export const OnlyTitle = {
  name: 'Title Only',
  args: {
    startIcon: false,
    endIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with only text, no icons.',
      },
    },
  },
};

export const Disabled = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button is disabled and not clickable.',
      },
    },
  },
};

export const Hidden = {
  name: 'Hidden',
  args: {
    isVisible: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button is hidden when isVisible is false.',
      },
    },
  },
};

export const Variants = {
  name: 'Variant Dropdown',
  args: {
    variant: 'success',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: VARIANT_OPTIONS,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch between button visual variants (success, warning, error).',
      },
    },
  },
};

export const Sizes = {
  name: 'Size Dropdown',
  args: {
    size: 'sm',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: SIZE_OPTIONS,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch between button sizes.',
      },
    },
  },
};

export const BooleanCombinations = {
  name: 'Boolean States Playground',
  args: {
    startIcon: false,
    endIcon: true,
    disabled: true,
    isVisible: true,
  },
  argTypes: {
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' },
    disabled: { control: 'boolean' },
    isVisible: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle all boolean properties to observe every combination.',
      },
    },
  },
};