import { useState }from 'react';

// Axios
import axios from 'axios';

// Material UI
import { TextField, Button } from '@mui/material';

// Secret Config
import { TELEGRAM_API } from '../../config';

export default function ContactForm({ t }){
    const [message, setMessage] = useState('');
    const chat_id = TELEGRAM_API.chatId;
    const token = TELEGRAM_API.token;
    const [data, setData] = useState({ name: '', email: '', phone: '' })
    const telegramAPI = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=<b>Имя: </b>${data.name.toString()}%0A<b>Email: </b>${data.email.toString()}%0A<b>Телефон: </b>${data.phone.toString()}%0A`;
    const handleFormSubmit = (e) => {
        e.preventDefault();
        clear()
        axios({ method: 'post', url: `${telegramAPI}` })
            .then(result => {
              result.data.ok ? setMessage(t('home.contacts.form.successMessage')) : setMessage(t('home.contacts.form.errorMessage'));
            })
            .catch((error) => setMessage(t('home.contacts.form.errorMessage')));
    };

    const clear = () => {
        setData({ name: '', email: '', phone: '' });
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            {message}
            <TextField
                required
                id="name"
                name="name"
                label={t('home.contacts.form.nameLabel')}
                fullWidth
                autoComplete="name"
                variant="standard"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <TextField
                sx={{mt:1}}
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="email"
                variant="standard"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <TextField
                sx={{mt:1}}
                required
                id="phone"
                name="phone"
                label={t('home.contacts.form.phoneLabel')}
                fullWidth
                autoComplete="phone"
                variant="standard"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
            <Button 
                variant="outlined" 
                type='submit' 
                fullWidth
                sx={{mt:2}}
            >
                {t('home.contacts.form.submitButton')}
            </Button>
        </form>
    );
}