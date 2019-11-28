import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { batchActions } from 'redux-batched-actions';
import { setCurrentGif, setError } from '../../redux/actions';
import GiphyApiService from '../../services/giphy-api-service';
import './SearchSection.css'

const SearchSection = ({ favorites, error, dispatch }) => {
  const history = useHistory();

  return (
    <section>
      <p>
        Find out how weird you are by selecting GIFs that make you laugh.
        <br />
        Here’s how you do it.
      </p>
      <ol>
        <li>
          Type anything (we mean anything) into the search box and we will come
          up with related GIFS
        </li>
        <li>
          View the GIFS we come up with (if you don’t like them you can either
          move the slider to make them weirder, or come up with a new search
          term)
        </li>
        <li>
          Click “like me” for the ones you most enjoy (remember you can only
          choose five!)
        </li>
        <li>
          After you have selected five, we will show you just how weird you are.
        </li>
      </ol>
      <p>Brace yourself, you’re about to see how much of a weirdo you are.</p>

      <form
        onSubmit={ev => {
          ev.preventDefault();
          dispatch(setCurrentGif({}));
          const searchTerm = ev.target.search.value;
          const searchTermInFavorites = favorites.some(fav => {
            return fav.gif.searchTerm === searchTerm;
          });
          if (!searchTerm.trim()) {
            dispatch(
              setError({
                type: 'search',
                message: 'Please enter a search term'
              })
            );
            return;
          } else if (searchTermInFavorites) {
            dispatch(
              setError({
                type: 'search',
                message:
                  'You can only add one GIF to favorites for each search term.  Try searching another term, or remove the gif with this search term from favorites and try again'
              })
            );
            return;
          }
          return GiphyApiService.getGifFromSearch(searchTerm)
            .then(gif => {
              dispatch(batchActions([setCurrentGif(gif), setError({})]));
              history.push('/gifs');
            })
            .catch(() =>
              dispatch(
                setError({
                  type: 'search',
                  message:
                    'Oops! Something went wrong.  Try Searching again.  If the problem persists refresh the page!'
                })
              )
            );
        }}
      >
        {error.type === 'search' && <p className="error">{error.message}</p>}
        <label htmlFor="search">Search Term: </label>
        <input name="search" id="search" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default connect()(SearchSection);
