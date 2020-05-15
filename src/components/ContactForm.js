import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: 'onBlur'
  });
  const onSubmit = (data) => {
    setData(data);
    axios
      .post('https://reqres.in/api/messages', data)
      .then((response) => console.log(response.data));
  };

  return (
    <div className='App'>
      <form data-testid='form' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='firstName'>First Name*</label>
          <input
            name='firstName'
            placeholder='Edd'
            ref={register({ required: true })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor='lastName'>Last Name*</label>
          <input
            name='lastName'
            placeholder='Burke'
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor='email'>Email*</label>
          <input
            name='email'
            placeholder='bluebill1049@hotmail.com'
            ref={register({ required: true })}
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            placeholder='Enter message here'
            ref={register({ required: false })}
          />
        </div>
        {data && (
          <pre data-testid='data' style={{ textAlign: 'left', color: 'white' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input data-testid='submit' type='submit' />
      </form>
    </div>
  );
};

export default ContactForm;
