import Container from "./Components/Container"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"

const App = () =>  {
  return (
    <>
      <Header/>
      <Container>
        <Home/>
      </Container>
      <Footer/>
    </>
  )
}

export default App;
