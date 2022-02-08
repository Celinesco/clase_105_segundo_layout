import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import StarBorderIcon from '@mui/icons-material/StarBorder';




const Tarjetas = ({name, price, users, gigas, support, textButton}) => {
    let heighHeader = 70
    if (name !== "Pro") {
        heighHeader = 50
    }


    return (
        <Card sx={{width: 250, textAlign: 'center', borderRadius:3, display: 'flex', flexDirection:'column', justifyContent:'flex-end' }}>
        <CardHeader sx={{ bgcolor: '#E7EBF0', height: heighHeader, color:'#007FFF'}}
        action={name === "Pro" && <StarBorderIcon sx={{ color: "text.primary" }} />}
        title={name} 
        variant="h5"
        color='#455a64'
        subheader={name === "Pro" && "Most Popular"}>
        </CardHeader>
        <CardContent >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: 50, fontWeight: 'bold' }} variant="h5" gutterBottom>
                    ${price}
                </Typography>
                <Typography variant="h6" component="p" sx={{ color: '#455a64' }}>
                    /mo
                </Typography>

            </Box>
            <ul>
                <Typography sx={{fontWeight:500}} variant="subtitle1" component="li">
                    {users} users included
                </Typography>
                <Typography sx={{fontWeight:500}} variant="subtitle1"  component="li">
                    {gigas} GB of storage
                </Typography>
                <Typography sx={{fontWeight:500}} variant="subtitle1" component="li">
                    Help center access
                </Typography>
                <Typography  sx={{fontWeight:500}} variant="subtitle1" component="li">
                   {support}
                </Typography>
            </ul>
           
        </CardContent>
        <CardActions>
            <Button sx={{ textTransform: 'none', borderRadius: 2, p:1, fontWeight:'bold'}} variant={name === "Pro" ? "contained" : "outlined"}  fullWidth size="small">{textButton}</Button>
        </CardActions>
    </Card>
    )
}

export default Tarjetas;