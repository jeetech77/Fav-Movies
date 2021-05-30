import { useState } from "react";
import "./styles.css";
const moviesObj = {
  Action: [
    {
      name: "The Dark Knight Triology",
      rating: "4.9 / 5"
    },
    {
      name: "The Equilizer",
      rating: "4.7 / 5"
    }
  ],
  Animation: [
    {
      name: "Madagascar 3 | Europe Most Wanted",
      rating: "4.8 / 5"
    },
    {
      name: "Tom and Jerry | Fast and Furry",
      rating: "4.5 / 5"
    }
  ],
  Biography: [
    {
      name: "The Pursuit of Happyness",
      rating: "4.9 / 5"
    },
    {
      name: "The Men Who Built America",
      rating: "4.8 / 5"
    }
  ]
};
export default function App() {
  const [selectGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 className="title">📽favmovies</h1>
      <p className="remarks-text">
        Checkout my favorite movies, Select a genre to get strated.{" "}
      </p>
      {Object.keys(moviesObj).map((genre) => {
        return (
          <button
            className="button-sec"
            onClick={() => {
              genreClickHandler(genre);
            }}
            key={genre}
          >
            {genre}
          </button>
        );
      })}
      <hr />
      {moviesObj[selectGenre].map((book) => {
        return (
          <ul className="output-list" key={book.name}>
            <li className="book-name">{book.name}</li>
            <li className="book-rating">{book.rating}</li>
          </ul>
        );
      })}
    </div>
  );
}
