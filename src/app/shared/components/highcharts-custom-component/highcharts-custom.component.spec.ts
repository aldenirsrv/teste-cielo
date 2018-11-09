import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighchartsCustomComponent } from './highcharts.component';

describe('HighchartsCustomComponent', () => {
  let component: HighchartsCustomComponent;
  let fixture: ComponentFixture<HighchartsCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartsCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
