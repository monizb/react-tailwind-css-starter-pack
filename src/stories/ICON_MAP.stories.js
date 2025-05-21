import { fn } from '@storybook/test';
import HyButton from './HyButton';

export default {
  title: 'Example/HyButton',
  component: HyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Button',
    color: 'violet',
    size: 'md',
    isDestructive: false,
    isGhost: false,
    leftIcon: undefined,
    rightIcon: undefined,
    isVisible: true,
    onClick: fn(),
    disabled: false,
    className: '',
    role: 'button',
    tabIndex: 0,
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'violet', 'violet-700', 'white', 'slategrey', 'emerald', 'amber', 'red', 'red-700',
        'emerald-800', 'amber-400', 'purple100', 'gray100', 'emerald100', 'amber100', 'red100',
        'amber200', 'emerald200', 'red200', 'gray300'
      ],
      description: 'Color variant for the button',
    },
    size: {
      control: { type: 'select' },
      options: [
        'xs', 'sm', 'md', 'lg', 'xl',
        'icon-xs', 'icon-sm', 'icon-md', 'icon-lg', 'icon-xl'
      ],
      description: 'Size of the button',
    },
    isDestructive: {
      control: 'boolean',
      description: 'Destructive style (usually red)',
    },
    isGhost: {
      control: 'boolean',
      description: 'Ghost (outline/white) style',
    },
    isVisible: {
      control: 'boolean',
      description: 'Renders button if true',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables button',
    },
    label: {
      control: 'text',
      description: 'Button text label',
    },
    leftIcon: {
      control: false,
      description: 'React node for left icon',
    },
    rightIcon: {
      control: false,
      description: 'React node for right icon',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
    className: {
      control: 'text',
      description: 'Extra classes for button',
    },
    role: {
      control: 'text',
      description: 'ARIA role',
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index',
    },
  },
  documentation: {
    description: 'A highly customizable button component with color, size, destructive, ghost, and icon options.',
  }
};

// Default state
export const Default = {
  args: {},
};

// COLORS ONLY
export const Violet = {
  name: 'Violet',
  args: { color: 'violet' }
};
export const Violet700 = {
  name: 'Violet 700',
  args: { color: 'violet-700' }
};
export const White = {
  name: 'White',
  args: { color: 'white' }
};
export const SlateGrey = {
  name: 'Slate Grey',
  args: { color: 'slategrey' }
};
export const Emerald = {
  name: 'Emerald',
  args: { color: 'emerald' }
};
export const Amber = {
  name: 'Amber',
  args: { color: 'amber' }
};
export const Red = {
  name: 'Red',
  args: { color: 'red' }
};
export const Red700 = {
  name: 'Red 700',
  args: { color: 'red-700' }
};
export const Emerald800 = {
  name: 'Emerald 800',
  args: { color: 'emerald-800' }
};
export const Amber400 = {
  name: 'Amber 400',
  args: { color: 'amber-400' }
};
export const Purple100 = {
  name: 'Purple 100',
  args: { color: 'purple100' }
};
export const Gray100 = {
  name: 'Gray 100',
  args: { color: 'gray100' }
};
export const Emerald100 = {
  name: 'Emerald 100',
  args: { color: 'emerald100' }
};
export const Amber100 = {
  name: 'Amber 100',
  args: { color: 'amber100' }
};
export const Red100 = {
  name: 'Red 100',
  args: { color: 'red100' }
};
export const Amber200 = {
  name: 'Amber 200',
  args: { color: 'amber200' }
};
export const Emerald200 = {
  name: 'Emerald 200',
  args: { color: 'emerald200' }
};
export const Red200 = {
  name: 'Red 200',
  args: { color: 'red200' }
};
export const Gray300 = {
  name: 'Gray 300',
  args: { color: 'gray300' }
};

// SIZE ONLY
export const ExtraSmall = {
  name: 'Extra Small',
  args: { size: 'xs' }
};
export const Small = {
  name: 'Small',
  args: { size: 'sm' }
};
export const Medium = {
  name: 'Medium',
  args: { size: 'md' }
};
export const Large = {
  name: 'Large',
  args: { size: 'lg' }
};
export const ExtraLarge = {
  name: 'Extra Large',
  args: { size: 'xl' }
};
export const IconXS = {
  name: 'Icon XS',
  args: { size: 'icon-xs' }
};
export const IconSM = {
  name: 'Icon SM',
  args: { size: 'icon-sm' }
};
export const IconMD = {
  name: 'Icon MD',
  args: { size: 'icon-md' }
};
export const IconLG = {
  name: 'Icon LG',
  args: { size: 'icon-lg' }
};
export const IconXL = {
  name: 'Icon XL',
  args: { size: 'icon-xl' }
};

// Ghost states
export const GhostViolet = {
  name: 'Ghost Violet',
  args: { color: 'violet', isGhost: true }
};
export const GhostEmerald = {
  name: 'Ghost Emerald',
  args: { color: 'emerald', isGhost: true }
};
export const GhostAmber = {
  name: 'Ghost Amber',
  args: { color: 'amber', isGhost: true }
};
export const GhostRed = {
  name: 'Ghost Red',
  args: { color: 'red', isGhost: true }
};
export const GhostGray = {
  name: 'Ghost Gray',
  args: { color: 'slategrey', isGhost: true }
};
export const GhostWhite = {
  name: 'Ghost White',
  args: { color: 'white', isGhost: true }
};

// Destructive state
export const Destructive = {
  name: 'Destructive',
  args: { isDestructive: true }
};
export const DestructiveGhost = {
  name: 'Destructive Ghost',
  args: { isDestructive: true, isGhost: true }
};
export const DestructiveDisabled = {
  name: 'Destructive Disabled',
  args: { isDestructive: true, disabled: true }
};

// Disabled states
export const Disabled = {
  name: 'Disabled',
  args: { disabled: true }
};
export const GhostDisabled = {
  name: 'Ghost Disabled',
  args: { isGhost: true, disabled: true }
};

// isVisible states
export const Invisible = {
  name: 'Not Visible',
  args: { isVisible: false }
};

// Custom icons (SVG placeholder example)
const CustomIcon = (
  <svg width="16" height="16" fill="currentColor">
    <circle cx="8" cy="8" r="7" stroke="orange" strokeWidth="2" fill="none" />
    <path d="M4 8L8 12L12 4" stroke="orange" strokeWidth="2" fill="none"/>
  </svg>
);

export const LeftIcon = {
  name: 'With Left Icon',
  args: { leftIcon: CustomIcon }
};
export const RightIcon = {
  name: 'With Right Icon',
  args: { rightIcon: CustomIcon }
};
export const BothIcons = {
  name: 'With Both Icons',
  args: { leftIcon: CustomIcon, rightIcon: CustomIcon }
};

// Combined variations
export const GhostDisabledLarge = {
  name: 'Ghost + Disabled + Large',
  args: { isGhost: true, disabled: true, size: 'lg' }
};
export const GhostDestructiveSmall = {
  name: 'Ghost + Destructive + Small',
  args: { isGhost: true, isDestructive: true, size: 'sm' }
};
export const DestructiveGhostAmberIcon = {
  name: 'Destructive + Ghost + Amber + Icon-lg',
  args: { isDestructive: true, isGhost: true, color: 'amber', size: 'icon-lg', leftIcon: CustomIcon }
};
export const DisabledWhiteXL = {
  name: 'Disabled + White + XL',
  args: { disabled: true, color: 'white', size: 'xl' }
};