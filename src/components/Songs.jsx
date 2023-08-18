import {Song} from "./Song"
export const Songs=({fn,allSongs})=>{
    console.log('All Songs',allSongs)
    return(<>
    {allSongs.map((currentSong,index)=><Song fn={fn} key={index} song ={currentSong}/>)}
    </>)
}