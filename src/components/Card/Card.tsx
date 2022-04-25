import React from 'react'
import {
  CardWrapper,
  Avatar,
  CardInfos,
  CardTitle,
  CardDescription,
} from './style'

type CardProps = {
  user: string
  avatar?: string
  description?: string
}

export function Card({ user, avatar, description }: CardProps) {
  return (
    <CardWrapper>
      <div>
        <Avatar src={avatar} alt="Organization avatar" />
      </div>

      <CardInfos>
        <CardTitle>{user}</CardTitle>
        <CardDescription>{description || 'no description'}</CardDescription>
      </CardInfos>
    </CardWrapper>
  )
}
