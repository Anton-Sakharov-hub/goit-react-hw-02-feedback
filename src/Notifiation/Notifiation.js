
import PropTypes from 'prop-types';

export default function Notification(props) {
    const { message } = props;

    return (<p>{message}</p>);
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}