exports.terminator = (event, context, callback) => {
  const err = new Error('Terminator');

  console.error('***** TERMINATOR *****');

  console.error(JSON.stringify({
    event,
    stack: err.stack.split('\n'),
  }));

  process.exit(1);
};
