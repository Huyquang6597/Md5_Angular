import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeEeditorComponent } from './font-size-eeditor.component';

describe('FontSizeEeditorComponent', () => {
  let component: FontSizeEeditorComponent;
  let fixture: ComponentFixture<FontSizeEeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSizeEeditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSizeEeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
