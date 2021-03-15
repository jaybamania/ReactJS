import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    lading : true,
    error : '',
    post : {}
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS' :
            return {
                loading:false,
                error : '',
                post :action.payload
            }
        case 'FETCH_ERROR' : 
            return {
                loading:false,
                error : 'Something Went Wrong',
                post :{}
            }
        default : 
            return state
    }
}
function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer,initialState)    

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/8`)
        .then(response =>{
            dispatch({type : 'FETCH_SUCCESS', payload : response.data})
        })
        .catch(error =>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])
    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null }
        </div>
    )
}

export default DataFetchingTwo
