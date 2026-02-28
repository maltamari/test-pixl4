export interface Logo {
  id: number;
  front: React.ReactNode;
  back: React.ReactNode;
}

export const TRUSTED_BY_LOGOS: Logo[] = [
  {
    id: 1,
    front: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="font-bold text-2xl border-4 border-black px-4 py-2">
            <div className="flex items-center gap-1">
              <span className="text-3xl">✦</span>
              <span>ULTRA</span>
            </div>
            <div className="border-t-4 border-black mt-1 pt-1">
              <span>CLEAR</span>
            </div>
          </div>
        </div>
      </div>
    ),
    back: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center font-bold text-xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs">
              ✦
            </div>
            <span>JO Petrol</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    front: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="font-black text-4xl tracking-tighter transform -skew-x-6">
          <span className="inline-block border-4 border-black px-3 py-1">标识</span>
        </div>
      </div>
    ),
    back: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center font-bold text-xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold">
              iG
            </div>
            <span>
              INNOVATORS
              <br />
              GRID
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    front: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl">✚</div>
            <div>
              <div className="font-bold text-lg">Logo Ipsum</div>
              <div className="text-sm text-gray-500">Plus</div>
            </div>
          </div>
        </div>
      </div>
    ),
    back: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="border-2 border-black rounded-full px-6 py-2">
            <div className="font-bold text-lg">SAWA</div>
            <div className="text-sm font-semibold">MEDTEC</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    front: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="text-5xl">🐱</div>
        </div>
      </div>
    ),
    back: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center text-white font-bold">
            ⬡
          </div>
          <span className="font-bold text-lg">OFFICEMATE</span>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    front: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="font-bold text-3xl">
          <span className="inline-block transform">∞</span>
        </div>
      </div>
    ),
    back: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="font-bold text-sm text-gray-400 mb-1">MILLENNIUM</div>
          <div className="text-xs text-gray-400">BUSINESS SOLUTIONS</div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    front: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="text-4xl">◉</div>
          <div className="text-4xl">◎</div>
        </div>
      </div>
    ),
    back: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="text-3xl text-gray-400">🦷</div>
          <span className="font-bold text-lg text-gray-400">KDental</span>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    front: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="font-bold text-2xl border-4 border-black px-3 py-1 inline-block transform -skew-x-3">
            ◐
          </div>
        </div>
      </div>
    ),
    back: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center border-2 border-black rounded px-4 py-2">
          <div className="flex items-center gap-1 mb-1">
            <span>🌿</span>
            <span className="font-bold text-sm">ULTRA</span>
            <span>🌿</span>
          </div>
          <div className="text-xs font-semibold">BEST OF THE YEAR</div>
          <div className="text-xs">★★★★★</div>
          <div className="text-xs font-bold">WINNER</div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    front: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="font-bold text-lg">Logoipsum</div>
          <div className="font-bold text-lg">University</div>
          <div className="w-6 h-6 mx-auto mt-1 border-2 border-black flex items-center justify-center">
            <span className="text-xs">🛡</span>
          </div>
        </div>
      </div>
    ),
    back: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="font-black text-3xl tracking-tighter transform italic">
          <span>L.type</span>
        </div>
      </div>
    ),
  },
];

export const FLIP_ANIMATION_CONFIG = {
  FLIP_DURATION: 600,
  PAUSE_BETWEEN_FLIPS: 150,
  PAUSE_BETWEEN_CYCLES: 800,
} as const;

export const TRUSTED_BY_TITLE = 'TRUSTED BY';
