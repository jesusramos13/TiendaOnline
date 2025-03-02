import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMessageComponent } from './tab-message.component';

describe('TabMessageComponent', () => {
  let component: TabMessageComponent;
  let fixture: ComponentFixture<TabMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
