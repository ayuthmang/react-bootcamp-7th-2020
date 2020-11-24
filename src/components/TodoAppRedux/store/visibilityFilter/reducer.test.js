import visibilityFilterReducer from './reducer'

test('should set visibilityFilter', () => {
  const initialState = 'all'

  const nextState = visibilityFilterReducer(initialState, {
    type: 'SET_VISIBILITY_FILTER',
    payload: 'active',
  })

  expect(nextState).toBe('active')
})

test('should set initial state to all', () => {
  expect(visibilityFilterReducer(undefined, {})).toBe('all')
})
