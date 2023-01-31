import Typewriter from "typewriter-effect"
import '../Home/Home.css'
import '../../styles/structure.css'
import { useState } from "react"
import BurgerMenu from "../../Components/BurgerMenu"
const Home = () => {
  const [showImage, setShowImage] = useState(true);

  const handleBurgerMenu = () => {
    setShowImage(!showImage);
  }
  return (
  
    <div className="flex flex-column justify-center maut ">
     
      <div className="flex flex-column justify-center item-center gap1" >
        
        {showImage && <img className='animate__animated animate__zoomInUp' src={require('../../assets/logomain.svg').default} alt="main page logo" />}


        <Typewriter
          options={{
            strings: ['Software Engineer', 'MERN Stack', 'Full Stack', 'Front End', 'Back End'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
 
  )

}

export default Home