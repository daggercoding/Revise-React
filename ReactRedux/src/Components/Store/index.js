import {createStore} from "redux"

let initialValue=
{
    counter:10
}

function reducerFunc(store=initialValue,action)
{
    if(action.type==="increment")
    {
      return {counter:store.counter+1}
    }
    if(action.type==="decrement")
    {
      return {counter:store.counter-1}
    }


    return store;
}

const Store = createStore(reducerFunc)

export default Store;