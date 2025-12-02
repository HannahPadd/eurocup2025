import { createPlayer } from '../../../services/player/player.api';
import { useState } from 'react';



export default function RegisterForm() {
        interface SignUpFormState {
        name: string;
        email: string;
        password: string;
        groovestatsApi: string;
    };

    const [formData, setFormData] = useState<SignUpFormState> ({
        name: '',
        email: '',
        password: '',
        groovestatsApi: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createPlayer(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Player Name:</label>
                <input type="text" name="name" onChange={handleChange}value={formData.name} required maxLength={20}/>
            </div>

            <div>
                <label htmlFor='email'>Email:</label>
                <input type="text" name="email" onChange={handleChange}value={formData.email} required maxLength={50}/>
            </div>

            <div>
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" onChange={handleChange}value={formData.password} required maxLength={30}/>
            </div>

            <div>
                <label htmlFor='groovestatsApi'>Groovestats Api:</label>
                <input type="text" name="groovestatsApi" onChange={handleChange}value={formData.groovestatsApi} maxLength={30}/>
            </div>
            <hr />
            <div>
                <button className="bg-lighter text-white p-2 rounded-lg">Sign up!</button>
            </div>
        </form>
    )
}