import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should have as title shikshaDaan-ui', () => {
    expect(fixture.title).toEqual('shikshaDaan-ui');
  });
});
