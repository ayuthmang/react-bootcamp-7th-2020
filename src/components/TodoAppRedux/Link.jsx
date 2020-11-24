import { connect } from 'react-redux'
import { func } from 'prop-types'

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
  onClick: func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter,
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      payload: ownProps.filter,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
