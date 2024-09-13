import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {Card, CardActions, CardContent, CardMedia, Button, Typography }  from '@mui/material';

const Characters = () => {

   const [characters, setCharacters] = useState([])
   //setCharacter => guarda los datos en la variable characacter

   
       useEffect(()=>{

         //fetch("https://rickandmortyapi.com/api/character")
            //.then( res => res.json())    
            //.then( res => setCharacters(res.results))
       axios.get("https://rickandmortyapi.com/api/character")
        .then( res => setCharacters(res.data.results))
        }, []) 

      

       return (
        <>
        <h2>CHARACTERS</h2>
        <div style={{
                width: "100%",
                border: "2px solid black",
                display: "flex", //lo ubica uno al lado del otro
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px"

        }}>
            {
                characters.map((caracter)=> {
                    return (
                        
                        <Card sx={{ width: 350 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="170"
                                image={caracter.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {caracter.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                            </Card>
                        
                    )
                })
            }

        </div>
        
        </>
        
        
    )
}

export default Characters
