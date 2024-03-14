import { Button, Slider, Switch, SxProps, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { bgPatternCircles } from '../../utils/assets';

export interface styledSlicerPricing {
    mainContainer: SxProps;
    topContainer: SxProps;
    pricingContainer: SxProps;
    title: SxProps;
    subTitle: SxProps;
    text: SxProps;
  }
  
  // Estilos para la aplicación
  const slicerPricingStyle: styledSlicerPricing = {
    mainContainer: {
        border:'1px solid red',  
        width:'50%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (max-width: 440px)': {
            
        },
    },
    topContainer: {
        //border: '1px solid red',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        width: '100%',
        height: '30%',
        
        backgroundImage: `url(${bgPatternCircles})`,
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
        backgroundPosition: 'center',
        '@media screen and (max-width: 440px)': {
          
        },
      },
    pricingContainer:{
        width: '100%',
        height: '70%',
        backgroundColor:'gray',
    },
    title:{
        //border:'1px solid black',
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        fontSize:'2rem',
        color: 'black',
        fontWeight:'700 !important',
        //fontFamily: rubikFontFamily + ' !important',
        '@media screen and (max-width: 880px)': {
          justifyContent:'center',
          textAlign:'center',
          fontSize:'2.5rem',
        },
      },
      subTitle:{
        //border:'1px solid black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        color: 'gray',
        fontWeight:'700 !important',
        opacity:0.9,
        //fontFamily: rubikFontFamily + ' !important',
        '@media screen and (max-width: 880px)': {
          justifyContent:'center',
          textAlign:'center',
        },
      },
      text:{

      }

    
    
  };

export interface Props {

}

const SlicerPricing:React.FC<Props> = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

  return (
    <>
    
    <Box sx={slicerPricingStyle.mainContainer} >
        <Box sx={slicerPricingStyle.topContainer}>
            <Typography variant='h2' sx={slicerPricingStyle.title}>
                Simple, traffic-based pricing
            </Typography>
            <Typography variant='subtitle1' sx={slicerPricingStyle.subTitle}>
                Sign-up for our 30-day trial. No credit card required. 
            </Typography>
        </Box>
        <Box sx={slicerPricingStyle.pricingContainer}>
            
            <Box>
                <Box>
                    <Typography variant='h2' sx={slicerPricingStyle.text}>
                    100k Pageviews 
                    </Typography>
                    <Typography variant='subtitle1' sx={slicerPricingStyle.text}>
                        <span>{"hola"}</span> $ /month
                    </Typography>
                </Box>
                <Box sx={{ width: 300 }}>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        color="secondary"
                    />
                </Box>
                <Box >
                    <Typography >
                        Monthly Billing
                    </Typography>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Typography >
                        Yearly Billing <span>25% discount</span>
                    </Typography>
                </Box>
                
            </Box>

            <Box>
                
                <Box>
                    <Typography>Unlimited websites</Typography>
                    <Typography>100% data ownership</Typography>
                    <Typography>Email reports</Typography>
                </Box>

                <Button variant='contained'>
                    Start my trial
                </Button>

            </Box>
        </Box>
        
    </Box>
    </>
  )
}

export default SlicerPricing

/*
<body>


  

  
  

 

  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
</body>
*/