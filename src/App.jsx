
import './App.css';
import background from '../src/assets/images/background.jpg'

import Hands from './components/Hands';
import Box from './components/Box';

function App() {
  return (
    <div className='relative'>
      <img src={background} className='w-full h-full' alt="" />
      <Hands></Hands>
      <Box></Box>
    </div>
  );
}

export default App;
