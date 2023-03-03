import 'mocha';
import { assert, expect } from 'chai';
import { generatePassword } from '../src';
import npmPackage from '../src';

describe('NPM Package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a generatePassword property', () => {
    assert.property(npmPackage, 'generatePassword');
  });
});

describe('generatePassword Function', () => {
  it('should be a function', () => {
    assert.isFunction(generatePassword);
  });

  const pregenerated = generatePassword();

  it('has lowercase letter', () => {
    expect(pregenerated).to.match(/[a-z]/);
  });

  it('has uppercase letter', () => {
    expect(pregenerated).to.match(/[A-Z]/);
  });

  it('has number', () => {
    expect(pregenerated).to.match(/[0-9]/);
  });

  it('has symbol', () => {
    expect(pregenerated).to.match(/[!|@|#|\$|%|&]/);
  });

  it('set custom length', () => {
    const length = Math.floor(Math.random() * 100);
    const password = generatePassword({
      length,
    });
    expect(password.length).equal(length);
  });

  it('set custom symbols', () => {
    const password = generatePassword({
      allowedSymbols: '!'
    });
  });
});