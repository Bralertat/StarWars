import UiButton from './UiButton'
// import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'Ui-Kit/UiButton',
  component: UiButton
}

const Template = (args) => <UiButton {...args} />;

const props = {
  text: 'Helloooooooooooo',
  onClick: () => { console.log('pryvet') },
  disabled: false,
  theme: 'light',
  classes: ''
}

export const Light = Template.bind({});
Light.args = {
  //тут пишем пропсы
  ...props,
  theme: 'light'
}

export const Dark = Template.bind({});
Dark.args = {
  ...props,
  theme: 'dark'
}

export const Disabled = Template.bind({});
Disabled.args = {
  ...props,
  disabled: true
}
