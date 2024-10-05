import { useEffect, useRef, useState } from 'react';
import useTimer from '../hooks/useTimer';

const Question = ({ question, totalQuestions, currentQuestion, setAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [timer, setTimer] = useState(10); // initial timer value
  const [endTime, setEndTime] = useState(0); // total time taken to complete the quiz
  const [showTimerModal, setShowTimerModal] = useState(false); // timer modal visibility
  const [showResultModal, setShowResultModal] = useState(false); // result modal visibility
  const quizDetails = { totalTime: 10 }; // quiz details object

  useTimer(
    timer,
    quizDetails,
    setEndTime,
    setTimer,
    setShowTimerModal,
    showResultModal
  );

  const gotoNextQuestion = () => {
    setAnswer(selectedOption);
    setSelectedOption(null);
    setTimer(10);
  };

  useEffect(() => {
    // console.log(timer);
    if (!timer) {
      console.log('Time Finished');
      gotoNextQuestion();
    }
  }, [timer]);

  return (
    <div className='flex flex-col max-md:h-fit'>
      <div
        // className='bg-blue-600 h-2.5 rounded-full mb-5'
        className={`
          ${
            (timer / quizDetails.totalTime) * 100 > 0 &&
            (timer / quizDetails.totalTime) * 100 <= 30
              ? 'bg-red-500 '
              : ' '
          } 
          ${
            (timer / quizDetails.totalTime) * 100 > 30 &&
            (timer / quizDetails.totalTime) * 100 <= 60
              ? 'bg-orange-600 '
              : ' '
          }
          ${(timer / quizDetails.totalTime) * 100 > 60 ? 'bg-green-600 ' : ' '}
        h-2.5 rounded-full mb-5`}
        style={{
          width: `${(timer / quizDetails.totalTime) * 100}%`,
          transition: `${
            timer == quizDetails.totalTime ? null : 'width 1s linear'
          }`,
        }}
      ></div>
      <div className='flex flex-col gap-5 max-md:h-fit px-5 py-10'>
        <div className='text-center'>
          <b>{currentQuestion} </b>
          of
          <b> {totalQuestions}</b>
        </div>
        <div className='flex flex-col gap-5'>
          <div>
            <span>Question:</span>
            <p className='max-md:text-lg max-md:font-medium'>
              {question.title}
            </p>
          </div>
          <div className='flex flex-col flex-wrap max-md:flex-nowrap gap-5 h-40 max-md:h-fit'>
            {question.options.map((option, index) => {
              return (
                <div
                  key={index}
                  className={`
                  ${
                    index == selectedOption
                      ? 'font-bold bg-purple-700 text-white'
                      : null
                  }
                  cursor-pointer border-2 border-gray-200 py-3 px-5 rounded-lg max-md:font-medium`}
                  // ${
                  //   index == selectedOption &&
                  //   selectedOption == question.correctOptionIndex
                  //     ? 'bg-green-700 text-white'
                  //     : null
                  // }
                  // ${
                  //   index == selectedOption &&
                  //   selectedOption != question.correctOptionIndex
                  //     ? 'bg-red-700 text-white'
                  //     : null
                  // }
                  onClick={() => setSelectedOption(index)}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex justify-end'>
          <button
            className='px-6 py-2 bg-gray-900 text-white border-none cursor-pointer rounded-md text-base'
            onClick={gotoNextQuestion}
          >
            {currentQuestion == totalQuestions ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
