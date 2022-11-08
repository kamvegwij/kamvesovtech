import Head from 'next/head'

export default function Home() {
  return (
  <div className="container">
    <Head>
        <title>Kamvelihle Gwijana</title>
      </Head>
      
      <main>
          <div id="top-section">
                <h1 id="main-head">Hey, I'm Kamve!</h1>
          </div>
          
          <div id="info-container">
                <h1>About Me</h1>
                <p>
                My name is Kamvelihle Gwijana and I am from 
                Queenstown, Eastern Cape South Africa.
                I am a Full Stack Developer + Game Developer with a passion for learning new technologies and applying them practically.
                I have used Flask, Django, Java, Python, HTML, CSS, Godot + GDScript and C# over the years at university and individually for work and side projects.
                I have strong leadership qualities as I served as the chairman and club captain for the UWC Tennis Club and for the final year project I took the initiative to 
                make sure the team stayed on track and met the constant deadlines. I work well with a team, I have good social skills and I am a practical learner.
                </p>
          </div>

          <div id="work-container">
              <div id="projects">
                <h1>My Projects</h1>
                <p>Projects here....</p>
              </div>

              <div id="interests">
                <h1>My Interests</h1>
                <p>Interests here....</p>
              </div>
          </div>

          <footer>
            <div id="bottom-info">
              <h1>Why do I want to join SovTech?</h1>
            </div>

          </footer>
    </main>

      <style jsx>
        {`
        /*headers styling*/

          #main-head{
            font-size:42px;
          }
          h1{
            font-size: 27px;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 1px;
          }

        /*about me section styling*/
        
        #info-container{
          position: relative;
          margin: auto;
          padding: 5px;
          width: 70%;
          height: 25%;

          font-weight: medium;
        }

        /*projects section styling*/

        #work-container{
          justify-content: center;
          display: flex;
        }
        #work-container h1 {
          font-size: 25px;
        }
        #projects{
          border: 1px solid red;
          border-radius: 5px;
          flex-basis: 500px;
          height: 40vh;
          margin: 2px;
        }
        #interests{
          border: 1px solid red;
          border-radius: 5px;
          flex-basis: 500px;
          height: 40vh;
          margin: 2px;
        }

        /*bottom section styling*/

        #bottom-info h1{
          font-size: 27px;
        }
        
        `}
      </style>
      <style jsx global>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Changa:wght@200');
        body{
              text-align: center;
              font-family: 'Changa', sans-serif;
              color: black;
          }
        `}
      </style>
    </div>
  )
}
