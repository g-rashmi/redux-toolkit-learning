import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import {increaseby1,decreaseby1,increaseby10,decreaseby10} from '../redux/counterslice'
function Counter() {

  const count=useSelector((state)=>state.countersuper)  
  const dispatch= useDispatch()
  return (
    <div>
     {count}
     <button onClick={()=>dispatch(increaseby1())}>increaseby1</button><button onClick={()=>dispatch(increaseby10())}>increaseby10</button><button onClick={()=>dispatch(decreaseby1())}>decreaseby1</button><button onClick={()=>dispatch(decreaseby10())}>decreaseby10</button>
    </div>
  )
}

export default Counter
