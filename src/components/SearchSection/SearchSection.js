import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { batchActions } from 'redux-batched-actions';
import { setCurrentGif, setError } from '../../redux/actions';
import GiphyApiService from '../../services/giphy-api-service';

const SearchSection = ({ favorites, error, dispatch }) => {
  const history = useHistory();

  return (
    <section>
      <p>
        Find out how weird you are by selecting GIFs that make you laugh. We'll
        show you the least weird ones to start but you can move the slider to
        make them weirder.
        <br />
        <br />
        When you find a GIF you like press the "Like" button. When you have
        found 5 that you like we'll show you how weird you are
      </p>

      <form
        onSubmit={ev => {
          ev.preventDefault();

          const searchTerm = ev.target.search.value;
          const searchTermInFavorites = favorites.some(fav => {
            return fav.gif.searchTerm === searchTerm;
          });
          if (!searchTerm.trim()) {
            dispatch(setError({type: 'search', message: 'Please enter a search term'}))
            return;
          } else if (searchTermInFavorites) {
            dispatch(setError({type: 'search', message: 'You can only add one GIF to favorites for each search term.  Try searching another term, or remove the gif with this search term from favorites and try again'}))
            return
          }
          return GiphyApiService.getGifFromSearch(searchTerm).then(gif => {
            dispatch(batchActions([setCurrentGif(gif), setError({})]));
            history.push('/gifs');
          }).catch(() => dispatch(setError({type:'search', message: "Oops! Something went wrong.  Try Searching again.  If the problem persists refresh the page!"})))
        }}
      >
        {error.type === 'search' && <p className='error'>{error.message}</p> }
        <label htmlFor="search">Search Term: </label>
        <input name="search" id="search" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default connect()(SearchSection);
