export const FETCH_CHARACTERS = "FETCH_CHARACTERS"


export const fetchList= () => {  
    console.log("New List please!");  
    
    return (dispatch) => {
        return fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
                    .then(results  =>  results.json())
                    .then(data => dispatch({type:"FETCH_CHARACTERS", payload: data}))
    }; 
}