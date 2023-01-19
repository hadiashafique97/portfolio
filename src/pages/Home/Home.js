import Typewriter from "typewriter-effect"
import '../Home/Home.css'
const Home = () => {

  return (
    <div className="container" >

      <div className='homepg-logo'>
        <img src={require('../../assets/logomain.svg').default} alt="" />
      </div>

      <Typewriter
        options={{
          strings: ['Software Engineer', 'MERN Stack', 'Full Stack', 'Front End', 'Back End'],
          autoStart: true,
          loop: true,
        }}
      />

    </div>
  )

}

export default Home