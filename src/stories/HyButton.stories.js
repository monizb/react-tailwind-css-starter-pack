import { fn } from '@storybook/test';
import HyButton from './HyButton';

export default {
  title: 'Components/HyButton',
  component: HyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A highly composable and style-rich button supporting sizes, colors, variants, underline, icon sides, and icon types.',
      },
    },
  },
  args: {
    label: 'Button',
    size: 'md',
    color: 'violet',
    variant: 'solid',
    underline: false,
    icon: null,
    iconSide: 'left',
    isVisible: true,
    disabled: false,
    className: '',
    style: {},
    iconType: null,
    onClick: fn(),
  },
  argTypes: {
    icon: { control: false },
    style: { control: false },
  },
};

/**
 * Default story: Medium, Violet, Solid
 */
export const Default = {
  name: 'Violet Solid Medium',
};

/**
 * All Sizes
 */
export const SmallestSize = {
  name: 'Violet Solid Extra Small',
  args: { size: 'xs' },
};
export const SmallSize = {
  name: 'Violet Solid Small',
  args: { size: 'sm' },
};
export const LargeSize = {
  name: 'Violet Solid Large',
  args: { size: 'lg' },
};
export const ExtraLargeSize = {
  name: 'Violet Solid Extra Large',
  args: { size: 'xl' },
};

/**
 * All Variants with Violet
 */
export const VioletSoft = {
  name: 'Violet Soft',
  args: { variant: 'soft' },
};
export const VioletOutlined = {
  name: 'Violet Outlined',
  args: { variant: 'outlined' },
};
export const VioletText = {
  name: 'Violet Text',
  args: { variant: 'text' },
};

/**
 * Underline
 */
export const VioletSolidUnderline = {
  name: 'Violet Solid Underline',
  args: { underline: true },
};

/**
 * Icon Types (Left/Right)
 */
export const WithCircleIconLeft = {
  name: 'Violet Solid with Circle Icon Left',
  args: { iconType: 'circle', iconSide: 'left' },
};
export const WithCircleIconRight = {
  name: 'Violet Solid with Circle Icon Right',
  args: { iconType: 'circle', iconSide: 'right' },
};
export const WithRingIconLeft = {
  name: 'Violet Solid with Ring Icon Left',
  args: { iconType: 'ring', iconSide: 'left' },
};
export const WithRingIconRight = {
  name: 'Violet Solid with Ring Icon Right',
  args: { iconType: 'ring', iconSide: 'right' },
};

/**
 * Disabled States
 */
export const Disabled = {
  name: 'Violet Solid Disabled',
  args: { disabled: true },
};
export const DisabledOutlined = {
  name: 'Violet Outlined Disabled',
  args: { variant: 'outlined', disabled: true },
};
export const DisabledWithIcon = {
  name: 'Violet Solid Disabled with Circle Icon',
  args: { disabled: true, iconType: 'circle' },
};

/**
 * Not Visible
 */
export const NotVisible = {
  name: 'Invisible Button',
  args: { isVisible: false },
};

/**
 * All Color/Variant Examples for documentation
 */

// Emerald
export const EmeraldSolid = {
  name: 'Emerald Solid',
  args: { color: 'emerald', variant: 'solid' },
};
export const EmeraldSoft = {
  name: 'Emerald Soft',
  args: { color: 'emerald', variant: 'soft' },
};
export const EmeraldOutlined = {
  name: 'Emerald Outlined',
  args: { color: 'emerald', variant: 'outlined' },
};
export const EmeraldText = {
  name: 'Emerald Text',
  args: { color: 'emerald', variant: 'text' },
};
export const EmeraldSolidUnderline = {
  name: 'Emerald Solid Underline',
  args: { color: 'emerald', underline: true },
};

// Amber
export const AmberSolid = {
  name: 'Amber Solid',
  args: { color: 'amber', variant: 'solid' },
};
export const AmberSoft = {
  name: 'Amber Soft',
  args: { color: 'amber', variant: 'soft' },
};
export const AmberOutlined = {
  name: 'Amber Outlined',
  args: { color: 'amber', variant: 'outlined' },
};
export const AmberText = {
  name: 'Amber Text',
  args: { color: 'amber', variant: 'text' },
};
export const AmberSolidUnderline = {
  name: 'Amber Solid Underline',
  args: { color: 'amber', underline: true },
};

// Red
export const RedSolid = {
  name: 'Red Solid',
  args: { color: 'red', variant: 'solid' },
};
export const RedSoft = {
  name: 'Red Soft',
  args: { color: 'red', variant: 'soft' },
};
export const RedOutlined = {
  name: 'Red Outlined',
  args: { color: 'red', variant: 'outlined' },
};
export const RedText = {
  name: 'Red Text',
  args: { color: 'red', variant: 'text' },
};
export const RedSolidUnderline = {
  name: 'Red Solid Underline',
  args: { color: 'red', underline: true },
};

// Gray
export const GraySolid = {
  name: 'Gray Solid',
  args: { color: 'gray', variant: 'solid' },
};
export const GraySoft = {
  name: 'Gray Soft',
  args: { color: 'gray', variant: 'soft' },
};
export const GrayOutlined = {
  name: 'Gray Outlined',
  args: { color: 'gray', variant: 'outlined' },
};
export const GrayText = {
  name: 'Gray Text',
  args: { color: 'gray', variant: 'text' },
};
export const GraySolidUnderline = {
  name: 'Gray Solid Underline',
  args: { color: 'gray', underline: true },
};

// Slate
export const SlateSolid = {
  name: 'Slate Solid',
  args: { color: 'slate', variant: 'solid' },
};
export const SlateSoft = {
  name: 'Slate Soft',
  args: { color: 'slate', variant: 'soft' },
};
export const SlateOutlined = {
  name: 'Slate Outlined',
  args: { color: 'slate', variant: 'outlined' },
};
export const SlateText = {
  name: 'Slate Text',
  args: { color: 'slate', variant: 'text' },
};
export const SlateSolidUnderline = {
  name: 'Slate Solid Underline',
  args: { color: 'slate', underline: true },
};

// White
export const WhiteSolid = {
  name: 'White Solid',
  args: { color: 'white', variant: 'solid' },
};
export const WhiteSoft = {
  name: 'White Soft',
  args: { color: 'white', variant: 'soft' },
};
export const WhiteOutlined = {
  name: 'White Outlined',
  args: { color: 'white', variant: 'outlined' },
};
export const WhiteText = {
  name: 'White Text',
  args: { color: 'white', variant: 'text' },
};
export const WhiteSolidUnderline = {
  name: 'White Solid Underline',
  args: { color: 'white', underline: true },
};

// Purple
export const PurpleSolid = {
  name: 'Purple Solid',
  args: { color: 'purple', variant: 'solid' },
};
export const PurpleSoft = {
  name: 'Purple Soft',
  args: { color: 'purple', variant: 'soft' },
};
export const PurpleOutlined = {
  name: 'Purple Outlined',
  args: { color: 'purple', variant: 'outlined' },
};
export const PurpleText = {
  name: 'Purple Text',
  args: { color: 'purple', variant: 'text' },
};
export const PurpleSolidUnderline = {
  name: 'Purple Solid Underline',
  args: { color: 'purple', underline: true },
};

/**
 * Boolean Prop Combinations
 */
export const UnderlineWithCircleIcon = {
  name: 'Underline + Circle Icon',
  args: { underline: true, iconType: 'circle' },
};
export const DisabledUnderlineWithCircleIcon = {
  name: 'Disabled + Underline + Circle Icon',
  args: { disabled: true, underline: true, iconType: 'circle' },
};
export const UnderlineWithRingIcon = {
  name: 'Underline + Ring Icon',
  args: { underline: true, iconType: 'ring' },
};
export const DisabledUnderlineWithRingIcon = {
  name: 'Disabled + Underline + Ring Icon',
  args: { disabled: true, underline: true, iconType: 'ring' },
};
export const OutlinedUnderline = {
  name: 'Violet Outlined Underline',
  args: { variant: 'outlined', underline: true },
};
export const DisabledOutlinedUnderline = {
  name: 'Violet Outlined Disabled Underline',
  args: { variant: 'outlined', disabled: true, underline: true },
};

/**
 * Extreme: All props toggled
 */
export const AllPropsEnabled = {
  name: 'All Props Enabled Example',
  args: {
    label: 'All Props',
    color: 'emerald',
    variant: 'outlined',
    size: 'xl',
    underline: true,
    iconType: 'circle',
    iconSide: 'right',
    disabled: false,
    isVisible: true,
  },
};

/**
 * Showcase (Visual demonstration)
 */
import { HyButtonShowcase } from './HyButton';
export const Showcase = {
  name: 'Complete Visual Showcase',
  render: () => (
    <HyButtonShowcase
      buttons={[
        { label: 'Violet', color: 'violet', size: 'md', variant: 'solid', key: 1 },
        { label: 'Emerald Soft', color: 'emerald', variant: 'soft', key: 2, left: 210 },
        { label: 'Amber', color: 'amber', variant: 'solid', key: 3, left: 410 },
        { label: 'Outline', color: 'red', variant: 'outlined', key: 4, left: 610 },
        { label: 'Text', color: 'gray', variant: 'text', key: 5, left: 810 },
        { label: 'Underline', color: 'violet', underline: true, key: 6, left: 1010 },
        { label: 'Disabled', disabled: true, key: 7, left: 1210 },
        { label: 'Circle Icon', iconType: 'circle', color: 'emerald', variant: 'solid', key: 8, left: 1410 },
        { label: 'Ring Icon', iconType: 'ring', color: 'red', variant: 'solid', key: 9, left: 1610 },
        { label: 'XL', size: 'xl', key: 10, left: 1800 },
        { label: 'XS', size: 'xs', key: 11, left: 1950 },
      ]}
    />
  ),
  parameters: {
    controls: { disable: true }
  }
};