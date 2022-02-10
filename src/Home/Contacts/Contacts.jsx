import * as React from 'react';

// Material UI
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

// Component Imports
import Form from './Form'
import ContactDialog from './ContactDialog'

const useHandleDialog = (initialState) => {
    const [isOpen, setIsOpen] = React.useState(initialState);
    const handleDialog = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);
    return [isOpen, handleDialog];
};

const Contacts = ({t}) => {
    const [open, handleDialog] = useHandleDialog(false);

    return (
        <Box id="contacts">
            <Typography onClick={handleDialog} sx={{cursor:'pointer', mb: 2}}>+7 (918) 455 19 20</Typography>
            <Typography component='a' href='mailto:artkudina@gmail.com?subject=Письмо с artkudina.ru' sx={{textDecoration:'none', color:'black'}}>artkudina@gmail.com</Typography>
            <Typography variant="h6" gutterBottom mt={5}>{t('home.contacts.formTitle')}</Typography>
            <Form t = {t}/>
            <ContactDialog open = {open} handleDialog = {handleDialog} t = {t}/>
        </Box>
    );
}

export default Contacts;