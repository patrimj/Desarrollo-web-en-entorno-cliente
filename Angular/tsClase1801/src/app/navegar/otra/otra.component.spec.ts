import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtraComponent } from './otra.component';

describe('OtraComponent', () => {
  let component: OtraComponent;
  let fixture: ComponentFixture<OtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
