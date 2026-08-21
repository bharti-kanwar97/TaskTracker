import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function ThemeButton() {
    const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div>
     
      <button
      aria-label="Toggle dark mode"
       className='remove mx-2'
       onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ?  <MdOutlineLightMode className='text-[#1A4560] text-[20px]' /> : <MdLightMode className='text-white  text-[20px]' /> }
      </button>


    </div>
  )
}

export default ThemeButton
