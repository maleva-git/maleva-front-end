import React from 'react';
import { TrendingUp, DollarSign, FileText, PieChart } from 'lucide-react';
import { KPIOverview } from '../../components/dashboard/KPIOverview';
import Card from '../../components/common/Card';

/**
 * AccountsDashboard - Financial and accounting
 */
export function AccountsDashboard() {
  return (
    <div className="space-y-6" style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-6)' }}>
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Financial Overview
        </h1>
        <p className="text-sm font-medium text-gray-600">Revenue, expenses, and cash flow</p>
      </div>

      <KPIOverview
        metrics={[
          { title: 'Total Revenue', value: '$847,392', change: 28, subtitle: 'This month', color: 'green', icon: DollarSign, trendData: [620000, 680000, 740000, 780000, 810000, 830000, 847392] },
          { title: 'Total Expenses', value: '$524,200', change: 5, subtitle: 'This month', color: 'orange', icon: TrendingUp, trendData: [480000, 490000, 500000, 510000, 518000, 521000, 524200] },
          { title: 'Net Profit', value: '$323,192', change: 45, subtitle: 'This month', color: 'purple', icon: FileText, trendData: [140000, 190000, 240000, 270000, 292000, 309000, 323192] },
          { title: 'Pending Invoices', value: '23', change: -15, subtitle: 'Awaiting payment', color: 'red', icon: PieChart, trendData: [45, 42, 38, 33, 28, 25, 23] }
        ]}
      />

      <Card className="border-t-4" style={{ borderTopColor: 'var(--color-primary-500)' }}>
        <h3 className="text-lg font-semibold mb-4">Expense Breakdown</h3>
        <div className="space-y-3">
          {[
            { cat: 'Fuel & Transport', amt: '$156,200', pct: 30 },
            { cat: 'Salaries', amt: '$210,300', pct: 40 },
            { cat: 'Maintenance', amt: '$78,400', pct: 15 },
            { cat: 'Other', amt: '$79,300', pct: 15 }
          ].map((e, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <p className="text-sm font-semibold text-gray-700">{e.cat}</p>
                <span className="text-sm font-bold text-gray-900">{e.amt}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${e.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default AccountsDashboard;
