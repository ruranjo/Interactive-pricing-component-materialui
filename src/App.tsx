import { SxProps } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { SlicerPricing } from './components';
import { bgPatternDesktop } from './utils/assets';

export interface styledApp {
  appContainer: SxProps;
  topContainer: SxProps;
}

// Estilos para la aplicación
const appStyle: styledApp = {
  appContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media screen and (max-width: 440px)': {
      
    },
  },
  topContainer: {
    position: 'absolute',
    zIndex: -10,
    //border: '1px solid red',
    width: '100%',
    height: '50%',
    backgroundSize: '100% 100%, cover',
  backgroundImage: `url(${bgPatternDesktop})`,
    
    '@media screen and (max-width: 440px)': {
      height: '100%',
      backgroundImage: 'none',
    },
  },
};


const App:React.FC<{}> = () => {
  const [data, setData] = useState({
    price:50,
    time:'month' //month or year
  });

  const handleSettingPrince = (price: number, time: string) => {
    setData(prevData => {
      const newData = { ...prevData, price: price, time: time };
      return newData;
    });
  };
  
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Box sx={appStyle.topContainer}>
      </Box>
      <Box sx={appStyle.appContainer}>
        <SlicerPricing handleSetting={handleSettingPrince} price={data.price} min={0} max={100} />
      </Box>
    </>
  )
}

export default App
