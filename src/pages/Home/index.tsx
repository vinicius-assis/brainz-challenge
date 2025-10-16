import Banner from '../../components/Banner'
import Container from '../../components/Container'
import ProfileCard from '../../components/ProfileCard'
import PromoBanner from '../../components/PromoBanner'
import ReviewSection from '../../components/ReviewSection'
import ExamsSection from '../../components/ExamsSection'

const Home = () => {
    return (
        <>
            <Banner />
            <Container>
                <ProfileCard />
                <PromoBanner />
                <ReviewSection />
                <ExamsSection />
            </Container>
        </>
    )
}

export default Home

