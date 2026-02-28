'use client';

interface TableHeader {
  label: string;
  colSpan: number;
  align?: 'left' | 'center' | 'right';
}

interface AwardsTableHeaderProps {
  headers: TableHeader[];
}

export function AwardsTableHeader({ headers }: AwardsTableHeaderProps) {
  const getAlignmentClass = (align?: 'left' | 'center' | 'right') => {
    switch (align) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  return (
    <div className="mb-6 mt-16 grid grid-cols-12 gap-4 border-b border-gray-300 pb-4 text-sm font-medium md:text-xl">
      {headers.map((header, index) => (
        <div
          key={index}
          className={`col-span-${header.colSpan} ${getAlignmentClass(header.align)}`}
        >
          {header.label}
        </div>
      ))}
    </div>
  );
}
