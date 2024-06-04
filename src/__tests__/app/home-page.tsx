import Home from '@/app/page'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Client in home page to send messages', () => {
  it('should render home page', async () => {
    render(<Home/>)

    expect(screen.getByText('ienvenida')).toBeInTheDocument()
  })

  it('should get the button to open the form. get the button to send message disabled, change inputs and enable buttons', () => {
    render(<Home/>)

    const requestButton = screen.getByRole('button', { name: 'PEDIDO DE ORACION' })

    expect(requestButton).toBeInTheDocument()

    // eslint-disable-next-line @typescript-eslint/await-thenable, @typescript-eslint/no-confusing-void-expression
    fireEvent.click(requestButton)

    const sendButton = screen.getByRole('button', { name: 'Enviar' })

    expect(sendButton).toBeInTheDocument()
    expect(sendButton).toBeDisabled()

    const nameInput = screen.getByLabelText('name-input')
    const phoneInput = screen.getByLabelText('phone-input')
    const contentInput = screen.getByLabelText('content-input')

    expect(nameInput).toBeInTheDocument()
    expect(phoneInput).toBeInTheDocument()
    expect(contentInput).toBeInTheDocument()

    fireEvent.change(nameInput, { target: { value: 'Juan' } })
    fireEvent.change(phoneInput, { target: { value: '123' } })
    fireEvent.change(contentInput, { target: { value: 'hola' } })

    expect(sendButton).toBeEnabled()
  })
})
