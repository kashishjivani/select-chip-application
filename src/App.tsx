import React from 'react';
import ChipInput from './components/ChipInput';

function App() {
  return (
    <div className='flex flex-col items-center'>
      <div className='font-bold mr-64 text-blue-500 text-2xl mb-4'>
        Pick Users
      </div>
      <ChipInput />
    </div>
  );
}

export default App;
