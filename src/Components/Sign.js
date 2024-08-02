import logo from '../assets/logo.jpg';
import Login from './Login';
import { useState } from 'react';

export default function Sign({ setUserData, userData }) {
    const [sign, setSign] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', gender: '', dob: '', password: '' });
    const [error, setError] = useState('');

    function handleClick() {
        if (!formData.name || !formData.email || !formData.gender || !formData.dob || !formData.password) {
            setError('All fields are required.');
            return;
        }

        setUserData(formData);
        setSign(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setError('');
    }

    return (
        <>
            {!sign &&
                <div className="logindetails">
                    <div className="formContainer">
                        <div id="title"><b>Create Account</b></div>
                        {error && <div className="error">{error}</div>}
                        <div className="nameInfo">
                            <label htmlFor="name" id="namelabel">Name</label><br />
                            <input type="text" name="name" placeholder="enter name" id="name" required onChange={handleChange} />
                        </div>
                        <div className="emailInfo">
                            <label htmlFor="email" id="emaillabel">Email</label><br />
                            <input type="email" name="email" placeholder="enter email" id="email" required onChange={handleChange} />
                        </div>
                        <div className="genderInfo">
                            <label>Gender</label><br />
                            <input type="radio" name="gender" value="male" onChange={handleChange} />
                            <label htmlFor="male" id="malelabel">Male</label>
                            <input type="radio" name="gender" value="female" onChange={handleChange} />
                            <label htmlFor="female" id="malelabel">Female</label>
                            <input type="radio" name="gender" value="other" onChange={handleChange} />
                            <label htmlFor="other" id="other">Other</label>
                        </div>
                        <div className="dateInfo">
                            <label htmlFor="dob" id="datelabel">DOB</label><br />
                            <input type="date" name="dob" id="dob" required onChange={handleChange} />
                        </div>
                        <div className="passwordInfo">
                            <label htmlFor="password" id="passwordlabel">Password</label><br />
                            <input type="password" name="password" placeholder="enter password" id="password" required onChange={handleChange} />
                        </div>
                        <div className="signbutton">
                            <button className="signIn" onClick={handleClick}>Sign In</button>
                        </div>
                    </div>
                    <div className="logoContainer">
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                </div>
            }
            {sign && <Login userData={userData} />}
        </>
    );
}
