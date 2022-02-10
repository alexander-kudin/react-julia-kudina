import * as React from 'react';

// Material UI
import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

// React Router Navigation
import { Link as RouterLink } from "react-router-dom";

// Localization
import { Trans } from 'react-i18next';

const LinkText = ({ href, children }) => {
    const LinkRouter = (props) => <Link component={RouterLink} {...props}/>;
    return <LinkRouter variant='span' to={ href || ''} key={ href || ''} underline='none' sx={{color: 'blue'}}>{children}</LinkRouter>;
}


const Biography = ({t}) => {
    return (
        <Box id="bio">
            <Typography sx={{lineHeight: 2}} component="p">
                <Trans i18nKey="home.description.part1" t={t} components={[<LinkText href='/work/scarlet-roses' />, <LinkText href='/work/irises-flowers-of-love' />]} />
            </Typography>
            <Typography sx={{lineHeight: 2, marginTop: 2}} component="p">
            <Trans i18nKey="home.description.part2" t={t} components={[<LinkText href='/work/field-bouquet '/>, <LinkText href="/work/lilac" />]} />
            </Typography>
            <Typography sx={{lineHeight: 2, marginTop: 2}} component="p">
            <Trans i18nKey="home.description.part3" t={t} components={[<LinkText href="/work/old-town-ekaterinodar" />]} />
            </Typography>
            <Typography sx={{lineHeight: 2, marginTop: 2, fontStyle: 'italic'}}>
                <Trans i18nKey="home.description.author" t={t} components={[<a href="https://zen.yandex.ru/id/5daa0a845eb26800aee13768" rel="noreferrer" target='_blank'> </a>]} />
            </Typography>
        </Box>
    );
}

export default Biography;