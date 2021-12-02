import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { useState } from 'react'
import { itemUpdated } from '../redux/itemsSlice'

export function EditItem() {
  const { pathname } = useLocation()
  const itemId = parseInt(pathname.replace('/edit-item/', ''))

  const item = useSelector(state =>
    state.items.groceries.find(item => item.id === itemId)
  )

  const dispatch = useDispatch()
  const history = useHistory()

  const [name, setName] = useState(item.name)
  const [error, setError] = useState(null)

  const handleName = e => setName(e.target.value)

  const handleClick = () => {
    if (name) {
      dispatch(
        itemUpdated({
          id: itemId,
          name,
        })
      )
      setError(null)
      history.push('/')
    } else {
      setError('Fill in all fields')
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <h1>Edit item</h1>
      </div>
      <div className='row'>
        <div className='three columns'>
          <label htmlFor='nameInput'>Name</label>
          <input
            className='u-full-width'
            type='text'
            placeholder='what to buy...'
            id='nameInput'
            onChange={handleName}
            value={name}
          />
          {error && error}
          <button onClick={handleClick} className='button-primary'>
            Save item
          </button>
        </div>
      </div>
    </div>
  )
}
