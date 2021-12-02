import { createSlice } from '@reduxjs/toolkit'

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    groceries: [],
    loading: false,
  },
  reducers: {
    itemAdded(state, action) {
      state.groceries.push(action.payload)
    },
    itemUpdated(state, action) {
      const { id, name } = action.payload
      const existingItem = state.groceries.find(item => item.id === id)
      if (existingItem) {
        existingItem.name = name
      }
    },
    itemDeleted(state, action) {
      const { id } = action.payload
      const existingItem = state.groceries.find(item => item.id === id)
      if (existingItem) {
        state.groceries = state.groceries.filter(item => item.id !== id)
      }
    },
    getItemsFetch(state, action) {
      state.loading = true
    },
    getItemsSuccess(state, action) {
      state.groceries = [...state.groceries, ...action.payload]
      state.loading = false
    },
    getItemsFailure(state, action) {
      state.loading = false
    },
  },
})

export const {
  itemAdded,
  itemUpdated,
  itemDeleted,
  getItemsFetch,
  getItemsSuccess,
  getItemsFailure,
} = itemsSlice.actions

export default itemsSlice.reducer
