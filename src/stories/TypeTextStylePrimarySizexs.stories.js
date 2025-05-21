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
          'A small, primary button with optional left/right icons, full accessibility, and supports both button and div elements.',
      },
    },
  },
  args: {
    title: 'Button',
    leftIcon: true,
    rightIcon: true,
    leftIconSvg: undefined,
    rightIconSvg: undefined,
    isVisible: true,
    className: '',
    onClick: fn(),
    as: 'button',
    disabled: false,
    tabIndex: 0,
    ariaLabel: undefined,
  },
};

export const Default = {
  name: 'Default (Button, Both Icons, Active)',
  args: {},
};

export const LeftIconOnly = {
  name: 'Left Icon Only',
  args: {
    rightIcon: false,
  },
};

export const RightIconOnly = {
  name: 'Right Icon Only',
  args: {
    leftIcon: false,
  },
};

export const NoIcons = {
  name: 'No Icons',
  args: {
    leftIcon: false,
    rightIcon: false,
  },
};

export const Disabled = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
};

export const Invisible = {
  name: 'Invisible (isVisible=false, should not render)',
  args: {
    isVisible: false,
  },
};

export const AsDiv = {
  name: 'As Div (non-button element)',
  args: {
    as: 'div',
  },
};

export const CustomTitle = {
  name: 'Custom Title',
  args: {
    title: 'Custom Text',
  },
};

export const CustomTabIndex = {
  name: 'Custom tabIndex',
  args: {
    tabIndex: 2,
  },
};

export const CustomAriaLabel = {
  name: 'Custom aria-label',
  args: {
    ariaLabel: 'This is for accessibility',
  },
};

export const WithCustomLeftIconSVG = {
  name: 'With Custom Left Icon SVG',
  args: {
    leftIconSvg: (
      <svg width="12" height="12" fill="red">
        <circle cx="6" cy="6" r="6" />
      </svg>
    ),
  },
};

export const WithCustomRightIconSVG = {
  name: 'With Custom Right Icon SVG',
  args: {
    rightIconSvg: (
      <svg width="12" height="12" fill="green">
        <rect width="12" height="12" />
      </svg>
    ),
  },
};

export const WithBothCustomSVGs = {
  name: 'With Custom Left and Right SVG Icons',
  args: {
    leftIconSvg: (
      <svg width="12" height="12" fill="blue">
        <circle cx="6" cy="6" r="6" />
      </svg>
    ),
    rightIconSvg: (
      <svg width="12" height="12" fill="orange">
        <rect width="12" height="12" />
      </svg>
    ),
  },
};

export const DisabledNoIcons = {
  name: 'Disabled, No Icons',
  args: {
    disabled: true,
    leftIcon: false,
    rightIcon: false,
  },
};

export const AsDivNoIcons = {
  name: 'As Div, No Icons',
  args: {
    as: 'div',
    leftIcon: false,
    rightIcon: false,
  },
};

export const AsDivDisabled = {
  name: 'As Div, Disabled',
  args: {
    as: 'div',
    disabled: true,
  },
};

export const AsDivCustomTitleNoIcons = {
  name: 'As Div, Custom Title, No Icons',
  args: {
    as: 'div',
    title: 'Div Custom',
    leftIcon: false,
    rightIcon: false,
  },
};