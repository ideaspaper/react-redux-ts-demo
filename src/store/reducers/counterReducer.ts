import { ICounterAction } from '../actionCreators';
import { CounterActionType } from '../actionTypes';

interface ICounterState {
  value: number;
}

export default function counterReducer(
  state: ICounterState = {
    value: 0,
  },
  action: ICounterAction,
): ICounterState {
  switch (action.type) {
    case CounterActionType.COUNTER_INCREMENT:
      return { value: state.value + action.payload };
    case CounterActionType.COUNTER_DECREMENT:
      return { value: state.value - action.payload };
    default:
      return state;
  }
}
