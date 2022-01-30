import * as React from 'react';
import { Dialog, DialogTitle, List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

const ContactDialog = ({open, handleDialog, t}) => {
    const ringPhone = () => window.open('tel:+79184551920', '_self');
    const openWhatsApp = () => window.open('https://wa.me/+79184551920', '_blank');
    const openTelegram = () => window.open('https://t.me/artkudina', '_blank');

    return (
        <Dialog onClose={handleDialog} open={open}>
            <Box p={2}>
                <DialogTitle>{t('home.contacts.contactDialog.dialogTitle')}</DialogTitle>
                <List sx={{ pt: 0 }}>
                    <ListItem autoFocus button onClick={() => {ringPhone(); handleDialog()}}>
                        <ListItemText primary={t('home.contacts.contactDialog.ringLabel')} />
                    </ListItem>
                    <ListItem autoFocus button onClick={() => {openWhatsApp(); handleDialog();}}>
                        <ListItemText primary={t('home.contacts.contactDialog.whatsAppLabel')} />
                    </ListItem>
                    <ListItem autoFocus button onClick={() => {openTelegram(); handleDialog();}}>
                        <ListItemText primary={t('home.contacts.contactDialog.telegramLabel')} />
                    </ListItem>
                </List>
            </Box>
        </Dialog>
    );
}

export default ContactDialog;