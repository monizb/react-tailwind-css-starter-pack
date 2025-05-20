import { fn } from '@storybook/test';
import TypeTextStylePrimarySizexsStateDefault from '../Comp3';

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
  title: 'Components/TypeTextStylePrimarySizexsStateDefault',
  component: TypeTextStylePrimarySizexsStateDefault,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tiny primary button with optional icons and label, xs size, fully customizable visibility and label display.',
      },
    },
  },
  args: {
    isVisible: true,
    className: '',
    showLeftIcon: true,
    leftIcon,
    showRightIcon: true,
    rightIcon,
    label: 'Button',
    showLabel: true,
    labelClassName: '',
  },
  argTypes: {
    isVisible: { control: 'boolean', description: 'Controls visibility of the component' },
    className: { control: 'text', description: 'Custom className for section' },
    showLeftIcon: { control: 'boolean', description: 'Whether to show left icon' },
    leftIcon: { control: false, description: 'Custom left icon node' },
    showRightIcon: { control: 'boolean', description: 'Whether to show right icon' },
    rightIcon: { control: false, description: 'Custom right icon node' },
    label: { control: 'text', description: 'Label text' },
    showLabel: { control: 'boolean', description: 'Whether to show label' },
    labelClassName: { control: 'text', description: 'Custom className for label' },
  },
};

export const Default = {
  name: 'Default (All Visible)',
  args: {},
};

export const HideLeftIcon = {
  name: 'No Left Icon',
  args: {
    showLeftIcon: false,
  },
};

export const HideRightIcon = {
  name: 'No Right Icon',
  args: {
    showRightIcon: false,
  },
};

export const HideBothIcons = {
  name: 'No Icons',
  args: {
    showLeftIcon: false,
    showRightIcon: false,
  },
};

export const HideLabel = {
  name: 'No Label',
  args: {
    showLabel: false,
  },
};

export const LeftIconOnly = {
  name: 'Only Left Icon',
  args: {
    showLeftIcon: true,
    showRightIcon: false,
    showLabel: false,
  },
};

export const RightIconOnly = {
  name: 'Only Right Icon',
  args: {
    showLeftIcon: false,
    showRightIcon: true,
    showLabel: false,
  },
};

export const LabelOnly = {
  name: 'Only Label',
  args: {
    showLeftIcon: false,
    showRightIcon: false,
    showLabel: true,
  },
};

export const Invisible = {
  name: 'Not Visible',
  args: {
    isVisible: false,
  },
};

export const CustomLabel = {
  name: 'Custom Label',
  args: {
    label: 'Custom Text',
  },
};

export const CustomClassName = {
  name: 'Custom Class Name',
  args: {
    className: 'bg-green-500',
  },
};

export const CustomLabelClassName = {
  name: 'Custom Label Class Name',
  args: {
    labelClassName: 'italic underline',
  },
};

export const HideLabelWithIcons = {
  name: 'Icons Only (No Label)',
  args: {
    showLabel: false,
    showLeftIcon: true,
    showRightIcon: true,
  },
};

export const HideLeftShowRight = {
  name: 'Right Icon and Label Only',
  args: {
    showLeftIcon: false,
    showRightIcon: true,
    showLabel: true,
  },
};

export const ShowLeftHideRight = {
  name: 'Left Icon and Label Only',
  args: {
    showLeftIcon: true,
    showRightIcon: false,
    showLabel: true,
  },
};