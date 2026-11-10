import test from 'node:test';
import assert from 'node:assert/strict';
import {
  HERO_BRANDS,
  BACKER_BRANDS,
  calculateHaloYield,
  duplicateTrack,
} from './haloYield.ts';

test('HERO_BRANDS contains supported payment rails Click, Payme, Uzum', () => {
  assert.equal(HERO_BRANDS.length, 7);
  assert.equal(HERO_BRANDS[0].name, 'Click');
  assert.equal(HERO_BRANDS[1].name, 'Payme');
  assert.equal(HERO_BRANDS[2].name, 'Uzum');
});

test('BACKER_BRANDS contains supported payment rails Click, Payme, Uzum, Monix, Tez', () => {
  assert.equal(BACKER_BRANDS.length, 10);
  assert.equal(BACKER_BRANDS[0].name, 'Click');
  assert.equal(BACKER_BRANDS[1].name, 'Payme');
  assert.equal(BACKER_BRANDS[2].name, 'Uzum');
  assert.equal(BACKER_BRANDS[3].name, 'Monix');
  assert.equal(BACKER_BRANDS[4].name, 'Tez');
});

test('duplicateTrack doubles brand lists for seamless marquee looping', () => {
  const doubledHero = duplicateTrack(HERO_BRANDS);
  assert.equal(doubledHero.length, 14);
  assert.equal(doubledHero[0].name, 'Click');
  assert.equal(doubledHero[7].name, 'Click');

  const doubledBackers = duplicateTrack(BACKER_BRANDS);
  assert.equal(doubledBackers.length, 20);
  assert.equal(doubledBackers[0].name, 'Click');
  assert.equal(doubledBackers[10].name, 'Click');
});

test('calculateHaloYield computes savings goal projections accurately', () => {
  const result = calculateHaloYield(10000, 5.4, 12);
  assert.equal(result.principal, 10000);
  assert.ok(result.totalYieldEarned > 550 && result.totalYieldEarned < 560);
  assert.equal(
    Number((result.principal + result.totalYieldEarned).toFixed(2)),
    result.projectedBalance
  );
});
