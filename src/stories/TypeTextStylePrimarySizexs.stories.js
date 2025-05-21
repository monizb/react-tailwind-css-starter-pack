import { fn } from '@storybook/test';
import TypeTextStylePrimarySizexs from './TypeTextStylePrimarySizexs';

export default {
  title: 'Components/TypeTextStylePrimarySizexs',
  component: TypeTextStylePrimarySizexs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Button',
    isVisible: true,
    isDisabled: false,
    onClick: fn(),
    className: '',
    style: {},
    tabIndex: 0,
    as: 'button',
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['button', 'div', 'span', 'a'],
      description: "The underlying element to render. Can be 'button', 'div', 'span', 'a', etc.",
    },
    isVisible: {
      control: 'boolean',
      description: 'Controls visibility of the component.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the button is disabled.',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler.',
    },
    tabIndex: {
      control: 'number',
      description: 'Tab order.',
    },
    className: {
      control: 'text',
      description: 'Additional classes.',
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
    },
    title: {
      control: 'text',
      description: 'Button label.',
    },
  },
  documentation: {
    description: {
      component: 'A small, primary text-styled button that supports multiple HTML tags with isVisible and isDisabled state.',
    },
  },
};

export const Default = {
  args: {
    title: 'Button',
    isVisible: true,
    isDisabled: false,
    as: 'button',
    onClick: fn(),
    tabIndex: 0,
    className: '',
    style: {},
  },
  name: 'Default (Visible, Enabled, <button>)',
};

export const DisabledButton = {
  args: {
    title: 'Button',
    isVisible: true,
    isDisabled: true,
    as: 'button',
    onClick: fn(),
    tabIndex: 0,
    className: '',
    style: {},
  },
  name: 'Disabled (Visible, Disabled, <button>)',
};

export const HiddenButton = {
  args: {
    title: 'Button',
    isVisible: false,
    isDisabled: false,
    as: 'button',
    onClick: fn(),
    tabIndex: 0,
    className: '',
    style: {},
  },
  name: 'Hidden (Not Visible, <button>)',
};

export const DisabledHiddenButton = {
  args: {
    title: 'Button',
    isVisible: false,
    isDisabled: true,
    as: 'button',
    onClick: fn(),
    tabIndex: 0,
    className: '',
    style: {},
  },
  name: 'Hidden Disabled (Not Visible, Disabled, <button>)',
};

export const AsDivEnabled = {
  args: {
    title: 'Button',
    isVisible: true,
    isDisabled: false,
    as: 'div',
    onClick: fn(),
    tabIndex: 0,
    className: '',
    style: {},
  },
  name: 'As <div> (Visible, Enabled)',
};

export const AsDivDisabled = {
  args: {
    title: 'Button',
    isVisible: true,
    isDisabled: true,
    as: 'div',
    onClick: fn(),
    tabIndex: 0,
    className: '',
    style: {},
  },
  name: 'As <div> (Visible, Disabled)',
};

export const AsSpanEnabled = {
  args: {
    title: 'Button',
    isVisible: true,
    isDisabled: false,
    as: 'span',
    onClick: fn(),
    tabIndex: 0,
    className: '',
    style: {},
  },
  name: 'As <span> (Visible, Enabled)',
};

export const AsSpanDisabled = {
  args: {
    title: 'Button',
    isVisible: true,
    isDisabled: true,
    as: 'span',
    onClick: fn(),
    tabIndex: 0,
    className: '',
    style: {},
  },
  name: 'As <span> (Visible, Disabled)',
};

export const AsAEnabled = {
  args: {
    title: 'Button',
    isVisible: true,
    isDisabled: false,
    as: 'a',
    onClick: fn(),
    tabIndex: 0,
    className: '',
    style: {},
    href: '#',
  },
  name: 'As <a> (Visible, Enabled)',
};

export const AsADisabled = {
  args: {
    title: 'Button',
    isVisible: true,
    isDisabled: true,
    as: 'a',
    onClick: fn(),
    tabIndex: 0,
    className: '',
    style: {},
    href: '#',
  },
  name: 'As <a> (Visible, Disabled)',
};