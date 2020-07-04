import React, { FC } from 'react'
import Styles from './spinner-styles.scss'

type Props = React.HTMLAttributes<HTMLElement>

const Spinner: FC<Props> = ({ className }: Props) => (
  <div data-testid="spinner" className={[Styles.spinner, className].join(' ')}>
    <div />
    <div />
    <div />
    <div />
  </div>
)

export default Spinner
