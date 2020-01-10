import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePushComponent } from './message-push.component';

describe('MessagePushComponent', () => {
  let component: MessagePushComponent;
  let fixture: ComponentFixture<MessagePushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagePushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
