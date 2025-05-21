import { fn } from '@storybook/test';
import FrameCard from './FrameCard';

export default {
  title: 'Example/FrameCard',
  component: FrameCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isVisible: true,
    imageSrc: 'https://placehold.co/434x356',
    imageAlt: 'Preview image',
    showTopLabel: true,
    topLabel: 'Figma to storybook',
    showPreviewLabel: true,
    previewLabel: 'Preview',
    showIcon: true,
    icon: (
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11.5842" cy="11.2261" r="10.7006" fill="#FDFDFD" stroke="#E6E6E6"/>
      </svg>
    ),
    onPublish: fn(),
    showPublishButton: true,
    publishButtonText: 'Publish to storybook',
    isPublishDisabled: false,
    cardClassName: '',
    imageClassName: '',
    topLabelClassName: '',
    previewLabelClassName: '',
    iconClassName: '',
    publishButtonClassName: '',
    children: null,
  },
  argTypes: {
    onPublish: { action: 'publish-click' },
    children: { control: false },
    icon: { control: false },
  },
  parameters: {
    layout: 'centered',
  },
  documentation: {
    description: {
      component: 'FrameCard displays a card layout for previewing and publishing design frames with configurable labels, image, and actions.',
    },
  },
};

// Default story
export const Default = {
  args: {
    // Uses all the default args above
  },
};

// isVisible variations
export const Hidden = {
  args: {
    isVisible: false,
  },
  name: 'Hidden',
  parameters: { docs: { description: { story: 'Component is hidden when isVisible is false.' } } },
};

// showTopLabel variations
export const NoTopLabel = {
  args: {
    showTopLabel: false,
  },
  name: 'No Top Label',
  parameters: { docs: { description: { story: 'Hides the top label.' } } },
};
export const TopLabelCustomText = {
  args: {
    topLabel: 'Custom Top Label',
  },
  name: 'Custom Top Label Text',
};

// showPreviewLabel variations
export const NoPreviewLabel = {
  args: {
    showPreviewLabel: false,
  },
  name: 'No Preview Label',
  parameters: { docs: { description: { story: 'Hides the preview label.' } } },
};
export const PreviewLabelCustomText = {
  args: {
    previewLabel: 'Custom Preview Text',
  },
  name: 'Custom Preview Label Text',
};

// showIcon variations
export const NoIcon = {
  args: {
    showIcon: false,
  },
  name: 'No Icon',
  parameters: { docs: { description: { story: 'Hides the top left icon.' } } },
};

// showPublishButton variations
export const NoPublishButton = {
  args: {
    showPublishButton: false,
  },
  name: 'No Publish Button',
  parameters: { docs: { description: { story: 'Hides the publish button.' } } },
};
// isPublishDisabled variations
export const PublishButtonDisabled = {
  args: {
    isPublishDisabled: true,
  },
  name: 'Publish Button Disabled',
  parameters: { docs: { description: { story: 'Disables publish button interaction.' } } },
};

// Combination: Hidden + all others enabled (should render nothing)
export const HiddenWithAllLabels = {
  args: {
    isVisible: false,
    showTopLabel: true,
    showPreviewLabel: true,
    showIcon: true,
    showPublishButton: true,
  },
  name: 'Hidden With All Labels',
};

// Combination: All labels/buttons off (minimal rendering)
export const Minimal = {
  args: {
    showTopLabel: false,
    showPreviewLabel: false,
    showIcon: false,
    showPublishButton: false,
  },
  name: 'Minimal - All Labels/Buttons Off',
  parameters: { docs: { description: { story: 'Minimal card: only image visible.' } } },
};

// Combination: Only Publish Button
export const OnlyPublishButtonVisible = {
  args: {
    showTopLabel: false,
    showPreviewLabel: false,
    showIcon: false,
    showPublishButton: true,
  },
  name: 'Only Publish Button Visible',
};

// Combination: Only Preview Label
export const OnlyPreviewLabelVisible = {
  args: {
    showTopLabel: false,
    showPreviewLabel: true,
    showIcon: false,
    showPublishButton: false,
  },
  name: 'Only Preview Label Visible',
};

// Combination: Custom Image
export const CustomImage = {
  args: {
    imageSrc: 'https://placehold.co/434x356/FF0000/FFFFFF?text=Custom+Image',
    imageAlt: 'Custom image alt text',
  },
  name: 'Custom Image',
};

// Combination: Custom Icon
export const CustomIcon = {
  args: {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="blue" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="8" fill="#6495ED" stroke="#003366"/>
      </svg>
    ),
  },
  name: 'Custom Icon',
};

// All Off (except isVisible)
export const AllOff = {
  args: {
    showTopLabel: false,
    showPreviewLabel: false,
    showIcon: false,
    showPublishButton: false,
    isVisible: true,
  },
  name: 'All Optional Elements Off',
};

// Custom publish button text
export const CustomPublishButtonText = {
  args: {
    publishButtonText: 'Send to Storybook',
  },
  name: 'Custom Publish Button Text',
};

// All features off and publish button disabled (should be almost empty)
export const BarelyVisibleAndDisabledButton = {
  args: {
    showTopLabel: false,
    showPreviewLabel: false,
    showIcon: false,
    showPublishButton: true,
    isPublishDisabled: true,
  },
  name: 'Only Disabled Publish Button Visible',
};

// Example with children
export const WithChildren = {
  args: {
    children: <div style={{ position: 'absolute', left: 24, top: 400 }}>Additional content!</div>,
  },
  name: 'With Children (Custom Content)',
};