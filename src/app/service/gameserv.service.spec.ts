import { TestBed } from '@angular/core/testing';

import { GameservService } from './gameserv.service';

describe('GameservService', () => {
  let service: GameservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
