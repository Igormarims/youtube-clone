import React from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="max-h-screen overflow-hidden ">
        <div style={{height:'7.5vh'}}>
          <NavBar/>
        </div>
        <div className="flex " style={{height:'92.5vh'}}>
            <Sidebar/>
        </div>
    </div>
  )
}
