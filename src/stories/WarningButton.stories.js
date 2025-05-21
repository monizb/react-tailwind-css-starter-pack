import { fn } from '@storybook/test';
import DynamicComponent from './DynamicComponent';
export default {
  title: 'Example/DynamicComponent',
  component: DynamicComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
    isVisible: { control: 'boolean' },
    bgColor: { control: 'select', options: ['Light-Yellow-_hy-fill-yellow-300', 'Light-Blue-_hy-fill-blue-300', 'Light-Green-_hy-fill-green-300', 'red-500'] },
    textColor: { control: 'select', options: ['gray-900', 'white', 'blue-500'] },
    textSize: { control: 'select', options: ['xs', 'sm', 'base', 'lg'] },
    fontWeight: { control: 'select', options: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'] },
    rounded: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'full'] },
    leftIconOutlineColor: { control: 'select', options: ['gray-900', 'blue-500', 'red-500'] },
    rightIconOutlineColor: { control: 'select', options: ['slate-700', 'green-500', 'purple-500'] },
    onClick: { action: 'clicked' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    title: 'Click Me',
    iconLeft: false,
    iconRight: false,
    isVisible: true,
    bgColor: 'Light-Yellow-_hy-fill-yellow-300',
    textColor: 'gray-900',
    textSize: 'xs',
    fontWeight: 'medium',
    rounded: 'md',
    leftIconOutlineColor: 'gray-900',
    rightIconOutlineColor: 'slate-700',
    onClick: fn(),
    isDisabled: false,
  },
};

export const Default = {
  args: {},
};

export const WithLeftIcon = {
  args: {
    iconLeft: true,
  },
};

export const WithRightIcon = {
  args: {
    iconRight: true,
  },
};

export const WithBothIcons = {
  args: {
    iconLeft: true,
    iconRight: true,
  },
};

export const Hidden = {
  args: {
    isVisible: false,
  },
};

export const Disabled = {
  args: {
    isDisabled: true,
  },
};

export const BlueButton = {
  args: {
    bgColor: 'Light-Blue-_hy-fill-blue-300',
    textColor: 'white',
    title: 'Blue Button',
  },
};

export const LargeText = {
  args: {
    textSize: 'lg',
    fontWeight: 'bold',
    title: 'Large Text',
  },
};

export const RoundedFull = {
  args: {
    rounded: 'full',
    title: 'Full Rounded',
  },
};

export const CustomColors = {
  args: {
    bgColor: 'red-500',
    textColor: 'white',
    leftIconOutlineColor: 'blue-500',
    rightIconOutlineColor: 'green-500',
    iconLeft: true,
    iconRight: true,
    title: 'Custom Colors',
  },
};

export const NoTitle = {
  args: {
    title: '',
    iconLeft: true,
    iconRight: true
  }
}

export const SmallTextThinFont = {
    args: {
        textSize: 'xs',
        fontWeight: 'thin',
        title: 'Small Text Thin Font'
    }
}
