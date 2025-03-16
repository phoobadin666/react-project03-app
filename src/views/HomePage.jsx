import React from 'react'
import NavBar from '../Components/NavBar.jsx'
import PicCard from '../Components/PicCard.jsx'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
export default function HomePage() {
  return (
    <>
    <NavBar/>
    <h1>HomePage</h1>
    <PicCard showimg={pic1}/>
    <br/>
    <PicCard showimg={pic2}/>
    <br/>
    <PicCard showimg={pic3}/>
    <br/>

    </>
  )
}
