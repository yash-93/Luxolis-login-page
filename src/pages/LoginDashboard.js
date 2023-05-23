import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../components/formElements/Input';
import Button from '../components/formElements/Button';
import Brand from '../components/Brand';
import Overlay from '../components/Overlay';
import PopUpWindow from '../components/PopUpWindow';

import User from '../static/User.svg';
import Lock from '../static/Lock.svg';
import { MASTER_USERNAME, MASTER_PASSWORD, checkPasswordCombination } from '../utils'

const styles = {
  container: `
    w-screen
    h-screen
    flex
    flex-col
    justify-center
    items-center
    bg-luxolis-blue
    font-montserrat
    text-white
    bg-background-texture
    bg-no-repeat
    bg-cover
  `,
  forgotPassword: `
    font-medium
    text-base
    my-2
    text-right
  `,
  error: `
    w-full
    text-red-500
  `
};

export default function LoginDashboard() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectPasswordCombination, setIncorrectPasswordCombination] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!checkPasswordCombination(password))
      setIncorrectPasswordCombination(true);
    else if (username === MASTER_USERNAME && password === MASTER_PASSWORD) {
      navigate('/home');
    } else if (username === MASTER_USERNAME && password !== MASTER_PASSWORD) {
      setShowOverlay(true);
    } else {
      setIncorrectPasswordCombination(true);
    }
  }

  const handleInputChange = (e) => {
    setIncorrectPasswordCombination(false);
    if (e.target.name === 'username')
      setUsername(e.target.value);
    else setPassword(e.target.value);
  }

  return (
    <>
      {showOverlay &&
        <>
          <Overlay />
          <PopUpWindow setShowOverlay={setShowOverlay} />
        </>
      }
      <div
        className={styles.container}>
        <Brand />
        <form onSubmit={onSubmit}>
          <Input
            type='text'
            name='username'
            placeholder='username'
            value={username}
            handleChange={handleInputChange}>
            <img src={User} alt='User' />
          </Input>
          <Input
            type='password'
            name='password'
            placeholder='password'
            value={password}
            handleChange={handleInputChange}>
            <img src={Lock} alt='Lock' />
          </Input>
          {
            incorrectPasswordCombination && (
              <div className={styles.error}>
                Wrong combination
              </div>
            )
          }
          <Button type='submit' />
          <div
            className={styles.forgotPassword}>
            Forgot password?
          </div>
        </form>
      </div>
    </>
  )
}
