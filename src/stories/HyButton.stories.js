import { fn } from '@storybook/test';
import { HyButton } from './HyButton';

export default {
  title: 'Example/HyButton',
  component: HyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A custom button supporting sizes, variants, colors, left/right icons, and various visual states including disabled and hidden.',
      },
    },
  },
  args: {
    left: undefined,
    top: undefined,
    width: undefined,
    height: undefined,
    variant: 'flat',
    color: 'violet',
    title: 'Button',
    leftIcon: 'circle',
    rightIcon: 'check',
    showLeftIcon: true,
    showRightIcon: true,
    isVisible: true,
    disabled: false,
    size: 'xs',
    customClass: '',
    hideBorder: false,
    underline: false,
    onClick: fn(),
  },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: { control: 'select', options: ['flat','outline','solid','subtle','muted','ghost','gray','disabled'] },
    color: { control: 'select', options: ['violet','gray','purple'] },
    size: { control: 'select', options: ['xs','sm','md','lg','xl'] },
  },
};

export const Default = {
  name: 'Default (Flat, Violet, XS, Icons)',
  args: {
    // Defaults from above
  },
};

// --- Variants ---
export const FlatVioletWithIcons = {
  name: 'Flat Violet (XS, Left & Right Icon)',
  args: {
    variant: 'flat',
    color: 'violet',
    size: 'xs',
    showLeftIcon: true,
    showRightIcon: true,
    title: 'Flat Violet (xs)',
    disabled: false,
    isVisible: true,
    underline: false,
    hideBorder: false,
    onClick: fn(),
  },
};

export const FlatVioletNoIcons = {
  name: 'Flat Violet (XS, No Icons)',
  args: {
    variant: 'flat',
    color: 'violet',
    size: 'xs',
    showLeftIcon: false,
    showRightIcon: false,
    title: 'Flat Violet No Icons',
    disabled: false,
    isVisible: true,
    underline: false,
    hideBorder: false,
    onClick: fn(),
  },
};

export const OutlineViolet = {
  name: 'Outline Violet (SM, All Icons)',
  args: {
    variant: 'outline',
    color: 'violet',
    size: 'sm',
    showLeftIcon: true,
    showRightIcon: true,
    title: 'Outline Violet (sm)',
    disabled: false,
    isVisible: true,
    underline: false,
    hideBorder: false,
    onClick: fn(),
  },
};

export const SubtleViolet = {
  name: 'Subtle Violet (MD, Only Right Icon)',
  args: {
    variant: 'subtle',
    color: 'violet',
    size: 'md',
    showLeftIcon: false,
    showRightIcon: true,
    title: 'Subtle Violet (md)',
    disabled: false,
    isVisible: true,
    underline: false,
    hideBorder: false,
    onClick: fn(),
  },
};

export const SolidVioletUnderline = {
  name: 'Solid Violet (LG, Underline, Only Left Icon)',
  args: {
    variant: 'solid',
    color: 'violet',
    size: 'lg',
    showLeftIcon: true,
    showRightIcon: false,
    title: 'Solid Violet (lg) Underline',
    disabled: false,
    isVisible: true,
    underline: true,
    hideBorder: false,
    onClick: fn(),
  },
};

export const GhostVioletHiddenBorder = {
  name: 'Ghost Violet (XL, No Border, Both Icons)',
  args: {
    variant: 'ghost',
    color: 'violet',
    size: 'xl',
    showLeftIcon: true,
    showRightIcon: true,
    title: 'Ghost Violet (xl)',
    disabled: false,
    isVisible: true,
    underline: false,
    hideBorder: true,
    onClick: fn(),
  },
};

export const MutedGray = {
  name: 'Muted Gray (MD, Both Icons)',
  args: {
    variant: 'muted',
    color: 'gray',
    size: 'md',
    showLeftIcon: true,
    showRightIcon: true,
    title: 'Muted Gray (md)',
    disabled: false,
    isVisible: true,
    underline: false,
    hideBorder: false,
    onClick: fn(),
  },
};

export const GrayVariant = {
  name: 'Gray Variant (SM, Only Left Icon)',
  args: {
    variant: 'gray',
    color: 'gray',
    size: 'sm',
    showLeftIcon: true,
    showRightIcon: false,
    title: 'Gray Variant (sm)',
    disabled: false,
    isVisible: true,
    underline: false,
    hideBorder: false,
    onClick: fn(),
  },
};

// --- Boolean/Stateful Stories ---

export const Disabled = {
  name: 'Disabled (Gray, Solid, XS, Both Icons)',
  args: {
    variant: 'disabled',
    color: 'gray',
    size: 'xs',
    showLeftIcon: true,
    showRightIcon: true,
    title: 'Disabled Button',
    disabled: true,
    isVisible: true,
    underline: false,
    hideBorder: false,
    onClick: fn(),
  },
};

export const NotVisible = {
  name: 'Not Visible (should not render)',
  args: {
    variant: 'flat',
    color: 'violet',
    size: 'xs',
    showLeftIcon: true,
    showRightIcon: true,
    title: 'Invisible Button',
    disabled: false,
    isVisible: false,
    underline: false,
    hideBorder: false,
    onClick: fn(),
  },
};

export const UnderlinedBorderless = {
  name: 'Underlined & Borderless (SM, Violet, No Icons)',
  args: {
    variant: 'flat',
    color: 'violet',
    size: 'sm',
    showLeftIcon: false,
    showRightIcon: false,
    title: 'Underlined & Borderless',
    underline: true,
    hideBorder: true,
    isVisible: true,
    disabled: false,
    onClick: fn(),
  },
};

// --- Icons Only Examples ---
export const IconOnlyCircle = {
  name: 'Icon Only (Left Circle, XS)',
  args: {
    variant: 'flat',
    color: 'violet',
    size: 'xs',
    showLeftIcon: true,
    showRightIcon: false,
    title: '',
    isVisible: true,
    disabled: false,
    onClick: fn(),
    underline: false,
    hideBorder: false,
    'aria-label': 'Circle Only',
  },
};

export const IconCircleAndCheck = {
  name: 'Icon Only (Circle + Check, XS)',
  args: {
    variant: 'flat',
    color: 'violet',
    size: 'xs',
    showLeftIcon: true,
    showRightIcon: true,
    title: '',
    isVisible: true,
    disabled: false,
    onClick: fn(),
    underline: false,
    hideBorder: false,
    'aria-label': 'Circle and Check',
  },
};

// --- All Sizes Matrix (Flat Violet) ---
export const AllSizesFlatViolet = {
  name: 'All Sizes (Flat Violet)',
  render: (args) => (
    <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
      {['xs', 'sm', 'md', 'lg', 'xl'].map((sz) => (
        <HyButton
          key={sz}
          {...args}
          size={sz}
          title={`Flat Violet (${sz})`}
        />
      ))}
    </div>
  ),
  args: {
    variant: 'flat',
    color: 'violet',
    showLeftIcon: true,
    showRightIcon: true,
    isVisible: true,
    disabled: false,
    underline: false,
    hideBorder: false,
    onClick: fn(),
  },
};

export const AllSizesOutlineViolet = {
  name: 'All Sizes (Outline Violet)',
  render: (args) => (
    <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
      {['xs', 'sm', 'md', 'lg', 'xl'].map((sz) => (
        <HyButton
          key={sz}
          {...args}
          size={sz}
          variant="outline"
          title={`Outline Violet (${sz})`}
        />
      ))}
    </div>
  ),
  args: {
    color: 'violet',
    showLeftIcon: true,
    showRightIcon: true,
    isVisible: true,
    disabled: false,
    underline: false,
    hideBorder: false,
    onClick: fn(),
  },
};

export const AllSizesDisabled = {
  name: 'All Sizes Disabled (Gray)',
  render: (args) => (
    <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
      {['xs', 'sm', 'md', 'lg', 'xl'].map((sz) => (
        <HyButton
          key={sz}
          {...args}
          size={sz}
          variant="disabled"
          title={`Disabled (${sz})`}
          disabled
        />
      ))}
    </div>
  ),
  args: {
    color: 'gray',
    showLeftIcon: true,
    showRightIcon: true,
    isVisible: true,
    underline: false,
    hideBorder: false,
    onClick: fn(),
  },
};