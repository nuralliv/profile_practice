import React from 'react'
import {  useEffect, useRef } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage.js'
import './style.css'
import sun from "./sun.svg"
import moon from "./moon.svg"
function BtnDarkMode() {

   // const [darkMode, setDarkMode] = useState('light');
   const [darkMode, setDarkMode] = useLocalStorage('darkmode', 'light ')
   const btnRef = useRef(null);

   useEffect(() => {
      if (darkMode === 'dark') {
         document.body.classList.add('dark')
         btnRef.current.classList.add('dark-mode-btn--active')
      }
      else {
         document.body.classList.remove('dark')
         btnRef.current.classList.remove('dark-mode-btn--active')
      }
   }, [darkMode]);

   const toggleDarkMode = () => {
      setDarkMode((currenValue) => {
         return currenValue === 'light' ? 'dark' : 'light'
      })
   }

   return (

      <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode} >
         <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
         <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>
   )
}

export default BtnDarkMode 