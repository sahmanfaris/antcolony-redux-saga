import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { itemAdded } from '../redux/itemsSlice'

export function AddItem() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [name, setName] = useState('')
  const [error, setError] = useState(null)

  const handleName = e => setName(e.target.value)

  const usersAmount = useSelector(state => state.items.groceries.length)

  const handleClick = () => {
    if (name) {
      dispatch(
        itemAdded({
          id: usersAmount + 1,
          name,
        })
      )
      setError(null)
      history.push('/')
    } else {
      setError('Fill in all fields')
    }
    setName('')
  }

  return (
    <div className='container'>
      <div className='row'>
        <h1>Add user</h1>
      </div>
      <div className='row'>
        <div className='three columns'>
          <button onClick={() => history.push('/')}>Go Back</button>
          <label htmlFor='nameInput'>Name</label>
          <input
            className='u-full-width'
            type='text'
            placeholder='what to buy...'
            id='nameInput'
            onChange={handleName}
            value={name}
          />
          <div style={{ color: 'red' }}>{error && error}</div>
          <div className='row'>
            <button onClick={handleClick} className='button-primary'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
