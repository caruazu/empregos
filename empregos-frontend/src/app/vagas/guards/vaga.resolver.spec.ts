import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { VagaResolver } from './vaga.resolver';

describe('VagaResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => VagaResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
