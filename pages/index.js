import Head from 'next/head'
import { createElement } from 'react'

export default function Home() {

  const itemClick = (e) => {
    console.log(e.target);//test which item selected
    //now for conditions to allow me to show the description for each project:
    const para = document.getElementById("descriptions");

    if (e.target.id == "heybud"){
      para.innerHTML = `This is a short top-down adventure game I made using Godot and wrote in GDScript. 
                        You begin in the characters farm, 
                        his name Buddy, and are instructed to find his tools that have gone missing. Once every item is collected you are prompted
                        to go to his house to then enter the next level. There is currently only one level.`;
    }
    else if (e.target.id == "word"){
      para.innerHTML = "";
    }
    else if (e.target.id == "cinema"){
      para.innerHTML = "";
    }
    else if (e.target.id == "help"){
      para.innerHTML = "";
    }
    else if (e.target.id == "game"){
      para.innerHTML = "";
    }
  }

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

                <div id="proj-head">
                <h1>My Projects</h1>
                </div>

                <h2>Hey Buddy - Top Down Adventure Game</h2>
                <img src="heybud.jpg" height="300" width="550" id="heybud" onClick={itemClick}></img>
                <h2>What's The Word Today?</h2>
                <img src="word.jpg" height="300" width="550" id="word" onClick={itemClick}></img>
                <h2>Cinema Booking</h2>
                <img src="akatsukicinema.jpg" height="300" width="550" id="cinema" onClick={itemClick}></img>
                <h2>QuickHelp</h2>
                <img src="quickhelp.jpg" height="300" width="550" id="help" onClick={itemClick}></img>
                <h2>Educational Video Game</h2>
                <img src="bg3.png" height="300" width="550" id="game" onClick={itemClick}></img>

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
          #head-container{
            border: 1px solid green;
            width: 50%;
          }
          #main-head{
            font-size:52px;
            margin-left: 1em;
            text-decoration: underline wavy #d3bb52;
            text-underline-position: under;
            border-radius: 10px;
            padding: 12px;
            display: inline;
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
          background-color: #2d270b;
          color: white;
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
        #projects::-webkit-scrollbar{
          width: 12px;
        }
        #projects::-webkit-scrollbar{ /*hide scrollbars*/
          display: none;
        }
        #projects:hover{
          cursor: grab;
        }
        
        #proj-head{
          position: sticky;
          border-radius: 5px;
          top: 0;
          border: none;
          background: linear-gradient(45deg,#544815, #2d270b);
        }
        #descr-head{
          position: sticky;
          border-radius: 5px;
          top: 0;
          border: none;
          background: linear-gradient(45deg,#2d270b, #544815);
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
