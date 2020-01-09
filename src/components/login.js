import React, { useState} from 'react';
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/actions/user';

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
        <div className="container p-4 mr-auto">
            <div className="card" style={cardStyle}>
                <div className="card-title">
                    <p className= "text-center text-white m-0">Inscrivez vous au chat !</p>
                </div>
                <div className="card-body" style={{margin:5, padding:0}}>
                    <div className="form-group">
                        <label className="text-white" for="username"><u id="username">Username :</u></label>
                        <input  className="form-control" onChange={handleChange} name="username" type="text" placeholder="votre nom ici" required />
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button onClick={handleSubmit} type="submit" class="btn btn-card btn-primary" click="">Connexion</button>
                </div>
            </div> 
        </div>
             
        
    )

}

export default Login;