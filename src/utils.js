export const makeSexyDate = seconds => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toUTCString();
};

export const stringToJSON = string => {
  try {
    return JSON.parse(string);
  } catch (e) {
    return null;
  }
};

export const parseMessage = message => {
  const { data } = message;
  const parsedMessage = stringToJSON(data);
  const { type } = parsedMessage;
  if (type === "BLOCKCHAIN_RESPONSE") {
    return parsedMessage.data;
  } else {
    return null;
  }
};
