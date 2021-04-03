
import './App.css';
import Videocard from './Videocard'
import {useState, useEffect} from 'react'
import db from './firebase'





function App() {


    const [reels, setreels] = useState([])


    useEffect(() => {

      db.collection('reels').onSnapshot(snapshot => {
        setreels(snapshot.docs.map(doc => doc.data()))
      })
      
    
    }, [])






  return (
    <div className="app">


      <div className="app__top">
        <img className = "app__logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="logo"/>


        {/*Logo image */}

         <h1>Reels</h1>

        {/* Header name */}
      </div>

      <div className="app__videos">
        {/* Reels videos */}


        {/*video1 */}


        {reels.map(({channel,avatarSrc,song,url,likes,shares}) => (



            <Videocard
         channel = {channel}
         avatarSrc ={avatarSrc}
         song = {song}
         url = {url}
         likes = {likes}
         shares = {shares}
        
        />

        ))}

        
       
      



      </div>

          


     
    </div>
  );
}

export default App;
