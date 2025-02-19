import { useState } from "react";

const ANIMAL_IMAGES = {
  img1: "https://pablomonteserin.com/lorempixel/111x111",
  img2: "https://pablomonteserin.com/lorempixel/222x222",
  img3: "https://pablomonteserin.com/lorempixel/333x333",
};

export default function CarouselImg() {
  const [imagen, setImg] = useState(ANIMAL_IMAGES.img1);

  return (

    <div>
      <h1>Carousel de imagenes</h1>
      <button onClick={() => setImg(ANIMAL_IMAGES.img1)}>img1</button>
      <button onClick={() => setImg(ANIMAL_IMAGES.img2)}>img2</button>
      <button onClick={() => setImg(ANIMAL_IMAGES.img3)}>img3</button>
      <img src={imagen}></img>
    </div>
  )
}
