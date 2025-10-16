import Banner from "./components/Banner"
import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import Container from "./components/Container"
import PromoBanner from "./components/PromoBanner"
import ReviewSection from "./components/ReviewSection"

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <ProfileCard />
        <PromoBanner />
        <ReviewSection />
      </Container>
    </>
  )
}

export default App
