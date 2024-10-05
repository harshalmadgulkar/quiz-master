import React from 'react';

const JoinScreen = ({ start }) => {
  return (
    <div className='bg-white max-md:h-auto h-96 max-md:w-4/5 w-1/2 flex flex-col justify-center items-center text-center gap-5 p-5'>
      <h2 className='text-2xl max-md:text-3xl font-bold'>Join Quiz</h2>
      <p className='w-3/4 max-md:text-xl'>Welcome to the Quiz Challenge!</p>
      <p className='w-2/4 max-md:text-lg'>
        Get ready to put your knowledge to the test. Take a deep breath, stay
        sharp, and enjoy the quiz.
      </p>
      <p className='w-3/4 max-md:text-lg'>Good Luck !</p>
      {/* <select className='border-2 rounded p-1'>
        <option value='' selected disabled hidden>
          Select Quiz
        </option>
        <option value='general-quiz-1'>General Quiz 1</option>
        <option value='general-quiz-2'>General Quiz 2</option>
        <option value='general-quiz-3'>General Quiz 3</option>
        <option value='general-quiz-4'>General Quiz 4</option>
      </select> */}
      <button
        onClick={start}
        className='px-6 py-2 bg-gray-900 text-white border-none cursor-pointer rounded-md text-base max-md:text-2xl'
      >
        Start
      </button>
    </div>
  );
};

export default JoinScreen;
