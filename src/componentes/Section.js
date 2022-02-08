import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Section = () => {
    return (
            <Container sx={{pt:20, display: 'flex', flexDirection:'column', alignItems: 'center'}} maxWidth="xl" disableGutters>
                <Typography sx={{fontSize: 35, fontWeight:'bold'}}variant="h6" component="h1" >
                    Pricing
                </Typography>
                <Typography sx={{fontSize: 25, fontWeight:'bold', textAlign:'center', color:'#455a64', width: 550}} variant="h6" component="span">
                Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization.
                </Typography>
            </Container>
    )
}

export default Section;