import { TestBed } from '@angular/core/testing';

import { MenuperfilService } from './menuperfil.service';

describe('MenuperfilService', () => {
  let service: MenuperfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuperfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
