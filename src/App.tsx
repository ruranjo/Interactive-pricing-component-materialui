import { SxProps } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
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
    },
  },
};


const App:React.FC<{}> = () => {
  return (
    <>
      <Box sx={appStyle.topContainer}>
      </Box>
      <Box sx={appStyle.appContainer}>
        <SlicerPricing />
      </Box>
    </>
  )
}

export default App
