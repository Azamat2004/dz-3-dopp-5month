import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import './programmeform.css';

const ProgrammeForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTask(text);
      setText('');
    }
  };

  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Введите новую задачу"
      />
      <button className="button-85" role="button" type="submit">Добавить задачу</button>
    </form>
    </div>
  );
};

export default connect(null, { addTask })(ProgrammeForm);
