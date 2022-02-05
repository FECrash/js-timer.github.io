import { getId } from '../utils/functions';
import { logAction } from '../utils/log';

// update 함수를 통했을 당시 값은 전달할 수 있지만, 그 전의 값은 가져오지 못한다.
const closure = () => {
  // 데이터를 저장할 변수
  const memory = {
    driver: { id: '0', name: '파랑' },
    navigators: [{ id: '0', name: '아벤' }],
    mode: 'light',
  };

  const subscribers = {};

  // 구조분해할당을 통해 변경된 state를 갱신한다.
  const addDriver = (state, { name }) => {
    state.driver = { ...state.driver, name, id: getId() };
    return state;
  };

  const addNavigator = (state, { name }) => {
    state.navigators.push({ name, id: getId() });
    return state;
  };

  const deleteDriver = state => {
    state.driver = {};
    return state;
  };

  const deleteNavigator = (state, { id }) => {
    state.navigators = state.navigators.filter(navigator => navigator.id !== id);
    return state;
  };

  const swapRole = (state, { driver, navigator }) => {
    state.driver = navigator;
    state.navigators = [...state.navigators.slice(1), driver];
    return state;
  };

  const changeMode = state => {
    state.mode = state.mode == 'light' ? 'dark' : 'light';
    return state;
  };

  return action => {
    // 내부 state가 freeze 되어 값 변경이 불가능해짐. 확인 방법은 Object.isFrozen(memory);
    // if (!action) return Object.freeze(memory);
    if (!action) return Object.freeze({ ...memory });
    let result = {
      type: action.type,
      subscribers: `[subscribers] ${action.key} ${Object.keys(subscribers).length}`,
    };
    switch (action.type) {
      case 'subscribe': {
        subscribers[action.key] = action.listener;
        break;
      }
      case 'publish': {
        subscribers[action.key](null, Object.freeze({ ...memory }));
        break;
      }
      case 'addDriver': {
        result = { ...result, state: addDriver(memory, action) };
        break;
      }
      case 'addNavigator': {
        result = { ...result, state: addNavigator(memory, action) };
        break;
      }
      case 'deleteDriver': {
        result = { ...result, state: deleteDriver(memory) };
        break;
      }
      case 'deleteNavigator': {
        result = { ...result, state: deleteNavigator(memory, action) };
        break;
      }
      case 'swapRole': {
        result = { ...result, state: swapRole(memory, action) };
        break;
      }
      case 'changeMode': {
        result = { ...result, state: changeMode(memory) };
        break;
      }
      default: {
        result = { ...result, state: memory };
        break;
      }
    }

    return logAction(result)['state'];
  };
};

export default closure();
