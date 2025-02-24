import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";

function Page2() {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search); // toma toda la url
  const questionId = query.get('myparam'); // con el get recojo solo lo que necesito entre parentesis
  const id2 = query.get('id');

  return (
    <div>
      page2: {id}{questionId}  && {id2}
    </div>
  )
}

export default Page2
