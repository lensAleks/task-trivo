import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: true,
  users: [
      {id:1, name:'Anna Aleksanyan', email: 'aleksanyan@gmail.com', age: 50, phoneNumber:'077456734'},
      {id:2, name: 'Ani Karapetyan', email: 'karapetyan12@gamil.com', age: 29, phoneNumber:'098476734'},
      {id:3, name:'Davit Ghazaryan', email: 'davitghazaryan@gmsail.com', age: 34, phoneNumber:'091450034'},
      {id:4, name: 'Mark Gomes', email: 'nargomes@gmail.com', age: 45, phoneNumber:'077400734'},
      {id:5, name:'Tom Karpus', email: 'tomik123@gmail.com', age: 38, phoneNumber:'077456790'},
      {id:6, name: 'Artavazt Glumov', email: 'glumov@gmail.com', age: 19, phoneNumber:'047457734'}
  ]
}

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.login = !state.login
    },
    addUser: (state, action) => {
      state.users = [action.payload, ...state.users]
    },
    updateUser: (state, action) => {
      state.users.forEach(elem => {
        if(elem.id === action.payload.id) {
          elem.name = action.payload.name
          elem.email = action.payload.email
          elem.id = action.payload.id
          elem.phoneNumber = action.payload.phoneNumber
        }
      })
      console.log(state.users,'kjkkkkj')
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(elem => elem.id !== action.payload)
      },
  },
})

export const { login, addUser, updateUser, deleteUser } = slice.actions

export default slice.reducer