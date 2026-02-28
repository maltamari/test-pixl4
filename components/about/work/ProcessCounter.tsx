'use client';

interface ProcessCounterProps {
  count: string;
}

export function ProcessCounter({ count }: ProcessCounterProps) {
  return (
    <div className="text-7xl xl:text-[200px] font-bold mb-14 shrink-0">
      <span className="block transition-all font-black duration-300 text-gray-400">
        {count}
      </span>
    </div>
  );
}
