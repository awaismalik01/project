export const initialTimes = () => fetchAPI(new Date());

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIME": {
      return fetchAPI(action.date);
    }
    default:
      return state;
  }
};

export const fetchAPI = (date) => {
  const result = [];
  const random = date?.getUTCDate() / 31;

  for (let i = 17; i <= 23; i++) {
    if (random < 0.5 || random >= 0.8) {
      result.push(i + ":00");
    }
    if (random > 0.3 && random <= 0.8) {
      result.push(i + ":30");
    }
  }
  return result;
};

export const submitApi = (formData) => {
  if (!!formData) return true;
  else return false;
};
