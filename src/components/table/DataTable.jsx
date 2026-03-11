export default function DataTable({
  columns,
  data,
  dirtyIds = new Set(),
  rowKey = 'id',
  height,
  maxHeight = '70vh',
  width = '100%',
  scrollX = false,
  emptyText = 'No records found',
  loading = false,
  striped = true,
  hoverable = true,
  compact = false
}) {
  const cellPadding = compact ? 'px-4 py-2.5' : 'px-6 py-4';
  
  return (
    <div
      className="rounded-xl border overflow-hidden shadow-sm"
      style={{ 
        width,
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div
        className={`relative overflow-auto ${
          scrollX ? 'overflow-x-auto' : ''
        }`}
        style={{ maxHeight, height }}
      >
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-20" style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-border)' }}>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              {columns.map(col => (
                <th
                  key={col.key}
                  className={`${cellPadding} text-left font-semibold whitespace-nowrap`}
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    paddingTop: '1rem',
                    paddingBottom: '1rem'
                  }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center"
                  style={{ color: 'var(--color-text-tertiary)', backgroundColor: 'var(--color-gray-50)' }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-sm">Loading...</span>
                  </div>
                </td>
              </tr>
            )}

            {!loading && data.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center"
                  style={{ color: 'var(--color-text-quaternary)' }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-gray-100)' }}
                    >
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-text-quaternary)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                        No data available
                      </p>
                      <p className="text-xs" style={{ color: 'var(--color-text-quaternary)' }}>
                        {emptyText}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            )}

            {!loading && data.map((row, index) => {
              const isDirty = dirtyIds.has(row[rowKey]);
              const isEven = index % 2 === 0;

              return (
                <tr
                  key={row[rowKey]}
                  className="transition-colors duration-150"
                  style={{
                    borderBottom: '1px solid var(--color-border-light)',
                    backgroundColor: isDirty 
                      ? 'var(--color-primary-50)' 
                      : (striped && !isEven) 
                        ? 'var(--color-gray-50)' 
                        : 'var(--color-surface)'
                  }}
                  onMouseEnter={(e) => {
                    if (hoverable && !isDirty) {
                      e.currentTarget.style.backgroundColor = 'var(--color-blue-50)';
                      e.currentTarget.style.transform = 'scale(1.001)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (hoverable && !isDirty) {
                      e.currentTarget.style.backgroundColor = (striped && !isEven) 
                        ? 'var(--color-gray-50)' 
                        : 'var(--color-surface)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  {columns.map(col => (
                    <td
                      key={col.key}
                      className={`${cellPadding} align-middle`}
                      style={{ 
                        color: 'var(--color-text-primary)',
                        fontSize: 'var(--font-size-sm)',
                        paddingTop: '1rem',
                        paddingBottom: '1rem'
                      }}
                    >
                      {col.render ? (
                        col.render(row)
                      ) : (
                        <span className="block truncate" style={{ maxWidth: col.maxWidth || '300px' }}>
                          {row[col.key] ?? '—'}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}