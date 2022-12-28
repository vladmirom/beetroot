function ReduxExample() {
  const SELECT_USER = 'SELECT_USER';
  const action = {
    type: 'CHANGE_ITEM',
    id: 1
  }

  function addItem(id) {
    return {
      type: SELECT_USER,
      id: id
    }
  }

  dispatchEvent(addItem(2))

  const cart = (action) => {
    if(action.type === 'SELECT_USER') {
      return action.id
    } else if (action.type === 'something else') {
      return action.id
    }
  }
}

export default ReduxExample;