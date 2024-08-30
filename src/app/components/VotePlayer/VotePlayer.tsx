/* eslint-disable camelcase */
'use client'
import { Button } from '@/components/ui/button'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PlayerProps, VoteTypes } from '@/types/types'
import votePlayer from '@/usecases/votePlayer/VotePlayer'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'

interface VotePlayerProps {
  playerVotesData: PlayerProps['average_votes']
  loggedUserID: string
  playerID: string
}

const VotePlayer = ({
  playerVotesData,
  loggedUserID,
  playerID,
}: VotePlayerProps) => {
  const { toast } = useToast()

  const { pass_vote, marking_vote, quality_vote, shot_vote, velocity_vote } =
    playerVotesData || {}

  const [userVote, setUserVote] = useState<Record<VoteTypes, number>>({
    pass_vote,
    marking_vote,
    quality_vote,
    shot_vote,
    velocity_vote,
  })

  const votesValue = [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

  const voteArray: { id: VoteTypes; label: string; values: number[] }[] = [
    { id: 'pass_vote', label: 'Passe', values: votesValue },
    { id: 'marking_vote', label: 'Marcação', values: votesValue },
    { id: 'quality_vote', label: 'Qualidade', values: votesValue },
    { id: 'shot_vote', label: 'Chute', values: votesValue },
    { id: 'velocity_vote', label: 'Velocidade', values: votesValue },
  ]

  const changeVotePlayerValue = (value: string, key: string) => {
    setUserVote((old) => ({ ...old, [key]: Number(value) }))
  }

  const handlerSaveVotePlayer = async () => {
    const response = await votePlayer({
      pass_vote: userVote.pass_vote,
      marking_vote: userVote.marking_vote,
      quality_vote: userVote.quality_vote,
      shot_vote: userVote.shot_vote,
      velocity_vote: userVote.velocity_vote,
      votedUserId: playerID,
      voterId: loggedUserID,
    })

    if (!response.average_votes?.marking_vote) {
      toast({
        variant: 'destructive',
        title: 'Problema para votar no usuário. Tente novamente',
        description: 'Tivemos um problema para efetivar o voto no usuário',
      })

      return
    }

    toast({
      title: 'Voto feito com sucesso!!',
      description: 'Efetivamos seu voto',
    })
  }

  return (
    <div className="grid grid-cols-2 w-full gap-6 items-end">
      {voteArray?.map((vote) => (
        <div key={vote.id}>
          <p className="text-sm text-slate-400 mb-3">{vote.label}</p>
          <Select
            onValueChange={(value) => changeVotePlayerValue(value, vote.id)}
          >
            <SelectTrigger className="w-full">
              <SelectValue
                defaultValue={userVote[vote.id]}
                placeholder={userVote[vote.id]}
              />
            </SelectTrigger>
            <SelectContent onClick={() => console.log('oi')}>
              {vote.values.map((value) => (
                <SelectItem key={value} value={value.toString()}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}

      <Button onClick={handlerSaveVotePlayer}>Votar</Button>
    </div>
  )
}

export default VotePlayer
