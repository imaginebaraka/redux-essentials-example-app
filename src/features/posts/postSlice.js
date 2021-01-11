import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState = [
  { id: '1', title: 'First Post', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More Text' },
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        }
      },
    },
  },
})

export const { postAdded, postUpdated } = postSlice.actions
export default postSlice.reducer
