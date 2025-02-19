import './style.css'
import img from '../../../HtmlCss/Img/fondo.png'
const styles = {
  width: '100px',
  height: '100px',
  backgroundColor: 'green',
}

export default function Component() {
  return (
    <div className='cuadrado'>
      <div style={styles}>Style Me!</div>
      <img src={img} />

    </div>
  )
}
