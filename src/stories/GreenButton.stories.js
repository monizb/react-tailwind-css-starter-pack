import { fn } from '@storybook/test';
import ButtonComponent from './DynamicComponent';

export default {
  title: 'Example/ButtonComponent',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Click me',
    iconVisible: true,
    iconColor: "white",
    backgroundColor: "emerald-700",
    textColor: "white",
    textSize: "xs",
    font: "Inter",
    rounded: "md",
    hasOutline: false,
    outlineColor: "#344054",
    isLoading: false,
    isDisabled: false,
    onClick: fn(),
    customIcon: null,
    customStyle: "",
  },
};

export const Default = {
  args: {
    title: 'Click me',
  },
};

export const HiddenIcon = {
  args: {
    title: 'Click me',
    iconVisible: false,
  },
};

export const CustomIconColor = {
  args: {
    title: 'Click me',
    iconColor: 'red',
  },
};

export const CustomBackgroundColor = {
  args: {
    title: 'Click me',
    backgroundColor: 'blue-500',
  },
};

export const CustomTextColor = {
  args: {
    title: 'Click me',
    textColor: 'black',
  },
};

export const LargeText = {
  args: {
    title: 'Click me',
    textSize: 'lg',
  },
};

export const DifferentFont = {
  args: {
    title: 'Click me',
    font: 'Arial',
  },
};

export const PillRounded = {
  args: {
    title: 'Click me',
    rounded: 'full',
  },
};

export const Outlined = {
  args: {
    title: 'Click me',
    hasOutline: true,
  },
};

export const CustomOutlineColor = {
  args: {
    title: 'Click me',
    hasOutline: true,
    outlineColor: 'red',
  },
};

export const Loading = {
  args: {
    title: 'Click me',
    isLoading: true,
  },
};

export const Disabled = {
  args: {
    title: 'Click me',
    isDisabled: true,
  },
};

export const WithCustomIcon = {
  args: {
    title: 'Click me',
    customIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
};

export const CustomStyleStory = {
    args: {
      title: "Click me",
      customStyle: "uppercase tracking-wider",
    },
  };

export const IconHiddenAndOutline = {
    args: {
        title: "Click me",
        iconVisible: false,
        hasOutline: true,
    },
};

export const IsDisabledAndLoading = {
    args: {
        title: "Click me",
        isDisabled: true,
        isLoading: true
    }
}