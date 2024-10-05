import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import QuizScreen from './components/QuizScreen.jsx';
import JoinScreen from './components/JoinScreen.jsx';

const App = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <div className='flex flex-col h-screen bg-gray-100 gap-10'>
      <Navbar />
      <div className='flex justify-around w-full items-center max-md:items-start max-md:h-full'>
        {isQuizStarted ? (
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        ) : (
          <JoinScreen start={() => setIsQuizStarted(true)} />
        )}
      </div>
    </div>
  );
};

export default App;
