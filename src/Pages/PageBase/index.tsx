import { Outlet } from "react-router-dom"
import Container from "../../Components/Container"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

const PageBase = () => {
    return (
        <main>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </main>
    )
}

export default PageBase;