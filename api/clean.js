exports.clean = inputString => {
  // Check if inputString is a string
  if (typeof inputString !== 'string') {
      throw new Error('Input is not a string');
  }

  // Continue with cleaning process
  const alphabet = inputString.replace(/[^A-Za-z']+/g, ' ').trim();
  const lowerCase = alphabet.toLowerCase();
  return lowerCase;
};