import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { ChatDetail } from './chat-detail';

describe('ChatDetail', () => {
  let component: ChatDetail;
  let fixture: ComponentFixture<ChatDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatDetail, HttpClientTestingModule],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

