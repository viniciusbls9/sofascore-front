export interface PlayerProps {
  id: string
  name: string
  image: string
  email: string
  velocity: number
  fav_position: string
  rating: number
  biography: string
  image_url: string
}

export interface CardPlayerProps {
  players: PlayerProps[]
}
