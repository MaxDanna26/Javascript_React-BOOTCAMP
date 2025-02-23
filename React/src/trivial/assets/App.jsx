import { useState } from 'react';
import Question from './data/questions.js';
import { Container, Row, Pregunta } from './styled.js';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const q = Question[currentQuestion];

  if (!q) return <Container>No hay más preguntas.</Container>;  // Verificación de seguridad

  return (
    <Container>
      <Pregunta>
        <h2>{q.question}</h2>
      </Pregunta>
      <Row>
        <div>
          {q.answers.map((a, index) => (
            <p key={index}>
              <button onClick={() => setCurrentQuestion(a.isRight ? currentQuestion + 1 : 0)}>X</button>
              {a.txt}
            </p>
          ))}
        </div>
        {q.img && <img src={q.img} alt={`Imagen para ${q.question}`} />}
      </Row>
    </Container>
  );
}

export default App;
