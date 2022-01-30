import * as React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import Form from './Form.js'
import ContactDialog from './ContactDialog.js'

const useHandleDialog = (initialState) => {
    const [isOpen, setIsOpen] = React.useState(initialState);
    const handleDialog = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);
    return [isOpen, handleDialog];
};

const Contacts = ({t}) => {
    const [open, handleDialog] = useHandleDialog(false);

    return (
        <Box id="contacts">
            {/* <Typography component='a' href='tel:+79184551920'>+7 (918) 455 19 20</Typography> */}
            <Typography onClick={handleDialog} sx={{cursor:'pointer', mb: 2}}>+7 (918) 455 19 20</Typography>
            <Typography component='a' href='mailto:artkudina@gmail.com?subject=Mail from artkudina.ru' sx={{textDecoration:'none', color:'black'}}>artkudina@gmail.com</Typography>
            <Typography variant="h6" gutterBottom mt={5}>{t('home.contacts.formTitle')}</Typography>
            <Form t = {t}/>
            <ContactDialog open = {open} handleDialog = {handleDialog} t = {t}/>
        </Box>
    );
}

export default Contacts;