import Link from './Link'

const Footer = () => {
  return (
    <div>
      <span>
        Show: <Link filter="all">All</Link> |{' '}
        <Link filter="completed">Completed</Link> |{' '}
        <Link filter="active">Active</Link>
      </span>
    </div>
  )
}

export default Footer
