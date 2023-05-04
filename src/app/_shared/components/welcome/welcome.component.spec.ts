import 'zone.js';
import 'zone.js/testing';
import { WelcomeComponent } from './welcome.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
    
    })
      .compileComponents()
    
  });
  beforeEach(() => {
   fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  

});
