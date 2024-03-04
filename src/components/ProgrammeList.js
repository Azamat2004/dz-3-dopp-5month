import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTask } from '../actions';
import './programmelist.css';

const ProgrammeList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <div className='ul'>
    <p>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {task.text}
          <button className="button-4" role="button" onClick={() => deleteTask(task.id)}>Удалить</button>
        </li>
      ))}
    </p>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { deleteTask, toggleTask })(ProgrammeList);
