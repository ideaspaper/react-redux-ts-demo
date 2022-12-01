import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonWrapper from '../../components/Button';
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
        <ButtonWrapper onClickHandler={() => onClickHandler('increment')}>
          Increment
        </ButtonWrapper>
        <ButtonWrapper onClickHandler={() => onClickHandler('decrement')}>
          Decrement
        </ButtonWrapper>
      </div>
    </>
  );
};

export default CounterPage;
