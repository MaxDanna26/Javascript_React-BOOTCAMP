import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCharacterWithId } from "../services/api"
import { ContainerB, MagicLink } from "./styled";

function Page2() {
  const [info, setInfo] = useState();
  const { id } = useParams();

  useEffect(() => {
    getCharacterWithId(id).then((data) => {
      console.log(data);
      setInfo(data);
    })
  }, [id])

  return (
    <ContainerB>
      <MagicLink to='/'>Volver</MagicLink>
      <div>
        <p>Name: {info?.name} </p>
        <p>Gener: {info?.gender} </p>
        <p>Species: {info?.species} </p>
        <p>Status: {info?.status} </p>
      </div>
      <img src={info?.image} />
    </ContainerB>
  )
}

export default Page2