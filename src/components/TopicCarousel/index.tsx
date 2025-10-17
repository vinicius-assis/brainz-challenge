import { ChevronLeft, ChevronRight } from "lucide-react";

interface Topic {
  id: string;
  title: string;
  description: string;
}

interface TopicCarouselProps {
  category: string;
  topics: Topic[];
  bgColor?: string;
  categoryId?: string;
  isFirst?: boolean;
}

const getCategoryStyles = (categoryId?: string) => {
  switch (categoryId) {
    case 'linguagens':
      return {
        bgColor: '#F1EEFF',
        textColor: '#34238C'
      };
    case 'matematica':
      return {
        bgColor: '#ECF4FF',
        textColor: '#2569C3'
      };
    case 'natureza':
      return {
        bgColor: '#DBFAE3',
        textColor: '#24a31a'
      };
    case 'humanas':
      return {
        bgColor: '#FFF4D1',
        textColor: '#967200'
      };
    default:
      return {
        bgColor: '#F1EEFF',
        textColor: '#34238C'
      };
  }
};

const TopicCarousel = ({ category, topics, bgColor, categoryId, isFirst = false }: TopicCarouselProps) => {
  const styles = getCategoryStyles(categoryId);
  const finalBgColor = bgColor || styles.bgColor;

  return (
    <div className={`w-full ${isFirst ? 'mt-6' : 'mt-12'} mb-12`}>
      <div
        className={`w-full p-4 flex justify-between bg-[linear-gradient(to_right,${finalBgColor},#fff)] border-1 border-[#d2d9da] rounded-xl mb-4`}
      >
        <h3 className={`text-[${styles.textColor}] text-title-2`}>{category}</h3>
        <p className="text-title-5">+ Acessar todos os tópicos de {category}</p>
      </div>
      <div className="relative">
        <button
          className="absolute border-1 border-[#d2d9da] left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 z-10 cursor-pointer flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-600" />
        </button>

        <div className="flex gap-5">
          {topics.map(({ title, description, id }) => (
            <div
              key={id}
              className="flex-1 flex flex-col gap-2 p-4 border-1 border-[#D2d9DA] rounded-xl min-w-0 shadow-[0_5px_8px_0_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow"
            >
              <span className="text-button-p uppercase text-[#768081]">
                Tópico
              </span>
              <h3 className="text-title-3 truncate" title={title}>{title}</h3>
              <p className="text-support-p text-[#768081] line-clamp-3">{description}</p>
            </div>
          ))}
        </div>

        <button
          className="absolute border-1 border-[#d2d9da] right-0 top-1/2 transform -translate-y-1/2 translate-x-5 z-10 cursor-pointer flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6 text-neutral-600" />
        </button>
      </div>
    </div>
  );
};

export default TopicCarousel;
