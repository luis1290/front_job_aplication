import { createSlice } from '@reduxjs/toolkit';
import getConfig from '../../helpers/getConfig';
import axios from 'axios';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const jobAplicationSlice = createSlice({
  name: 'jobAplication',
  initialState: {},
  reducers: {
    setJobAplication: (state, action) => {
      return action.payload
    }
  }
})

const token = localStorage.getItem("token")

export const getJobAplicationThunk = (id) => dispatch => {
  axios.get(`http://localhost:8000/users/${id}`, getConfig())
    .then((resp) => {
      // console.log(resp.data)
      dispatch(setJobAplication(resp.data))
    })
    .catch(error => {
      if (token) {
        console.log("State 200")
      } else if (token === null) {
        console.log("State 403, However, you just have to log in to solve it. :)")
      } else {
        console.log(error)
      }
    })
}


export const { setJobAplication } = jobAplicationSlice.actions;

export default jobAplicationSlice.reducer;