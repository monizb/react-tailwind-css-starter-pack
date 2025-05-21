import { fn } from '@storybook/test';
import ButtonComponent from './DynamicComponent';

export default {
  title: 'Example/ButtonComponent',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    buttonText: { control: 'text' },
    iconVisible: { control: 'boolean' },
    endIconVisible: { control: 'boolean' },
    backgroundColor: { control: 'text' },
    textColor: { control: 'text' },
    textSize: { control: 'text' },
    fontFamily: { control: 'text' },
    fontWeight: { control: 'text' },
    leading: { control: 'text' },
    svgColor: { control: 'text' },
    hasOutline: { control: 'boolean' },
    onClick: { action: 'clicked' },
    isDisabled: { control: 'boolean' },
    className: { control: 'text' },
  },
  args: {
    buttonText: 'Click me',
    iconVisible: true,
    endIconVisible: false,
    backgroundColor: 'emerald-700',
    textColor: 'white',
    textSize: '11px',
    fontFamily: 'Inter',
    fontWeight: 'medium',
    leading: '18px',
    svgColor: "#344054",
    hasOutline: false,
    onClick: fn(),
    isDisabled: false,
    className: '',
  },
};

export const Default = {
  args: {
    buttonText: 'Click me',
  },
};

export const WithIcon = {
  args: {
    iconVisible: true,
    buttonText: 'With Icon',
  },
};

export const WithoutIcon = {
  args: {
    iconVisible: false,
    buttonText: 'Without Icon',
  },
};

export const WithEndIcon = {
  args: {
    endIconVisible: true,
    buttonText: 'With End Icon',
  },
};

export const Primary = {
  args: {
    backgroundColor: 'blue-500',
    buttonText: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    backgroundColor: 'gray-500',
    buttonText: 'Secondary Button',
  },
};

export const Disabled = {
  args: {
    isDisabled: true,
    buttonText: 'Disabled Button',
  },
};

export const CustomText = {
  args: {
    buttonText: 'Custom Text',
    textColor: 'black',
  },
};

export const LargeText = {
    args: {
        buttonText: 'Large Text',
        textSize: '16px',
        leading: '24px'
    }
}

export const SmallText = {
    args: {
        buttonText: 'Small Text',
        textSize: '9px',
        leading: '12px'
    }
}

export const CustomFont = {
    args: {
        buttonText: 'Custom Font',
        fontFamily: 'Arial',
        fontWeight: 'bold'
    }
}

export const CustomSVGColor = {
  args: {
    buttonText: 'Custom SVG',
    endIconVisible: true,
    svgColor: 'red'
  }
}

export const WithClassName = {
  args: {
    buttonText: 'Classed',
    className: 'uppercase tracking-widest'
  }
}

export const NoIconAndEndIcon = {
  args: {
    buttonText: "No Icons",
    iconVisible: false,
    endIconVisible: false
  }
}

export const AllIcons = {
  args: {
    buttonText: "Both Icons",
    iconVisible: true,
    endIconVisible: true
  }
}