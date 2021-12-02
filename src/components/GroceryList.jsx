import { getItemsFetch, itemDeleted } from '../redux/itemsSlice'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

export function GroceryList() {
  const dispatch = useDispatch()

  const groceries = useSelector(state => state.items.groceries)
  const loading = useSelector(state => state.items.loading)

  const handleDelete = id => {
    dispatch(itemDeleted({ id }))
  }

  return (
    <div className='container'>
      <div className='row'>
        <h1>Grocery list</h1>
      </div>
      <div className='row'>
        <div className='two columns'>
          <button
            onClick={() => dispatch(getItemsFetch())}
            className='button-primary'
          >
            Fetch Data
          </button>
        </div>
        <div className='two columns'>
          <Link to='/add-item'>
            <button className='button-primary'>Add item</button>
          </Link>
        </div>
      </div>
      <div className='row'>
        {loading ? (
          'Loading...'
        ) : (
          <table className='u-full-width'>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {groceries.length > 0 &&
                groceries.map(({ id, name }, i) => (
                  <tr key={i}>
                    <td>{name}</td>
                    <td>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-item/${id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
