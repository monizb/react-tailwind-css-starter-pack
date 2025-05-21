import { fn } from '@storybook/test';
import Alert from './YellowButton';

export default {
  title: 'Example/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isVisible: true,
    type: 'warning',
    size: 'md',
    state: 'default',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleWarningMdDefaultWithIconAndTitle = {
  args: {
    isVisible: true,
    type: 'warning',
    size: 'md',
    state: 'default',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const HiddenWarningMdDefaultWithIconAndTitle = {
  args: {
    isVisible: false,
    type: 'warning',
    size: 'md',
    state: 'default',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleInfoMdDefaultWithIconAndTitle = {
  args: {
    isVisible: true,
    type: 'info',
    size: 'md',
    state: 'default',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'info',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleSuccessMdDefaultWithIconAndTitle = {
  args: {
    isVisible: true,
    type: 'success',
    size: 'md',
    state: 'default',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'success',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleErrorMdDefaultWithIconAndTitle = {
  args: {
    isVisible: true,
    type: 'error',
    size: 'md',
    state: 'default',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'error',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleWarningXsDefaultWithIconAndTitle = {
  args: {
    isVisible: true,
    type: 'warning',
    size: 'xs',
    state: 'default',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleWarningSmDefaultWithIconAndTitle = {
  args: {
    isVisible: true,
    type: 'warning',
    size: 'sm',
    state: 'default',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleWarningLgDefaultWithIconAndTitle = {
  args: {
    isVisible: true,
    type: 'warning',
    size: 'lg',
    state: 'default',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleWarningMdHoverWithIconAndTitle = {
  args: {
    isVisible: true,
    type: 'warning',
    size: 'md',
    state: 'hover',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleWarningMdActiveWithIconAndTitle = {
  args: {
    isVisible: true,
    type: 'warning',
    size: 'md',
    state: 'active',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleWarningMdDisabledWithIconAndTitle = {
  args: {
    isVisible: true,
    type: 'warning',
    size: 'md',
    state: 'disabled',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleWarningMdDefaultWithNoIconAndTitle = {
  args: {
    isVisible: true,
    type: 'warning',
    size: 'md',
    state: 'default',
    title: 'Alert Message',
    showIcon: false,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleWarningMdDefaultWithIconAndNoTitle = {
  args: {
    isVisible: true,
    type: 'warning',
    size: 'md',
    state: 'default',
    showIcon: true,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: '',
  },
};

export const VisibleWarningMdDefaultWithIconAndTitleAndClose = {
  args: {
    isVisible: true,
    type: 'warning',
    size: 'md',
    state: 'default',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'warning',
    showClose: true,
    onClose: fn(),
    className: '',
  },
};

export const VisibleWarningMdDefaultWithIconAndTitleAndCustomClass = {
  args: {
    isVisible: true,
    type: 'warning',
    size: 'md',
    state: 'default',
    title: 'Alert Message',
    showIcon: true,
    iconType: 'warning',
    showClose: false,
    onClose: fn(),
    className: 'custom-alert-class',
  },
};
