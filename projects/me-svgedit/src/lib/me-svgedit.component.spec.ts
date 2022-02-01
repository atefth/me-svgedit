import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeSvgeditComponent } from './me-svgedit.component';

describe('MeSvgeditComponent', () => {
  let component: MeSvgeditComponent;
  let fixture: ComponentFixture<MeSvgeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeSvgeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeSvgeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
