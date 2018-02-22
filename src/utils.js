export const makeSexyDate = seconds => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toUTCString();
};
