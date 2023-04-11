import { Typography,Container } from "@mui/material"
const Footer = () => {
  return (
    <footer className="footer">
        <Container>
        <Typography
        variant='body1' 
        sx={{
            textAlign: 'center',
        }}
        >
            Juan Pablo Alvarado Valero 20212020063
        </Typography>
        <Typography
        variant='body1' 
        sx={{
            textAlign: 'center',
        }}
        >
            Luisa  20212020063
        </Typography>
        </Container>
        
    </footer>
  )
}

export default Footer