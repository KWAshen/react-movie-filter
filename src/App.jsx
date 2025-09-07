const typemovies = [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]

function App() {


  return (
    <>
    <div className="container my-5">
      <div className="row gy-4">
        <div className="col-12">
          <select name="" id="" className="form select">
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
