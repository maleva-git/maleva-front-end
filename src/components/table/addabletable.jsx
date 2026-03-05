import { useMemo, useRef, useState } from "react";
import { Filter, FilterX, Plus, Search, Sparkles } from "lucide-react";
import AddressModal from "./AddressModal";
import StatusToggle from "./StatusToggle";

export default function AddnewitemTable({
  columns,
  tableName,
  data = [],
  maxHeight = "24rem",
}) {
  const getColumnLabel = (column) => column.header || column.label || column.key;

  const emptyRow = useMemo(
    () => Object.fromEntries(columns.map((column) => [column.key, ""])),
    [columns]
  );
  const [rows, setRows] = useState(() => [
    ...data.map((row) => ({ ...row })),
    { ...emptyRow },
  ]);

  const [filters, setFilters] = useState({});
  const [globalSearch, setGlobalSearch] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [error, setError] = useState("");
  const [addressModal, setAddressModal] = useState(null);

  const inputRefs = useRef({});

  const editableColumnIndexes = useMemo(
    () =>
      columns
        .map((column, index) => ({ column, index }))
        .filter(({ column }) => !column.render && column.type !== "status")
        .map(({ index }) => index),
    [columns]
  );

  const searchableColumns = useMemo(
    () =>
      columns.filter(
        (column) =>
          !column.render &&
          column.type !== "status" &&
          column.searchable !== false
      ),
    [columns]
  );

  const focusCell = (row, col) => {
    inputRefs.current[`${row}-${col}`]?.focus();
  };

  const handleChange = (rowIndex, key, value) => {
    setRows((prev) => {
      const updated = [...prev];
      updated[rowIndex] = { ...updated[rowIndex], [key]: value };
      return updated;
    });
    setError("");
  };

  const handleStatusToggle = (rowIndex, key) => {
    setRows((prev) => {
      const updated = [...prev];
      const currentValue = updated[rowIndex][key];
      updated[rowIndex] = {
        ...updated[rowIndex],
        [key]: currentValue === true || currentValue === "active" ? false : true,
      };
      return updated;
    });
  };

  const isFirstColumnValid = (rowIndex) => {
    const firstKey = columns[0].key;
    return String(rows[rowIndex][firstKey] ?? "").trim() !== "";
  };

  const addNewRow = (rowIndex) => {
    if (!isFirstColumnValid(rowIndex)) {
      setError(`${getColumnLabel(columns[0])} is required`);
      return;
    }

    console.log("INSERT / UPDATE", {
      tableName,
      data: rows[rowIndex],
    });

    setRows((prev) => [...prev, { ...emptyRow }]);

    setTimeout(() => {
      focusCell(rowIndex + 1, editableColumnIndexes[0]);
      document
        .querySelector(`[data-row-index="${rowIndex + 1}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleKeyDown = (e, rowIndex, colIndex, col) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    if (col.modalEdit) {
      setAddressModal({
        rowIndex,
        colKey: col.key,
        value: rows[rowIndex][col.key] || "",
      });
      return;
    }

    if (e.shiftKey && colIndex > 0) {
      focusCell(rowIndex, colIndex - 1);
      return;
    }

    const lastCol = editableColumnIndexes.at(-1);

    if (colIndex !== lastCol) {
      const nextCol =
        editableColumnIndexes[editableColumnIndexes.indexOf(colIndex) + 1];
      focusCell(rowIndex, nextCol);
    } else {
      rowIndex === rows.length - 1
        ? addNewRow(rowIndex)
        : focusCell(rowIndex + 1, editableColumnIndexes[0]);
    }
  };

  const hasActiveFilters =
    globalSearch.trim() !== "" ||
    Object.values(filters).some((value) => String(value || "").trim() !== "");

  const filteredRows = rows
    .map((row, originalIndex) => ({ row, originalIndex }))
    .filter(({ row }) => {
      const rowMatchesGlobal =
        globalSearch.trim() === "" ||
        searchableColumns.some((column) =>
          String(row[column.key] ?? "")
            .toLowerCase()
            .includes(globalSearch.toLowerCase().trim())
        );

      if (!rowMatchesGlobal) return false;

      return columns.every((column) => {
        const filterValue = String(filters[column.key] ?? "").toLowerCase().trim();
        if (!filterValue) return true;
        return String(row[column.key] ?? "").toLowerCase().includes(filterValue);
      });
    });

  const savedRowsCount = Math.max(rows.length - 1, 0);
  const tableTitle = tableName
    ? `${tableName.charAt(0).toUpperCase()}${tableName.slice(1)} Table`
    : "Data Table";
  const visibleRowsCount = Math.min(filteredRows.length, savedRowsCount);

  const clearFilters = () => {
    setGlobalSearch("");
    setFilters({});
  };

  return (
    <>
      <div
        className="rounded-2xl border overflow-hidden animate-fade-in"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <div
          className="px-4 sm:px-6 py-4 border-b"
          style={{
            borderColor: "var(--color-border-light)",
            background:
              "linear-gradient(135deg, var(--color-primary-50), var(--color-surface))",
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3">
              <div
                className="h-10 w-10 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700))",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3
                  className="text-base sm:text-lg font-bold tracking-tight"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {tableTitle}
                </h3>
                <p
                  className="text-xs sm:text-sm"
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  {visibleRowsCount} of {savedRowsCount} rows visible
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowFilters((prev) => !prev)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: showFilters
                    ? "var(--color-primary-100)"
                    : "var(--color-surface)",
                  color: showFilters
                    ? "var(--color-primary-700)"
                    : "var(--color-text-secondary)",
                }}
              >
                {showFilters ? (
                  <FilterX className="w-4 h-4" />
                ) : (
                  <Filter className="w-4 h-4" />
                )}
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>
              <button
                type="button"
                onClick={() => addNewRow(rows.length - 1)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white transition-all hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700))",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Plus className="w-4 h-4" />
                Save & New Row
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: "var(--color-text-quaternary)" }}
              />
              <input
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                placeholder="Search across all columns..."
                className="w-full pl-10 pr-3 py-2 text-sm rounded-lg border transition-all focus:outline-none"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-text-primary)",
                }}
              />
            </div>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium"
                style={{
                  backgroundColor: "var(--color-warning-50)",
                  color: "var(--color-warning-700)",
                }}
              >
                <FilterX className="w-4 h-4" />
                Clear Filters
              </button>
            )}
          </div>
        </div>

        <div className="relative overflow-auto" style={{ maxHeight }}>
          <table className="w-full min-w-full">
            <thead
              className="sticky top-0 z-20 border-b"
              style={{
                backgroundColor: "var(--color-gray-50)",
                borderColor: "var(--color-border)",
              }}
            >
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    style={{ width: col.width, minWidth: col.width }}
                    className="px-4 py-3 text-left"
                  >
                    <span
                      className="text-[11px] font-semibold tracking-wide uppercase"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {getColumnLabel(col)}
                    </span>
                  </th>
                ))}
              </tr>

              {showFilters && (
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      style={{ width: col.width, minWidth: col.width }}
                      className="px-4 py-2"
                    >
                      {!col.render &&
                      col.type !== "status" &&
                      col.searchable !== false ? (
                        <div className="relative">
                          <Search
                            className="absolute left-2.5 top-2.5 h-3.5 w-3.5"
                            style={{ color: "var(--color-text-quaternary)" }}
                          />
                          <input
                            value={filters[col.key] || ""}
                            onChange={(e) =>
                              setFilters((prev) => ({
                                ...prev,
                                [col.key]: e.target.value,
                              }))
                            }
                            placeholder={`Filter ${getColumnLabel(col)}`}
                            className="w-full pl-8 pr-3 py-1.5 text-xs border rounded-md focus:outline-none"
                            style={{
                              backgroundColor: "var(--color-surface)",
                              borderColor: "var(--color-border)",
                              color: "var(--color-text-primary)",
                            }}
                          />
                        </div>
                      ) : (
                        <div className="h-8" />
                      )}
                    </th>
                  ))}
                </tr>
              )}
            </thead>

            <tbody
              className="divide-y"
              style={{ borderColor: "var(--color-border-light)" }}
            >
              {filteredRows.length === 0 && (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Search
                        className="w-7 h-7"
                        style={{ color: "var(--color-text-quaternary)" }}
                      />
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        No rows found
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-tertiary)" }}
                      >
                        Try changing filters or add a new row.
                      </p>
                    </div>
                  </td>
                </tr>
              )}

              {filteredRows.map(({ row, originalIndex }) => {
                const isDraftRow = originalIndex === rows.length - 1;
                return (
                  <tr
                    key={originalIndex}
                    data-row-index={originalIndex}
                    className={`transition-colors focus-within:bg-blue-50/70 hover:bg-blue-50/40 ${
                      isDraftRow ? "bg-amber-50/40" : "odd:bg-white even:bg-slate-50/50"
                    }`}
                  >
                    {columns.map((col, colIndex) => (
                      <td
                        key={col.key}
                        style={{ width: col.width, minWidth: col.width }}
                        className="px-4 py-2"
                      >
                        {col.render ? (
                          col.render(row, originalIndex)
                        ) : col.type === "status" ? (
                          <div className="flex justify-center">
                            <StatusToggle
                              checked={
                                row[col.key] === true || row[col.key] === "active"
                              }
                              onChange={() =>
                                handleStatusToggle(originalIndex, col.key)
                              }
                              size="sm"
                            />
                          </div>
                        ) : (
                          <input
                            ref={(el) =>
                              (inputRefs.current[`${originalIndex}-${colIndex}`] = el)
                            }
                            value={row[col.key] || ""}
                            onChange={(e) =>
                              handleChange(originalIndex, col.key, e.target.value)
                            }
                            onKeyDown={(e) =>
                              handleKeyDown(e, originalIndex, colIndex, col)
                            }
                            placeholder={getColumnLabel(col)}
                            className="w-full text-xs px-2.5 py-1.5 rounded-md border border-transparent focus:outline-none transition-all"
                            style={{
                              backgroundColor: "transparent",
                              color: "var(--color-text-primary)",
                            }}
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {error && (
          <div
            className="px-4 py-3 border-t"
            style={{
              borderColor: "var(--color-danger-50)",
              backgroundColor: "var(--color-danger-50)",
            }}
          >
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: "var(--color-danger-700)" }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--color-danger-500)" }}
              />
              {error}
            </div>
          </div>
        )}

        <div
          className="px-4 sm:px-6 py-2 border-t text-[11px] sm:text-xs flex flex-wrap items-center gap-1.5"
          style={{
            borderColor: "var(--color-border-light)",
            color: "var(--color-text-tertiary)",
            backgroundColor: "var(--color-gray-50)",
          }}
        >
          <span className="font-semibold">Tip:</span>
          <span>Press Enter for next cell.</span>
          <span>Use Shift + Enter to move back.</span>
        </div>
      </div>

      {addressModal && (
        <AddressModal
          value={addressModal.value}
          onClose={() => setAddressModal(null)}
          onSave={(newValue) => {
            setRows((prev) => {
              const updated = [...prev];
              updated[addressModal.rowIndex][addressModal.colKey] = newValue;
              return updated;
            });
            setAddressModal(null);
          }}
        />
      )}
    </>
  );
}
