import React from 'react';
import { useState, useEffect } from 'react';

export default function AllCharacters() {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState('');
  const [menuPages, setMenuPages] = useState(1);

  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');

  const baseUrl = 'https://rickandmortyapi.com/api/character';
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then(
        (resp) => {
          setData(resp.results);
          setPages(resp.info);
        },
        (error) => {
          console.error(error);
        }
      );
  }, [url]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const nextPage = () => {
    setUrl(pages.next);
    setMenuPages(menuPages + 1);
    scrollToTop();
  };
  const prevPage = () => {
    setUrl(pages.prev);
    setMenuPages(menuPages - 1);
    scrollToTop();
  };

  return (
    <div>
      <header>
        <p className="resultsCounter">
          At the moment there are {pages.count} characters in the show.
        </p>
      </header>
      <main>
        <ul>
          {data.map((resp) => {
            return (
              <li className="card">
                <div className="img-part">
                  <img src={resp.image} alt="character" width="200px" />
                </div>
                <div>
                  <div className=" header">
                    <h2>{resp.name}</h2>
                    <div className="text-part">
                      <p>
                        Origin: <span>{resp.origin.name}</span>
                      </p>
                      <p>
                        Specie: <span>{resp.species}</span>
                      </p>
                      <p>
                        Status:
                        <span className={resp.status}> {resp.status}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <footer>
          <button
            onClick={prevPage}
            disabled={pages.prev == null ? true : false}
          >
            Prev page
          </button>
          <span>{menuPages}</span>
          <span>/</span>
          <span>{pages.pages}</span>
          <button
            onClick={nextPage}
            disabled={pages.next == null ? true : false}
          >
            Next page
          </button>{' '}
          <div className="credits">
            <p>
              This site was made in react. API used:{' '}
              <a href="https://rickandmortyapi.com/">rickandmorty</a>
            </p>
            <p>
              Find me in my GitHub:{' '}
              <a href="https://github.com/Casewinter">Casewinter</a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
