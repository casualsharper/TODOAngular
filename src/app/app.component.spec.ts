import { TestBed,ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
		FormsModule 
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
    beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should apply strikethrough class when checked', async(() => { 
	expect(fixture.debugElement.queryAll(By.css('.strikethrough')).length).toEqual(0);	
	const checkBox = fixture.nativeElement.querySelector('input[type="checkbox"]');	
	checkBox.click();	
	fixture.detectChanges();	
	expect(fixture.debugElement.queryAll(By.css('.strikethrough')).length).toEqual(1);
  }));
  it('should start with 1 entry, then increments by 1 when clicked, but ignore empty entries', async(() => {
    expect(fixture.componentInstance.taskList.length).toEqual(1);
    const addButton = fixture.nativeElement.querySelector('button');
    addButton.click();
    fixture.detectChanges();
	//do not allow empty todo task entry
	expect(fixture.componentInstance.taskList.length).toEqual(1);
	fixture.componentInstance.newTask = 'test entry';
	addButton.click();
	fixture.detectChanges();	
	expect(fixture.componentInstance.taskList.length).toEqual(2);	
  }));
});
