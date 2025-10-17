import ReviewHeader from "../../components/ReviewHeader";
import TopicCarousel from "../../components/TopicCarousel";
import Container from "../../components/Container";
import Divider from "../../components/Divider";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { useTopics } from "../../api/queries/useTopics";

const Reviews = () => {
	const { data, isLoading, error, refetch } = useTopics();
	const categories = data?.categories || [];

	return (
		<>
			<ReviewHeader />
			<Container>
				{isLoading ? (
					<LoadingSpinner className="py-12" />
				) : error ? (
					<ErrorMessage error={error} onRetry={() => refetch()} />
				) : (
					categories.map((category, index) => (
						<div key={category.id}>
							<TopicCarousel
								category={category.name}
								topics={category.topics}
								categoryId={category.id}
								isFirst={index === 0}
							/>
							{index < categories.length - 1 && <Divider />}
						</div>
					))
				)}
			</Container>
		</>
	);
};

export default Reviews;
