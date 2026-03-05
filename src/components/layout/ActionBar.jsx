export default function ActionBar({
    children,
    align = 'right',   // 'left' | 'center' | 'right'
    sticky = false
  }) {
    const alignmentClasses = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end'
    };
  
    return (
      <div
        className={`
          bg-white
          border-t border-gray-200
          px-6 py-3
          flex items-center
          ${alignmentClasses[align]}
          ${sticky ? 'sticky bottom-0 z-10' : ''}
        `}
      >
        <div className="flex gap-3">
          {children}
        </div>
      </div>
    );
  }

  