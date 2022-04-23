import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Heading } from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Organizations',
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  title: 'Organizations',
  description:
    'Lists all organizations, in the order that they were created on GitHub',
}
