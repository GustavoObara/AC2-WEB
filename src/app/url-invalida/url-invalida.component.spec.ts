import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlInvalidaComponent } from './url-invalida.component';

describe('UrlInvalidaComponent', () => {
  let component: UrlInvalidaComponent;
  let fixture: ComponentFixture<UrlInvalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlInvalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlInvalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
