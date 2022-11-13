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
      para.innerHTML = `This is a simple single page web app with a main purpose of randomly displaying inspirational quotes to get your day going.
                        I made use of the Type.fit API to fetch the quotes and I did some string manipulation in JavaScript to display
                        this data in an aesthetic way.`;
    }
    else if (e.target.id == "cinema"){
      para.innerHTML = `This is one of the two final year projects in Computer Science and it is web app that allows a user to
                        choose a featured movie, book a seat and also allow them to cancel the seat. This user data is then stored
                        in a database for admin purposes. I worked mainly on backend in this project using Flask.`;
    }
    else if (e.target.id == "help"){
      para.innerHTML = `This is the last final year project and it is a web app that allows a user to login and have access to a page with helplines
                        in which they can be immediately taken to a call with one or they can access the chatroom where they can have a one on one
                        talk with a psychologist registered on our service. In this project I was a fullstack developer as I made the pages,
                        flask implementation, API data fetching and some of the main interactions.`;
    }
    else if (e.target.id == "game"){
      para.innerHTML = `This is a project I am working on with a team for a company and I am a backend developer. We're using Godot and GDScript to
                        make an educational video game.`;
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
          </div>
          <div id="work-container">
              <div id="projects">

                <div id="proj-head">
                <h1>My Projects</h1>
                </div>

                <h2>Hey Buddy - Top Down Adventure Game</h2>
                <img src="heybud.jpg" height="300" width="550" id="heybud" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with Godot and GDScript.</label>
                <br></br><a href="https://github.com/kamvegwij/HeyBuddyProject">Source Code</a>
                <br></br><a href="https://youtu.be/DEqJ1oXKJUI">Gameplay Runthrough</a>

                <h2>What's The Word Today?</h2>
                <img src="word.jpg" height="300" width="550" id="word" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with HTML, CSS, JavaScript, Flask, Type.fit API and deployed on Heroku.</label>
                <br></br><a href="https://github.com/kamvegwij/WordOfTheDay">Source Code</a>
                <br></br><a href="https://whatsthewordtoday.herokuapp.com/">Deployed Version</a>

                <h2>Cinema Booking</h2>
                <img src="akatsukicinema.jpg" height="300" width="550" id="cinema" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with HTML, CSS, JavaScript, Flask and SQL.</label>
                <br></br><a href="https://github.com/kamvegwij/HeyBuddyProject">Source Code </a>

                <h2>QuickHelp</h2>
                <img src="quickhelp.jpg" height="300" width="550" id="help" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with HTML, CSS, JavaScript, Flask, SQL, Type.fit API, Twilio.</label>
                <br></br><a href="https://github.com/kamvegwij/FINAL-CAPSTONE">Source Code</a>
                <br></br><a href="https://myquickhelp.herokuapp.com/">Deployed Version </a>

                <h2>Educational Video Game</h2>
                <img src="bg3.png" height="300" width="550" id="game" onClick={itemClick}></img>
                <br></br><label id="add_info">Built with Godot and GDScript.</label>

              </div>

              <div id="description">
                <div id="descr-head">
                  <h1>Description</h1>
                </div>
                  <p id="descriptions">Click on the projects to see description below:</p>
              </div>
          </div>
          <h1>Technologies I've Used</h1>
          <div id="tech">
            
            <img src="pythonbg.png" id="tech_img"></img>
            <img src="cssbg.png" id="tech_img"></img>
            <img src="godot.png" id="tech_img"></img>
            <img src="htmlbg.png" id="tech_img"></img>
            <img src="javabg.png" id="tech_img"></img>
            <img src="jsbg.png" id="tech_img"></img>
            <img src="captivatebg.png" id="tech_img"></img>

          </div>
          <div id="bottom-container">
          <div id="bottom-info">
              <h1>Why do I want to join SovTech?</h1>
              <p>I'm a young and enthusiastic developer and I'm ready to challenge myself by aquiring more skills and knowledge in the
                 field of Software Development. Watching the video on the SovTech site, I would honoured to be in a work environment 
              </p>
          </div>
          </div>

          <footer>
            <p>Find more of my projects on my GitHub page</p>
            <a href="https://github.com/kamvegwij">GitHub link</a>
          </footer>
    </main>

      <style jsx>
        {`
        /*headers styling*/
          #top-container{
            width: 100%;
            background: linear-gradient(96deg, #2d270b 50%, #544815 50.1%);
            color: white;
            border-radius: 10px;
          }
          #main-head{
            font-size:2em;
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
          margin-top: 3em;
          margin: auto;
          padding: 5px;
          width: 70%;
          height: 25%;
          font-weight: medium;
          text-align: center;
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
        #projects::-webkit-scrollbar{
          width: 12px;
        }
        #projects::-webkit-scrollbar{ /*hide scrollbars*/
          display: none;
        }
        #projects:hover{
          cursor: grab;
        }
        #projects img {
          width: 80%;
          height: 70%;
        }
        #proj-head{
          width: 100%;
          position: sticky;
          top: 0;
          border: none;
          background: linear-gradient(45deg,#544815, #e2d28c);
        }
        #add_info{
          color: rgba(1, 0, 0, .4);
        }
        #descr-head{
          width: 100%;
          position: sticky;
          top: 0;
          border: none;
          background: linear-gradient(45deg,#e2d28c, #544815);
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

        #tech {
          padding: 20px;
          width: 100%;
          height: 15vh;
        }
        #tech #tech_img{
          margin:.5em;
          width: 5%;
          height: 40%;
          border-radius: 50%;
        }

        /*bottom section styling*/

        #bottom-info h1{
          font-size: 27px;
        }
        #bottom-container{
          width: 100%;
          background: linear-gradient(96deg, #544815 50%,#2d270b 50.1%);
          color: white;
        }
        #bottom-info{
          

          position: relative;
          margin-top: 2em;
          margin: auto;
          padding: 3px;
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
              font-size: 100%;
              background-color: #f6f0db;
          }
          footer{
            margin: auto;
            padding: 7px;
            height: 15vh;
          }
        `}
      </style>
    </div>
  )
}
