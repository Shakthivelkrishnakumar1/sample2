import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestComponent } from './ingest.component';

describe('IngestComponent', () => {
  let component: IngestComponent;
  let fixture: ComponentFixture<IngestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngestComponent]
    });
    fixture = TestBed.createComponent(IngestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
