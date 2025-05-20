import { fn } from '@storybook/test';
import DynamicButton from './DynamicButton';

export default {
  title: 'Example/DynamicButton',
  component: DynamicButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    buttonText: 'Click me',
    iconStart: false,
    iconEnd: false,
    bgColor: 'violet-600',
    textColor: 'white',
    borderColor: 'violet-600',
    textSize: 'xs',
    font: 'Inter',
    hasOutline: true,
    rounded: 'md',
    px: 2,
    py: '[3px]',
    startIconColor: 'white',
    endIconColor: '#344054',
    isDisabled: false,
    isVisible: true,
    customClasses: '',
    onClick: fn(),
  },
};

export const Default = {
  args: {},
};

export const WithStartIcon = {
  args: {
    iconStart: true,
    buttonText: 'Start Icon',
  },
};

export const WithEndIcon = {
  args: {
    iconEnd: true,
    buttonText: 'End Icon',
  },
};

export const WithBothIcons = {
  args: {
    iconStart: true,
    iconEnd: true,
    buttonText: 'Both Icons',
  },
};

export const DifferentBgColor = {
  args: {
    bgColor: 'blue-500',
    buttonText: 'Blue Background',
  },
};

export const DifferentTextColor = {
  args: {
    textColor: 'black',
    buttonText: 'Black Text',
  },
};

export const DifferentBorderColor = {
  args: {
    borderColor: 'green-500',
    buttonText: 'Green Border',
  },
};

export const DifferentTextSize = {
  args: {
    textSize: 'lg',
    buttonText: 'Large Text',
  },
};

export const DifferentFont = {
  args: {
    font: 'Arial',
    buttonText: 'Arial Font',
  },
};

export const NoOutline = {
  args: {
    hasOutline: false,
    buttonText: 'No Outline',
  },
};

export const DifferentRounded = {
  args: {
    rounded: 'full',
    buttonText: 'Rounded Full',
  },
};

export const DifferentPadding = {
  args: {
    px: 4,
    py: '[5px]',
    buttonText: 'Different Padding',
  },
};

export const DifferentIconColors = {
  args: {
    iconStart: true,
    iconEnd: true,
    startIconColor: 'red',
    endIconColor: 'purple',
    buttonText: 'Different Icon Colors',
  },
};

export const Disabled = {
  args: {
    isDisabled: true,
    buttonText: 'Disabled',
  },
};

export const Hidden = {
  args: {
    isVisible: false,
    buttonText: 'Hidden',
  },
};

export const CustomClasses = {
  args: {
    customClasses: 'uppercase tracking-wider',
    buttonText: 'Custom Classes',
  },
};

export const AllProps = {
  args: {
    buttonText: 'All Props',
    iconStart: true,
    iconEnd: true,
    bgColor: 'red-500',
    textColor: 'yellow',
    borderColor: 'orange-500',
    textSize: 'xl',
    font: 'Verdana',
    hasOutline: false,
    rounded: 'xl',
    px: 6,
    py: '[7px]',
    startIconColor: 'blue',
    endIconColor: 'green',
    isDisabled: false,
    isVisible: true,
    customClasses: 'shadow-md',
  },
};