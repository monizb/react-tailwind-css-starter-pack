import { fn } from '@storybook/test';
import HyCard from './HyCard';

export default {
  title: 'Cards/HyCard',
  component: HyCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    className: '',
    style: {},
    isVisible: true,
    dataAttributes: {},
    showMainImage: true,
    mainImageSrc: 'https://placehold.co/247x92',
    mainImageAlt: '',
    mainImageClassName: 'self-stretch h-24 rounded-xl',
    showCardSvgBadge: true,
    cardSvgBadge: (
      <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="1.5" width="63" height="63" rx="31.5" fill="white"/>
        <rect x="1.5" y="1.5" width="63" height="63" rx="31.5" stroke="#F2F4F7" strokeWidth="3"/>
        <rect x="10.7358" y="13" width="44.5283" height="40" fill="url(#pattern0_2087_2539)"/>
        <defs>
          <pattern id="pattern0_2087_2539" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_2087_2539" transform="matrix(0.000706215 0 0 0.000786163 -0.169492 -0.264151)" />
          </pattern>
          <image id="image0_2087_2539" width="1920" height="1920" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAeACAYAAAAvokrGAAAKrmlDQ1..."/>
        </defs>
      </svg>
    ),
    cardSvgBadgeClassName: 'left-[20px] top-[60px] absolute',
    showHeader: true,
    title: 'Statics Ads',
    titleClassName: "self-stretch justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug",
    subTitle: 'Created 3 months ago',
    subTitleClassName: "justify-center text-gray-500 text-xs font-normal font-['Inter'] leading-none",
    showAvatars: true,
    cardAvatars: [
      {
        show: true,
        avatarSvg: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" fill="url(#pattern0_2087_2561)" />
            <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" stroke="white" strokeWidth="1.5" />
            <defs>
              <pattern id="pattern0_2087_2561" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_2087_2561" transform="scale(0.0015625)" />
              </pattern>
              <image id="image0_2087_2561" width="640" height="640" preserveAspectRatio="none" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJR..."/>
            </defs>
          </svg>
        ),
        className: "w-5 h-6 relative"
      },
      {
        show: true,
        avatarSvg: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" fill="url(#pattern0_2087_2563)" />
            <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" stroke="white" strokeWidth="1.5" />
            <defs>
              <pattern id="pattern0_2087_2563" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_2087_2563" transform="scale(0.0015625)" />
              </pattern>
              <image id="image0_2087_2563" width="640" height="640" preserveAspectRatio="none" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJR..." />
            </defs>
          </svg>
        ),
        className: "w-5 h-6 relative"
      },
      {
        show: true,
        avatarSvg: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" fill="url(#pattern0_2087_2565)" />
            <rect x="1.25" y="1.25" width="25.5" height="25.5" rx="12.75" stroke="white" strokeWidth="1.5" />
            <defs>
              <pattern id="pattern0_2087_2565" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_2087_2565" transform="scale(0.0015625)" />
              </pattern>
              <image id="image0_2087_2565" width="640" height="640" preserveAspectRatio="none" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJR..." />
            </defs>
          </svg>
        ),
        className: "w-5 h-6 relative"
      }
    ],
    showExtraAvatar: true,
    extraAvatarCount: 5,
    extraAvatarClass: "size-6 relative bg-purple-100 rounded-[200px] outline outline-2 outline-white",
    extraAvatarTextClass: "left-[7px] top-[9px] absolute text-center justify-start text-violet-700 text-[8px] font-medium font-['Inter'] leading-none",
    extraAvatarText: "",
    extraAvatarLabel: null,
    mainImageAriaLabel: '',
    containerTag: 'section'
  },
  argTypes: {
    // Hide non-user props
    dataAttributes: { table: { disable: true } },
    cardSvgBadge: { control: false },
    cardAvatars: { control: false },
    containerTag: { control: 'text' },
  }
};

// Default Story
export const Default = {
  name: 'Default',
  args: {}
};

// Main Image OFF
export const WithoutMainImage = {
  name: 'Without Main Image',
  args: {
    showMainImage: false
  }
};

// SVG Badge OFF
export const WithoutSvgBadge = {
  name: 'Without SVG Badge',
  args: {
    showCardSvgBadge: false
  }
};

// Header OFF
export const WithoutHeader = {
  name: 'Without Header',
  args: {
    showHeader: false
  }
};

// Avatars OFF
export const WithoutAvatars = {
  name: 'Without Avatars',
  args: {
    showAvatars: false
  }
};

// Extra Avatar OFF
export const WithoutExtraAvatar = {
  name: 'Without Extra Avatar',
  args: {
    showExtraAvatar: false
  }
};

// All Visuals OFF (No Image, No Badge, No Header, No Avatars, No Extra Avatars)
export const MinimalContent = {
  name: 'Minimal Content (All Visuals OFF)',
  args: {
    showMainImage: false,
    showCardSvgBadge: false,
    showHeader: false,
    showAvatars: false,
    showExtraAvatar: false
  }
};

// Only Main Image
export const OnlyMainImage = {
  name: 'Only Main Image',
  args: {
    showMainImage: true,
    showCardSvgBadge: false,
    showHeader: false,
    showAvatars: false,
    showExtraAvatar: false
  }
};

// Only Header
export const OnlyHeader = {
  name: 'Only Header',
  args: {
    showMainImage: false,
    showCardSvgBadge: false,
    showHeader: true,
    showAvatars: false,
    showExtraAvatar: false
  }
};

// Only Avatars
export const OnlyAvatars = {
  name: 'Only Avatars',
  args: {
    showMainImage: false,
    showCardSvgBadge: false,
    showHeader: false,
    showAvatars: true,
    showExtraAvatar: false
  }
};

// Only Extra Avatar
export const OnlyExtraAvatar = {
  name: 'Only Extra Avatar',
  args: {
    showMainImage: false,
    showCardSvgBadge: false,
    showHeader: false,
    showAvatars: false,
    showExtraAvatar: true
  }
};

// Image + SVG Badge Only
export const MainImageWithSvgBadge = {
  name: 'Main Image with SVG Badge',
  args: {
    showMainImage: true,
    showCardSvgBadge: true,
    showHeader: false,
    showAvatars: false,
    showExtraAvatar: false
  }
};

// Not Visible
export const NotVisible = {
  name: 'Not Visible',
  args: {
    isVisible: false
  }
};

// No Main Image + SVG Badge + Header
export const WithHeaderAndSvgBadge = {
  name: 'Header and SVG Badge Only',
  args: {
    showMainImage: false,
    showCardSvgBadge: true,
    showHeader: true,
    showAvatars: false,
    showExtraAvatar: false
  }
};

// With Custom Title/SubTitle
export const CustomTitleSubtitle = {
  name: 'Custom Title and Subtitle',
  args: {
    title: 'Promoted Content',
    subTitle: 'Shared 1 month ago'
  }
};

// Only Main Image and Avatars
export const MainImageAndAvatars = {
  name: 'Main Image and Avatars',
  args: {
    showMainImage: true,
    showCardSvgBadge: false,
    showHeader: false,
    showAvatars: true,
    showExtraAvatar: false
  }
};

// Only Main Image and Extra Avatar
export const MainImageAndExtraAvatar = {
  name: 'Main Image and Extra Avatar',
  args: {
    showMainImage: true,
    showCardSvgBadge: false,
    showHeader: false,
    showAvatars: false,
    showExtraAvatar: true
  }
};

// Only Header and Avatars
export const HeaderAndAvatars = {
  name: 'Header and Avatars',
  args: {
    showMainImage: false,
    showCardSvgBadge: false,
    showHeader: true,
    showAvatars: true,
    showExtraAvatar: false
  }
};

// Only Header and Extra Avatar
export const HeaderAndExtraAvatar = {
  name: 'Header and Extra Avatar',
  args: {
    showMainImage: false,
    showCardSvgBadge: false,
    showHeader: true,
    showAvatars: false,
    showExtraAvatar: true
  }
};

// Only Avatars and Extra Avatar
export const AvatarsWithExtraAvatar = {
  name: 'Avatars with Extra Avatar',
  args: {
    showMainImage: false,
    showCardSvgBadge: false,
    showHeader: false,
    showAvatars: true,
    showExtraAvatar: true
  }
};

// With Custom Avatar Count and Label
export const CustomExtraAvatar = {
  name: 'Custom "+N" Extra Avatar',
  args: {
    showExtraAvatar: true,
    extraAvatarCount: 42,
    extraAvatarLabel: '+42'
  }
};