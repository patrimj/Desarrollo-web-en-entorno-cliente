import { HolaPipe } from './hola.pipe';

describe('HolaPipe', () => {
  it('create an instance', () => {
    const pipe = new HolaPipe();
    expect(pipe).toBeTruthy();
  });
});
