import React from 'react';
import './Question.css';

function Question({
  showAnswers,
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
  currentIndex,
}) {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5,
  );
  return (
    <div className='question_section'>
      <span>
        <h2
          className='question'
          dangerouslySetInnerHTML={{
            __html: `${currentIndex + 1}. ${question}`,
          }}
        />
      </span>
      <div className='container'>
        {shuffledAnswers.map((answer, index) => (
          <button
            key={index}
            className='option_style'
            onClick={() => handleAnswer(answer)}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </div>
  );
}
export default Question;
