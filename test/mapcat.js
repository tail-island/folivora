import assert from 'assert';
import {mapcat, range} from '../src';

describe('test mapcat', () => {
  it('one coll', () => {
    const iter = mapcat(x => [x, x], range(3));

    console.log(iter);

    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 2);
    assert.equal(iter.next().value, 2);

    assert(iter.next().done);
  });

  // it('colls', () => {
  //   const iter = map((x, y) => x * y, range(), range(1, 4));

  //   assert.equal(iter.next().value, 0);
  //   assert.equal(iter.next().value, 2);
  //   assert.equal(iter.next().value, 6);

  //   assert(iter.next().done);
  // });
});
