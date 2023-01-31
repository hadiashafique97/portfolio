import Typewriter from "typewriter-effect"
import '../Home/Home.css'
import '../../styles/structure.css'
import { useState, useEffect } from "react"
import BurgerMenu from "../../Components/BurgerMenu"
const Home = () => {
  const [showImage, setShowImage] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const handleBurgerMenu = () => {
    setShowImage(!showImage);
  }
  useEffect(() => {
    setShowImage(false)
    setTimeout(() => {
      setShowImage(true)
      setTimeout(() => {
        setShowAnimation(true)
      }, 1000)
    }, 0);
  }, [])
  return (
  
    <div className="flex flex-column justify-center maut background-color">
     
      <div className="flex flex-column justify-center item-center gap1" >
        
        {showImage && <img className='animate__animated animate__zoomInUp ' src={require('../../assets/logomain.svg').default} alt="main page logo" />}
         
        {showAnimation && (
        <Typewriter 
          options={{
            strings: ['Software Engineer', 'MERN Stack', 'Full Stack', 'Front End', 'Back End'],
            autoStart: true,
            loop: true,
          }}
        />
        )}
      </div>
    </div>
 
  )

}

export default Home