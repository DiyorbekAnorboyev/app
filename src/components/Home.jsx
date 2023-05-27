import React from 'react'
import Navbar from './Navbar'
import VideoCard from './VideoCard'
import Menu from "./Menu"

const Home = ({username}) => {
  const myStyle= {
    display: "flex",
    justifyContent: "center",
  }
  return (
    <div>
        <Navbar/>
        <div style={myStyle}>
          <VideoCard username={username}/>
          <div style={{marginLeft: "8%", marginTop: "50px"}}>
            <Menu username={username}/>
          </div>
        </div>
    </div>
  )
}

export default Home
