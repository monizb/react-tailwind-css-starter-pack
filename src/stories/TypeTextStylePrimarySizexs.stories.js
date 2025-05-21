import { fn } from '@storybook/test';
import TypeTextStylePrimarySizexs from './TypeTextStylePrimarySizexs';

const leftIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2041_177)">
      <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_2041_177">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const rightIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2041_179)">
      <path d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z" stroke="#344054" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_2041_179">
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
    title: 'Button',
    showLeftIcon: true,
    showRightIcon: true,
    leftIcon,
    rightIcon,
    isVisible: true,
    disabled: false,
    onClick: fn(),
    className: '',
    leftIconClassName: '',
    rightIconClassName: '',
    buttonType: 'button',
    tabIndex: 0,
    ariaLabel: undefined,
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  documentation: {
    description: {
      component: 'Small primary button with customizable left/right icons, visibility, and disabled states.',
    },
  },
};

export const Default = {
  name: 'Default (Both Icons, Enabled)',
  args: {
    showLeftIcon: true,
    showRightIcon: true,
    disabled: false,
    isVisible: true,
  },
};

export const NoIcons = {
  name: 'No Icons',
  args: {
    showLeftIcon: false,
    showRightIcon: false,
    disabled: false,
    isVisible: true,
  },
};

export const OnlyLeftIcon = {
  name: 'Left Icon Only',
  args: {
    showLeftIcon: true,
    showRightIcon: false,
    disabled: false,
    isVisible: true,
  },
};

export const OnlyRightIcon = {
  name: 'Right Icon Only',
  args: {
    showLeftIcon: false,
    showRightIcon: true,
    disabled: false,
    isVisible: true,
  },
};

export const DisabledBothIcons = {
  name: 'Disabled (Both Icons)',
  args: {
    showLeftIcon: true,
    showRightIcon: true,
    disabled: true,
    isVisible: true,
  },
};

export const DisabledNoIcons = {
  name: 'Disabled (No Icons)',
  args: {
    showLeftIcon: false,
    showRightIcon: false,
    disabled: true,
    isVisible: true,
  },
};

export const DisabledLeftIconOnly = {
  name: 'Disabled (Left Icon Only)',
  args: {
    showLeftIcon: true,
    showRightIcon: false,
    disabled: true,
    isVisible: true,
  },
};

export const DisabledRightIconOnly = {
  name: 'Disabled (Right Icon Only)',
  args: {
    showLeftIcon: false,
    showRightIcon: true,
    disabled: true,
    isVisible: true,
  },
};

export const Hidden = {
  name: 'Hidden (isVisible=false)',
  args: {
    isVisible: false,
  },
};

export const CustomAriaLabel = {
  name: 'Custom Aria Label',
  args: {
    ariaLabel: 'Custom Accessible Button',
    isVisible: true,
  },
};

export const CustomTabIndex = {
  name: 'Custom Tab Index',
  args: {
    tabIndex: 2,
    isVisible: true,
  },
};

export const CustomClassNames = {
  name: 'Custom Class Names',
  args: {
    className: 'ring-2 ring-green-500',
    leftIconClassName: 'text-red-500',
    rightIconClassName: 'text-blue-500',
    isVisible: true,
  },
};

export const SubmitButtonType = {
  name: 'Submit Button Type',
  args: {
    buttonType: 'submit',
    isVisible: true,
  },
};

export const LeftIconOnlyHiddenRight = {
  name: 'Left Icon, No Right Icon (Explicit)',
  args: {
    showLeftIcon: true,
    showRightIcon: false,
    isVisible: true,
  },
};

export const RightIconOnlyHiddenLeft = {
  name: 'Right Icon, No Left Icon (Explicit)',
  args: {
    showLeftIcon: false,
    showRightIcon: true,
    isVisible: true,
  },
};