import { useEffect, useState } from 'react';
import axios from 'axios';
import GenresTable from './components/GenresTable'

function App() {

  const [ genres, setGenres ] = useState([]);

  const getData = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/genres/');
    setGenres(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-12 mt-4">
          <span>Lista los generos de los libros desde la api DRF  </span>
          <span>
            <a href="http://127.0.0.1:8000/api/genres/">http://127.0.0.1:8000/api/genres/</a>
          </span>
        </div>
        <div className="col">
          <GenresTable genres={genres}/>
        </div>
      </div>
    </div>
  );
}

export default App;