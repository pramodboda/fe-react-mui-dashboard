import { Box } from "@mui/material";
import "./ProUI_Bookshelf";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../styles/swiper/swiper.scss";
import "../../../styles/custom-swiper.css";
import "./ProUI_Bookshelf.css";

// Define the type for the props
export interface IBook {
  title: string;
  book_cover: string;
  author: string;
  best_for: string;
  highlights: string;
  projects: string;
  covers?: string; // Optional property for some books
}

interface ICareerSkillsProps {
  career_skills_data: {
    best_books: {
      topic: string;
      books: IBook[];
    }[];
  };
}

const ProUI_Bookshelf: React.FC<ICareerSkillsProps> = ({
  career_skills_data,
}) => {
  console.log("Rendering bookshelfs:", career_skills_data.best_books.length);

  // Check if data exists before rendering
  if (!career_skills_data?.best_books) {
    return <div>Loading books...</div>;
  }
  return (
    <Box
      className="bookshelf"
      sx={{ padding: "0.5rem", width: "100%", border: "1px solid red" }}
    >
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
