import * as React from 'react';
import { ArrowForward } from '@mui/icons-material';
import { Divider, FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Box } from '@mui/system';

import exhibitionsJSON from '../shared/exhibitions.json';

const Exhibitions = () => {
    const [exhibitionsYear, setExhibitionsYear] = React.useState(2020);
    const [exhibitions, setExhibitions] = React.useState(exhibitionsJSON.filter(exhibition => exhibition.year - exhibitionsYear >= 0 && exhibition.year - exhibitionsYear < 5));

    const handleChange = (event) => {
        setExhibitionsYear(event.target.value);
        console.log(exhibitionsYear);
        setExhibitions(
            exhibitionsJSON.filter(exhibition => exhibition.year - event.target.value >= 0 && exhibition.year - event.target.value < 5)
        );
    }

    return (
        <Box id="exhibitions">
            <FormControl sx={{ minWidth: 200}}>
                <InputLabel id="exhibition-filter">Год</InputLabel>
                <Select
                    labelId="exhibition-filter"
                    id="exhibition-filter-select"
                    value={exhibitionsYear}
                    label="Год"
                    onChange={handleChange}
                    defaultValue={2020}
                >
                    <MenuItem value={2010}>2010 - 2014</MenuItem>
                    <MenuItem value={2015}>2015 - 2019</MenuItem>
                    <MenuItem value={2020}>2020 - Сейчас</MenuItem>
                </Select>
            </FormControl>
            {
            exhibitions.map((exhibition) => (
            <Box key={exhibition.title + exhibition.year}>
                <Box display="flex" py={3}>
                    <Typography color='text.secondary'>{exhibition.year}</Typography>
                    <Box ml={10}>
                        <Typography color='text.primary'>{exhibition.title}</Typography>
                        <Typography color='text.secondary'>{exhibition.location}</Typography>
                    </Box>
                    {exhibition.src && 
                        <IconButton
                        style={{ backgroundColor: 'transparent' }}
                        rel="noopener noreferrer"
                        href={exhibition.src}
                        target="_blank"
                        size='large'
                        sx={{color: 'black', marginLeft: 'auto'}}
                        >
                            <ArrowForward />
                        </IconButton>
                    }
                </Box>
                <Divider />
            </Box>))
            }
        </Box>
    );
}

export default Exhibitions;