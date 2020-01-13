import { connect } from'react-redux';
import Chat from '../components/chat';
import Main from './../components/main';

const mapStateToProps = (state) => {
    return {
        chat: state.chat,
        userLogged: state.userLogged
    };
};

export default connect(mapStateToProps, null)(Chat, Main)

