import assert from 'assert';
import {everyPred} from '../src';

describe('test everyPred', () => {
  it('true case', () => {
    assert.equal(everyPred(x => x % 2 == 0, x => x % 3 == 0)(6), true);
  });

  it('false case', () => {
    assert.equal(everyPred(x => x % 2 == 0, x => x % 3 == 0)(8), false);
  });
});
