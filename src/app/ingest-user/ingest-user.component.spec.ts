import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestUserComponent } from './ingest-user.component';

describe('IngestUserComponent', () => {
  let component: IngestUserComponent;
  let fixture: ComponentFixture<IngestUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngestUserComponent]
    });
    fixture = TestBed.createComponent(IngestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
