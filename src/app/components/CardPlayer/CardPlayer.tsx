import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { auth } from '@/services/auth'
import { CardPlayerProps } from '@/types/types'
import Image from 'next/image'
// import { redirect } from 'next/navigation'

const CardPlayer = async ({ players }: CardPlayerProps) => {
  const session = await auth()

  // const handleCardClick = () => {
  //   redirect(`player/${session?.user?.id}`)
  // }

  console.log({ players })

  return (
    <div className="grid gap-4 grid-cols-2 grid-rows-2 md:gap-8 md:grid-cols-4 md:grid-rows-4 lg:gap-6 lg:grid-cols-6 lg:grid-rows-6">
      <Card>
        <CardHeader className="flex justify-center items-center">
          <Image
            src={session?.user?.image as string}
            width={90}
            height={90}
            alt="User image"
            className="rounded-full"
          />
        </CardHeader>

        <CardContent className="border-b border-green-500 text-center">
          <span>{players[1].name}</span>
        </CardContent>

        <CardFooter className="flex justify-between mt-4">
          <span>Votar</span>
          <span>{players[0].rating}</span>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardPlayer
