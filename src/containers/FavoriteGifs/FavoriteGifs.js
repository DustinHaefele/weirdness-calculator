import { connect } from 'react-redux';
import Favorites from '../../components/Favorites/Favorites';


const mapStateToProps = state => ({
  favorites: state.favorites,
  error: state.error,
  isCalc: state.isCalc
})

export default connect(mapStateToProps)(Favorites)