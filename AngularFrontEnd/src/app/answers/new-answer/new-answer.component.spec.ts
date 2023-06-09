import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnswerComponent } from './new-answer.component';

describe('NewAnswerComponent', () => {
  let component: NewAnswerComponent;
  let fixture: ComponentFixture<NewAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
