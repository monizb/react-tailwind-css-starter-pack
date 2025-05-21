import { fn } from '@storybook/test';
import Frame2 from './Frame2';

const BUTTON_STYLES = ['Primary', 'Secondary', 'Danger'];
const BUTTON_SIZES = ['xl', 'md', 'sm'];

export default {
  title: 'Example/Frame2',
  component: Frame2,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    buttonStyle: {
      control: { type: 'select' },
      options: BUTTON_STYLES,
      description: 'Button visual style',
      table: { category: 'Button', type: { summary: BUTTON_STYLES.join(' | ') } },
    },
    buttonSize: {
      control: { type: 'select' },
      options: BUTTON_SIZES,
      description: 'Button size',
      table: { category: 'Button', type: { summary: BUTTON_SIZES.join(' | ') } },
    },
    isVisible: { control: 'boolean', description: 'Frame visible or not' },
    showImage: { control: 'boolean', description: 'Show main image' },
    showPreviewLabel: { control: 'boolean', description: 'Show preview label' },
    showTitle: { control: 'boolean', description: 'Show title' },
    showIcon: { control: 'boolean', description: 'Show header icon' },
    divider: { control: 'boolean', description: 'Show divider' },
    showButton: { control: 'boolean', description: 'Show main button' },
    buttonLoading: { control: 'boolean', description: 'Button loading state' },
    buttonDisabled: { control: 'boolean', description: 'Button disabled' },
    showLeftButtonIcon: { control: 'boolean', description: 'Show left icon in button' },
    showRightButtonIcon: { control: 'boolean', description: 'Show right icon in button' },
    showGithubTokenInput: { control: 'boolean', description: 'Show GitHub Token input' },
    showRepositoryNameInput: { control: 'boolean', description: 'Show Repository Name input' },
    customForm: { control: false },
    customImageNode: { control: false },
    customHeaderIcon: { control: false },
  },
  args: {
    isVisible: true,
    width: 'w-[471px]',
    height: 'h-[742px]',
    borderRadius: 'rounded-3xl',
    backgroundColor: 'bg-white',
    imageSrc: 'https://placehold.co/434x356',
    showImage: true,
    previewLabel: 'Preview',
    showPreviewLabel: true,
    previewLabelClass: 'text-black text-base font-medium font-[\'Inter\'] leading-[18px]',
    title: 'Figma design to storybook',
    showTitle: true,
    titleClass: 'text-black text-sm font-medium font-[\'Inter\'] leading-[18px]',
    showIcon: true,
    divider: true,
    buttonLabel: 'Publish to storybook',
    showButton: true,
    buttonOnClick: fn(),
    buttonLoading: false,
    buttonDisabled: false,
    buttonStyle: 'Primary',
    buttonSize: 'xl',
    leftButtonIcon: null,
    showLeftButtonIcon: false,
    rightButtonIcon: null,
    showRightButtonIcon: false,
    githubTokenLabel: 'GitHub Token',
    showGithubTokenInput: true,
    githubTokenValue: '',
    onGithubTokenChange: fn(),
    githubTokenPlaceholder: '',
    repositoryNameLabel: 'Repository Name',
    showRepositoryNameInput: true,
    repositoryNameValue: '',
    onRepositoryNameChange: fn(),
    repositoryNamePlaceholder: '',
    customForm: null,
    customImageNode: null,
    customHeaderIcon: null,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A composite frame widget supporting preview images, forms, and publication actions via a button. Fully customizable via boolean and content props, and supports button visual variants and sizes.',
      },
    },
  },
};

export const Default = {
  name: 'Default (All Enabled)',
  args: {
    isVisible: true,
    showImage: true,
    showPreviewLabel: true,
    showTitle: true,
    showIcon: true,
    divider: true,
    showButton: true,
    buttonLoading: false,
    buttonDisabled: false,
    showLeftButtonIcon: false,
    showRightButtonIcon: false,
    buttonStyle: 'Primary',
    buttonSize: 'xl',
    showGithubTokenInput: true,
    showRepositoryNameInput: true,
    githubTokenValue: '',
    repositoryNameValue: '',
  },
};

export const WithoutImage = {
  name: 'Without Image',
  args: {
    showImage: false,
  },
};

export const WithoutPreviewLabel = {
  name: 'Without Preview Label',
  args: {
    showPreviewLabel: false,
  },
};

export const WithoutTitle = {
  name: 'Without Title',
  args: {
    showTitle: false,
  },
};

export const WithoutIcon = {
  name: 'Without Header Icon',
  args: {
    showIcon: false,
  },
};

export const WithoutDivider = {
  name: 'Without Divider',
  args: {
    divider: false,
  },
};

export const ButtonLoading = {
  name: 'Button Loading State',
  args: {
    buttonLoading: true,
    buttonDisabled: false,
  },
};

export const ButtonDisabled = {
  name: 'Button Disabled',
  args: {
    buttonDisabled: true,
    buttonLoading: false,
  },
};

export const ButtonWithLeftIcon = {
  name: 'Button with Left Icon',
  args: {
    showLeftButtonIcon: true,
    leftButtonIcon: (
      <svg width="16" height="16"><circle cx="8" cy="8" r="8" fill="gray" /></svg>
    ),
  },
};

export const ButtonWithRightIcon = {
  name: 'Button with Right Icon',
  args: {
    showRightButtonIcon: true,
    rightButtonIcon: (
      <svg width="16" height="16"><rect x="3" y="3" width="10" height="10" fill="gray" /></svg>
    ),
  },
};

export const ButtonWithBothIcons = {
  name: 'Button with Both Icons',
  args: {
    showLeftButtonIcon: true,
    leftButtonIcon: (
      <svg width="16" height="16"><circle cx="8" cy="8" r="8" fill="gray" /></svg>
    ),
    showRightButtonIcon: true,
    rightButtonIcon: (
      <svg width="16" height="16"><rect x="3" y="3" width="10" height="10" fill="gray" /></svg>
    ),
  },
};

export const WithoutButton = {
  name: 'Without Button',
  args: {
    showButton: false,
  },
};

export const OnlyGithubInput = {
  name: 'Only GitHub Token Input',
  args: {
    showGithubTokenInput: true,
    showRepositoryNameInput: false,
  },
};

export const OnlyRepositoryInput = {
  name: 'Only Repository Name Input',
  args: {
    showGithubTokenInput: false,
    showRepositoryNameInput: true,
  },
};

export const NoInputs = {
  name: 'No Inputs',
  args: {
    showGithubTokenInput: false,
    showRepositoryNameInput: false,
  },
};

export const CustomForm = {
  name: 'Custom Form',
  args: {
    customForm: (
      <div style={{ padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
        <label style={{ marginRight: 8 }}>Custom Field</label>
        <input placeholder="Write here..." style={{ padding: 4 }} />
      </div>
    ),
    showGithubTokenInput: false,
    showRepositoryNameInput: false,
  },
};

export const CustomImageNode = {
  name: 'Custom Image Node',
  args: {
    customImageNode: (
      <div style={{ width: 240, height: 120, background: '#d0d0d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span>Custom image node</span>
      </div>
    ),
    showImage: true,
  },
};

export const CustomHeaderIcon = {
  name: 'Custom Header Icon',
  args: {
    customHeaderIcon: (
      <svg width="24" height="24" fill="none"><rect width="24" height="24" rx="6" fill="#E2E8F0"/></svg>
    ),
    showIcon: true,
  },
};

export const Hidden = {
  name: 'Not Visible',
  args: {
    isVisible: false,
  },
};

export const ButtonStyleVariants = {
  name: 'Button Style Variants',
  args: {},
  parameters: {
    controls: {
      include: ['buttonStyle'],
    },
  },
};

export const ButtonSizeVariants = {
  name: 'Button Size Variants',
  args: {},
  parameters: {
    controls: {
      include: ['buttonSize'],
    },
  },
};

export const AllBooleansFalse = {
  name: 'All Booleans False',
  args: {
    isVisible: true,
    showImage: false,
    showPreviewLabel: false,
    showTitle: false,
    showIcon: false,
    divider: false,
    showButton: false,
    buttonLoading: false,
    buttonDisabled: false,
    showLeftButtonIcon: false,
    showRightButtonIcon: false,
    showGithubTokenInput: false,
    showRepositoryNameInput: false,
  },
};