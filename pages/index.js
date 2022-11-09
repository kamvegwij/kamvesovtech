import Head from 'next/head'

export default function Home() {
  return (
  <div className="container">
    <Head>
        <title>Kamvelihle Gwijana</title>
      </Head>
      
      <main>
          <div id="top-container">
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
          <div id="bottom-info">
              <h1>Why do I want to join SovTech?</h1>
              <p>I've spent the past 4/5 years learning different technologies and messing around with countless personal projects
                and this has made me realise just how diverse this industry is and just how many options there are in terms of what
                to master. Being in an environment with developers with more experience than me and developers that have been in the 
                industry for a long time is very appealing as this will allow me to learn more and continue to hone my craft.
              </p>
          </div>
          <footer>
            <a href="https://github.com/kamvegwij">GitHub Profile</a>
          </footer>
    </main>

      <style jsx>
        {`
        /*headers styling*/

          #main-head{
            font-size:42px;
            margin-left: 1em;
          }
          h1{
            font-size: 35px;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 1px;
          }
          #top-container{
            text-align: left;
            
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
          box-shadow: 0px 0px 1px 1px white;
          border-radius: 5px;
          flex-basis: 450px;
          height: 40vh;
          margin: 4px;
        }
        #projects:hover{
          box-shadow: 0px 0px 1px 2px black;
          cursor: grab;
        }

        #interests{
          box-shadow: 0px 0px 1px 1px white;
          border-radius: 5px;
          flex-basis: 450px;
          height: 40vh;
          margin: 4px;
        }
        #interests:hover{
          box-shadow: 0px 0px 1px 2px black;
          cursor: grab;
        }

        /*bottom section styling*/

        #bottom-info h1{
          font-size: 27px;
        }
        #bottom-info{
          position: relative;
          margin: auto;
          padding: 5px;
          width: 50%;
          height: 25%;
        }
        
        `}
      </style>
      <style jsx global>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Changa:wght@200');
        main{
              text-align: center;
              font-family: 'Changa', sans-serif;
              color: white;
              background-color: #5dabf4;
          }
          footer{
            height: 13vh;
            background-color: #bcbcbd;
          }
        `}
      </style>
    </div>
  )
}
