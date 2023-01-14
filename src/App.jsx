import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <img src="./src/assets/laura.png" alt="" />
     <div className="parent">
      <h1 className='name'>Laura Smith</h1>
      <h4 className='career'>Frontend Developer</h4>
      <a href="" className='website'>laurasmith.website</a>
      <div className='flex-container'>
        <a href="mailto:#" className='child-container'>
          <i class="fa-solid fa-envelope"></i>
          <h4>Email</h4>
        </a>
        <a href="#" className='child-container1'>
          <i class="fa-brands fa-linkedin"></i>
          <h4>Linkedin</h4>
        </a>
      </div>
      <div>
      <h2 className='heading'>About</h2>
      <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt beatae, eaque ipsam error, quisquam dignissimos ex, veritatis minus sapiente voluptatum necessitatibus provident. Sunt, recusandae beatae? At est expedita fugit tempora.</p>
      <h2 className='heading'>Interests</h2>
      <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam perspiciatis sed error aliquid soluta mollitia velit amet quis ipsum ab!</p>
      </div>
     </div>
     <div className='footer'>
        <div className='icon-container'>
         <a href="#" className='icon'>
        <i class="fa-brands fa-twitter"></i>
         </a>
         <a href="#" className='icon'>
        <i class="fa-brands fa-facebook-f"></i>
         </a>
         <a href="#" className='icon'>
        <i class="fa-brands fa-instagram"></i>
         </a>
         <a href="#" className='icon'>
        <i class="fa-brands fa-github"></i>
         </a>
        </div>
      </div>
    </div>
  )
}

export default App
