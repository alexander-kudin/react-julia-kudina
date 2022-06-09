// Material UI
import { Box, Grid} from "@mui/material";
import { useSelector } from "react-redux";

import RandomArtwork from '../../components/RandomArtwork';
import Copyright from '../../components/Copyright';

export default function MainRightBar() {
  const backgroundUrl = useSelector(state => state.layoutReducer.backgroundUrl);

  return (
      <Grid item md={3} xs={12} sx={{ top:'0', bottom: '0', position: {md: 'sticky'}}} height="100%" backgroundColor='#f4f4f4' order={{ xs: 2, md: 3 }} >
          <Box sx={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundUrl})`,
              backgroundRepeat: 'no-repeat',
              height: {xs: '30vh', md: '100vh'},
              backgroundSize: 'cover',
              backgroundPosition: {xs: '50% 35%', md: 'center center'}
          }}/>
          <RandomArtwork />
          <Copyright sx={{ display: {xs: 'none', md: 'block'} }}/>
      </Grid>
  );
}