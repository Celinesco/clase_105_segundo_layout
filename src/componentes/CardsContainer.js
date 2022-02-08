import Tarjetas from "./Tarjetas"
import Container from '@mui/material/Container';



const infoTarjetas = [{
    name: "Free",
    price: 0,
    users: 10,
    gigas: 2,
    support: "Email support",
    textButton: "Sign up for free"
},
{
    name: "Pro",
    price: 15,
    users: 20,
    gigas: 10,
    support: "Priority email support",
    textButton: "Get started"
},
{
    name: "Enterprise",
    price: 30,
    users: 50,
    gigas: 30,
    support: "Phone & email support",
    textButton: "Contact us"
},
]

const CardsContainer = () => {

    
    return (
        <Container sx={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap', alignItems:'flex-end', pt:10}}>
            {infoTarjetas.map((plan)=>
                <Tarjetas
                name={plan.name}
                price={plan.price}
                users={plan.users}
                gigas={plan.gigas}
                support={plan.support}
                textButton={plan.textButton}
                />
            )}
            
            {/* <Card sx={{width: 250, textAlign: 'center', borderRadius:3 }}>
                <CardHeader sx={{ bgcolor: '#e0e0e0', height: 50, color:'#007FFF'}} 
                title="Free" 
                variant="h5"
                color='#455a64'
                >
                </CardHeader>
                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: 50, fontWeight: 'bold' }} variant="h5" gutterBottom>
                            $0
                        </Typography>
                        <Typography variant="h6" component="p" sx={{ color: '#455a64' }}>
                            /mo
                        </Typography>

                    </Box>
                    <ul>
                        <Typography sx={{fontWeight:500}} variant="subtitle1" component="li">
                            10 users included
                        </Typography>
                        <Typography sx={{fontWeight:500}} variant="subtitle1"  component="li">
                            2 GB of storage
                        </Typography>
                        <Typography sx={{fontWeight:500}} variant="subtitle1" component="li">
                            Help center access
                        </Typography>
                        <Typography  sx={{fontWeight:500}} variant="subtitle1" component="li">
                            Email support
                        </Typography>
                    </ul>
                   
                </CardContent>
                <CardActions>
                    <Button sx={{ textTransform: 'none', borderRadius: 2, color:'#007FFF', p:1, fontWeight:'bold'}} variant="outlined" fullWidth size="small">Sign in up for free</Button>
                </CardActions>
            </Card>

            <Card sx={{ width: 250, textAlign: 'center', borderRadius:3 }}>
                <CardHeader sx={{ bgcolor: '#e0e0e0', height: 30, color:'#007FFF'}} 
                title="Enterprise" 
                variant="h5"
                color='#455a64'
                >
                </CardHeader>
                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: 50, fontWeight: 'bold' }} variant="h5" gutterBottom>
                            $30
                        </Typography>
                        <Typography variant="h6" component="p" sx={{ color: '#455a64' }}>
                            /mo
                        </Typography>

                    </Box>
                    <ul>
                        <Typography sx={{fontWeight:500}} variant="subtitle1" component="li">
                            50 users included
                        </Typography>
                        <Typography sx={{fontWeight:500}} variant="subtitle1"  component="li">
                            30 GB of storage
                        </Typography>
                        <Typography sx={{fontWeight:500}} variant="subtitle1" component="li">
                            Help center access
                        </Typography>
                        <Typography  sx={{fontWeight:500}} variant="subtitle1" component="li">
                            Phone & email support
                        </Typography>
                    </ul>
                   
                </CardContent>
                <CardActions>
                    <Button sx={{ textTransform: 'none', borderRadius: 2, color:'#007FFF', p:1, fontWeight:'bold'}} variant="outlined" fullWidth size="small">Contact us</Button>
                </CardActions>
            </Card> */}
    



        </Container>
    )
}

export default CardsContainer;