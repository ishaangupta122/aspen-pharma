type ProductRow = {
  category: string;
  molecules: string;
  brand: string;
  positioning: string;
};

type ProductTableProps = {
  rows: ProductRow[];
};

export function ProductTable({ rows }: ProductTableProps) {
  return (
    <div className="overflow-hidden rounded-sm border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead className="bg-[#0B3C6D] text-white">
            <tr>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em]">
                Molecule Category
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em]">
                Representative Molecules
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em]">
                Brand Highlights
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em]">
                Scientific Positioning
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={`${row.category}-${row.brand}`} className="align-top">
                <td className="px-5 py-5 text-sm font-semibold text-[#0B3C6D]">
                  {row.category}
                </td>
                <td className="px-5 py-5 text-sm leading-7 text-slate-600">{row.molecules}</td>
                <td className="px-5 py-5 text-sm leading-7 text-slate-600">{row.brand}</td>
                <td className="px-5 py-5 text-sm leading-7 text-slate-600">{row.positioning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
