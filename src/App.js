
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Input from './components/Input';
import Todos from './components/Todos';
import { getData } from './redux/actions/fetchAction';

function App() {
  const { state } = useSelector(state => state.fetch)
  console.log(state);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  })
  return (
    <div>
      {state?.map(s => {
        <h4>{s.companyName}</h4>
      })}
      {/* <Input />
      <Todos /> */}
    </div>
  );
}

export default App;
