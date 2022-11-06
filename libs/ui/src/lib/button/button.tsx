import styled from 'styled-components'

/* eslint-disable-next-line */
export interface ButtonProps {
  color?: string
  children: React.ReactNode | string
}

const StyledButton = styled.button`
  color: ${(props) => (props.color ??= 'black')};
`

export function Button({ color, children }: ButtonProps) {
  return (
    <StyledButton type="button" color={color}>
      {children}
    </StyledButton>
  )
}

export default Button
