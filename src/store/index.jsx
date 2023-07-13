import { configureStore } from '@reduxjs/toolkit'
import jobAplication from './slices/jobAplication.slice'
import companies from './slices/companies.slice'
import isLoading from "./slices/isLoading.slice"
import recluiters from './slices/recluiter.slice'

export default configureStore({
  reducer: {
    jobAplication, companies, isLoading, recluiters
  }
})