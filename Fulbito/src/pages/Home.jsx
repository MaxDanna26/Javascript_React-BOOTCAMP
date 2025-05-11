import { useState, useEffect } from "react"
import { getEquipos } from '../services/api'
import { Container, Grid, Img, Enlace } from "./styled";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const url = 'http://localhost:3000/';

  useEffect(() => { getEquipos().then(setTeams) }, []);

  return (
    <Grid>
      {teams?.map(team =>
        <Enlace key={team.id} to={`/players/${team.id}`}>
          <Container>
            <Img src={url + team.foto_escudo} ></Img>
            <div>
              <p>{team.nombre}</p>
              <p>{team.fundacion}</p>
              <p>{team.presidente}</p>
            </div>
          </Container>
        </Enlace>
      )}
    </Grid>
  )
}

export default Home