import { Box } from "@mui/material";
import "./ProUI_Bookshelf";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../styles/swiper/swiper.scss";
import "../../../styles/custom-swiper.css";
import "./ProUI_Bookshelf.css";

// Define the type for the props
export interface Book {
  title: string;
  book_cover: string;
  author: string;
  best_for: string;
  highlights: string;
  projects: string;
  covers?: string; // Optional property for some books
}

interface CareerSkillsProps {
  career_skills_data: {
    best_books: {
      topic: string;
      books: Book[];
    }[];
  };
}
// Component props type

const ProUI_Bookshelf: React.FC<CareerSkillsProps> = ({
  career_skills_data,
}) => {
  console.log("Rendering bookshelfs:", career_skills_data.best_books.length);
  return (
    <Box className="bookshelf" sx={{ padding: "0.5rem" }}>
      {career_skills_data.best_books.map((category, idx) => (
        <div key={idx}>
          <h3>{category.topic}:</h3>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log("Swiper initialized:", swiper)}
          >
            {category.books.map((book, bookIdx) => (
              <SwiperSlide key={bookIdx}>
                <img src={book.book_cover} alt={book.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </Box>
  );
};

export default ProUI_Bookshelf;
