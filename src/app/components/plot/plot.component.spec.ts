import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlotComponent } from './plot.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlotComponent', () => {
  let component: PlotComponent;
  let fixture: ComponentFixture<PlotComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [PlotComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
