import React, { useState } from 'react';
import { Box, Button, Slider, Switch, SxProps, Typography } from '@mui/material';
import { NEUTRAL_COLORS, PRIMARY_COLORS } from '../../styles/variables';
import { bgPatternCircles, iconSlider } from '../../utils/assets';

export interface styledSlicerPricing {
  mainContainer: SxProps;
  topContainer: SxProps;
  pricingContainer: SxProps;
  title: SxProps;
  subTitle: SxProps;
  text: SxProps;
  header: SxProps;
  sliderStyle: SxProps;
  SwitchContainer: SxProps;
  textSwitch: SxProps;
  bottomContainer: SxProps;
  button: SxProps;
}

// Estilos para la aplicación
const slicerPricingStyle: styledSlicerPricing = {
  mainContainer: {
    width: '50%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (max-width: 440px)': {
      width: '100%',
    },
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '30%',
    backgroundImage: `url(${bgPatternCircles})`,
    backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
    backgroundPosition: 'center',
    '@media screen and (max-width: 440px)': {
      
    },
  },
  pricingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    padding: '3rem',
    width: '100%',
    height: '70%',
    borderRadius: '1rem',
    backgroundColor: NEUTRAL_COLORS.LIGHT_GRAYISH_BLUE,
    '@media screen and (max-width: 440px)': {
      
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700 !important',
    color: NEUTRAL_COLORS.DARK_DESATURATED_BLUE,
    '@media screen and (max-width: 880px)': {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '2.5rem',
    },
  },
  subTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700 !important',
    opacity: 0.9,
    color: NEUTRAL_COLORS.GRAYISH_BLUE,
    '@media screen and (max-width: 440px)': {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  text: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'gray',
    '& span': {
      fontSize: '2rem',
      color: NEUTRAL_COLORS.DARK_DESATURATED_BLUE,
    },
  },
  header: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media screen and (max-width: 880px)': {
      flexDirection:'column'
    },
    
  },
  sliderStyle: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    '& .MuiSlider-thumb': {
      width: 35,
      height: 35,
      backgroundColor: PRIMARY_COLORS.STRONG_CYAN,
      backgroundImage: `url(${iconSlider})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    },
    '& .MuiSlider-rail': {
      height: 10,
      border: 'none',
      backgroundColor: 'gray',
    },
    '& .MuiSlider-track': {
      height: 10,
      border: 'none',
      backgroundColor: PRIMARY_COLORS.STRONG_CYAN,
    },
  },
  SwitchContainer: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '1rem',
    width: '100%',
    paddingBottom:'3rem',
    paddingTop:'2rem',
  },
  textSwitch: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: 'gray',
    '& span': {
      fontSize: '1rem',
      backgroundColor: 'pink',
      borderRadius: '10px',
      padding: '5px',
      color: PRIMARY_COLORS.LIGHT_RED,
    },
    '& span.mobile': {
      display:'none'
    },
    '@media screen and (max-width: 440px)': {
      '& span.mobile': {
        display:'inline-block'
      },
      '& span.desktop': {
        display:'none'
      },
    },
    
  },
  bottomContainer: {
    paddingTop: '1rem',
    borderTop: '3px solid gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media screen and (max-width: 440px)': {
      flexDirection:'column',
      gap:'1rem',
    },
  },
  button: {
    borderRadius: '10px',
    backgroundColor: NEUTRAL_COLORS.DARK_DESATURATED_BLUE + ' !important',
    fontSize: '1rem',
    fontWeight: 700,
    color: 'white',
  },
};

export interface Props {
  price: number;
  min: number;
  max: number;
  handleSetting: (price: number, time: string) => void;
}

const SlicerPricing: React.FC<Props> = ({ handleSetting, price, min, max }) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState<number | number[]>(price);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChangeSlider = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number); // Actualizar el estado del valor del Slider
  };

  const handleClick = () => {
    handleSetting(value as number, checked ? 'year' : 'month');
  };

  return (
    <Box sx={slicerPricingStyle.mainContainer}>
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
          <Box sx={slicerPricingStyle.header}>
            <Typography variant='h2' sx={slicerPricingStyle.text}>
            100k Pageviews 
          </Typography>
            <Typography variant='subtitle1' sx={slicerPricingStyle.text}>
              <span>${(value as number).toFixed(2).toLocaleString()}</span>  /month
            </Typography>
          </Box>

          <Box sx={slicerPricingStyle.sliderStyle}>
            <Slider
              aria-labelledby="continuous-slider"
              value={value}
              color="secondary"
              min={min}
              max={max}
              onChange={handleChangeSlider}
              valueLabelFormat={(value) => value.toFixed(2)}
            />
          </Box>
          
          <Box sx={slicerPricingStyle.SwitchContainer}>
            <Typography sx={slicerPricingStyle.textSwitch}>Monthly Billing</Typography>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{
                color: 'gray',
                '& .MuiSwitch-root': {
                  width: '60px',
                  height: '36px',
                },
                '& .MuiSwitch-switchBase': {
                  padding: '9px',
                  color: 'gray',
                  '&.Mui-checked': {
                    color: PRIMARY_COLORS.STRONG_CYAN,
                  },
                },
              }}
            />
            <Typography sx={slicerPricingStyle.textSwitch}>
              Yearly Billing <span className='desktop'>25% discount</span> <span className='mobile'>-25%</span>
            </Typography>
          </Box>
        </Box>

        <Box sx={slicerPricingStyle.bottomContainer}>
          <Box>
            <Typography sx={slicerPricingStyle.textSwitch}>Unlimited websites</Typography>
            <Typography sx={slicerPricingStyle.textSwitch}>100% data ownership</Typography>
            <Typography sx={slicerPricingStyle.textSwitch}>Email reports</Typography>
          </Box>

          <Button variant='contained' sx={slicerPricingStyle.button} onClick={handleClick}>
            Start my trial
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SlicerPricing;