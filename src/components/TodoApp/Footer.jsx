import Link from './Link'

const Footer = ({ onFilterClick, visibilityFilter }) => {
  return (
    <div>
      <span>
        Show:{' '}
        <Link
          active={visibilityFilter === 'all'}
          onClick={() => onFilterClick('all')}
        >
          All
        </Link>{' '}
        |{' '}
        <Link
          active={visibilityFilter === 'completed'}
          onClick={() => onFilterClick('completed')}
        >
          Completed
        </Link>{' '}
        |{' '}
        <Link
          active={visibilityFilter === 'active'}
          onClick={() => onFilterClick('active')}
        >
          Active
        </Link>
      </span>
    </div>
  )
}

export default Footer
