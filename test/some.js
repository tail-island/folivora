import assert from 'assert';
import {range, some} from '../src';

describe('test some', () => {
  it('some returns true', () => {
    assert.equal(some(x => x % 2 == 1, range(4)), true);
  });

  it('some returns value', () => {
    assert.equal(some(x => x % 2 == 1 ? x : false, range(4)), 1);
  });

  it('some returns undefined', () => {
    assert.equal(some(x => x > 3, range(4)), false);
  });
});
