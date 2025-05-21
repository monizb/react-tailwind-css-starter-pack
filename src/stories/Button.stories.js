import { fn } from '@storybook/test';
import TypeTextStyleWarningSizexsStateHover from './Button';

export default {
  title: 'Example/TypeTextStyleWarningSizexsStateHover',
  component: TypeTextStyleWarningSizexsStateHover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isVisible: true,
    showLeftIcon: true,
    showRightIcon: true,
    label: 'Button',
    className: '',
    containerProps: { onClick: fn() },
    leftIconProps: { onClick: fn() },
    rightIconProps: { onClick: fn() },
    labelProps: { onClick: fn() },
  },
  argTypes: {
    isVisible: { control: 'boolean', description: 'Show/hide the component' },
    showLeftIcon: { control: 'boolean', description: 'Show/hide the left icon' },
    showRightIcon: { control: 'boolean', description: 'Show/hide the right icon' },
    label: { control: 'text', description: 'Label text' },
    className: { control: 'text', description: 'Additional css class(es)' },
    containerProps: { control: 'object', description: 'Props for the container section' },
    leftIconProps: { control: 'object', description: 'Props for the left icon wrapper' },
    rightIconProps: { control: 'object', description: 'Props for the right icon wrapper' },
    labelProps: { control: 'object', description: 'Props for the label span' },
  },
  // SVG icons have sensible defaults in component itself.
};

export const Default = {
  args: {
    // Defaults from component, all visible and both icons visible
  },
  name: 'Default (Visible, Both Icons)',
};

export const LeftIconOnly = {
  args: {
    isVisible: true,
    showLeftIcon: true,
    showRightIcon: false,
    label: 'Button',
  },
  name: 'Visible, Left Icon Only',
};

export const RightIconOnly = {
  args: {
    isVisible: true,
    showLeftIcon: false,
    showRightIcon: true,
    label: 'Button',
  },
  name: 'Visible, Right Icon Only',
};

export const NoIcons = {
  args: {
    isVisible: true,
    showLeftIcon: false,
    showRightIcon: false,
    label: 'Button',
  },
  name: 'Visible, No Icons',
};

export const HiddenBothIcons = {
  args: {
    isVisible: false,
    showLeftIcon: true,
    showRightIcon: true,
    label: 'Button',
  },
  name: 'Hidden, Both Icons',
};

export const HiddenLeftIconOnly = {
  args: {
    isVisible: false,
    showLeftIcon: true,
    showRightIcon: false,
    label: 'Button',
  },
  name: 'Hidden, Left Icon Only',
};

export const HiddenRightIconOnly = {
  args: {
    isVisible: false,
    showLeftIcon: false,
    showRightIcon: true,
    label: 'Button',
  },
  name: 'Hidden, Right Icon Only',
};

export const HiddenNoIcons = {
  args: {
    isVisible: false,
    showLeftIcon: false,
    showRightIcon: false,
    label: 'Button',
  },
  name: 'Hidden, No Icons',
};

export const CustomLabel = {
  args: {
    isVisible: true,
    showLeftIcon: true,
    showRightIcon: true,
    label: 'Custom Label',
  },
  name: 'Visible, Both Icons, Custom Label',
};

export const WithExtraClassName = {
  args: {
    isVisible: true,
    showLeftIcon: true,
    showRightIcon: true,
    label: 'Button',
    className: 'ring-2 ring-blue-500',
  },
  name: 'Visible, Both Icons, Extra ClassName',
};

export const WithAllCustomProps = {
  args: {
    isVisible: true,
    showLeftIcon: true,
    showRightIcon: true,
    label: 'Button',
    className: 'border border-red-500',
    containerProps: { 'data-testid': 'container', onClick: fn() },
    leftIconProps: { 'data-testid': 'leftIcon', onClick: fn() },
    rightIconProps: { 'data-testid': 'rightIcon', onClick: fn() },
    labelProps: { 'data-testid': 'label', onClick: fn() },
  },
  name: 'Visible, Both Icons, All Custom Props',
};