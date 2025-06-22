const STATE = 'BIRAJ_SANGHAI';
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const clearState = () => {
  try {
    localStorage.removeItem(STATE);
  } catch (err) {
    console.log(err);
  }
};
