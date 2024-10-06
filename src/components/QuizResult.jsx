import React from 'react';

const QuizResult = ({ result, retry }) => {
  return (
    <div className='flex flex-col gap-8 items-center h-72 justify-center'>
      <h2 className='text-xl font-bold text-center'>
        Result: {result.percentage}%
      </h2>
      <p className='max-md:text-center'>
        Selected {result.correct} corect options out of {result.total}{' '}
        questions.
      </p>
      <button
        className='px-6 py-2 bg-gray-900 text-white border-none cursor-pointer rounded-md text-base'
        onClick={retry}
      >
        Try Again
      </button>
    </div>
  );
};

export default QuizResult;
