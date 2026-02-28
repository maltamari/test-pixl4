'use client';

import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  id: number;
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

export function FAQItem({
  id,
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <div className="border-b border-gray-300 pb-6 transition-all duration-300">
      {/* Question */}
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-start justify-between gap-4 text-left group"
      >
        <div className="flex-1">
          <span className="text-gray-400 text-sm mb-2 block">
            ({String(index + 1).padStart(2, '0')})
          </span>
          <h3 className="text-2xl md:text-3xl font-medium text-black group-hover:text-gray-600 transition-colors">
            {question}
          </h3>
        </div>

        {/* Toggle Button */}
        <div className="shrink-0 mt-6">
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            {isOpen ? (
              <Minus className="w-6 h-6 text-white" strokeWidth={2} />
            ) : (
              <Plus className="w-6 h-6 text-white" strokeWidth={2} />
            )}
          </div>
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 text-lg leading-relaxed pl-0 md:pl-16">
          {answer}
        </p>
      </div>
    </div>
  );
}
