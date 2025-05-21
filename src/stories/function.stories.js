import { fn } from '@storybook/test';
import { HyButton } from './HyButton';

export default {
  title: 'Components/HyButton',
  component: HyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
      expanded: true,
    },
    docs: {
      description: {
        component: 'A highly customizable button component with support for various sizes, colors, variants (solid, ghost), icon-only, icon-left/right, states (success, error, etc.), and accessibility props.',
      },
    },
  },
  args: {
    size: 'md',
    color: 'violet',
    text: 'Button',
    solid: true,
    ghost: false,
    disabled: false,
    rounded: true,
    className: '',
    style: {},
    icon: true,
    iconRight: true,
    iconLeft: true,
    iconOnly: false,
    iconProps: {},
    iconStroke: undefined,
    iconFill: undefined,
    borderClass: '',
    onClick: fn(),
    isVisible: true,
    animate: false,
    underline: false,
    testId: '',
    ariaLabel: '',
    iconVariant: 'circle',
    iconSize: undefined,
    children: undefined,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    color: {
      control: { type: 'select' },
      options: ['violet', 'white', 'slate', 'error', 'warning', 'success', 'disabled', 'default', 'info'],
      description: 'Button color/theme',
    },
    solid: { control: 'boolean', description: 'Solid background style' },
    ghost: { control: 'boolean', description: 'Ghost variant (transparent background, colored text)' },
    disabled: { control: 'boolean', description: 'Disables the button' },
    rounded: { control: 'boolean', description: 'Rounded borders' },
    icon: { control: 'boolean', description: 'Enable/disable icons' },
    iconLeft: { control: 'boolean', description: 'Show left icon' },
    iconRight: { control: 'boolean', description: 'Show right icon' },
    iconOnly: { control: 'boolean', description: 'Only show icon, no text' },
    isVisible: { control: 'boolean', description: 'Show/hide the button' },
    underline: { control: 'boolean', description: 'Underline text' },
    animate: { control: 'boolean', description: 'Animate on hover/focus' },
    iconVariant: {
      control: { type: 'select' },
      options: ['circle', 'circleAlt', 'thickCircle'],
      description: 'SVG icon path variant',
    },
    iconSize: { control: 'number', description: 'Override icon pixel size' },
    text: { control: 'text', description: 'Button label text' },
    children: { control: 'text', description: 'Button content/children' },
    onClick: { action: 'clicked', table: { disable: true } },
  },
};

export const Default = {
  name: 'Default (All Enabled)',
  args: {
    size: 'md',
    color: 'violet',
    text: 'Button',
    solid: true,
    ghost: false,
    disabled: false,
    rounded: true,
    icon: true,
    iconRight: true,
    iconLeft: true,
    iconOnly: false,
    isVisible: true,
    underline: false,
    animate: false,
    iconVariant: 'circle',
    onClick: fn(),
    children: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary button in its default (solid, functional, all features enabled) state.',
      },
    },
  },
};

export const SolidColors = {
  name: 'Solid / Color Variants',
  args: {
    color: 'violet',
    solid: true,
    ghost: false,
    disabled: false,
    text: 'Solid Button',
  },
  argTypes: {
    color: { control: { type: 'select' }, options: ['violet', 'white', 'slate', 'success', 'warning', 'error', 'info', 'default'] },
  },
  parameters: {
    docs: {
      description: {
        story: 'Set of solid-background color variants. Switch the "color" control to see the effect.',
      },
    },
  },
};

export const GhostVariants = {
  name: 'Ghost Variants',
  args: {
    color: 'violet',
    solid: false,
    ghost: true,
    text: 'Ghost Button',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost buttons have transparent/white backgrounds with colored text. Toggle "color" for different ghost styles.',
      },
    },
  },
};

export const Disabled = {
  name: 'Disabled State',
  args: {
    disabled: true,
    color: 'violet',
    solid: true,
    ghost: false,
    text: 'Disabled',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button in disabled (non-interactable) state, with disabled style and no click handler.',
      },
    },
  },
};

export const Sizes = {
  name: 'Size Variants',
  args: {
    size: 'md',
    color: 'violet',
    text: 'Button',
    solid: true,
    ghost: false,
    disabled: false,
  },
  argTypes: {
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons of different sizes, from xs to xl.',
      },
    },
  },
};

export const IconOnly = {
  name: 'Icon Only',
  args: {
    iconOnly: true,
    icon: true,
    iconLeft: true,
    iconRight: false,
    text: '',
    size: 'md',
    color: 'violet',
    solid: true,
    ghost: false,
  },
  argTypes: {
    iconVariant: { control: { type: 'select' }, options: ['circle', 'circleAlt', 'thickCircle'] },
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
  parameters: {
    docs: {
      description: {
        story: 'Button rendered as only icon (no text). Try changing "iconVariant" and "size".',
      },
    },
  },
};

export const IconLeft = {
  name: 'Icon Left',
  args: {
    icon: true,
    iconOnly: false,
    iconLeft: true,
    iconRight: false,
    solid: true,
    ghost: false,
    color: 'violet',
    text: 'Icon Left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with left icon only.',
      },
    },
  },
};

export const IconRight = {
  name: 'Icon Right',
  args: {
    icon: true,
    iconOnly: false,
    iconLeft: false,
    iconRight: true,
    solid: true,
    ghost: false,
    color: 'violet',
    text: 'Icon Right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with right icon only.',
      },
    },
  },
};

export const NoIcon = {
  name: 'No Icon',
  args: {
    icon: false,
    iconLeft: false,
    iconRight: false,
    iconOnly: false,
    color: 'violet',
    text: 'No Icon',
    solid: true,
    ghost: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with no icons at all (text only).',
      },
    },
  },
};

export const UnderlineAnimated = {
  name: 'Underline and Animated',
  args: {
    underline: true,
    animate: true,
    color: 'violet',
    solid: true,
    ghost: false,
    text: 'Animated Underline',
    disabled: false,
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button text with underline and hover/focus animation effect.',
      },
    },
  },
};

export const VisibilityToggle = {
  name: 'Visibility Toggle',
  args: {
    isVisible: true,
    solid: true,
    text: 'Visible Button',
    color: 'violet',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button can be toggled visible/invisible with "isVisible" boolean.',
      },
    },
  },
};

export const Playground = {
  name: 'Playground (All Props)',
  args: {
    size: 'md',
    color: 'violet',
    text: 'Playground',
    solid: true,
    ghost: false,
    disabled: false,
    rounded: true,
    icon: true,
    iconRight: true,
    iconLeft: true,
    iconOnly: false,
    animate: false,
    underline: false,
    isVisible: true,
    iconVariant: 'circle',
    iconSize: undefined,
    borderClass: '',
    style: {},
    onClick: fn(),
    children: undefined,
    ariaLabel: '',
    testId: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully interactive playground: experiment with all props and possible combinations.',
      },
    },
  },
};

export const AllStatesGallery = {
  name: 'Button Gallery: All States',
  render: () => (
    <div style={{ background: '#fff', width: '100%', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
        <HyButton size="xs" color="violet" text="XS Violet" onClick={fn()} />
        <HyButton size="sm" color="white" text="SM White" onClick={fn()} />
        <HyButton size="md" color="success" text="MD Success" onClick={fn()} />
        <HyButton size="lg" color="error" text="LG Error" onClick={fn()} />
        <HyButton size="xl" color="warning" text="XL Warning" onClick={fn()} />
        <HyButton size="md" color="info" text="Info" onClick={fn()} />
      </div>
      <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
        <HyButton size="md" color="violet" text="Solid" solid onClick={fn()} />
        <HyButton size="md" color="violet" text="Ghost" solid={false} ghost onClick={fn()} />
        <HyButton size="md" color="violet" text="Disabled" disabled onClick={fn()} />
        <HyButton size="md" color="violet" text="Underline" underline onClick={fn()} />
        <HyButton size="md" color="violet" text="Icon Only" iconOnly onClick={fn()} />
        <HyButton size="md" color="violet" text="No Icon" icon={false} iconLeft={false} iconRight={false} onClick={fn()} />
      </div>
      <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
        <HyButton size="md" color="success" text="Success" onClick={fn()} />
        <HyButton size="md" color="error" text="Error" onClick={fn()} />
        <HyButton size="md" color="warning" text="Warning" onClick={fn()} />
        <HyButton size="md" color="default" text="Default" onClick={fn()} />
        <HyButton size="md" color="slate" text="Slate" onClick={fn()} />
      </div>
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'Gallery showcasing all main button states, colors, sizes, and styles for quick visual reference.',
      },
    },
  },
};