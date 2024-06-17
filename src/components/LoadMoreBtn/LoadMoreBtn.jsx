import PropTypes from 'prop-types';

const LoadMoreBtn = ({ onClick }) => {
    return (
        <div>
            <button type='button' onClick={onClick}>Load More</button>
        </div>
    )
};

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
