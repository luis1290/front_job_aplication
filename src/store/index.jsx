import { configureStore } from '@reduxjs/toolkit'
import jobAplication from './slices/jobAplication.slice'
import companies from './slices/companies.slice'

export default configureStore({
  reducer: {
    jobAplication, companies
	}
})