import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { AddItem } from './components/AddItem'
import { EditItem } from './components/EditItem'
import React, { useEffect } from 'react'
import { GroceryList } from './components/GroceryList'
import { useDispatch } from 'react-redux'
import { getItemsFetch } from './redux/itemsSlice'

export default function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getItemsFetch())
  // }, [dispatch])

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/add-item'>
            <AddItem />
          </Route>
          <Route path='/edit-item'>
            <EditItem />
          </Route>
          <Route path='/'>
            <GroceryList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
