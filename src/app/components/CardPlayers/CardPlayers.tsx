'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { CardPlayerProps } from '@/types/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CardPlayers = ({ players }: CardPlayerProps) => {
  const router = useRouter()

  const handleCardClick = (id: string) => {
    router.push(`/player/${id}`)
  }

  return (
    <div className="grid gap-4 grid-cols-2 grid-rows-2 md:gap-8 md:grid-cols-4 md:grid-rows-4 lg:gap-6 lg:grid-cols-6 lg:grid-rows-6">
      {!Array.isArray(players) && (
        <h1 className="text-center">Ainda nao temos usuarios cadastrados</h1>
      )}
      {players?.map((player) => {
        return (
          <Card
            key={player.id}
            onClick={() => handleCardClick(player.id)}
            className="hover:cursor-pointer"
          >
            <CardHeader className="flex justify-center items-center">
              <Image
                src={player.image_url}
                width={70}
                height={70}
                alt="User image"
                className="rounded-full h-16"
              />
            </CardHeader>

            <CardContent className="border-b-2 border-violet-800 text-center">
              <span>{player.name}</span>
            </CardContent>

            <CardFooter className="flex justify-between mt-6">
              <div className="flex w-full justify-between">
                <span>Nota</span>
                <span>{player.average_votes.overall_average}</span>
              </div>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

export default CardPlayers
