import some from './some';

export default function* map(f, ...colls) {
  const iters = colls.map(coll => coll[Symbol.iterator]());

  for (;;) {
    const nexts = iters.map(iter => iter.next());
    if (nexts.some(next => next.done)) {
      break;
    }

    yield(f(...nexts.map(next => next.value)));
  }
}
