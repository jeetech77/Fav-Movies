import { useState } from "react";
import "./styles.css";
const moviesObj = {
  Action: [
    {
      name: "The Dark Knight Triology",
      rating: "4.9 / 5",
      details:
        "The Dark Knight Trilogy is a superhero film trilogy based on the DC Comics character Batman. The trilogy consists of Batman Begins, The Dark Knight, and The Dark Knight Rises, directed by Christopher Nolan."
    },
    {
      name: "The Equilizer",
      rating: "4.7 / 5",
      details:
        "The Equalizer is an American spy thriller television series, originally airing on CBS from September 18, 1985 to August 24, 1989 and co-created by Michael Sloan and Richard Lindheim."
    },
    {
      name: "The Last Samurai",
      rating: "4.9 / 5",
      details:
        "The Last Samurai is a 2003 American epic period action drama film directed and co-produced by Edward Zwick, who also co-wrote the screenplay with John Logan and Marshall Herskovitz. The film stars Tom Cruise, who also co-produced, with Timothy Spall, Ken Watanabe, Billy Connolly, Tony Goldwyn, Hiroyuki Sanada, Koyuki, and Shin Koyamada in supporting roles."
    }
  ],
  Animation: [
    {
      name: "Madagascar 3 | Europe Most Wanted",
      rating: "4.8 / 5",
      details:
        "Madagascar 3: Europe's Most Wanted is a 2012 American computer-animated comedy film produced by DreamWorks Animation and distributed by Paramount Pictures. It is the third installment of the Madagascar trilogy, following Madagascar: Escape 2 Africa, and was the first film in the series to be released in 3D."
    },
    {
      name: "Tom and Jerry | The Fast and the Furry",
      rating: "4.5 / 5",
      details:
        "Tom and Jerry: The Fast and the Furry is a 2005 American animated action-adventure comedy film featuring the cat-and-mouse duo Tom and Jerry. Produced by Warner Bros. Animation and Turner Entertainment Co., it is the third made-for-video Tom and Jerry film."
    },
    {
      name: "Rango",
      rating: "4.8 / 5",
      details:
        "Rango is a 2011 American computer-animated Western comedy film directed by Gore Verbinski from a screenplay by John Logan. Co-produced by Verbinski with Graham King and John B. Carls, the film stars the voices of Johnny Depp, Isla Fisher, Abigail Breslin, Ned Beatty, Alfred Molina, Bill Nighy, Stephen Root, Harry Dean Stanton, Ray Winstone, and Timothy Olyphant."
    }
  ],
  Biography: [
    {
      name: "The Pursuit of Happyness",
      rating: "4.9 / 5",
      details:
        "The Pursuit of Happyness is a 2006 American biographical drama film directed by Gabriele Muccino and starring Will Smith as Chris Gardner, a homeless salesman. Smith's son Jaden Smith co-stars, making his film debut as Gardner's son, Christopher Jr."
    },
    {
      name: "The Men Who Built America",
      rating: "4.8 / 5",
      details:
        "The Men Who Built America is a six-hour, four-part miniseries docudrama which was originally broadcast on the History Channel in the Fall of 2012, and on the History Channel UK in Spring of 2013. The series focuses on the lives of Cornelius Vanderbilt, John D. Rockefeller, Andrew Carnegie, J."
    },
    {
      name: "Catch Me If You Can",
      rating: "4.5 / 5",
      details:
        "Catch Me If You Can is a 2002 American pseudobiographical crime film directed and produced by Steven Spielberg from a screenplay by Jeff Nathanson. The film stars Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen, and Nathalie Baye."
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
      {moviesObj[selectGenre].map((movie) => {
        return (
          <ul className="output-list" key={movie.name}>
            <li className="movie-name">{`Name :- ${movie.name}`}</li>
            <li className="movie-rating">{`Rating :- ${movie.rating}`}</li>
            <li className="movie-details">{`Details :- ${movie.details}`}</li>
          </ul>
        );
      })}
    </div>
  );
}
