import React, { useState} from 'react';
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/actions/user';
import { Link } from 'react-router-dom';

const cardStyle = {
    borderRadius: 10,
    border: 'none',
    backgroundColor: "#343a40",
    fontSize: 16,
    padding: 10,
    marginRight: 10,
    flexGrow: 1,
    width: 400,
    margin: 'auto'
  };

const Login = () => {

    const [username, setUsername] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            dispatch(addUser(username));
            setUsername("");
        }
    }

    return (
        <form>
            <div className="container p-4 mr-auto">
                <div className="card" style={cardStyle}>
                    <div className="card-title">
                        <p className= "text-center text-white m-0">Inscrivez vous au chat !</p>
                    </div>
                    <div className="card-body" style={{margin:5, padding:0}}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label text-white pl-3 pr-0" htmlFor="username"><u id="username">Username :</u></label>
                            <div className="col-sm-8 pl-0">
                                <input  className="form-control pl-0" onChange={handleChange} name="username" type="text" placeholder="votre nom ici" required />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <Link to="/chat">
                            <button onClick={handleSubmit} type="submit" className="btn btn-card btn-primary">Connexion</button>
                        </Link>
                    </div>
                </div> 
            </div>
        </form>
    )

}

export default Login;