import {useRef} from "react";
export const Search = ({fn})=>{
    const artist = useRef();
    return (
     <>  
     <label>Artist Name</label>

    <input ref={artist} type='text' className="form-control" placeholder='Type to Search' />
    <button className="btn btn-primary" onClick={()=>{
        fn(artist.current.value)
    }}>SEARCH IT</button>
    
    </> 
    );
}