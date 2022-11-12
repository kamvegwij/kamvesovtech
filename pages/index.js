import Head from 'next/head'
import { createElement } from 'react'

export default function Home() {
  return (
  <div className="container">
    <Head>
        <title>Kamvelihle Gwijana</title>
      </Head>
      
      <main>
          <div id="top-container">
                <h1 id="main-head">Hey, I'm Kamve</h1><h2 id="excl_mark">!</h2>
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

                <div id="proj-head">
                <h1>My Projects</h1>
                </div>

                <h2>Hey Buddy - Top Down Adventure Game</h2>
                <img onclick="descriptionClick()" src="heybud.jpg" height="300" width="550" id="heybud"></img>
                <h2>What's The Word Today?</h2>
                <img onclick="descriptionClick()" src="word.jpg" height="300" width="550" id="word"></img>
                <h2>Cinema Booking</h2>
                <img onclick="descriptionClick()" src="akatsukicinema.jpg" height="300" width="550" id="cinema"></img>
                <h2>QuickHelp</h2>
                <img onclick="descriptionClick()" src="quickhelp.jpg" height="300" width="550" id="help"></img>
                <h2>Educational Video Game</h2>
                <img onclick="descriptionClick()" src="bg3.png" height="300" width="550" id="game"></img>

              </div>

              <div id="description">
                <div id="descr-head">
                  <h1>Description</h1>
                </div>
                  <p id="descriptions">Click on the projects to see description below:</p>
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
            <p>Find more of my projects on my GitHub page</p>
            <a href="https://github.com/kamvegwij">GitHub link</a>
          </footer>
    </main>

      <style jsx>
        {`
        /*headers styling*/

          #main-head{
            font-size:52px;
            margin-left: 1em;
            text-decoration: underline wavy #d3bb52;
            text-underline-position: under;
            display: inline;
          }

          #excl_mark{
            font-size:51px;
            display: inline-block;
            margin-left: 0px;
            text-decoration: none;

            transform-origin: 0 0;
            -webkit-animation-name: textanimate;
            animation-duration: 1s;
            animation-iteration-count: infinite;
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
          border: none;
          border-radius: 5px;
          flex-basis: 650px;
          height: 50vh;
          margin: 4px;
          overflow: scroll;
        }
        #projects:hover{
          cursor: grab;
        }
        #projects::-webkit-scrollbar{ /*hide scrollbars*/
          display: none;
        }
        #proj-head{
          position: sticky;
          border-radius: 5px;
          top: 0;
          border: none;
          background: linear-gradient(45deg,#f6f0db, #d3bb52);
        }
        #descr-head{
          position: sticky;
          border-radius: 5px;
          top: 0;
          border: none;
          background: linear-gradient(45deg,#d3bb52, #f6f0db);
        }
        #description{
          border-radius: 5px;
          flex-basis: 450px;
          height: 50vh;
          margin: 4px;
          overflow: scroll;
        }
        #description::-webkit-scrollbar{ /*hide scrollbars*/
          display: none;
        }
        #description:hover{
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
          height: 50%;
        }

        /*some animations of mine :) */
        @keyframes textanimate{
          
          0% {transform: translateY(0px);
              }
          20% {transform: translateY(2px);
              }
          40% {transform: translateY(4px);
          }
          60% {transform: translateY(6px);
          }
          80% {transform: translateY(4px);
          }
          100%{transform: translateY(1px);
          }         
        }
        
        `}
      </style>
      <style jsx global>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Changa:wght@200');
        main{
              text-align: center;
              font-family: 'Changa', sans-serif;
              color: black;
              font-weight: bold;
              background-color: #f6f0db;
          }
          footer{
            padding: 7px;
            height: 20vh;
            background-color: #d3bb52;

          }
        `}
      </style>
    </div>
  )
}
