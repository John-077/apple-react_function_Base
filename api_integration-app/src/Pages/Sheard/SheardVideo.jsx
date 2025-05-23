import React from 'react'
import Api from "../../component/YouTubeApi/YouTubeApi"
import { Outlet } from 'react-router'

function SheardVideo() {
    
  return (
    <div>
      <Outlet/>
      <Api/>
    </div>
  )
}

export default SheardVideo
