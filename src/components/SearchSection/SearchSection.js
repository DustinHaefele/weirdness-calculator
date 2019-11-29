import React from 'react';
import GiphyApiService from '../../services/giphy-api-service';
import './SearchSection.css';

//Presentational component to display a section weher the user can search as well as site instructions
export default function SearchSection({
  favorites,
  error,
  clearCurrent,
  setError,
  setCurrentGif
}) {
  function handleSearch(ev) {
    ev.preventDefault();
    clearCurrent();
    const searchTerm = ev.target.search.value;
    const searchTermInFavorites = favorites.some(fav => {
      return fav.gif.searchTerm === searchTerm;
    });

    //Error handling conditions before searching
    if (!searchTerm.trim()) {
      setError({
        type: 'search',
        message: 'Please enter a search term'
      });

      return;
    } else if (searchTermInFavorites) {
      setError({
        type: 'search',
        message:
          'You already searched for that. You can only add one GIF to your favorites for each search term. Try searching another term, or remove the GIF with this search term from favorites and try again.'
      });
      return;
    }
    return GiphyApiService.getGifFromSearch(searchTerm)
      .then(gif => {
        setCurrentGif(gif);
      })
      .catch(() =>
        setError({
          type: 'search',
          message:
            'Oops! Something went wrong.  Try Searching again.  If the problem persists refresh the page!'
        })
      );
  }

  return (
    <section className="searchSection">
      
       <h2 className='sectionTitle'> Find out how weird you are by selecting your favorite GIFs.</h2>
      <p>
        Here’s how you do it.
      </p>
      <ol className='orderedList'>
        <li className='listItem'>
          Type anything (we mean anything) into the search box and we will come
          up with related GIFs
        </li>
        <li className='listItem'>
          View the GIFs we come up with (if you don’t like them you can either
          move the slider to make them more or less weird, or come up with a new search
          term)
        </li>
        <li className='listItem'>
          Click “thumbs up” for the ones you enjoy the most.  
        </li>
        <li className='listItem'>
          After you have selected five, we will show you just how weird you are.
        </li>
      </ol>
      
      <form onSubmit={ev => handleSearch(ev)} className="formDisplay">
        {error.type === 'search' && <p className="error">{error.message}</p>}
        <label htmlFor="search" className="searchLabel">
          Search Term
        </label>
        <div className="searchDiv">
          <input name="search" id="search" className="formElement" />
          <button type="submit" className="formElement">
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
