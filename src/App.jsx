import { useEffect, useState } from "react";

const typemovies = [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]

function App() {

  const [genre,setgenre] = useState("");
  const [movie, setmovies] = useState(typemovies);

  useEffect(() =>{
    if(genre !== ''){
      const selectdmovies = movies.filter(movie => movie.genre ===genre);
      setmovies(selectdmovies);
    }
    else
    {
      setmovies(typemovies);
    }
  },[genre])
  
  return (
    <>
    <div className="container my-5">
      <div className="row gy-4">
        <div className="col-12">
          <select name="" id="" className="form select my-3">
            <option value="">Select Type</option>
            {typemovies.map((movie,index) => {
              return(
                <option value={movie.genre}key={`genre-${index}`}>{movie.genre}</option>
              )
            })}              
          </select>
    <h1>react-movie-filter</h1>
        <div className="col-12">
          <ul className="list-group ms-0">
            {typemovies.map((movie, index) =>{
              return (
                <li key={index} className="list-group-item">{movie.title}
                </li>
              )
            })}
          </ul>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
