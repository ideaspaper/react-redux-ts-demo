import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import CounterText from '../../components/CounterText';
import { decrementCounter, incrementCounter } from '../../store/actionCreators';
import { RootState } from '../../store/reducers';

const CounterPage: React.FC = () => {
  const { value } = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();

  const onClickHandler = (action: string) => {
    action === 'increment'
      ? dispatch(incrementCounter(1))
      : dispatch(decrementCounter(1));
  };
  return (
    <>
      <h1>Counter</h1>
      <div>
        <CounterText>{value}</CounterText>
        <Button onClickHandler={() => onClickHandler('increment')}>
          Increment
        </Button>
        <Button onClickHandler={() => onClickHandler('decrement')}>
          Decrement
        </Button>
      </div>
    </>
  );
};

export default CounterPage;
