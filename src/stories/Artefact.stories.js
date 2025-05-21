import { fn } from '@storybook/test';
import Artefact from './Artefact';

export default {
  title: 'Artefact/Artefact',
  component: Artefact,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Artefact is a complex form and dashboard UI for task/brief management, supporting various layout and data-display options by controlling boolean and data props.'
      }
    }
  },
  args: {
    isVisible: true,
    width: "w-[1108px]",
    height: "h-[692px]",
    progress: "Brief 1/16",
    onBack: fn(),
    onForward: fn(),
    showSource: true,
    sourceLabel: "Source",
    sourceInput: "Template",
    showSourceDropdown: true,
    show2ndSourceSelect: true,
    source2Placeholder: "Burger Bonanza Special",
    source2Avatar: "https://placehold.co/12x12", // Sample image
    show2ndAvatar: true,
    assignToLabel: "Assign to",
    assignTo: "Olivia Rhye",
    assignToAvatar: "https://placehold.co/12x12",
    createdByLabel: "Created by",
    createdBy: "Phoenix Baker",
    createdByAvatar: "https://placehold.co/12x12",
    nameLabel: "Name",
    name: "Rappi_Chicken_Burger",
    nameHint: "Ex. Story ad, Feed ad etc.",
    priorityLabel: "Priority",
    priority: "HIGH",
    priorityType: "Error",
    statusLabel: "Status",
    status: "IN PROGRESS",
    statusType: "Warning",
    startLabel: "Start date",
    startDate: "Jan 5, 2025",
    dueLabel: "Due date",
    dueDate: "Jan 10, 2025",
    summaryLabel: "Summary",
    summary: "Enter description",
    attachmentsLabel: "Attachments",
    attachments: [
      "https://placehold.co/72x72",
      "https://placehold.co/72x72",
      "https://placehold.co/72x72"
    ],
    discussionLabel: "Discussion",
    discussionIcons: true,
    showActions: true,
    showProceed: true,
    onProceed: fn(),
    proceedLabel: "Proceed",
    showPaging: true,
    paging: "1/1"
  }
};

// Default
export const Default = {
  args: {
    // uses default args
  },
  name: 'Fully Featured Artefact',
  parameters: {
    docs: {
      description: {
        story: 'Artefact with all features enabled. Ideal for the main use case demonstration.'
      }
    }
  }
};

// isVisible=false: Hidden state
export const Hidden = {
  args: {
    isVisible: false
  },
  name: 'Hidden Artefact (isVisible=false)',
  parameters: {
    docs: {
      description: {
        story: 'Artefact does not render when isVisible is false.'
      }
    }
  }
};

// Minimal - all optional booleans false
export const MinimalArtefact = {
  args: {
    showSource: false,
    showSourceDropdown: false,
    show2ndSourceSelect: false,
    show2ndAvatar: false,
    discussionIcons: false,
    showActions: false,
    showProceed: false,
    showPaging: false,
    source2Avatar: undefined,
    assignToAvatar: undefined,
    createdByAvatar: undefined
  },
  name: 'Minimal Artefact',
  parameters: {
    docs: {
      description: {
        story: 'Artefact with almost all optional sections and icons hidden, showing a stripped UI.'
      }
    }
  }
};

// Show only left panel (hide right, attachments etc.)
export const OnlyDetailsPanel = {
  args: {
    showSource: false,
    show2ndSourceSelect: false,
    show2ndAvatar: false,
    discussionIcons: false,
    showActions: false,
    showProceed: false,
    showPaging: false,
    source2Avatar: undefined,
    attachments: [],
    showSourceDropdown: false
  },
  name: 'Artefact with Details Only',
  parameters: {
    docs: {
      description: {
        story: 'Artefact with only the left panel (main details) visible.'
      }
    }
  }
};

// Only Source Selects Variants
export const OnlySourceSelects = {
  args: {
    showSource: true,
    showSourceDropdown: true,
    show2ndSourceSelect: true,
    show2ndAvatar: true,
    source2Avatar: "https://placehold.co/12x12",
    attachments: [],
    discussionIcons: false,
    showActions: false,
    showProceed: false,
    showPaging: false
  },
  name: 'Artefact with Source Selects Only',
  parameters: {
    docs: {
      description: {
        story: 'Artefact with source selection sections enabled, other features off.'
      }
    }
  }
};

// Attachments only, every other boolean disabled
export const AttachmentsOnly = {
  args: {
    showSource: false,
    showSourceDropdown: false,
    show2ndSourceSelect: false,
    show2ndAvatar: false,
    attachments: [
      "https://placehold.co/72x72",
      "https://placehold.co/72x72"
    ],
    discussionIcons: false,
    showActions: false,
    showProceed: false,
    showPaging: false,
    source2Avatar: undefined
  },
  name: 'Artefact with Attachments Only',
  parameters: {
    docs: {
      description: {
        story: 'Artefact displays only the attachments section.'
      }
    }
  }
};

// Proceed button only (footer with proceed)
export const ProceedOnly = {
  args: {
    showSource: false,
    show2ndSourceSelect: false,
    showSourceDropdown: false,
    show2ndAvatar: false,
    discussionIcons: false,
    showActions: true,
    showProceed: true,
    showPaging: false,
    attachments: [],
    source2Avatar: undefined,
    onProceed: fn()
  },
  name: 'Artefact with Only Proceed Button',
  parameters: {
    docs: {
      description: {
        story: 'Artefact shows just the Proceed button (footer action).'
      }
    }
  }
};

// Footer Paging Only
export const PagingFooterOnly = {
  args: {
    showSource: false,
    show2ndSourceSelect: false,
    showSourceDropdown: false,
    show2ndAvatar: false,
    discussionIcons: false,
    showActions: true,
    showProceed: false,
    showPaging: true,
    attachments: [],
    source2Avatar: undefined
  },
  name: 'Artefact with Paging Footer Only',
  parameters: {
    docs: {
      description: {
        story: 'Artefact displays just the paging controls in the footer.'
      }
    }
  }
};

// Priority and status variations
export const PriorityHighError = {
  args: {
    priority: "HIGH",
    priorityType: "Error",
    status: "IN PROGRESS",
    statusType: "Warning"
  },
  name: "Priority: HIGH (Error), Status: IN PROGRESS (Warning)"
};

export const PriorityNormalNoError = {
  args: {
    priority: "NORMAL",
    priorityType: "Default",
    status: "COMPLETED",
    statusType: "Success"
  },
  name: "Priority: NORMAL (Default), Status: COMPLETED (Success)"
};

// Show/hide avatars on 2nd source
export const SourceSelectNoAvatar = {
  args: {
    showSource: true,
    show2ndSourceSelect: true,
    show2ndAvatar: false,
    source2Avatar: undefined
  },
  name: "Artefact Source Selects without Avatar"
};

// Show/hide discussion icons
export const DiscussionIconsOff = {
  args: {
    discussionIcons: false
  },
  name: "Artefact - Discussion Panel without Icons"
};

// Only the right panel
export const DiscussionOnly = {
  args: {
    showSource: false,
    showSourceDropdown: false,
    show2ndSourceSelect: false,
    show2ndAvatar: false,
    assignToAvatar: undefined,
    createdByAvatar: undefined,
    attachments: [],
    showActions: false,
    showProceed: false,
    showPaging: false,
    discussionIcons: true
  },
  name: "Artefact Right Panel Only (Discussion)",
  parameters: {
    docs: {
      description: {
        story: 'Artefact with only the discussion (right) panel displayed.'
      }
    }
  }
};