import { useState } from "react";
import Home from "./Home";
import logo22 from '../assets/logo22.jpg';

export default function Login({ userData }) {
    const [login, setLogin] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    function handleClick() {
        if (formData.email === userData.email && formData.password === userData.password) {
            setLogin(true);
        } else {
            alert('Invalid email or password');
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
   
    return (
        <>
            {!login &&
                <div className="ldetails">
                    <div className="formContainer">
                        <div id="title"><b>Hello User!</b></div>
                        <div className="lemailInfo">
                            <label htmlFor="email" id="emaillabel">Email</label><br />
                            <input type="email" name="email" placeholder="enter email" id="lemail" required onChange={handleChange} />
                        </div>
                        <div className="lpasswordInfo">
                            <label htmlFor="password" id="lpasswordlabel">Password</label><br />
                            <input type="password" name="password" placeholder="enter password" id="password" required onChange={handleChange} />
                        </div>
                        <div className="loginbutton">
                            <button className="login" onClick={handleClick}>Login</button>
                        </div>
                    </div>
                    <div className="logoContainer">
                        <img src={logo22} alt="logo" className="logo22" />
                    </div>
                </div>
            }
            {login && <Home />}
        </>
    );
}

