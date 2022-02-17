import React, {useState, useEffect} from 'react'

function Movies() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    // Note:  the empty array means the useEffect will run like componentDidMount()
    useEffect(() =>{
        fetch("https://api.themoviedb.org/3/movie/550?api_key=f669645cad8fbe1526a40b2deee8a49e")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error){
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded){
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map(item =>(
                    <li key={item.id}>
                        -

                    </li>
                ))}
            </ul>
        );
    }
  
}

export default Movies