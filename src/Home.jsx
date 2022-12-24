import React, { useState } from "react";
import "./Home.css"
import Cards from "./Card";
import axios from "axios";
import {Header,Card,Icon,Grid, Input, Message , Button } from 'semantic-ui-react'




function Home()
{
    const [city,setCity] = useState("")
    const [response , setResponse]=useState("")
    const [error,setError] = useState("")

    
    function handleCity(e)
    {
        setCity(e.target.value)
    }
   
    function Action(e)
     {
        
        axios.get('https://api.waqi.info/feed/'+ city +'/?token=16d0160fe595b23d25ddcb0abdf1d9e7033672b8')
            .then((res)=>{
                if(res.data.status && res.data.status === 'error')
                {
                    setError(res.data.data)
                    setResponse("")
                }
                else 
                {
                    setResponse(res.data.data)
                    setError("")
                }
            }).catch((err) => {
                console.log(err)
            })   
            
     } 
   
     let cardy = <Cards response = {response}></Cards>
     if(!response || !response.aqi)
     {
        cardy = ""
     }
     let errordiv =  (<Message negative>
                            <Message.Header>Error</Message.Header>
                                <p>{error}</p>
                     </Message>)
    if(error==='') errordiv = ""
    return <div><br/>
    <Header as='h2' icon textAlign='center'>
    <Icon name='location arrow' circular />
     <h1>Enter City</h1>
     </Header>
        
       <Grid>
        <Grid.Row align="center">
        <Grid.Column >
           <Input 
            className="cntr" 
            size='big' 
            onChange={handleCity}                    
            />
                    
       <Button id="search_button" onClick={Action} circular icon='search' />
       {errordiv}
       </Grid.Column>   
       </Grid.Row>
    
     {cardy}
     </Grid>
    </div> 
    
}       
export default Home;