type GeneratePassword = {
  allowedSymbols?: string,
  length?: number,
};

export function generatePassword(props: GeneratePassword = {}) {
  const defaultLength = 8;
  const {
    allowedSymbols = '!@#$%&',
    length = defaultLength,
  } = props;
  let generatedPassword = '';
  const defaultInclude = [
    getRandomNumber,
    getRandomLower,
    getRandomUpper,
    getRandomSymbol.bind({allowedSymbols}),
  ];
  let toInclude = [...defaultInclude];
  for (let i = 0; i < length; i++) {
    if (toInclude.length) {
      const random = Math.floor(Math.random() * toInclude.length);
      generatedPassword += toInclude[random]();
      toInclude.splice(random, 1);
    }
    if (!toInclude.length) {
      toInclude = [...defaultInclude];
      i--;
    }
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

export function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

export function getRandomUpper() {
  return (getRandomLower()).toUpperCase();
}

export function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

type GetRandomSymbolThis = {
  allowedSymbols?: string,
};

export function getRandomSymbol(this: GetRandomSymbolThis, allowedSymbolsProps: string = '') {
  const {
    allowedSymbols = '',
  } = this;
  const symbols = allowedSymbolsProps || allowedSymbols;
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// function random(max: number) {
//   return Math.floor(Math.random() * max);
// }

export default {
  generatePassword,
  getRandomLowerLetter: getRandomLower,
  getRandomUpperLetter: getRandomUpper,
  getRandomNumber,
  getRandomSymbol,
}
