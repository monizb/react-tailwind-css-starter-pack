import { fn } from '@storybook/test';
import HyButton from './HyButton';

const iconSvgs = {
  violet: {
    border: 'stroke-violet-600',
    fill: 'text-violet-600',
    svg: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <g clipPath="url(#clip0)">
          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="12" height="12" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
  },
  white: {
    border: 'stroke-white',
    fill: 'text-white',
    svg: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <g clipPath="url(#clip0)">
          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="12" height="12" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
  },
};

export default {
  title: 'HyButton/Button',
  component: HyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A highly customizable button with rich styling, icon, and state options. Supports all boolean state combinations, left/right icons, and absolute positioning. Set `isVisible` to false to hide, `isDisabled` to disable, and `isLoading` to show a loading text.',
      },
    },
  },
  args: {
    left: 0,
    top: 0,
    width: 'auto',
    height: 'auto',
    px: 'px-2',
    py: 'py-[3px]',
    gap: 'gap-1.5',
    rounded: 'rounded-md',
    bgColor: 'bg-violet-600',
    outline: 'outline outline-1 outline-offset-[-1px] outline-violet-600',
    border: '',
    shadow: '',
    hover: '',
    font: 'font-["Inter"]',
    label: 'Button',
    labelColor: 'text-white',
    labelSize: 'text-[11px]',
    fontWeight: 'font-medium',
    leading: 'leading-[18px]',
    underline: false,
    leftIcon: iconSvgs.violet.svg,
    rightIcon: iconSvgs.white.svg,
    iconColor: 'text-white',
    isVisible: true,
    isDisabled: false,
    isLoading: false,
    onClick: fn(),
    tabIndex: 0,
    as: 'button',
  },
};

export const Default = {
  name: 'Default',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Standard button with default props and both icons.'
      }
    }
  }
};

export const NoIcons = {
  name: 'Without Icons',
  args: {
    leftIcon: null,
    rightIcon: null,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with no icons at all.'
      }
    }
  }
};

export const LeftIconOnly = {
  name: 'Left Icon Only',
  args: {
    leftIcon: iconSvgs.violet.svg,
    rightIcon: null,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with only the left icon.'
      }
    }
  }
};

export const RightIconOnly = {
  name: 'Right Icon Only',
  args: {
    leftIcon: null,
    rightIcon: iconSvgs.white.svg,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with only the right icon.'
      }
    }
  }
};

export const Underlined = {
  name: 'Underlined Label',
  args: {
    underline: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with underlined label.'
      }
    }
  }
};

export const Disabled = {
  name: 'Disabled',
  args: {
    isDisabled: true,
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "Button's disabled state. Click handler won't fire."
      }
    }
  }
};

export const Loading = {
  name: 'Loading',
  args: {
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state, shows pulsing text.'
      }
    }
  }
};

export const Hidden = {
  name: 'Not Visible',
  args: {
    isVisible: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button is hidden and renders nothing.'
      }
    }
  }
};

export const DisabledAndLoading = {
  name: 'Disabled and Loading',
  args: {
    isDisabled: true,
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button is both disabled and in loading state.'
      }
    }
  }
};

export const UnderlinedDisabled = {
  name: 'Underlined & Disabled',
  args: {
    underline: true,
    isDisabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button is underlined and disabled.'
      }
    }
  }
};

export const LoadingUnderlined = {
  name: 'Loading & Underlined',
  args: {
    isLoading: true,
    underline: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button is underlined and in loading state.'
      }
    }
  }
};

export const DisabledLoadingUnderlined = {
  name: 'Disabled, Loading & Underlined',
  args: {
    isDisabled: true,
    isLoading: true,
    underline: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button is disabled, loading, and underlined.'
      }
    }
  }
};

export const CustomTextAndColor = {
  name: 'Custom Label and Colors',
  args: {
    label: 'Custom Action',
    bgColor: 'bg-white',
    labelColor: 'text-violet-600',
    leftIcon: iconSvgs.white.svg,
    rightIcon: iconSvgs.violet.svg,
    outline: 'outline outline-1 outline-offset-[-1px] outline-violet-600',
    iconColor: 'text-violet-600',
  },
  parameters: {
    docs: {
      description: {
        story: 'With custom label and inverted colors/icons.'
      }
    }
  }
};

export const AsLink = {
  name: 'Rendered as Link',
  args: {
    as: 'a',
    href: 'https://storybook.js.org',
    label: 'Storybook Link',
    isDisabled: false,
    isLoading: false,
    underline: true,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button rendered as an anchor link.'
      }
    }
  }
};

export const WithCustomInlineStyle = {
  name: 'Custom Position and Size',
  args: {
    left: 100,
    top: 30,
    width: '160px',
    height: '50px',
    label: 'Placed Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button absolutely positioned with custom width/height.'
      }
    }
  }
};

export const AllCombinations = {
  name: 'Boolean Prop Combinations Grid',
  render: (args) => (
    <div style={{ maxWidth: 380 }}>
      <div style={{ display: 'grid', gap: 24 }}>
        <HyButton {...args} label="Default" />
        <HyButton {...args} isDisabled label="Disabled" />
        <HyButton {...args} isLoading label="Loading" />
        <HyButton {...args} isDisabled isLoading label="Disabled & Loading" />
        <HyButton {...args} underline label="Underlined" />
        <HyButton {...args} underline isDisabled label="Underlined & Disabled" />
        <HyButton {...args} underline isLoading label="Underlined & Loading" />
        <HyButton {...args} underline isDisabled isLoading label="All True" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A grid of all possible boolean states for isDisabled, isLoading, and underline.'
      }
    }
  }
};