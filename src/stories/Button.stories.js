import { fn } from '@storybook/test';
import HyButton, { HyButtonIcon } from './Button';

export default {
  title: 'Components/HyButton',
  component: HyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible and customizable Button component supporting various colors, sizes, fill/outline/text variants, icon support, loading and disabled states.',
      },
    },
  },
  args: {
    label: 'Button',
    size: 'md',
    color: 'violet',
    filled: true,
    rounded: 'md',
    withRightIcon: true,
    withLeftIcon: true,
    isLoading: false,
    isVisible: true,
    outline: false,
    className: '',
    onClick: fn(),
    type: 'button',
    style: undefined,
    icon: 'violetFilled',
    as: 'button',
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    color: { control: 'select', options: ['violet', 'emerald', 'red', 'amber', 'purple', 'slate', 'gray', 'white', 'emeraldLight', 'emeraldSuperLight', 'redLight', 'amberLight', 'gray300'] },
    filled: { control: 'boolean' },
    rounded: { control: 'select', options: ['md', 'lg', 'xl', 'full', '[10px]', '[5px]'] },
    withRightIcon: { control: 'boolean' },
    withLeftIcon: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    isVisible: { control: 'boolean' },
    outline: { control: 'boolean' },
    icon: { control: 'select', options: ['violetFilled'] },
    as: { control: 'select', options: ['button', 'a', 'div', 'span'] },
    disabled: { control: 'boolean' },
  }
};

// Default filled, active, visible, so default story
export const FilledActiveVisible = {
  name: 'Filled / Active / Visible',
  args: {
    filled: true,
    disabled: false,
    isLoading: false,
    isVisible: true,
    outline: false,
  },
};

// Outline, active
export const OutlineActiveVisible = {
  name: 'Outline / Active / Visible',
  args: {
    filled: false,
    outline: true,
    disabled: false,
    isLoading: false,
    isVisible: true,
  },
};

// Filled, disabled
export const FilledDisabled = {
  name: 'Filled / Disabled',
  args: {
    filled: true,
    disabled: true,
    isLoading: false,
    isVisible: true,
    outline: false,
  },
};

// Outline, disabled
export const OutlineDisabled = {
  name: 'Outline / Disabled',
  args: {
    filled: false,
    outline: true,
    disabled: true,
    isLoading: false,
    isVisible: true,
  },
};

// Filled, loading
export const FilledLoading = {
  name: 'Filled / Loading',
  args: {
    filled: true,
    disabled: false,
    isLoading: true,
    isVisible: true,
    outline: false,
  },
};

// Outline, loading
export const OutlineLoading = {
  name: 'Outline / Loading',
  args: {
    filled: false,
    outline: true,
    disabled: false,
    isLoading: true,
    isVisible: true,
  },
};

// Not visible
export const NotVisible = {
  name: 'Not Visible',
  args: {
    isVisible: false,
  },
};

// All Icon toggles: both, left-only, right-only, none
export const IconsBoth = {
  name: 'With Both Icons',
  args: {
    withLeftIcon: true,
    withRightIcon: true,
  }
};

export const LeftIconOnly = {
  name: 'With Left Icon Only',
  args: {
    withLeftIcon: true,
    withRightIcon: false,
  }
};

export const RightIconOnly = {
  name: 'With Right Icon Only',
  args: {
    withLeftIcon: false,
    withRightIcon: true,
  }
};

export const NoIcons = {
  name: 'No Icons',
  args: {
    withLeftIcon: false,
    withRightIcon: false,
  }
};

// Roundings
export const RoundedMd = {
  name: 'Rounded md',
  args: {
    rounded: 'md',
  }
};

export const RoundedLg = {
  name: 'Rounded lg',
  args: {
    rounded: 'lg',
  }
};

export const RoundedXl = {
  name: 'Rounded xl',
  args: {
    rounded: 'xl',
  }
};

export const RoundedFull = {
  name: 'Rounded full',
  args: {
    rounded: 'full',
  }
};

// Sizes: xs, sm, md, lg, xl, 2xl
export const SizeXs = {
  name: 'Size XS',
  args: {
    size: 'xs',
  }
};

export const SizeSm = {
  name: 'Size SM',
  args: {
    size: 'sm',
  }
};

export const SizeMd = {
  name: 'Size MD',
  args: {
    size: 'md',
  }
};

export const SizeLg = {
  name: 'Size LG',
  args: {
    size: 'lg',
  }
};

export const SizeXl = {
  name: 'Size XL',
  args: {
    size: 'xl',
  }
};

export const Size2xl = {
  name: 'Size 2XL',
  args: {
    size: '2xl',
  }
};

// Common color variants, filled & outline for each
export const FilledViolet = {
  name: 'Filled Violet',
  args: { color: 'violet', filled: true }
};
export const OutlineViolet = {
  name: 'Outline Violet',
  args: { color: 'violet', filled: false, outline: true }
};

export const FilledWhite = {
  name: 'Filled White',
  args: { color: 'white', filled: true }
};
export const OutlineWhite = {
  name: 'Outline White',
  args: { color: 'white', filled: false, outline: true }
};

export const FilledEmerald = {
  name: 'Filled Emerald',
  args: { color: 'emerald', filled: true }
};
export const OutlineEmerald = {
  name: 'Outline Emerald',
  args: { color: 'emerald', filled: false, outline: true }
};

export const FilledRed = {
  name: 'Filled Red',
  args: { color: 'red', filled: true }
};
export const OutlineRed = {
  name: 'Outline Red',
  args: { color: 'red', filled: false, outline: true }
};

export const FilledAmber = {
  name: 'Filled Amber',
  args: { color: 'amber', filled: true }
};
export const OutlineAmber = {
  name: 'Outline Amber',
  args: { color: 'amber', filled: false, outline: true }
};

export const FilledPurple = {
  name: 'Filled Purple',
  args: { color: 'purple', filled: true }
};
export const OutlinePurple = {
  name: 'Outline Purple',
  args: { color: 'purple', filled: false, outline: true }
};

export const FilledGray = {
  name: 'Filled Gray',
  args: { color: 'gray', filled: true }
};
export const OutlineGray = {
  name: 'Outline Gray',
  args: { color: 'gray', filled: false, outline: true }
};

export const FilledSlate = {
  name: 'Filled Slate',
  args: { color: 'slate', filled: true }
};
export const OutlineSlate = {
  name: 'Outline Slate',
  args: { color: 'slate', filled: false, outline: true }
};

export const FilledGray300 = {
  name: 'Filled Gray300',
  args: { color: 'gray300', filled: true }
};
export const OutlineGray300 = {
  name: 'Outline Gray300',
  args: { color: 'gray300', filled: false, outline: true }
};

// Also create a story for a custom rendered element (as="a")
export const AsAnchor = {
  name: 'Rendered as Anchor',
  args: {
    as: 'a',
    href: 'https://storybook.js.org/',
    target: '_blank',
    rel: 'noopener noreferrer',
  }
};

// -- HyButtonIcon stories --
export const IconButtonDefault = {
  name: 'Icon Button Default',
  render: (args) => <HyButtonIcon {...args} onClick={fn()} />,
  args: {},
  parameters: {
    docs: { description: { story: 'Standalone icon button.' } },
  },
};

export const IconButtonDisabled = {
  name: 'Icon Button Disabled',
  render: (args) => <HyButtonIcon {...args} disabled onClick={fn()} />,
  args: {},
  parameters: {
    docs: { description: { story: 'Disabled icon-only button.' } },
  },
};

export const IconButtonHidden = {
  name: 'Icon Button Hidden',
  render: (args) => <HyButtonIcon {...args} isVisible={false} onClick={fn()} />,
  args: {},
  parameters: {
    docs: { description: { story: 'Hidden icon-only button.' } },
  },
};

export const IconButtonSizes = {
  name: 'Icon Button Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <HyButtonIcon size="6" onClick={fn()} />
      <HyButtonIcon size="7" onClick={fn()} />
      <HyButtonIcon size="8" onClick={fn()} />
      <HyButtonIcon size="10" onClick={fn()} />
      <HyButtonIcon size="12" onClick={fn()} />
    </div>
  ),
  parameters: {
    docs: { description: { story: 'All available icon-only sizes.' } },
  },
};