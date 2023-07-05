import { configureStore } from '@reduxjs/toolkit'
import jobAplication from './slices/jobAplication.slice'

export default configureStore({
  reducer: {
    jobAplication
	}
})