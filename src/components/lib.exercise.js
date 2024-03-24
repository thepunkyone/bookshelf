import styled from '@emotion/styled/macro'
import {keyframes} from '@emotion/core'
import {Dialog as ReachDialog} from '@reach/dialog'
import {FaSpinner} from 'react-icons/fa'

import * as c from 'styles/colors'
import * as mq from 'styles/media-queries'

const buttonVariants = {
  primary: {
    border: 'none',
    background: c.indigo,
    color: c.base,
  },
  secondary: {
    border: `2px solid ${c.indigoDarken10}`,
    background: 'none',
    color: c.indigoDarken10,
  },
}

const Button = styled.button(
  {
    padding: '8px 24px 9px',
    lineHeight: 1,
    fontWeight: 600,
    borderRadius: '3px',
    fontSize: 16,
  },
  ({variant = 'primary'}) => buttonVariants[variant],
)

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '& > label': {
    marginBottom: '8px',
  },
})

const Input = styled.input({
  border: `1px solid ${c.text}`,
  borderRadius: '3px',
  padding: '8px 12px',
})

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: c.base,
  color: c.text,
  border: `1px solid ${c.gray10}`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [mq.small]: {
    width: '100%',
    margin: '10vh auto',
  },
})

const spin = keyframes({
  from: {
    transform: 'rotate(0)',
  },
  to: {
    transform: 'rotate(359deg)',
  },
})

const Spinner = styled(FaSpinner)({
  animation: `${spin} 0.7s linear infinite`,
})

Spinner.defaultProps = {
  'aria-label': 'loading',
}

export {Button, FormGroup, Input, CircleButton, Dialog, Spinner}
