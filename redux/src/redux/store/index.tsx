import {configureStore} from '@reduxjs/toolkit' 
import counter from '../counterslice'
export const store= configureStore({
  reducer:{ 

countersuper:counter ,
increaseby10:counter.increaseby10
  }
})