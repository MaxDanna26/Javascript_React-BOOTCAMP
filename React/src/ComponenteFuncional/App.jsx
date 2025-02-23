import { GlobalStyle, StyledComponent1, StyledComponent2 } from "./style"

function App() {
  return (
    <div>
      <GlobalStyle />
      <StyledComponent1><p>Lorem ipsum</p></StyledComponent1>
      <StyledComponent2 $size='250px' ><p>Lorem ipsum</p></StyledComponent2>
    </div>
  )
}

export default App
