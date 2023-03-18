import UiLoading from './UiLoading'
// import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'Ui-Kit/UiLoading',
  component: UiLoading
}

const Template = (args) => <UiLoading {...args} />;

const props = {
  theme: 'black',
  isShadow: false,
  classes: ''
}

export const White = Template.bind({});
White.args = {
  //тут пишем пропсы
  ...props,
  theme: 'white',
  isShadow: true
}

export const Black = Template.bind({});
Black.args = {
  ...props,
  theme: 'black'
}

export const Blue = Template.bind({});
Blue.args = {
  ...props,
  theme: 'blue'
}


