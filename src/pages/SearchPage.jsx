import {Search} from "../components/Search"
import {Songs} from "../components/Songs"
import {getSongs} from "../services/api-client"
import {useEffect,useState} from "react";
import {Player} from "../components/Player"
export const SearchPage =()=>{
    const [allSongs,setSongs] = useState([]);
    const [flag,setFlag]= useState(false);
    const [song,setPlayerSong] =useState(null);
    const loadSongs=async()=>{
        setSongs(await getSongs('Latest Songs'));
    }
    useEffect(()=>{
        loadSongs();
    },[])


    const togglePlayer=(flag,songArg)=>{
        setPlayerSong(songArg);
        setFlag(flag);

    }
    const getArtistName = async (artistName)=>{
       
        console.log("rec artist name",artistName)
       setSongs(await getSongs(artistName));

    }
    const jsx=<> <Search fn={getArtistName}/>
    <Songs fn={togglePlayer} allSongs={allSongs}/></>;
    return(<div className="container">
        <h1 className="alert alert-primary text-center">MUSIC STORE</h1>
       
        {flag?<Player fn={togglePlayer} song={song}/>:jsx}
       
    </div>)
}