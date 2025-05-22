import { fn } from '@storybook/test';
import Frame2 from './Frame2';

const BUTTON_VARIANTS = ['primary', 'secondary'];
const BUTTON_STATES = ['default', 'loading', 'disabled'];
const BUTTON_SIZES = ['xl', 'lg', 'md', 'sm'];

export default {
  title: 'Example/Frame2',
  component: Frame2,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isVisible: true,
    previewLabel: 'Preview',
    headerTitle: 'Figma design to storybook',
    imageUrl: 'https://placehold.co/434x356',
    showLeftIcon: false,
    showRightIcon: false,
    buttonText: 'Publish to storybook',
    buttonVariant: 'primary',
    buttonState: 'default',
    buttonSize: 'xl',
    onButtonClick: fn(),
    showGithubTokenInput: true,
    showRepoNameInput: true,
    githubTokenLabel: 'GitHub Token',
    repoNameLabel: 'Repository Name',
    githubTokenValue: '',
    repoNameValue: '',
    onGithubTokenChange: fn(),
    onRepoNameChange: fn(),
    isGithubTokenDisabled: false,
    isRepoNameDisabled: false,
    showDivider: true,
    showPreview: true,
    className: '',
  },
  argTypes: {
    buttonVariant: {
      control: { type: 'select' },
      options: BUTTON_VARIANTS,
      description: 'Button visual variant',
    },
    buttonState: {
      control: { type: 'select' },
      options: BUTTON_STATES,
      description: 'Button state',
    },
    buttonSize: {
      control: { type: 'select' },
      options: BUTTON_SIZES,
      description: 'Button size',
    },
    showLeftIcon: {
      control: 'boolean',
      description: 'Show left icon on the button',
    },
    showRightIcon: {
      control: 'boolean',
      description: 'Show right icon on the button',
    },
    showGithubTokenInput: {
      control: 'boolean',
      description: 'Show the GitHub token input field',
    },
    showRepoNameInput: {
      control: 'boolean',
      description: 'Show the repository name input field',
    },
    isGithubTokenDisabled: {
      control: 'boolean',
      description: 'Disable the GitHub token input',
    },
    isRepoNameDisabled: {
      control: 'boolean',
      description: 'Disable the repository name input',
    },
    showDivider: {
      control: 'boolean',
      description: 'Show the divider line',
    },
    showPreview: {
      control: 'boolean',
      description: 'Show the preview image and its label',
    },
    isVisible: {
      control: 'boolean',
      description: 'Show/Hide the Frame2 component',
    },
  },
  documentation: {
    description: {
      component: 'A composite modal panel for Figma-to-Storybook publishing, including preview, configurable CTA button, and credential inputs.',
    },
  },
};

export const Default = {
  args: {
    isVisible: true,
    previewLabel: 'Preview',
    headerTitle: 'Figma design to storybook',
    imageUrl: 'https://placehold.co/434x356',
    showLeftIcon: true,
    showRightIcon: true,
    buttonText: 'Publish to storybook',
    buttonVariant: 'primary',
    buttonState: 'default',
    buttonSize: 'xl',
    onButtonClick: fn(),
    showGithubTokenInput: true,
    showRepoNameInput: true,
    githubTokenLabel: 'GitHub Token',
    repoNameLabel: 'Repository Name',
    githubTokenValue: 'sample-token',
    repoNameValue: 'your-org/my-repo',
    onGithubTokenChange: fn(),
    onRepoNameChange: fn(),
    isGithubTokenDisabled: false,
    isRepoNameDisabled: false,
    showDivider: true,
    showPreview: true,
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default state: all features enabled, showing preview, inputs, left/right icons, and enabled button.',
      },
    },
  },
};

export const PrimaryButton = {
  name: 'Primary / Default',
  args: {
    buttonVariant: 'primary',
    buttonState: 'default',
  },
};

export const PrimaryButtonLoading = {
  name: 'Primary / Loading',
  args: {
    buttonVariant: 'primary',
    buttonState: 'loading',
  },
};

export const PrimaryButtonDisabled = {
  name: 'Primary / Disabled',
  args: {
    buttonVariant: 'primary',
    buttonState: 'disabled',
  },
};

export const SecondaryButton = {
  name: 'Secondary / Default',
  args: {
    buttonVariant: 'secondary',
    buttonState: 'default',
  },
};

export const SecondaryButtonLoading = {
  name: 'Secondary / Loading',
  args: {
    buttonVariant: 'secondary',
    buttonState: 'loading',
  },
};

export const SecondaryButtonDisabled = {
  name: 'Secondary / Disabled',
  args: {
    buttonVariant: 'secondary',
    buttonState: 'disabled',
  },
};

export const WithLeftIcon = {
  name: 'With Left Icon',
  args: {
    showLeftIcon: true,
    showRightIcon: false,
  },
};

export const WithRightIcon = {
  name: 'With Right Icon',
  args: {
    showLeftIcon: false,
    showRightIcon: true,
  },
};

export const WithBothIcons = {
  name: 'With Left And Right Icons',
  args: {
    showLeftIcon: true,
    showRightIcon: true,
  },
};

export const WithoutIcons = {
  name: 'No Icons',
  args: {
    showLeftIcon: false,
    showRightIcon: false,
  },
};

export const AllSizes = {
  name: 'All Button Sizes',
  render: (args) => (
    <>
      <div style={{ margin: 16 }}>
        <Frame2 {...args} buttonSize="xl" buttonText="Extra Large (xl)" />
      </div>
      <div style={{ margin: 16 }}>
        <Frame2 {...args} buttonSize="lg" buttonText="Large (lg)" />
      </div>
      <div style={{ margin: 16 }}>
        <Frame2 {...args} buttonSize="md" buttonText="Medium (md)" />
      </div>
      <div style={{ margin: 16 }}>
        <Frame2 {...args} buttonSize="sm" buttonText="Small (sm)" />
      </div>
    </>
  ),
  args: {
    buttonVariant: 'primary',
    buttonState: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcases all button sizes.',
      },
    },
  },
};

export const OnlyGithubTokenInput = {
  name: 'Only GitHub Token Input',
  args: {
    showGithubTokenInput: true,
    showRepoNameInput: false,
  },
};

export const OnlyRepoNameInput = {
  name: 'Only Repository Name Input',
  args: {
    showGithubTokenInput: false,
    showRepoNameInput: true,
  },
};

export const InputsDisabled = {
  name: 'Inputs Disabled',
  args: {
    isGithubTokenDisabled: true,
    isRepoNameDisabled: true,
  },
};

export const NoDivider = {
  name: 'No Divider',
  args: {
    showDivider: false,
  },
};

export const NoPreview = {
  name: 'No Preview',
  args: {
    showPreview: false,
  },
};

export const Hidden = {
  name: 'Hidden (Not Visible)',
  args: {
    isVisible: false,
  },
};