import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './router.css';

export default function Root() {
  return (
    <>
      <nav>
        <ul className="ul-router">
          <li>
            <Link className="link" to={`home`}>
              Finder
            </Link>
          </li>
          <li>
            <Link className="link" to={`all`}>
              All Characters
            </Link>
          </li>
        </ul>
        <div id="detail">
          <Outlet />
        </div>
      </nav>
    </>
  );
}
