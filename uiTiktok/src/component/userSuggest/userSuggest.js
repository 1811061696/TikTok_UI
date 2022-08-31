import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './userSuggest.module.scss';

const cx = classNames.bind(styles);

UserSuggest.propTypes = {
    lable: PropTypes.string.isRequired,
};

function UserSuggest(props) {
    const { lable } = props;
    return (
        <div className={cx('userSuggest_wrapper')}>
            <p className={cx('userSuggest_title')}>{lable}</p>
        </div>
    );
}

export default UserSuggest;
