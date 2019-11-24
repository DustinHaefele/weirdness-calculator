import React from 'react';
import GiphyApiService from '../../services/giphy-api-service';

async function handleSubmit(ev) {
  ev.preventDefault();
  const searchTerm = ev.target.search.value;
  const gif = await GiphyApiService.getGifFromSearch(searchTerm);
}

export default function SearchSection() {
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

      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search Term</label>
        <input name="search" id="search" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
