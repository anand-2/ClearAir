import {Header,Card,Icon,Grid, Input , Button } from 'semantic-ui-react'

function Cards(props)
{
        let  aqiColor = "";
        let aqiStatus = "";


      
    if(props.response.aqi > 100)
    {
       aqiColor = "red";
       aqiStatus = "Extreme"
       //buttonColor = "Yellow"
    }
    else 
    {
       aqiColor = "green";
       aqiStatus = "GOOD"
       //buttonColor = ""

    }
    
    
    return <Grid.Row className="card_style">
        
        <Card.Group itemsPerRow={1}  >
            <Card color='green' className = "aqi_card">
            <Card.Content id={aqiColor} >
                <span className='white_header'>Air Quality Index(AQI)</span>
                
                <Card.Description className='white_header'>{props.response.aqi}</Card.Description>
                <Button color="olive" >{aqiStatus}</Button>
            </Card.Content>
            </Card >
            <Card className = "pollut_card">
            <Card.Content  >
                <Card.Header>Major Pollutants</Card.Header>
                <Grid.Row itemsPerRow={4}>
                    <Card className='poll_class' color='red' meta="PM2.5" description={props.response.iaqi.pm25 && props.response.iaqi.pm25.v}   /> 
                    <Card className='poll_class' color='red' meta="CO" description={props.response.iaqi.co && props.response.iaqi.co.v} />
                    <Card className='poll_class' color='orange' meta="PM10" description={props.response.iaqi.pm10 && props.response.iaqi.pm10.v}  />
                    <Card className='poll_class' color='yellow' meta="Dew" description={props.response.iaqi.dew && props.response.iaqi.dew.v} />

                </Grid.Row>
            </Card.Content>
            </Card>
            
            
        </Card.Group>    
        </Grid.Row>
}

export default Cards