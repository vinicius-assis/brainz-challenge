import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCategoryStyles } from "../../utils/categoryStyles";

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

const TopicCarousel = ({ category, topics, bgColor, categoryId, isFirst = false }: TopicCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const styles = getCategoryStyles(categoryId);
  const finalBgColor = bgColor || styles.bgColor;

  const gap = 20;
  const maxIndex = Math.max(0, topics.length - itemsPerView);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
  }, []);

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const calculatedWidth = (containerWidth - (gap * (itemsPerView - 1))) / itemsPerView;
        setCardWidth(calculatedWidth);
      }
    };

    updateCardWidth();

    window.addEventListener('resize', updateCardWidth);

    return () => window.removeEventListener('resize', updateCardWidth);
  }, [itemsPerView]);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = window.innerWidth < 1024 ? 2 : 4;
      setItemsPerView(newItemsPerView);
      setCurrentIndex(0); // Reset to first item when switching views
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const translateValue = -(currentIndex * (cardWidth + gap));

  return (
    <div className={`w-full ${isFirst ? 'mt-6' : 'mt-12'} mb-12`}>
      <div
        className="w-full p-4 flex justify-between border border-gray-300 rounded-xl mb-4"
        style={{
          background: `linear-gradient(to right, ${finalBgColor}, #fff)`
        }}
      >
        <h3 className="text-xl font-bold" style={{ color: styles.textColor }}>
          {category}
        </h3>
        <p className="text-sm text-gray-600">
          + Acessar todos os tópicos de {category}
        </p>
      </div>

      <div className="relative">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute border border-gray-300 left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div className="overflow-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${translateValue}px)`,
              gap: `${gap}px`
            }}
          >
            {topics.map(({ title, description, id }) => (
              <div
                key={id}
                className="flex-shrink-0 flex flex-col gap-2 p-4 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                style={{ width: `${cardWidth}px` }}
              >
                <span className="text-xs uppercase text-gray-500 font-semibold">
                  Tópico
                </span>
                <h3 className="text-lg font-bold truncate" title={title}>
                  {title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-3">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="absolute border border-gray-300 right-0 top-1/2 transform -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TopicCarousel;
