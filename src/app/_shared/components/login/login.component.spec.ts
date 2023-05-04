import 'zone.js';
import 'zone.js/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { LoginComponent } from './login.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
    })
      .compileComponents()
    
  });
  beforeEach(() => {
   fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
