import React, { useMemo, useState } from "react";
import { Search, Filter, X, ChevronDown } from "lucide-react";

export default function SearchableDatatable({
  columns = [],
  data = [],
  title = "Data Table",
  height = "600px",
  loading = false
}) {
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [globalSearch, setGlobalSearch] = useState("");

  const pinnedColumns = useMemo(
    () =>
      columns
        .filter(c => c.pinned)
        .sort((a, b) => (a.pinOrder ?? 0) - (b.pinOrder ?? 0)),
    [columns]
  );

  const pinnedLeftOffsets = useMemo(() => {
    const map = {};
    let left = 0;
    pinnedColumns.forEach(c => {
      map[c.key] = left;
      left += Number(c.width) || 150;
    });
    return map;
  }, [pinnedColumns]);

  const filteredData = useMemo(() => {
    return data.filter(row => {
      if (globalSearch) {
        const searchMatch = columns.some(col => {
          const value = col.render ? String(row[col.key] ?? "") : String(row[col.key] ?? "");
          return value.toLowerCase().includes(globalSearch.toLowerCase());
        });
        if (!searchMatch) return false;
      }

      return columns.every(col => {
        const v = filters[col.key];
        if (!v) return true;
        const value = String(row[col.key] ?? "");
        return value.toLowerCase().includes(v.toLowerCase());
      });
    });
  }, [data, filters, columns, globalSearch]);

  const clearAllFilters = () => {
    setFilters({});
    setGlobalSearch("");
  };

  const hasActiveFilters = globalSearch || Object.values(filters).some(v => v);

  return (
    <div 
      className="rounded-xl border overflow-hidden shadow-sm"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div 
        className="px-6 py-5 border-b"
        style={{ 
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 
              className="text-lg font-bold tracking-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {title}
            </h2>
            <div className="flex items-center gap-2">
              <span 
                className="text-sm"
                style={{ color: 'var(--color-text-tertiary)' }}
              >
                {filteredData.length} of {data.length} records
              </span>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-sm"
                  style={{
                    backgroundColor: 'var(--color-warning-100)',
                    color: 'var(--color-warning-700)'
                  }}
                >
                  <X className="w-3.5 h-3.5" />
                  Clear filters
                </button>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
                style={{ color: 'var(--color-text-quaternary)' }}
              />
              <input
                type="text"
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                placeholder="Search all columns..."
                className="pl-10 pr-4 py-2.5 w-72 text-sm border rounded-xl transition-all duration-200 focus:outline-none shadow-sm"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-primary)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-primary-500)';
                  e.target.style.boxShadow = '0 0 0 3px var(--color-focus-ring), 0 1px 3px rgba(0,0,0,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-border)';
                  e.target.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
                }}
              />
            </div>
            
            <button
              onClick={() => setShowFilters(v => !v)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 shadow-sm`}
              style={{
                backgroundColor: showFilters ? 'var(--color-primary-600)' : 'var(--color-surface)',
                color: showFilters ? '#ffffff' : 'var(--color-text-secondary)',
                border: `1px solid ${showFilters ? 'var(--color-primary-600)' : 'var(--color-border)'}`
              }}
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                showFilters ? 'rotate-180' : ''
              }`} />
            </button>
          </div>
        </div>
      </div>

      <div 
        className="overflow-auto"
        style={{ height, maxHeight: height }}
      >
        <table className="w-full border-collapse">
          <thead 
            className="sticky top-0 z-20"
            style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-border)' }}
          >
            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
              {columns.map(col => (
                <th
                  key={col.key}
                  className={`px-6 py-4 text-left font-semibold whitespace-nowrap ${
                    col.pinned ? "sticky z-30 shadow-[4px_0_8px_rgba(0,0,0,0.06)]" : ""
                  }`}
                  style={{
                    width: col.width,
                    left: col.pinned ? pinnedLeftOffsets[col.key] : undefined,
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backgroundColor: 'var(--color-gray-50)',
                    paddingTop: '1rem',
                    paddingBottom: '1rem'
                  }}
                >
                  {col.header}
                </th>
              ))}
            </tr>

            {showFilters && (
              <tr>
                {columns.map(col => (
                  <th
                    key={col.key}
                    className={`px-4 py-3 ${
                      col.pinned ? "sticky z-20 shadow-[4px_0_8px_rgba(0,0,0,0.06)]" : ""
                    }`}
                    style={{
                      width: col.width,
                      left: col.pinned ? pinnedLeftOffsets[col.key] : undefined,
                      backgroundColor: 'var(--color-gray-50)',
                      borderBottom: '1px solid var(--color-border)'
                    }}
                  >
                    {col.key !== 'actions' && (
                      <input
                        value={filters[col.key] || ""}
                        onChange={e =>
                          setFilters(prev => ({
                            ...prev,
                            [col.key]: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg border px-3 py-2 text-xs transition-all duration-200 focus:outline-none shadow-sm"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-text-primary)'
                        }}
                        placeholder={`Filter...`}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--color-primary-500)';
                          e.target.style.boxShadow = '0 0 0 2px var(--color-focus-ring)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'var(--color-border)';
                          e.target.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
                        }}
                      />
                    )}
                  </th>
                ))}
              </tr>
            )}
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-16 text-center"
                  style={{ color: 'var(--color-text-tertiary)' }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="font-medium">Loading data...</span>
                  </div>
                </td>
              </tr>
            )}

            {!loading && filteredData.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-16 text-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-gray-100)' }}
                    >
                      <Search className="w-8 h-8" style={{ color: 'var(--color-text-quaternary)' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-base mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                        No records found
                      </p>
                      <p className="text-sm" style={{ color: 'var(--color-text-quaternary)' }}>
                        {hasActiveFilters ? 'Try adjusting your search or filters' : 'No data available'}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            )}

            {!loading && filteredData.map((row, i) => (
              <tr
                key={row.id ?? i}
                className="transition-all duration-200"
                style={{
                  borderBottom: '1px solid var(--color-border-light)',
                  backgroundColor: i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-gray-50)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#eff6ff';
                  e.currentTarget.style.transform = 'scale(1.001)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-gray-50)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {columns.map(col => (
                  <td
                    key={col.key}
                    className={`px-6 py-4 align-middle ${
                      col.pinned ? "sticky z-10 shadow-[4px_0_8px_rgba(0,0,0,0.04)]" : ""
                    }`}
                    style={{
                      width: col.width,
                      left: col.pinned ? pinnedLeftOffsets[col.key] : undefined,
                      color: 'var(--color-text-primary)',
                      fontSize: 'var(--font-size-sm)',
                      backgroundColor: col.pinned ? (i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-gray-50)') : 'inherit',
                      paddingTop: '1rem',
                      paddingBottom: '1rem'
                    }}
                  >
                    {col.render
                      ? col.render(row)
                      : <span className="block truncate" style={{ maxWidth: col.maxWidth || '200px' }}>{row[col.key] ?? "—"}</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}