import { Box } from "@mui/material";
import "./ProUI_Bookshelf";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

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

export interface CareerSkillsData {
  best_books: {
    html_and_css: Book[];
  }[];
}
// Component props type
interface CareerSkillsProps {
  career_skills_data: CareerSkillsData[];
}

const ProUI_Bookshelf: React.FC<CareerSkillsProps> = ({
  career_skills_data,
}) => {
  return (
    <Box className="bookshelf">
      <Box className="book">
        {career_skills_data.map((data, index) => (
          <div key={index}>
            <h2>Best Books for HTML and CSS</h2>
            {data.best_books.map((bookData, idx) => (
              <div key={idx}>
                <h3>HTML and CSS Books:</h3>
                {bookData.html_and_css.map((book, bookIdx) => (
                  <div key={bookIdx}>
                    <h4>{book.title}</h4>
                    <img src={book.book_cover} alt={book.title} />
                    <p>Author: {book.author}</p>
                    <p>Best for: {book.best_for}</p>
                    <p>Highlights: {book.highlights}</p>
                    <p>Projects: {book.projects}</p>
                    {book.covers && <p>Covers: {book.covers}</p>}
                  </div>
                ))}
              </div>
            ))}
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              ...
            </Swiper>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default ProUI_Bookshelf;
