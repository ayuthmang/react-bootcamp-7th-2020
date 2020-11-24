import { bool, func } from 'prop-types'

const Link = (props) => {
  if (props.active) {
    return props.children
  }

  return (
    <a href="#/" onClick={props.onClick}>
      {props.children}
    </a>
  )
}

Link.propTypes = {
  active: bool.isRequired,
  onClick: func.isRequired
}

export default Link
