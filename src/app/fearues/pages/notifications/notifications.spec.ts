import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Notifications } from './notifications';
import { FriendshipService } from '../../../modules/amistades/friendship.service';
import { provideRouter } from '@angular/router';

describe('Notifications', () => {
  let component: Notifications;
  let fixture: ComponentFixture<Notifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notifications, HttpClientTestingModule],
      providers: [
        FriendshipService,
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notifications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
