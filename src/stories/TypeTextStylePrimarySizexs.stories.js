import { fn } from '@storybook/test';
import TypeTextStylePrimarySizexs from './TypeTextStylePrimarySizexs';

const leftIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2041_177)">
      <path
        d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      <path
        d="M1.5 6C1.5 6.59095 1.6164 7.17611 1.84254 7.72208C2.06869 8.26804 2.40016 8.76412 2.81802 9.18198C3.23588 9.59984 3.73196 9.93131 4.27792 10.1575C4.82389 10.3836 5.40905 10.5 6 10.5C6.59095 10.5 7.17611 10.3836 7.72208 10.1575C8.26804 9.93131 8.76412 9.59984 9.18198 9.18198C9.59984 8.76412 9.93131 8.26804 10.1575 7.72208C10.3836 7.17611 10.5 6.59095 10.5 6C10.5 5.40905 10.3836 4.82389 10.1575 4.27792C9.93131 3.73196 9.59984 3.23588 9.18198 2.81802C8.76412 2.40016 8.26804 2.06869 7.72208 1.84254C7.17611 1.6164 6.59095 1.5 6 1.5C5.40905 1.5 4.82389 1.6164 4.27792 1.84254C3.73196 2.06869 3.23588 2.40016 2.81802 2.81802C2.40016 3.23588 2.06869 3.73196 1.84254 4.27792C1.6164 4.82389 1.5 5.40905 1.5 6Z"
        stroke="#344054"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2041_179">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default {
  title: 'TypeTextStyle/PrimarySizexs',
  component: TypeTextStylePrimarySizexs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isVisible: true,
    title: "Button",
    showLeftIcon: true,
    showRightIcon: true,
    leftIcon,
    rightIcon,
    onClick: fn(),
    disabled: false,
    className: "",
    buttonType: "button",
    as: "button",
    tabIndex: 0,
  },
  argTypes: {
    leftIcon: { control: false },
    rightIcon: { control: false },
    onClick: { action: 'clicked' }
  },
  documentation: {
    description: {
      component: 'A small, styled button with optional left/right icons and visibility and disabled toggles.'
    }
  }
};

export const Default = {
  name: 'Default (Visible, Enabled, Both Icons)',
  args: {
    isVisible: true,
    showLeftIcon: true,
    showRightIcon: true,
    disabled: false,
  },
};

export const VisibleEnabledLeftIconOnly = {
  name: 'Visible, Enabled, Left Icon Only',
  args: {
    isVisible: true,
    showLeftIcon: true,
    showRightIcon: false,
    disabled: false,
  },
};

export const VisibleEnabledRightIconOnly = {
  name: 'Visible, Enabled, Right Icon Only',
  args: {
    isVisible: true,
    showLeftIcon: false,
    showRightIcon: true,
    disabled: false,
  },
};

export const VisibleEnabledNoIcons = {
  name: 'Visible, Enabled, No Icons',
  args: {
    isVisible: true,
    showLeftIcon: false,
    showRightIcon: false,
    disabled: false,
  },
};

export const VisibleDisabledBothIcons = {
  name: 'Visible, Disabled, Both Icons',
  args: {
    isVisible: true,
    showLeftIcon: true,
    showRightIcon: true,
    disabled: true,
  },
};

export const VisibleDisabledLeftIconOnly = {
  name: 'Visible, Disabled, Left Icon Only',
  args: {
    isVisible: true,
    showLeftIcon: true,
    showRightIcon: false,
    disabled: true,
  },
};

export const VisibleDisabledRightIconOnly = {
  name: 'Visible, Disabled, Right Icon Only',
  args: {
    isVisible: true,
    showLeftIcon: false,
    showRightIcon: true,
    disabled: true,
  },
};

export const VisibleDisabledNoIcons = {
  name: 'Visible, Disabled, No Icons',
  args: {
    isVisible: true,
    showLeftIcon: false,
    showRightIcon: false,
    disabled: true,
  },
};

export const NotVisible = {
  name: 'Not Visible',
  args: {
    isVisible: false,
  },
};

export const CustomButtonTypeSubmit = {
  name: 'Button Type Submit',
  args: {
    buttonType: 'submit',
    as: "button",
    isVisible: true,
    disabled: false,
  },
};

export const RenderAsAnchor = {
  name: 'Rendered as Anchor Tag',
  args: {
    as: 'a',
    isVisible: true,
    disabled: false,
  },
};