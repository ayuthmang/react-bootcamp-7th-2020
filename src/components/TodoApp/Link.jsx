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

export default Link