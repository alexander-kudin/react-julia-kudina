import * as React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';


const Biography = ({t}) => {
    return (
        <Box id="bio">
            <Typography sx={{lineHeight: 2}} component="p">
                {t("home.description.part1")}
            </Typography>
            <Typography sx={{lineHeight: 2, marginTop: 2}} component="p">
                {t("home.description.part2")}
            </Typography>
            <Typography sx={{lineHeight: 2, marginTop: 2}} component="p">
                {t("home.description.part3")}
            </Typography>
        </Box>
    );
}

export default Biography;