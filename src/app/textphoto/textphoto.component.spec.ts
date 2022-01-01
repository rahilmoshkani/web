import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextphotoComponent } from './textphoto.component';

describe('TextphotoComponent', () => {
  let component: TextphotoComponent;
  let fixture: ComponentFixture<TextphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextphotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
