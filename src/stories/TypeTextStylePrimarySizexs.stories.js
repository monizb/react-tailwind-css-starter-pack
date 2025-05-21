import { fn } from '@storybook/test';
import TypeTextStylePrimarySizexs from './TypeTextStylePrimarySizexs';

const leftIconSVG = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_12168)">
      <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_1_12168">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const rightIconSVG = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_12170)">
      <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_1_12170">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default {
  title: 'Example/TypeTextStylePrimarySizexs',
  component: TypeTextStylePrimarySizexs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isVisible: true,
    title: 'Button',
    leftIcon: true,
    leftIconSVG,
    rightIcon: true,
    rightIconSVG,
    onClick: fn(),
    as: "button",
    disabled: false,
    tabIndex: 0,
    ariaLabel: undefined,
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['button', 'a', 'div'],
      description: 'The HTML element to render as.',
    },
    isVisible: {
      control: 'boolean',
      description: 'Whether the button is visible.',
    },
    title: {
      control: 'text',
      description: 'Button text.',
    },
    leftIcon: {
      control: 'boolean',
      description: 'Show left icon.',
    },
    rightIcon: {
      control: 'boolean',
      description: 'Show right icon.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state.',
    },
    leftIconSVG: {
      table: {
        disable: true,
      },
    },
    rightIconSVG: {
      table: {
        disable: true,
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler.',
    },
    tabIndex: {
      control: { type: 'number', min: -1, max: 10 },
      description: 'Tab index.',
    },
    ariaLabel: {
      control: 'text',
      description: 'Aria label for accessibility.',
    },
  },
  documentation: {
    description: {
      component: 'Versatile small button with primary styling, optional icons, supports various element types, and accessible labeling.'
    }
  }
};

export const Default = {
  name: 'Default (Visible, Enabled, Both Icons)',
  args: {
    isVisible: true,
    leftIcon: true,
    rightIcon: true,
    disabled: false,
  },
};

export const OnlyLeftIcon = {
  name: 'Only Left Icon',
  args: {
    isVisible: true,
    leftIcon: true,
    rightIcon: false,
    disabled: false,
  },
};

export const OnlyRightIcon = {
  name: 'Only Right Icon',
  args: {
    isVisible: true,
    leftIcon: false,
    rightIcon: true,
    disabled: false,
  },
};

export const NoIcons = {
  name: 'No Icons',
  args: {
    isVisible: true,
    leftIcon: false,
    rightIcon: false,
    disabled: false,
  },
};

export const DisabledBothIcons = {
  name: 'Disabled (Both Icons)',
  args: {
    isVisible: true,
    leftIcon: true,
    rightIcon: true,
    disabled: true,
  },
};

export const DisabledLeftIcon = {
  name: 'Disabled (Left Icon)',
  args: {
    isVisible: true,
    leftIcon: true,
    rightIcon: false,
    disabled: true,
  },
};

export const DisabledRightIcon = {
  name: 'Disabled (Right Icon)',
  args: {
    isVisible: true,
    leftIcon: false,
    rightIcon: true,
    disabled: true,
  },
};

export const DisabledNoIcons = {
  name: 'Disabled (No Icons)',
  args: {
    isVisible: true,
    leftIcon: false,
    rightIcon: false,
    disabled: true,
  },
};

export const NotVisible = {
  name: 'Not Visible',
  args: {
    isVisible: false,
    leftIcon: true,
    rightIcon: true,
    disabled: false,
  },
};

export const AsAnchor = {
  name: 'Rendered as Anchor',
  args: {
    as: 'a',
    isVisible: true,
    leftIcon: true,
    rightIcon: true,
    disabled: false,
    title: 'Link Button',
    ariaLabel: 'Link Button',
  },
};

export const AsDiv = {
  name: 'Rendered as Div',
  args: {
    as: 'div',
    isVisible: true,
    leftIcon: true,
    rightIcon: true,
    disabled: false,
    title: 'Div Element',
    ariaLabel: 'Div Button',
  },
};

export const CustomAriaLabel = {
  name: 'Custom Aria Label',
  args: {
    isVisible: true,
    title: 'Custom Label',
    ariaLabel: 'Accessible Custom Button',
    leftIcon: true,
    rightIcon: true,
    disabled: false,
  },
};

export const TabIndexNegative = {
  name: 'Tab Index -1 (Unfocusable)',
  args: {
    isVisible: true,
    leftIcon: true,
    rightIcon: true,
    tabIndex: -1,
    disabled: false,
  },
};

export const TabIndex3 = {
  name: 'Tab Index 3',
  args: {
    isVisible: true,
    leftIcon: true,
    rightIcon: true,
    tabIndex: 3,
    disabled: false,
  },
};