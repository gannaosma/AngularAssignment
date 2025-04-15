import { EgyptianIDDatePipe } from './egyptian-iddate.pipe';

describe('EgyptianIDDatePipe', () => {
  it('create an instance', () => {
    const pipe = new EgyptianIDDatePipe();
    expect(pipe).toBeTruthy();
  });
});
