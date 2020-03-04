import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingFielComponent } from './playing-fiel.component';

describe('PlayingFielComponent', () => {
  let component: PlayingFielComponent;
  let fixture: ComponentFixture<PlayingFielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingFielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingFielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
