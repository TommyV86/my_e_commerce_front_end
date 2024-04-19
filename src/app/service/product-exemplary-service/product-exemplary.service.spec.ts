import { TestBed } from '@angular/core/testing';

import { ProductExemplaryService } from './product-exemplary.service';

describe('ProductExemplaryService', () => {
  let service: ProductExemplaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductExemplaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
