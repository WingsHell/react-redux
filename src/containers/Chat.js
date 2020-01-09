import { connect } from'react-redux';
import Chat from '../components/chat';

const mapStateToProps = (state) => {
    return {
        chat: state.chat,
        user: state.user
    };
};

export default connect(mapStateToProps)(Chat)

