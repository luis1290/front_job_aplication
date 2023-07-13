import { createSlice } from '@reduxjs/toolkit';
import getConfig from '../../helpers/getConfig';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const recluitersSlice = createSlice({
  name: 'recluiters',
  initialState: [],
  reducers: {
    setRecluiter: (state, action) => {
      return action.payload
    }
  }
})


export const getRecluitersThunk = () => dispatch => {
  dispatch(setIsLoading(true));

  axios.get(`http://localhost:8000/getallrecluiter`)
    .then((resp) => {
      console.log(resp.data)
      dispatch(setRecluiter(resp.data))
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
    .finally(() => dispatch(setIsLoading(false)))
}

export const { setRecluiter } = recluitersSlice.actions;

export default recluitersSlice.reducer;