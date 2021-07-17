import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "../MovieList/MoviesList.css";

const MoviesList = ({ Input, value, DataMovie }) => {
  let moviesData = [
    {
      id: Math.random(),
      image:
        "https://previews.123rf.com/images/123vector/123vector1707/123vector170700270/82731645-illustration-of-no-publicity-text-buffered-on-white-background.jpg",
      rating: 4,
      name: "Devil's Mile",
      date: "2014",
      type: "Action | Crime",
      description:
        "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
      trailer: "https://youtu.be/AvkQRM-JrnU",
    },
    {
      id: Math.random(),
      image:
        "https://previews.123rf.com/images/123vector/123vector1707/123vector170700270/82731645-illustration-of-no-publicity-text-buffered-on-white-background.jpg",
      rating: 5,
      name: "Once Upon A Time In The west",
      date: "1968",
      type: "Western",
      description:
        "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
      trailer: "https://youtu.be/AvkQRM-JrnU",
    },
    {
      id: Math.random(),
      image:
        "https://previews.123rf.com/images/123vector/123vector1707/123vector170700270/82731645-illustration-of-no-publicity-text-buffered-on-white-background.jpg",
      rating: 4,
      name: "Taxi Driver",
      date: "1976",
      type: "Crime | Drama",
      description:
        "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
      trailer: "https://youtu.be/AvkQRM-JrnU",
    },
    {
      id: Math.random(),
      image:
        "https://previews.123rf.com/images/123vector/123vector1707/123vector170700270/82731645-illustration-of-no-publicity-text-buffered-on-white-background.jpg",
      rating: 4,
      name: "Mad Max",
      date: "1979",
      type: "Action | Adventure",
      description:
        "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
      trailer: "https://youtu.be/AvkQRM-JrnU",
    },
    {
      id: Math.random(),
      image:
        "https://previews.123rf.com/images/123vector/123vector1707/123vector170700270/82731645-illustration-of-no-publicity-text-buffered-on-white-background.jpg",
      rating: 3,
      name: "Little Miss Sunshine",
      date: "2006",
      type: "Comedy | Drama",
      description:
        "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
      trailer: "https://youtu.be/AvkQRM-JrnU",
    },
    {
      id: Math.random(),
      image:
        "https://previews.123rf.com/images/123vector/123vector1707/123vector170700270/82731645-illustration-of-no-publicity-text-buffered-on-white-background.jpg",
      rating: 5,
      name: "KILL BILL",
      date: "2003",
      type: "Action",
      description:
        "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.'The Bride' decided to escape her life as a killer.",
      details:
        "https://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl",
      trailer: "https://youtu.be/AvkQRM-JrnU",
    },
  ];

  const handleData = (name, date) => {
    alert(`the movie "${name}" was released back in ${date}`);
  };

  if (Input.length > 0) {
    moviesData = moviesData.filter((el) => {
      return el.name.toLowerCase().match(Input.toLowerCase());
    });
  }

  if (value > 1) {
    moviesData = moviesData.filter((el) => {
      return el.rating >= value;
    });
  }

  if (DataMovie.date > 1900) {
    moviesData.push(DataMovie);
  }

  return (
    <div className="movieslist">
      {moviesData.map((movie, i) => (
        <MovieCard movie={movie} key={i} handleData={handleData} />
      ))}
    </div>
  );
};

export default MoviesList;
