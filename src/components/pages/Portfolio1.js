import React from "react";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Workday from './assets/Workday.png'
import Weather from './assets/Weather.png'
import Project1 from './assets/Project1.png'

function Portfolio () {
    return (
        <div>
<Container>
<CardDeck>
  <Card>
    <Card.Img variant="top" src={Workday} />
    <Card.Body>
      <Card.Title>Work Day Scheduler</Card.Title>
      <Card.Text>
      Organize your day with this awesome Scheduler Each work hour is separated into a slot Tasks will be saved on your local storage web browser.
      <br/><a href="https://10jplz.github.io/DayPlanner/" target="blank">Link to Deployed APP</a>
      <br/><a href="https://github.com/10jplz/DayPlanner"target="blank" >Link to Github Repository</a>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={Weather} />
    <Card.Body>
      <Card.Title>Weather App</Card.Title>
      <Card.Text>This App will help plan your next trip by showing you the weather outlook for any city.
      <br/><a href="https://10jplz.github.io/DayPlanner/" target="blank">Link to Deployed APP</a>
      <br/><a href="https://github.com/10jplz/DayPlanner" target="blank">Link to Github Repository</a>
      </Card.Text>
    </Card.Body>
  </Card>


  <Card>
    <Card.Img variant="top" src={Project1} />
    <Card.Body>
      <Card.Title>Project 1 Nacho Mama's Quiz</Card.Title>
      <Card.Text>
      The goal of this application is fun! 
            Learn new facts, score points for your knowledge.          
            Be cheered, be jeered.
            Log your high scores and beat them!
      <br/><a href="https://e-martinez77.github.io/Project-1/" target="blank">Link to Deployed APP</a>
      <br/><a href="https://github.com/E-Martinez77/Project-1" target="blank">Link to Github Repository</a>
      </Card.Text>
    </Card.Body>
  </Card>


 

  </CardDeck>

  </Container>

    
  </div>
    );
}

export default Portfolio