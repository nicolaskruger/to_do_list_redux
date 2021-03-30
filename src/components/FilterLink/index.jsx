import { connect } from 'react-redux';
import setVisibilityFilter from '../../store/operation/setVsibilityFilter';
import Link from '../link';


const mapStateToLinkProps = (
    state,
    ownProps
) => {
    return {
        active:
        ownProps.filter ===
        state.visibilityFilter
    }
}
const mapDipathchToLinkProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () => {
            dispatch(
                setVisibilityFilter(ownProps.filter)
            );
        }
    }
}

const FilterLink = connect(
    mapStateToLinkProps,
    mapDipathchToLinkProps
)(Link);

export default FilterLink;