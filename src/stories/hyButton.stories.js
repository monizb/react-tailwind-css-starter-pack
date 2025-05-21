import React from 'react';
import { fn } from '@storybook/test';
import hyButton from './hyButton';

export default {
  title: 'Components/Button',
  component: hyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A highly flexible button component supporting variant, color, size, fullWidth, disabled, icon placement and more. Includes all interactive and visual states.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: hyButton.Sizes,
      description: 'Button size',
    },
    color: {
      control: { type: 'select' },
      options: hyButton.Colors,
      description: 'Button color',
    },
    variant: {
      control: { type: 'select' },
      options: hyButton.Variants,
      description: 'Button variant',
    },
    leftIcon: { control: 'boolean', description: 'Show left icon' },
    rightIcon: { control: 'boolean', description: 'Show right icon' },
    isVisible: { control: 'boolean', description: 'Visiblity of button' },
    disabled: { control: 'boolean', description: 'Disable the button' },
    fullWidth: { control: 'boolean', description: 'Button takes full width' },
    underline: { control: 'boolean', description: 'Underline text' },
    text: { control: 'text', description: 'Button text' },
    onClick: { action: 'clicked', table: { disable: true } },
  },
  args: {
    size: 'md',
    color: 'primary',
    variant: 'solid',
    leftIcon: true,
    rightIcon: true,
    text: 'Button',
    isVisible: true,
    disabled: false,
    fullWidth: false,
    underline: false,
    onClick: fn(),
  },
};

// Default story: All features enabled (default configuration)
export const Default = {
  name: 'Default',
  args: {
    // inherits from default args: everything enabled
  },
  parameters: {
    docs: {
      description: {
        story: 'Default Button with all features enabled. Includes left and right icons, visible, enabled, normal width.',
      },
    },
  },
};

// Control story: for switching among sizes, variant, colors from the toolbar
export const Playground = {
  name: 'Playground',
  args: {
    size: 'md',
    color: 'primary',
    variant: 'solid',
    leftIcon: true,
    rightIcon: true,
    text: 'Button',
    isVisible: true,
    disabled: false,
    fullWidth: false,
    underline: false,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactively change all button props.',
      },
    },
  },
};

// Size Variations Dropdown Demo
export const AllSizes = {
  name: 'All Sizes',
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {hyButton.Sizes.map((size) => (
        <hyButton key={size} {...args} size={size}>
          Size: {size.toUpperCase()}
        </hyButton>
      ))}
    </div>
  ),
  args: {
    color: 'primary',
    variant: 'solid',
    leftIcon: true,
    rightIcon: true,
    fullWidth: false,
    disabled: false,
    isVisible: true,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcases all button sizes.',
      },
    },
  },
};

// Color Variants Dropdown Demo
export const AllColors = {
  name: 'All Colors',
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {hyButton.Colors.map((color) => (
        <hyButton key={color} {...args} color={color}>
          Color: {color}
        </hyButton>
      ))}
    </div>
  ),
  args: {
    size: 'md',
    variant: 'solid',
    leftIcon: true,
    rightIcon: true,
    fullWidth: false,
    disabled: false,
    isVisible: true,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcases all color options.',
      },
    },
  },
};

// Variant Dropdown Demo
export const AllVariants = {
  name: 'All Variants',
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {hyButton.Variants.map((variant) => (
        <hyButton key={variant} {...args} variant={variant}>
          Variant: {variant}
        </hyButton>
      ))}
    </div>
  ),
  args: {
    size: 'md',
    color: 'primary',
    leftIcon: true,
    rightIcon: true,
    fullWidth: false,
    disabled: false,
    isVisible: true,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcases all variant styles.',
      },
    },
  },
};

// Boolean State Stories

export const Disabled = {
  name: 'Disabled',
  args: {
    disabled: true,
    isVisible: true,
    text: 'Disabled',
    size: 'md',
    color: 'primary',
    variant: 'solid',
    leftIcon: true,
    rightIcon: true,
    fullWidth: false,
    underline: false,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Button disabled state.',
      },
    },
  },
};

export const Invisible = {
  name: 'Invisible',
  args: {
    isVisible: false,
    text: 'Invisible',
    size: 'md',
    color: 'primary',
    variant: 'solid',
    leftIcon: true,
    rightIcon: true,
    fullWidth: false,
    underline: false,
    disabled: false,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Button hidden (renders nothing if not visible).',
      },
    },
  },
};

export const FullWidth = {
  name: 'Full Width',
  args: {
    fullWidth: true,
    text: 'Full Width',
    size: 'md',
    color: 'primary',
    variant: 'solid',
    leftIcon: true,
    rightIcon: true,
    isVisible: true,
    disabled: false,
    underline: false,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Button fills the entire available width.',
      },
    },
  },
};

export const Underline = {
  name: 'Underline',
  args: {
    underline: true,
    text: 'Underlined',
    size: 'md',
    color: 'primary',
    variant: 'underlined',
    leftIcon: true,
    rightIcon: true,
    isVisible: true,
    disabled: false,
    fullWidth: false,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with underlined text (underlined variant).',
      },
    },
  },
};

export const NoIcons = {
  name: 'No Icons',
  args: {
    leftIcon: false,
    rightIcon: false,
    text: 'No Icons',
    size: 'md',
    color: 'primary',
    variant: 'solid',
    isVisible: true,
    disabled: false,
    fullWidth: false,
    underline: false,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with no left or right icon.',
      },
    },
  },
};

export const LeftIconOnly = {
  name: 'Left Icon Only',
  args: {
    leftIcon: true,
    rightIcon: false,
    text: 'Left Icon Only',
    size: 'md',
    color: 'primary',
    variant: 'solid',
    isVisible: true,
    disabled: false,
    fullWidth: false,
    underline: false,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with only a left icon.',
      },
    },
  },
};

export const RightIconOnly = {
  name: 'Right Icon Only',
  args: {
    leftIcon: false,
    rightIcon: true,
    text: 'Right Icon Only',
    size: 'md',
    color: 'primary',
    variant: 'solid',
    isVisible: true,
    disabled: false,
    fullWidth: false,
    underline: false,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with only a right icon.',
      },
    },
  },
};

// State x Variant Grid for completeness (showcases combinatorials in a grid)
export const StateVariantGrid = {
  name: 'State x Variant Grid',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {['solid', 'outline', 'flat', 'ghost', 'underlined'].map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <hyButton {...args} variant={variant} disabled={false}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </hyButton>
          <hyButton {...args} variant={variant} disabled={true}>
            Disabled
          </hyButton>
          <hyButton {...args} variant={variant} leftIcon={false} rightIcon={false}>
            No Icons
          </hyButton>
          <hyButton {...args} variant={variant} underline>
            Underlined
          </hyButton>
        </div>
      ))}
    </div>
  ),
  args: {
    size: 'md',
    color: 'primary',
    leftIcon: true,
    rightIcon: true,
    isVisible: true,
    fullWidth: false,
    text: 'Button',
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'All states × variants grid (active, disabled, no icons, underlined).',
      },
    },
  },
};