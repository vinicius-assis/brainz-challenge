import Banner from "./components/Banner"
import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import Container from "./components/Container"

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <ProfileCard />
      </Container>
    </>
  )
}

export default App
