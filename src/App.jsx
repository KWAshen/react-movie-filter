import { useState, useEffect } from "react";

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
  const [movies, setmovies] = useState(typemovies);

  useEffect(() =>{
    if(genre !== ''){
      const selectdmovies = movies.filter
      (movie => movie.genre ===genre);
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
          <h1>react-movies-form</h1>
          </div>
          <div className="col-12">
            <select name=""
            id=""
            className="form-select my-3"
            value={genre}
            onChange={(e)=> setgenre(e.target.value)}
            >
              <option value="">genere</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Azione">Azione</option>
              <option value="Romantico">Romantico</option>
              </select> 

            <ul className="list-group ms-0">
              {movies.map((movie,index)=>
              {typemovies.map((movie, index) =>{
              return (
                <li key={index} className="list-group-item">
                  {movie.title}
                </li>
              );
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
