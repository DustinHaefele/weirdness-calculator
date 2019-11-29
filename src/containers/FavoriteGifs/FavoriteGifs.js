import { connect } from 'react-redux';
import Favorites from '../../components/Favorites/Favorites';
import { batchActions } from 'redux-batched-actions';
import { setError, removeFromFavorites } from '../../redux/actions';


const mapStateToProps = state => ({
  favorites: state.favorites,
  error: state.error,
})

const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setError(error)),
  handleRemove: id => dispatch(batchActions([removeFromFavorites(id), setError({})])),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)