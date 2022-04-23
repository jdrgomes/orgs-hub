import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from './Card'

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  user: 'collectiveidea',
  avatar: 'https://avatars.githubusercontent.com/u/128?v=4',
  description: 'We build software to solve real problems.',
}
