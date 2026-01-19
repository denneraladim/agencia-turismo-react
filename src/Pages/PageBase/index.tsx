import { Outlet } from "react-router-dom"
import Container from "../../Components/Container"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

const PageBase = () => {
    return (
       <>
  <Header />
  <main>
    <Container>
      <Outlet />
    </Container>
  </main>
  <Footer />
</>

    )
}

export default PageBase;