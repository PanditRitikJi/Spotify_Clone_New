import React from 'react'
import "./Player.css"
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from "./Footer.js"
const Player = ({spotify}) => {
  return (
    <div className='player'>
      <div className='player_body'>
      {/* siderbar */}
      <Sidebar/>
      <Body spotify={spotify}/>
      {/* body */}
      </div>
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Player