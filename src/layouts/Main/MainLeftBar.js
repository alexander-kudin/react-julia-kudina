// Material UI
import { Container, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MainLeftBar() {
    const LinkRouter = (props) => <Link component={RouterLink} {...props} />;
    const {name, href} = useSelector(state => state.layoutReducer.navLink);

    return (
        <Grid item md={1} xs={0} order={{ xs: 1 }} sx={{ display: { xs: 'none', md:'flex' } }}>
            <Container sx={{ display: 'flex', alignItems: 'flex-end', flexDirection:'column' }}>
                <LinkRouter to={href} underline='none'  sx={{mt: {xs: 12, md: 42}, textTransform: 'uppercase', transform: 'rotate(180deg)', writingMode: 'vertical-lr', color: 'black'}}>{name}</LinkRouter>
            </Container>
        </Grid>
    );
}