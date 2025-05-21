import React from 'react';
import Artefact from '../components/Artefact';

export default {
  title: 'Components/Artefact',
  component: Artefact,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

// Default story with all default props
export const Default = {
  args: {
    briefNumber: "1/16",
    source: "Template",
    name: "Rappi_Chicken_Burger",
    assignedTo: "Olivia Rhye",
    createdBy: "Phoenix Baker",
    priority: "HIGH",
    status: "IN PROGRESS",
    startDate: "Jan 5, 2025",
    dueDate: "Jan 10, 2025",
    summary: "Enter description",
    attachments: [
      { id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTgEe6_dqORrWXQuO70r7lmznczXz90uwvA&s" },
      { id: 2, url: "https://i.pinimg.com/736x/13/93/40/1393408b52e0e6f3be4d1cbda5882edb.jpg" },
      { id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTgEe6_dqORrWXQuO70r7lmznczXz90uwvA&s" }
    ]
  }
};

// Story with different priority and status
export const LowPriority = {
  args: {
    ...Default.args,
    priority: "LOW",
    status: "COMPLETED"
  }
};

// Story with no attachments
export const NoAttachments = {
  args: {
    ...Default.args,
    attachments: []
  }
};

// Story with custom brief number
export const CustomBrief = {
  args: {
    ...Default.args,
    briefNumber: "5/20",
    name: "Custom Brief Name"
  }
}; 