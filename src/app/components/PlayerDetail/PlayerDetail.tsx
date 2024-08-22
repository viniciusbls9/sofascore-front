/* eslint-disable camelcase */
import { PlayerProps } from '@/types/types'
import Image from 'next/image'
import VotePlayer from '../VotePlayer/VotePlayer'

interface PlayerDetailComponet {
  playerData: PlayerProps
  loggedUserID: string
}

const PlayerDetailComponent = ({
  playerData,
  loggedUserID,
}: PlayerDetailComponet) => {
  const {
    image_url,
    name,
    average_votes,
    fav_position,
    age,
    preferred_foot,
    shirt_number,
    id,
  } = playerData

  return (
    <div className="mx-auto md:container">
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-2 p-4 w-full lg:w-1/2 flex">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <Image
                src={image_url}
                width={70}
                height={70}
                alt="User image"
                className="rounded-full h-16"
              />

              <span className="pl-5 text-sm md:text-lg">{name}</span>
            </div>
            <div>
              <span className="text-xl font-bold">
                {average_votes?.overall_average}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-2 p-4 mt-8 w-full lg:w-1/2 lg:mt-0 md:mt-8 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <span className="text-slate-400 uppercase text-sm md:text-lg">
                Posição
              </span>
              <span>{fav_position}</span>
            </div>

            <div className="flex flex-col items-center uppercase text-sm md:text-lg">
              <span className="text-slate-400">Idade</span>
              <span>{age}</span>
            </div>

            <div className="flex flex-col items-center uppercase text-sm md:text-lg">
              <span className="text-slate-400">Perna preferida</span>
              <span>{preferred_foot}</span>
            </div>

            <div className="flex flex-col items-center uppercase text-sm md:text-lg">
              <span className="text-slate-400">Camisa</span>
              <span>{shirt_number}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-2 p-4 mt-8 lg:col-span-2 w-full">
        <VotePlayer
          playerVotesData={playerData.average_votes}
          loggedUserID={loggedUserID}
          playerID={id}
        />
      </div>
    </div>
  )
}

export default PlayerDetailComponent
