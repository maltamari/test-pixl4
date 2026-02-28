'use client';

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-center text-sm font-semibold tracking-wider text-gray-600 uppercase mb-12">
      {title}
    </h2>
  );
}
