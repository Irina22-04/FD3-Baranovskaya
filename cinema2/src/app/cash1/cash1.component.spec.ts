import { TestBed, async } from '@angular/core/testing';
import { HallComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HallComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HallComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cinema'`, () => {
    const fixture = TestBed.createComponent(HallComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cinema');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HallComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('cinema app is running!');
  });
});
