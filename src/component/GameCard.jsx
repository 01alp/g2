import React from 'react';
import { useGames } from './GameContext';

const GameCard = ({ item, index }) => {
  const { name, image, rating, activeUsers, category } = item;
  const modalId = `exampleModal${index}`;
  const { handleAddToFavorites } = useGames();

  const addToLocalStorage = (card) => {
    // Retrieve the existing array from local storage or initialize an empty array
    const existingCards = JSON.parse(localStorage.getItem('cards')) || [];

    // Add the new card object to the array
    existingCards.push(card);

    // Save the updated array back to local storage
    localStorage.setItem('cards', JSON.stringify(existingCards));
  };

  const handleAddToCart = (card) => {
    handleAddToFavorites(item);
    // Optionally, provide feedback to the user
    alert('Game added to Favorite!');
  };
  return (
    <>
      <div className="col-md-4 col-xl-3 mb-4" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
        <div className="card shadow border-start-primary py-2">
          <div className="card-body">
            <div className="row align-items-center no-gutters">
              <div className="col">
                <div className="text-uppercase text-primary fw-bold text-xs mb-1 d-flex justify-content-center align-items-center">
                  <img className="img-fluid" src={image} alt="game imge" style={{ height: '150px', width: 'auto', objectFit: 'cover' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ color: '#000', fontSize: '18px' }}>{name}</span>
                </div>
                <div className="d-flex justify-content-evenly">
                  <span style={{ color: '#000', fontSize: '14px' }}>
                    <i className="far fa-star" style={{ marginRight: '5px' }}></i>
                    Rating: {rating}
                  </span>
                  <span style={{ color: '#000', fontSize: '14px' }}>
                    <i className="far fa-chart-bar" style={{ marginRight: '5px' }}></i>
                    Active Users: {activeUsers}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id={`${modalId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {name}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={image} alt="Game" style={{ width: '100%' }} />
              <div style={{ textAlign: 'center' }}>
                <span
                  style={{
                    color: 'var(--bs-emphasis-color)',
                    fontSize: '18px',
                  }}
                >
                  {name}
                </span>
              </div>
              <div className="d-flex justify-content-evenly">
                <span
                  style={{
                    color: 'var(--bs-emphasis-color)',
                    fontSize: '14px',
                  }}
                >
                  <i className="far fa-star" style={{ marginRight: '5px' }}></i>
                  Rating: {rating}
                </span>
                <span
                  style={{
                    color: 'var(--bs-emphasis-color)',
                    fontSize: '14px',
                  }}
                >
                  <i className="far fa-chart-bar" style={{ marginRight: '5px' }}></i>
                  Active Users: {activeUsers}
                </span>
                <span style={{ color: '#000', fontSize: '14px' }}>
                  <i className="far fa-chart-bar" style={{ marginRight: '5px' }}></i>
                  Category: {category}
                </span>
              </div>
              <p style={{ color: 'var(--bs-emphasis-color)' }}>
                Lorem ipsum dolor sit amet, harum bonorum eruditi duo no, est iriure molestie necessitatibus at. Eu cum dolorem cotidieque
                mediocritatem. Nostro instructior ex est. Nec falli nominavi accommodare ad. Ei habeo corpora liberavisse sed, no vim ridens
                adolescens, et etiam aeque cum.
                <br />
                <br />
                Has id inermis fuisset dignissim, illud vitae erroribus quo ut, est laudem dissentias eu. Cu dicta nulla tollit vix, et vide
                assum nec, per errem exerci blandit et. Sea oblique mediocrem cu, diam illud delicata ut qui, has an nonumes pericula. Ut
                his labitur efficiendi. Primis appellantur eos ei. Ad ubique gloriatur dissentiunt nec, saperet honestatis persequeris ne
                vix.
                <br />
                <br />
                Suscipit praesent dissentiunt et nec, no semper appareat eos. Utroque voluptua ad qui. No tollit scripta maiorum vis, ne quo
                causae nominavi expetendis, eros insolens constituam mel ex. Vix decore postea no, ne munere nonumy ceteros eam.
              </p>

              <div className="d-flex justify-content-center py-2">
                <button type="button" className="btn btn-primary" onClick={() => handleAddToCart(item)}>
                  Add To Favorites
                </button>
              </div>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
