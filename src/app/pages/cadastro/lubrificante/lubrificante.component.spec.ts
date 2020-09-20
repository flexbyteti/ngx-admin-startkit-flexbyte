import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LubrificanteComponent } from './lubrificante.component';

describe('LubrificanteComponent', () => {
  let component: LubrificanteComponent;
  let fixture: ComponentFixture<LubrificanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LubrificanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LubrificanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
