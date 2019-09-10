const throwError = (msg = 'Error', err = { error: 'Something went wrong' }, code = 500) => {
  const error = new Error(msg);
  error.data = err;
  error.code = code;
  throw error;
};

export default throwError;
