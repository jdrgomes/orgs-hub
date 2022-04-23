type CardProps = {
  user: string
  avatar: string
  description?: string
}

export function Card({ user, avatar, description }: CardProps) {
  return (
    <div>
      <img src={avatar} alt="Organization avatar" />
      <div>
        <h1>{user}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
