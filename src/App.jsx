import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import programmeReducer from './reducers';
import ProgrammeList from './components/ProgrammeList';
import ProgrammeForm from './components/ProgrammeForm';
import './App.css';


const store = createStore(programmeReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Список программ</h1>
        <ProgrammeForm />
        <ProgrammeList />
      </div>
    </Provider>
  );
};

export default App;
