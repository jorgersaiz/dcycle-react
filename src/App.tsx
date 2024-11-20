import { useState } from 'react';
import './App.css';
import Exercise1Page from './pages/Exercise1Page';
import Exercise2Page from './pages/Exercise2Page';

function App() {

  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a 
                  className="nav-link active" 
                  aria-current="page" 
                  onClick={() => goToPage(1)}
                >Ejercicio 1</a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link active" 
                  aria-current="page"
                  onClick={() => goToPage(2)}
                >Ejercicio 2</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {currentPage === 1 && <Exercise1Page/>}
      {currentPage === 2 && <Exercise2Page/>}
    </>
  );
}

export default App;
