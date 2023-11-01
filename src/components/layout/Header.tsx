import { ReactElement } from 'react'

type headingProps = {title: string}

const Header = ({title}:headingProps): ReactElement => {
  return (
    <div>{title}</div>
  )
} 

export default Header