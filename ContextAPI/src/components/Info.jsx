import { useUserContext } from "../provider/UserProvider"

function Info() {
  const { user } = useUserContext();


  return (
    <div>
      <h2>Apodo:</h2>
      <input></input>

      <h2>Imagen:</h2>
      <input type="file">

      </input>    </div>
  )
}

export default Info
