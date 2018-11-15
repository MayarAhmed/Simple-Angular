import { TestBed } from '@angular/core/testing';

import { ShopItemService } from './shop-item.service';

describe('ShopItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopItemService = TestBed.get(ShopItemService);
    expect(service).toBeTruthy();
  });
});
