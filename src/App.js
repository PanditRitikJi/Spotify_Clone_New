//1:32:18  
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
const spotify = new SpotifyWebApi();

function App() {
  //run code on given condition ==> useeffect
  // const[{user,token}setToken] = useState(null);
  const[{user,token},dispatch]=useDataLayerValue();
   useEffect(()=>{

    
     //code...
     const hash = getTokenFromUrl();
     window.location.hash ="";

     const _token=hash.access_token;

     if(_token){
       dispatch({
         type:'SET_TOKEN',
         token:_token,
       });
       
       spotify.setAccessToken(_token);

       spotify.getMe().then(user=>{
         console.log('person',user);
         console.log('alien',token);

        dispatch({
           type:'SET_USER',
           user: user,
           
         });
       });

       spotify.getUserPlaylists().then((playlists)=>{
         dispatch({
           type:"SET_PLAYLISTS",
           playlists:playlists,
         });
       });

       spotify.getPlaylist('1yscVRqx4oplWQcXgQm5P2').then(response=>{
         dispatch({
           type:"SET_DISCOVER_WEEKLY",
           discover_weekly:response,
         })
       });
     }
     console.log('i hav a token==>',token);
   },[]);

  return (
    <div className="app">
      {
        token ?(
        <Player spotify={spotify} />
        ):(
        <Login/>
        )
      }
      {/* <Login/> */}
    </div>
  );
}

export default App;
