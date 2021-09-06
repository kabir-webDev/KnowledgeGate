import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './HomePage.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    minWidth: '35%',
    backgroundColor: '#3c52b2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
    },
  },
}));

function HomePage({ setDifficulty, setCategory }) {
  const classes = useStyles();
  const [btnOn, setBtnOn] = useState(false);
  const [btnType, setBtnType] = useState('Lock');
  const [clickable, setClickable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCategory(data.category);
    setDifficulty(data.difficulty);
    setBtnOn(true);
    setBtnType('Locked');
    setClickable(true);
  };

  return (
    <>
      <div className='main__container'>
        <div className='item-1'>
          <div className='color-box'>
            <span className='instruction'>
              Choose Category and Difficulty Level
            </span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='items'>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='age-native-simple'>Category</InputLabel>
                  <Select native {...register('category', { required: true })}>
                    <option aria-label='' value='' />
                    <option value={10}>Book</option>
                    <option value={12}>Music</option>
                    <option value={31}>Anime & Manga</option>
                    <option value={11}>Film</option>
                    <option value={15}>Video Games</option>
                    <option value={18}>Computers</option>
                    <option value={22}>Geography</option>
                    <option value={21}>Sports</option>
                    <option value={27}>Animal</option>
                    {errors.category && <span>This field is required</span>}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='age-native-simple'>
                    Difficulty
                  </InputLabel>
                  <Select
                    native
                    {...register('difficulty', { required: true })}
                  >
                    <option aria-label='' value='' />
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                    {errors.difficulty && <span>This field is required</span>}
                  </Select>
                </FormControl>
              </div>
              <div className='button_flex'>
                <Button
                  className={classes.button}
                  style={{ padding: 10 }}
                  variant='contained'
                  disabled={btnOn}
                  type='submit'
                >
                  {btnType}
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className='item-2'>
          <h1>TEST YOUR GENERAL KNOWLEDGE</h1>
          <h3>Let's Play The Game.</h3>
          <p>Good luck!</p>
          <Link to='/quiz'>
            {clickable === false ? (
              <button disabled type='button' className='disable-play-btn'>
                Disabled
              </button>
            ) : (
              <button type='button' className='play-btn'>
                Play Now
              </button>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
