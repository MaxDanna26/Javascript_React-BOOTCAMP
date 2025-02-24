import { useEffect, useState } from "react";
import { getCategories, getJokeFromCategory } from "../services/getChuck";

function Home() {
  const [categories, setCategories] = useState(null);
  const [joke, setJokee] = useState('');
  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  const setJoke = (category) => {
    getJokeFromCategory(category).then(setJokee)
  }

  return (
    <div>
      <div>
        {categories?.map(category => <button onClick={() => setJoke(category)} key={category}>{category}</button>)}
        <p>{joke} </p>
      </div>
    </div>

  )
}


export default Home
