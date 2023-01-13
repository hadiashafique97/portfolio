import Typewriter from "typewriter-effect"
import '../Home/Home.css'
const Home = () => {

  return (
    <div className="container" >
      <div className='homepg-logo'>

        <img src="../logo.png" style={{ width: "600px" }} alt="" />
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