import React from "react";
import DynamicInput from "./DynamicInput";

export default {
  title: "Components/DynamicInput",
  component: DynamicInput,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isVisible: { control: "boolean" },
    widthClass: { control: "text" },
    showLabel: { control: "boolean" },
    label: { control: "text" },
    labelClass: { control: "text" },
    showHttpPrefix: { control: "boolean" }, // New argType
    showLeadingDropdown: { control: "boolean" }, // New argType
    showInputIcon: { control: "boolean" },
    inputValue: { control: "text" },
    inputPlaceholder: { control: "text" },
    isInputDisabled: { control: "boolean" },
    isError: { control: "boolean" },
    showRightActions: { control: "boolean" },
    hintText: { control: "text" },
    showHint: { control: "boolean" },
    hintClass: { control: "text" },
    hoverableInput: { control: "boolean" },
    focusableInput: { control: "boolean" },
    inputBoxClass: { control: "text" },
  },
};

const Template = (args) => (
  <div style={{ minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <DynamicInput {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  showLabel: true,
  label: "Email",
  showHttpPrefix: true,
  showLeadingDropdown: true,
  inputValue: "olivia@untitledui.com",
  inputPlaceholder: "Enter your email",
  isInputDisabled: false,
  isError: false,
  showHint: true,
  hintText: "This is a hint text to help user.",
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  isInputDisabled: false,
  isError: false,
  // To simulate active, you can focus the input in the storybook UI
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  isError: true,
  hintText: "There is an error with your input.",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isInputDisabled: true,
  hintText: "Input is disabled.",
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  ...Default.args,
  showLabel: false,
};

export const NoHint = Template.bind({});
NoHint.args = {
  ...Default.args,
  showHint: false,
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  ...Default.args,
  widthClass: "w-56",
};

export const CustomLabelClass = Template.bind({});
CustomLabelClass.args = {
  ...Default.args,
  labelClass: "text-blue-700 text-sm font-bold",
};

export const CustomHintClass = Template.bind({});
CustomHintClass.args = {
  ...Default.args,
  hintClass: "text-green-600 text-xs italic",
};

export const NoInputIcon = Template.bind({});
NoInputIcon.args = {
  ...Default.args,
  showInputIcon: false,
};

export const NoRightActions = Template.bind({});
NoRightActions.args = {
  ...Default.args,
  showRightActions: false,
};

export const HideHttpPrefix = Template.bind({});
HideHttpPrefix.args = {
  ...Default.args,
  showHttpPrefix: false,
};

export const HideLeadingDropdown = Template.bind({});
HideLeadingDropdown.args = {
  ...Default.args,
  showLeadingDropdown: false,
};

export const HideBothLeadingItems = Template.bind({});
HideBothLeadingItems.args = {
  ...Default.args,
  showHttpPrefix: false,
  showLeadingDropdown: false,
};
