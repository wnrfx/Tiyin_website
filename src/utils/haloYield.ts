import type { CSSProperties } from 'react';

export interface BrandItem {
  name: string;
  style: CSSProperties;
}

export const HERO_BRANDS: BrandItem[] = [
  {
    name: 'Click',
    style: {
      fontFamily: 'Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '15px',
    },
  },
  {
    name: 'Payme',
    style: {
      fontFamily: 'Arial, sans-serif',
      fontWeight: 900,
      letterSpacing: '0.08em',
      fontSize: '13px',
      textTransform: 'uppercase',
    },
  },
  {
    name: 'Uzum',
    style: {
      fontFamily: "'Trebuchet MS', sans-serif",
      fontWeight: 600,
      letterSpacing: '0.01em',
      fontSize: '15px',
      fontStyle: 'italic',
    },
  },
  {
    name: 'Click',
    style: {
      fontFamily: "'Courier New', monospace",
      fontWeight: 700,
      letterSpacing: '0.12em',
      fontSize: '13px',
      textTransform: 'uppercase',
    },
  },
  {
    name: 'Payme',
    style: {
      fontFamily: 'Palatino, "Book Antiqua", serif',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      fontSize: '16px',
    },
  },
  {
    name: 'Uzum',
    style: {
      fontFamily: 'Impact, "Arial Narrow", sans-serif',
      fontWeight: 400,
      letterSpacing: '0.04em',
      fontSize: '14px',
    },
  },
  {
    name: 'Click · Payme · Uzum',
    style: {
      fontFamily: 'Verdana, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      fontSize: '13px',
    },
  },
];

export const BACKER_BRANDS: BrandItem[] = [
  {
    name: 'Click',
    style: {
      fontFamily: "'Times New Roman', serif",
      fontWeight: 400,
      letterSpacing: '0.02em',
      fontSize: '14px',
    },
  },
  {
    name: 'Payme',
    style: {
      fontFamily: "'Arial Black', sans-serif",
      fontWeight: 900,
      letterSpacing: '0.08em',
      fontSize: '16px',
    },
  },
  {
    name: 'Uzum',
    style: {
      fontFamily: 'Impact, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.05em',
      fontSize: '18px',
    },
  },
  {
    name: 'Monix',
    style: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      fontSize: '15px',
      color: '#000000',
    },
  },
  {
    name: 'Tez',
    style: {
      fontFamily: 'Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '17px',
      color: '#000000',
    },
  },
  {
    name: 'Click',
    style: {
      fontFamily: 'Verdana, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.06em',
      fontSize: '14px',
      textTransform: 'uppercase',
    },
  },
  {
    name: 'Payme',
    style: {
      fontFamily: "'Courier New', monospace",
      fontWeight: 700,
      letterSpacing: '0.18em',
      fontSize: '14px',
    },
  },
  {
    name: 'Uzum',
    style: {
      fontFamily: 'Palatino, serif',
      fontWeight: 500,
      letterSpacing: '0.03em',
      fontSize: '15px',
    },
  },
  {
    name: 'Monix',
    style: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      fontSize: '15px',
      color: '#000000',
    },
  },
  {
    name: 'Tez',
    style: {
      fontFamily: 'Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '17px',
      color: '#000000',
    },
  },
];

export interface YieldProjection {
  principal: number;
  apyPercent: number;
  months: number;
  projectedBalance: number;
  totalYieldEarned: number;
  monthlyYieldAverage: number;
}

export function calculateHaloYield(
  principal: number,
  apyPercent: number = 5.4,
  months: number = 12
): YieldProjection {
  const safePrincipal = Math.max(0, Number.isFinite(principal) ? principal : 0);
  const safeApy = Math.max(0, Number.isFinite(apyPercent) ? apyPercent : 0);
  const safeMonths = Math.max(1, Math.round(Number.isFinite(months) ? months : 12));

  const monthlyRate = safeApy / 100 / 12;
  const projectedBalance = Number(
    (safePrincipal * Math.pow(1 + monthlyRate, safeMonths)).toFixed(2)
  );
  const totalYieldEarned = Number((projectedBalance - safePrincipal).toFixed(2));
  const monthlyYieldAverage = Number((totalYieldEarned / safeMonths).toFixed(2));

  return {
    principal: safePrincipal,
    apyPercent: safeApy,
    months: safeMonths,
    projectedBalance,
    totalYieldEarned,
    monthlyYieldAverage,
  };
}

export function duplicateTrack<T>(items: readonly T[]): T[] {
  return [...items, ...items];
}
