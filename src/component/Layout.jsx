// import "./App.css";
import React from 'react';
import img1 from '../../public/assets/img/icons8-casino-64.png';
import img2 from '../../public/assets/img/icons8-home-64.png';
import img3 from '../../public/assets/img/icons8-favorites-64.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGames } from './GameContext';

function Layout({ children }) {
  const { sortGames, handleCategoryChange, sortBy, sortOrder, setSortBy, setSortOrder } = useGames();

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    sortGames(e.target.value, sortOrder);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
    sortGames(sortBy, e.target.value);
  };

  // hide sidebar
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div id="page-top">
      <div id="wrapper" className="d-flex" style={{ display: 'flex', minHeight: '100vh' }}>
        {/* <!-- Start: Left Sidebar --> */}
        <nav
          className={`navbar align-items-start sidebar-dark accordion bg-gradient-primary p-0 navbar-dark h-full sidebar ${
            isToggle ? 'd-none' : 'd-block'
          } `}
          style={{
            background: "url('./assets/img/back.jpeg')",
            maxWidth: '200px',
            flex: 1,
          }}
        >
          <div className="container-fluid d-flex flex-column px-5">
            <Link className="navbar-brand sidebar-brand m-0" to="/">
              <div className="sidebar-brand-icon rotate-n-15 d-flex justify-content-center pt-5">
                <img className="img-fluid" src={img1} alt="Logo" />
              </div>
              <div className="d-flex sidebar-brand-text mx-3" style={{ background: 'rgba(0,0,0,0.73)', marginBottom: '20px' }}>
                <span>Games Haven</span>
              </div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <ul className="navbar-nav text-light" id="accordionSidebar" style={{ width: '150px', marginTop: '20px' }}>
              <li className="nav-item" style={{ color: 'rgba(0,0,0,0.73)', marginTop: '30px' }}>
                <Link className="nav-link active" to="/">
                  <img className="img-fluid" src={img2} alt="Home Icon" />
                  <span
                    style={{
                      fontSize: '18px',
                      color: 'rgb(255,255,255)',
                      fontWeight: 'bold',
                    }}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="dropdown-toggle nav-link d-inline-flex d-flex align-items-center"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  to="/"
                  style={{
                    fontSize: '18px',
                    color: 'rgb(255,255,255)',
                    fontWeight: 'bold',
                  }}
                >
                  <img className="img-fluid" src={img1} style={{ width: '32px' }} alt="Games Icon" />
                  Games
                </Link>
                <div className="dropdown-menu">
                  <div onClick={() => handleCategoryChange('All')} role="button">
                    <span style={{ color: 'rgb(0,0,0)', fontSize: '18px' }}>
                      <i className="fas fa-list-ul" style={{ marginRight: '5px', marginLeft: '2px' }}></i>
                      All Games
                    </span>
                  </div>
                  <div onClick={() => handleCategoryChange('slots')} role="button">
                    <span style={{ color: 'rgb(0,0,0)', fontSize: '18px' }}>
                      <i className="far fa-star" style={{ marginRight: '5px' }}></i>
                      Slots
                    </span>
                  </div>

                  <div>
                    <span style={{ color: 'rgb(0,0,0)', fontSize: '18px' }}>
                      <i className="far fa-star" style={{ marginRight: '5px' }}></i>
                      Table Games
                    </span>
                  </div>
                  <div className="dropdown-item" role="button" onClick={() => handleCategoryChange('roulette')}>
                    <i className="far fa-dot-circle" style={{ marginRight: '5px' }}></i>
                    Roulette
                  </div>
                  <div>
                    <span style={{ color: 'rgb(0,0,0)', fontSize: '18px' }}>
                      <i className="far fa-star" style={{ marginRight: '5px' }}></i>
                      Card Games
                    </span>
                  </div>
                  <div className="dropdown-item" role="button" onClick={() => handleCategoryChange('blackjack')}>
                    <i className="far fa-dot-circle" style={{ marginRight: '5px' }}></i>
                    Blackjack
                  </div>
                  <div className="dropdown-item" role="button" onClick={() => handleCategoryChange('poker')}>
                    <i className="far fa-dot-circle" style={{ marginRight: '5px' }}></i>
                    Pocker
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link d-inline-flex d-xl-flex align-items-center"
                  to="/favorites"
                  style={{
                    fontSize: 18,
                    color: 'rgb(255,255,255)',
                    fontWeight: 'bold',
                  }}
                  //   aria-expanded={isOpen}
                >
                  <img className="img-fluid" src={img3} style={{ width: 32 }} alt="img" />
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- End: Left Sidebar --> */}

        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            {/* <!-- Start: Top NavBar --> */}
            <nav className="navbar navbar-expand bg-white shadow mb-4 topbar static-top navbar-light">
              <div className="container-fluid">
                <button className="btn btn-link rounded-circle me-3" id="sidebarToggleTop" type="button" onClick={handleToggle}>
                  <i className="fas fa-bars"></i>
                </button>
                <ul className="navbar-nav flex-nowrap ms-auto">
                  <li className="nav-item d-flex d-lg-flex align-items-center align-items-lg-center dropdown no-arrow mx-1">
                    <select
                      className="border rounded-pill"
                      style={{ marginRight: '5px', width: '100px' }}
                      data-bs-theme="dark"
                      value={sortBy}
                      onChange={handleSortByChange}
                    >
                      <optgroup label="Sorty By">
                        <option value="name">Name</option>
                        <option value="rating">Rating</option>
                        <option value="activeUsers">Active Users</option>
                      </optgroup>
                    </select>
                    <select
                      className="border rounded-pill"
                      data-bs-theme="dark"
                      style={{ width: '100px' }}
                      value={sortOrder}
                      onChange={handleSortOrderChange}
                    >
                      <optgroup label="Sorty By">
                        <option value="ascending">Ascending ↑</option>
                        <option value="descending">Descending ↓</option>
                      </optgroup>
                    </select>
                  </li>
                  <div className="d-none d-sm-block topbar-divider"></div>
                </ul>
              </div>
            </nav>
            {/* <!-- End: Top NavBar --> */}

            <div className="container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Games List:</h3>
              </div>
              {children}
            </div>
          </div>
        </div>

        <a className="border rounded d-inline scroll-to-top" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
      {/* <!-- Start: Footer --> */}
      <footer className="bg-white sticky-footer">
        <div className="container my-auto">
          <div className="text-center my-auto copyright">
            <span>Copyright © AlpBal 2024</span>
          </div>
        </div>
      </footer>
      {/* <!-- End: Footer --> */}
    </div>
  );
}

export default Layout;
