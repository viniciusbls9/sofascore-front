export interface PlayerProps {
  id: string
  name: string
  image: string
  email: string
  fav_position: string
  biography: string
  image_url: string
  age: string
  height: string
  preferred_foot: string
  shirt_number: string
  average_votes: {
    pass_vote?: number
    shot_vote?: number
    marking_vote?: number
    quality_vote?: number
    velocity_vote?: number
    overall_average: number
  }
}

export interface CardPlayerProps {
  players: PlayerProps[]
  loggedUserID: string
}
