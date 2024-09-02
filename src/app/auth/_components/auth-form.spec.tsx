import { render, screen, fireEvent } from '@testing-library/react'
import { AuthForm } from './auth-form'
import '@testing-library/jest-dom'

describe('AuthForm', () => {
  test('renders the AuthForm component correctly', () => {
    render(<AuthForm loginAction={jest.fn()} />)

    expect(screen.getByText('Copa Catarina')).toBeInTheDocument()
    expect(
      screen.getByText('Faça seu login e vote nos seus favoritos'),
    ).toBeInTheDocument()
    expect(screen.getByTestId('login-button')).toBeInTheDocument()
    expect(screen.getByTestId('chrome-icon')).toBeInTheDocument()
  })

  test('calls loginAction when the login button is clicked', async () => {
    const loginAction = jest.fn()

    render(<AuthForm loginAction={loginAction} />)

    const loginButton = screen.getByTestId('login-button')
    fireEvent.click(loginButton)
  })
})
