import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestCompanyComponent } from './ingest-company.component';

describe('IngestCompanyComponent', () => {
  let component: IngestCompanyComponent;
  let fixture: ComponentFixture<IngestCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngestCompanyComponent]
    });
    fixture = TestBed.createComponent(IngestCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
