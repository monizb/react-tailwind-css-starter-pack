
import { fn } from '@storybook/test';
import Alert from './DynamicComponent';

export default {
  title: 'Example/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Alert Message',
    bgColor: 'bg-amber-300',
    textColor: 'text-gray-900',
    iconColor: '#101828',
    outlineIconColor: '#344054',
    size: 'h-6',
    textSize: 'text-xs',
    rounded: 'rounded-md',
    hasOutlineIcon: true,
    hasInnerIcon: true,
    isVisible: true,
    className: '',
    px: 'px-2',
    py: 'py-[3px]',
    iconWidth: '12',
    iconHeight: '12',
  },
};

export const Default = {
  args: {
    title: 'Default Alert',
  },
};

export const Hidden = {
  args: {
    title: 'Hidden Alert',
    isVisible: false,
  },
};

export const NoInnerIcon = {
  args: {
    title: 'No Inner Icon',
    hasInnerIcon: false,
  },
};

export const NoOutlineIcon = {
  args: {
    title: 'No Outline Icon',
    hasOutlineIcon: false,
  },
};

export const NoIcons = {
  args: {
    title: 'No Icons',
    hasInnerIcon: false,
    hasOutlineIcon: false,
  },
};

export const CustomColors = {
  args: {
    title: 'Custom Colors',
    bgColor: 'bg-red-500',
    textColor: 'text-white',
    iconColor: 'white',
    outlineIconColor: 'white',
  },
};

export const LargeSize = {
  args: {
    title: 'Large Size',
    size: 'h-8',
    textSize: 'text-sm',
    iconWidth: '16',
    iconHeight: '16'
  },
};

export const SmallSize = {
  args: {
    title: 'Small Size',
    size: 'h-4',
    textSize: 'text-xxs',
    iconWidth: '8',
    iconHeight: '8',
  },
};

export const RoundedNone = {
  args: {
    title: 'Rounded None',
    rounded: 'rounded-none',
  },
};

export const CustomPadding = {
  args: {
    title: 'Custom Padding',
    px: 'px-4',
    py: 'py-2',
  },
};

export const CustomClassName = {
  args: {
    title: 'Custom ClassName',
    className: 'uppercase',
  },
};

export const AllOptionsFalse = {
  args: {
    title: 'All Options False',
    hasInnerIcon: false,
    hasOutlineIcon: false,
    isVisible: true,
  },
};