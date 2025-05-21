import React from 'react';
import hyCard from './Card'; // Assuming Card.jsx is in the same directory

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Card',
  component: hyCard,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    showAvatars: {
      description: 'Controls the visibility of avatars in the profile card variant',
      control: 'boolean',
      defaultValue: true
    },
    variant: {
      description: 'The type of card to display',
      control: 'select',
      options: ['profile', 'template', 'file'],
      defaultValue: 'profile'
    },
    showAvatar: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    // For the icon, it's a node, so direct control might be complex.
    // We can show examples of passing different icons or hiding it.
    icon: { control: 'object' }, // Or 'disable' if direct control is too complex for Storybook UI
    cardClassName: { control: 'text' },
    avatarClassName: { control: 'text' },
    titleClassName: { control: 'text' },
    descriptionClassName: { control: 'text' },
    iconContainerClassName: { control: 'text' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ProfileCard = {
  args: {
    variant: 'profile',
    showAvatars: true
  }
};

export const ProfileCardWithoutAvatars = {
  args: {
    variant: 'profile',
    showAvatars: false
  }
};

export const TemplateCard = {
  args: {
    variant: 'template'
  }
};

export const FileCard = {
  args: {
    variant: 'file'
  }
};