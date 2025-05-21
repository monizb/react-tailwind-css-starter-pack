import { fn } from '@storybook/test';
import HyCard from './Card2';

export default {
  title: 'Example/ColorCardSelected',
  component: HyCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A color palette card with selection overlay. Use for color scheme pickers or palettes.',
      },
    },
  },
  args: {
    isSelected: true,
    isVisible: true,
    widthClass: 'size-[211.20px]',
    boxClassName: 'rounded-xl',
    overlayRounded: 'rounded-2xl',
    overlayOutline: 'outline outline-2 outline-gray-500',
    overlayBorder: 'border-2 border-gray-200',
    overlayBg: 'bg-gray-900 opacity-80',
    showCheckbox: true,
    checked: false,
    onCheckboxChange: fn(),
    showIconButton: true,
    iconButtonOnClick: fn(),
    colorShades: [
      'bg-purple-50',
      'bg-purple-100',
      'bg-purple-200',
      'bg-purple-300',
      'bg-purple-400',
      'bg-purple-500',
      'bg-violet-600',
      'bg-violet-700',
      'bg-violet-800',
    ],
    title: 'Primary',
    subtitle: '9 colors',
    showIcon: true,
    showSubtitle: true,
  },
};

/**
 * Default: Selected, visible, checkbox and icon button shown, not checked.
 */
export const SelectedVisibleWithCheckboxIcon = {
  name: 'Selected / Visible / Checkbox + Icon Button',
  args: {
    isSelected: true,
    isVisible: true,
    showCheckbox: true,
    showIconButton: true,
    checked: false,
    showIcon: true,
    showSubtitle: true,
  },
};

/**
 * Selected & Invisible (component not rendered)
 */
export const SelectedInvisible = {
  name: 'Selected / Not Visible',
  args: {
    isSelected: true,
    isVisible: false,
    showCheckbox: true,
    showIconButton: true,
    checked: false,
    showIcon: true,
    showSubtitle: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Component is not rendered when `isVisible` is false.',
      },
    },
  },
};

/**
 * Unselected, but visible (no overlay, still renders content).
 */
export const UnselectedVisible = {
  name: 'Unselected / Visible',
  args: {
    isSelected: false,
    isVisible: true,
    showCheckbox: true,
    showIconButton: true,
    checked: false,
    showIcon: true,
    showSubtitle: true,
  },
};

/**
 * Selected, visible, Checkbox only (no icon button shown).
 */
export const SelectedCheckboxOnly = {
  name: 'Selected / Checkbox Only',
  args: {
    isSelected: true,
    isVisible: true,
    showCheckbox: true,
    showIconButton: false,
    checked: false,
    showIcon: true,
    showSubtitle: true,
  },
};

/**
 * Selected, visible, Icon Button only (no checkbox).
 */
export const SelectedIconButtonOnly = {
  name: 'Selected / Icon Button Only',
  args: {
    isSelected: true,
    isVisible: true,
    showCheckbox: false,
    showIconButton: true,
    checked: false,
    showIcon: true,
    showSubtitle: true,
  },
};

/**
 * Selected, visible, Checkbox checked.
 */
export const SelectedCheckboxChecked = {
  name: 'Selected / Checkbox Checked',
  args: {
    isSelected: true,
    isVisible: true,
    showCheckbox: true,
    showIconButton: true,
    checked: true,
    showIcon: true,
    showSubtitle: true,
  },
};

/**
 * Selected, visible, without icon in header.
 */
export const SelectedNoIcon = {
  name: 'Selected / No Icon',
  args: {
    isSelected: true,
    isVisible: true,
    showCheckbox: true,
    showIconButton: true,
    checked: false,
    showIcon: false,
    showSubtitle: true,
  },
};

/**
 * Selected, visible, without subtitle.
 */
export const SelectedNoSubtitle = {
  name: 'Selected / No Subtitle',
  args: {
    isSelected: true,
    isVisible: true,
    showCheckbox: true,
    showIconButton: true,
    checked: false,
    showIcon: true,
    showSubtitle: false,
  },
};

/**
 * Selected, visible, without icon and subtitle in footer.
 */
export const SelectedNoIconNoSubtitle = {
  name: 'Selected / No Icon / No Subtitle',
  args: {
    isSelected: true,
    isVisible: true,
    showCheckbox: true,
    showIconButton: true,
    checked: false,
    showIcon: false,
    showSubtitle: false,
  },
};

/**
 * Unselected, visible, Checkbox only.
 */
export const UnselectedVisibleCheckboxOnly = {
  name: 'Unselected / Checkbox Only',
  args: {
    isSelected: false,
    isVisible: true,
    showCheckbox: true,
    showIconButton: false,
    checked: false,
    showIcon: true,
    showSubtitle: true,
  },
};

/**
 * Unselected, visible, Icon Button only.
 */
export const UnselectedVisibleIconButtonOnly = {
  name: 'Unselected / Icon Button Only',
  args: {
    isSelected: false,
    isVisible: true,
    showCheckbox: false,
    showIconButton: true,
    checked: false,
    showIcon: true,
    showSubtitle: true,
  },
};

/**
 * Unselected, visible, without icon in header.
 */
export const UnselectedVisibleNoIcon = {
  name: 'Unselected / No Icon',
  args: {
    isSelected: false,
    isVisible: true,
    showCheckbox: true,
    showIconButton: true,
    checked: false,
    showIcon: false,
    showSubtitle: true,
  },
};

/**
 * Unselected, visible, without subtitle.
 */
export const UnselectedVisibleNoSubtitle = {
  name: 'Unselected / No Subtitle',
  args: {
    isSelected: false,
    isVisible: true,
    showCheckbox: true,
    showIconButton: true,
    checked: false,
    showIcon: true,
    showSubtitle: false,
  },
};

/**
 * Unselected, visible, without icon and subtitle.
 */
export const UnselectedVisibleNoIconNoSubtitle = {
  name: 'Unselected / No Icon / No Subtitle',
  args: {
    isSelected: false,
    isVisible: true,
    showCheckbox: true,
    showIconButton: true,
    checked: false,
    showIcon: false,
    showSubtitle: false,
  },
};