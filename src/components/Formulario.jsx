import { FormControl, TextField, Button, Grid, Typography,
        List,ListItem, ListItemText, ListItemIcon, Paper
} from '@mui/material'
import CalculateIcon from '@mui/icons-material/Calculate';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import calcular from '../helpers/calculos';


let enunciados =[
        "Parte Entera Superior",
        "Parte Entera Inferior",
        "Parte Entera",
        "Si es divisible por 11",
        "Si es divisible por 7",
        "Truncamiento de x a n cifras decimales",
        "Redondeo de x a n cifras decimales",
]

const Formulario = () => {
    const [isCalculate, setIsCalculate] = useState(false)
    const [number, setNumber] = useState(0)
    const [resultados, setResultados] = useState([])
    const handleClick =()=>{
        const numero = document.getElementById("numero")
        const decimal = document.getElementById("decimal")
        if(numero.value){
            setNumber(numero?.value)
            setIsCalculate(true)
            setResultados(calcular(numero?.value, decimal?.value))
        }else{
            setIsCalculate(false)
        }
       
    }
  return (
    <Grid container 
    p={2}
    sx={{

        margin: '2rem auto'
    }} 
    justifyContent={'center'}
    >
        
        <Grid item md={12}>
            <Typography variant='body1' 
            sx={{
                marginLeft: "1em"
            }}
            
            >
                Ingrese un valor para calcular los siguientes puntos:
            </Typography>
            <List
            dense
            >

                {enunciados.map(enunciado => (
                    <ListItem
                disableGutters 
                key={uuidv4()}
                >
                    <ListItemIcon
                    sx={{
                        justifyContent: "center",
                    }}
                    >
                        <CalculateIcon />
                    </ListItemIcon>
                    <ListItemText primary={enunciado} />
                </ListItem>

                ))}
                
            </List>
                <TextField 
                id="numero"
                label="Numero"
                type="number"
                margin="normal"

                defaultValue={0}
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <TextField 
                id="decimal"
                label="Decimales"
                type="number"
                margin="normal"
                fullWidth
                defaultValue={0}
                InputLabelProps={{
                    shrink: true,
                }}
                />
        </Grid>
        <Grid item md={6}>
        <Button variant="contained" fullWidth onClick={handleClick}>Calcular</Button>
        </Grid>


        <Grid item md={12}>
            <Paper elevation={3} sx={{
                marginTop: "2rem",
            }}>
                {!isCalculate ? (
                    <Typography variant='body1' 
                    sx={{
                        p: '2em',
                        textAlign: "center",
                    }}
                    
                    >
                      Aun no hay resultados...
                    </Typography>
                ): 
                resultados.map((resultado, i) =>(
                    < div
                    key={uuidv4()}
                    >
                     <Typography variant='body1' 
                    sx={{
                        p: '2em',
                        paddingBottom: '.5em',
                        color: 'primary.main',
                        fontSize: '1.4em'
                        
                    }}
                    >
                    {enunciados[i]}
                    </Typography>
                    
                    <Typography variant='body1' 
                    sx={{
                        p: '1em',
                        textAlign: "center",
                        backgroundColor: "transparent",
                        boxShadow: 'inset 0px 0px 2px #787878'
                    }}
                    >
                     {resultado}
                    </Typography>
                    </ div>
                    
                ))
                }
            </Paper>
        </Grid>
    </Grid>
  )
}

export default Formulario