import data from './data/workouts.js'
import flecha from './img/flecha.png'
import { Carousel, Body, Img, Container } from '../styled.js'
import { useState } from 'react'
function App() {

  const [workOut, setWorkOut] = useState(0); // controla el workOut
  const currentWorkOut = data[workOut];
  const [selectedImg, setSelectedImg] = useState(data[workOut].exercises[workOut]); // controla la selectedImage

  const handleWorkOut = (newIndex) => {
    if (newIndex < 0) {
      setWorkOut(data.length - 1);
    } else if (newIndex >= data.length) {
      setWorkOut(0);
    } else {
      setWorkOut(newIndex);
    }
  };

  return (
    <Body>
      <Container>
        <button onClick={() => handleWorkOut(workOut - 1)}><img src={flecha} /></button>
        <h2>{data[workOut].title}</h2>
        <button onClick={() => handleWorkOut(workOut + 1)}><img src={flecha} /></button>
      </Container>
      <Carousel>
        <img src={selectedImg.img} />

        <Carousel>
          {currentWorkOut.exercises.map((exercise, index) => (
            <Img
              key={index}
              src={exercise.img}
              $isSelected={exercise === selectedImg}
              alt={`exercise-${index}`}
              onClick={() => setSelectedImg(exercise)}
            />
          ))}
        </Carousel>
      </Carousel>
    </Body>
  )
}

export default App
