import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import Question from '../Questions/Question';
import './Quiz.css';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  bar: {
    margin: '1% 15%',
  },
});

function Quiz({ API_URL }) {
  const classes = useStyles();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, [API_URL]);
  let boom = '';
  const happy =
    'https://c.tenor.com/OrrWytcyQqUAAAAM/i-see-potential-in-you-jack-donaghy.gif';
  const sad = 'https://media3.giphy.com/media/l41Yh1olOKd1Tgbw4/giphy.gif';
  const salute = 'https://i.gifer.com/730k.gif';

  score < 4
    ? (boom = sad)
    : score >= 4 && score < 6
    ? (boom = happy)
    : (boom = salute);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
  };

  return questions.length > 0 ? (
    <div className='App'>
      {currentIndex >= questions.length ? (
        <div className='score-section'>
          <h1 className='score'>Your Score is : {score}/10</h1> <br /> <br />
          <img style={{ maxHeight: 350, borderRadius: 10 }} src={boom} alt='' />
          <Link to='/'>
            <button type='button' className='play-btn'>
              Play Again
            </button>
          </Link>
        </div>
      ) : (
        <>
          <Question
            data={questions[currentIndex]}
            handleAnswer={handleAnswer}
            currentIndex={currentIndex}
          />
          <div className={classes.root}>
            <div className={classes.bar}>
              <LinearProgress variant='determinate' value={currentIndex * 10} />
            </div>
          </div>
        </>
      )}
    </div>
  ) : (
    <>
      <div className='load'>
        <h1 className='loader'>
          <ReactLoading
            type='bars'
            color='#211D31'
            height={'20%'}
            width={'20%'}
          />
        </h1>
      </div>
    </>
  );
}

export default Quiz;
