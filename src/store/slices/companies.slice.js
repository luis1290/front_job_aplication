import { createSlice } from '@reduxjs/toolkit';
import getConfig from '../../helpers/getConfig';
import axios from 'axios';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const companiesSlice = createSlice({
  name: 'companies',
  initialState: {},
  reducers: {
    setCompanies: (state, action) => {
      return action.payload
    }
  }
})

export const getCompaniesThunk = () => dispatch => {
  axios.get(`http://localhost:8000/getallcompanies`)
    .then((resp) => {
      // console.log(resp.data)
      dispatch(setCompanies(resp.data))
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

export const { setCompanies } = companiesSlice.actions;

export default companiesSlice.reducer;