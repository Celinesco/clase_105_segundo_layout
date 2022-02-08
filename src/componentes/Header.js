import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'


const Header = () => {
    return (
        <Paper variant='header' position="static" >
            <AppBar sx={{ bgcolor: '#eceff1', boxShadow: 0 }} >
                <Toolbar sx={{p:1, mx:5, display:'flex', justifyContent:'space-between'}} disableGutters>
                    <Typography 
                        variant="h6"
                        component="a"
                        sx={{ mr: 2, display: { md: 'flex', color: '#212121' } }}>
                        Company name
                    </Typography>
                        <nav>
                                <Link sx={{ ml: 4, fontWeight: 'bold' }} href="#" underline="none">
                                    {'Features'}
                                </Link>
                                <Link sx={{ ml: 4, fontWeight: 'bold' }} href="#" underline="none">
                                    {'Enterprise'}
                                </Link>
                                <Link sx={{ ml: 4, fontWeight: 'bold' }} href="#" underline="none">
                                    {'Support'}
                                </Link>
                                <Button sx={{ ml: 4, fontWeight: 'bold', borderRadius: 3, textTransform: 'none', fontSize: 15 }} variant="outlined">Login</Button>
                        </nav>
                </Toolbar>
        </AppBar>
        </Paper >
    )
}

export default Header;