import { useState } from 'react'
import UiInput from './UiInput'
// import { ComponentStory, ComponentMeta } from '@storybook/react';

//нихера не понимаю зачем это нужно весь этот сторибук

export default {
  title: 'Ui-Kit/UiInput',
  component: UiInput
}

const Template = args => {
  const [value, setValue] = useState('')
  const handleInputChange = value => setValue(value)
  return (
    < UiInput
      {...args}
      value={value}
      handleInputChange={handleInputChange}
    />
  )
}

const props = {
  value: '',
  handleInputChange: () => console.log('Input change'),
  placeholder: 'Placeholder',
  classes: ''
}

export const Default = Template.bind({});
Default.args = {
  //тут пишем пропсы
  ...props
}

