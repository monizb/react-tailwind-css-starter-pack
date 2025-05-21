import { fn } from '@storybook/test';
import TypeTextStylePrimarySizexs from './TypeTextStylePrimarySizexs';

export default {
  title: 'Components/TypeTextStylePrimarySizexs',
  component: TypeTextStylePrimarySizexs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A small, primary-styled button with optional left/right icons, visibility, disabled state, and outline.',
      },
    },
  },
  args: {
    title: 'Button',
    leftIcon: true,
    rightIcon: true,
    isVisible: true,
    isDisabled: false,
    isOutlined: true,
    className: '',
    onClick: fn(),
    leftIconSvg: null,
    rightIconSvg: null,
  },
  argTypes: {
    leftIconSvg: {
      control: false,
      description: 'Custom SVG node for left icon',
    },
    rightIconSvg: {
      control: false,
      description: 'Custom SVG node for right icon',
    },
    onClick: {
      action: 'clicked',
      description: 'Button click handler',
    },
  },
};

export const Default_AllOptionsEnabled = {
  name: 'Default (All Options Enabled)',
  args: {
    leftIcon: true,
    rightIcon: true,
    isVisible: true,
    isDisabled: false,
    isOutlined: true,
  },
};

export const LeftIconOnly = {
  name: 'Left Icon Only',
  args: {
    leftIcon: true,
    rightIcon: false,
    isVisible: true,
    isDisabled: false,
    isOutlined: true,
  },
};

export const RightIconOnly = {
  name: 'Right Icon Only',
  args: {
    leftIcon: false,
    rightIcon: true,
    isVisible: true,
    isDisabled: false,
    isOutlined: true,
  },
};

export const NoIcons = {
  name: 'No Icons',
  args: {
    leftIcon: false,
    rightIcon: false,
    isVisible: true,
    isDisabled: false,
    isOutlined: true,
  },
};

export const Outlined = {
  name: 'Outlined',
  args: {
    leftIcon: true,
    rightIcon: true,
    isVisible: true,
    isDisabled: false,
    isOutlined: true,
  },
};

export const NotOutlined = {
  name: 'Not Outlined',
  args: {
    leftIcon: true,
    rightIcon: true,
    isVisible: true,
    isDisabled: false,
    isOutlined: false,
  },
};

export const Disabled = {
  name: 'Disabled',
  args: {
    leftIcon: true,
    rightIcon: true,
    isVisible: true,
    isDisabled: true,
    isOutlined: true,
  },
};

export const DisabledNotOutlined = {
  name: 'Disabled & Not Outlined',
  args: {
    leftIcon: true,
    rightIcon: true,
    isVisible: true,
    isDisabled: true,
    isOutlined: false,
  },
};

export const DisabledNoIcons = {
  name: 'Disabled, No Icons',
  args: {
    leftIcon: false,
    rightIcon: false,
    isVisible: true,
    isDisabled: true,
    isOutlined: true,
  },
};

export const NotVisible = {
  name: 'Not Visible',
  args: {
    leftIcon: true,
    rightIcon: true,
    isVisible: false,
    isDisabled: false,
    isOutlined: true,
  },
};

export const LeftIconOnly_NotOutlined = {
  name: 'Left Icon Only, Not Outlined',
  args: {
    leftIcon: true,
    rightIcon: false,
    isVisible: true,
    isDisabled: false,
    isOutlined: false,
  },
};

export const RightIconOnly_Disabled = {
  name: 'Right Icon Only, Disabled',
  args: {
    leftIcon: false,
    rightIcon: true,
    isVisible: true,
    isDisabled: true,
    isOutlined: true,
  },
};

export const NoIcons_NotOutlined = {
  name: 'No Icons, Not Outlined',
  args: {
    leftIcon: false,
    rightIcon: false,
    isVisible: true,
    isDisabled: false,
    isOutlined: false,
  },
};

export const AllDisabledNotOutlined = {
  name: 'Disabled, Not Outlined, No Icons',
  args: {
    leftIcon: false,
    rightIcon: false,
    isVisible: true,
    isDisabled: true,
    isOutlined: false,
  },
};