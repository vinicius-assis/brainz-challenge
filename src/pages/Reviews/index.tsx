import ReviewHeader from "../../components/ReviewHeader";
import TopicCarousel from "../../components/TopicCarousel";
import Container from "../../components/Container";
import Divider from "../../components/Divider";
import { mockApiResponse } from "../../data/mockData";

const Reviews = () => {

	return (
		<>
			<ReviewHeader />
			<Container>
				{mockApiResponse.categories.map((category, index) => (
					<div key={category.id}>
						<TopicCarousel
							category={category.name}
							topics={category.topics}
							categoryId={category.id}
							isFirst={index === 0}
						/>
						{index < mockApiResponse.categories.length - 1 && <Divider />}
					</div>
				))}
			</Container>
		</>
	);
};

export default Reviews;
