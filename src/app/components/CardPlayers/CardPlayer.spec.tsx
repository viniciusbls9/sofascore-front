import { render } from '@testing-library/react'
import CardPlayers from './CardPlayers'
import '@testing-library/jest-dom'
// import { useRouter } from 'next/navigation'
// import userEvent from '@testing-library/user-event'

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('CardPlayer component', () => {
  const mockPlayers = [
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      fav_position: 'LE',
      biography: 'John Doe biography',
      image_url:
        'https://lh3.googleusercontent.com/a/ACg8ocKcWnX5lgCMQXQ9v0TdH0D42mL4-ckoappaf_x9rt2SV6yXl5BL6A=s96-c',
      age: '25',
      height: '182',
      preferred_foot: 'E',
      shirt_number: '3',
      average_votes: {
        pass_vote: 0,
        shot_vote: 0,
        marking_vote: 0,
        quality_vote: 0,
        velocity_vote: 0,
        overall_average: 0,
      },
      current_user_votes: {
        pass_vote: 0,
        shot_vote: 0,
        marking_vote: 0,
        quality_vote: 0,
        velocity_vote: 0,
        overall_average: 0,
      },
    },
    {
      id: '2',
      name: 'Jack',
      email: 'Jack@gmail.com',
      fav_position: 'AT',
      biography: 'Jack biography',
      image_url:
        'https://lh3.googleusercontent.com/a/ACg8ocKcWnX5lgCMQXQ9v0TdH0D42mL4-ckoappaf_x9rt2SV6yXl5BL6A=s96-c',
      age: '28',
      height: '172',
      preferred_foot: 'D',
      shirt_number: '10',
      average_votes: {
        pass_vote: 5,
        shot_vote: 5,
        marking_vote: 5,
        quality_vote: 5,
        velocity_vote: 5,
        overall_average: 5,
      },
      current_user_votes: {
        pass_vote: 5,
        shot_vote: 5,
        marking_vote: 5,
        quality_vote: 5,
        velocity_vote: 5,
        overall_average: 5,
      },
    },
  ]

  test('should render component with correct values', () => {
    const { getByAltText, getByText, getByTestId } = render(
      <CardPlayers players={mockPlayers} />,
    )

    expect(getByAltText(/Foto do jogador John Doe/i)).toBeInTheDocument()
    expect(getByAltText(/Foto do jogador Jack/i)).toBeInTheDocument()

    expect(getByText(/John Doe/i)).toBeInTheDocument()
    expect(getByText(/Jack/i)).toBeInTheDocument()

    expect(getByTestId(/overall-0/i)).toBeInTheDocument()
    expect(getByTestId(/overall-5/i)).toBeInTheDocument()
  })

  // test('should render component and click in player card', () => {
  //   const mockPush = jest.fn()
  //   useRouter.mockReturnValue({ push: mockPush }) // Mock da função push

  //   const { getByTestId } = render(<CardPlayers players={mockPlayers} />)

  //   const cardPlayerID = getByTestId(/card-1/i)

  //   userEvent.click(cardPlayerID)

  //   expect(mockPush).toHaveBeenCalledWith('/player/1')
  // })
})
