import { createElement, useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Calendar } from 'lucide-react';
import Card from '../common/Card';

export function Charts({ weeklySales = [], monthlySales = [] }) {
  const [activeChart, setActiveChart] = useState('weekly');
  const [dateRange, setDateRange] = useState('30d');

  const maxWeeklyAmount = Math.max(...weeklySales.map(item => item.amount), 1);
  const maxMonthlyAmount = Math.max(...monthlySales.map(item => item.amount), 1);

  // Calculate totals
  const weeklyTotal = weeklySales.reduce((sum, item) => sum + item.amount, 0);
  const monthlyTotal = monthlySales.reduce((sum, item) => sum + item.amount, 0);
  const monthlyAverage = Math.round(monthlyTotal / Math.max(monthlySales.length, 1));

  // Calculate growth rate
  const monthlyGrowth = monthlySales.length > 1
    ? ((monthlySales[monthlySales.length - 1].amount - monthlySales[0].amount) / monthlySales[0].amount) * 100
    : 0;

  const chartButtons = [
    { id: 'weekly', label: 'Weekly', icon: BarChart3 },
    { id: 'monthly', label: 'Monthly', icon: TrendingUp },
    { id: 'breakdown', label: 'Breakdown', icon: PieChart }
  ];

  return (
    <>
      {/* Charts Section Header */}
      <Card className="border-t-4" style={{ borderTopColor: 'var(--color-primary-500)' }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Analytics & Trends</h3>
            <p className="text-xs text-gray-600 mt-1">Sales performance and revenue insights</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="text-xs px-2 py-1 rounded border border-gray-200 text-gray-700"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
        </div>

        {/* Chart Type Buttons */}
        <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-4">
          {chartButtons.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveChart(id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
                activeChart === id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {createElement(Icon, { className: 'w-4 h-4' })}
              {label}
            </button>
          ))}
        </div>

        {/* Weekly Chart */}
        {activeChart === 'weekly' && (
          <div className="space-y-4">
            <div className="space-y-3">
              {weeklySales.map((item, index) => {
                const percentage = (item.amount / maxWeeklyAmount) * 100;
                return (
                  <div key={index} className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded transition-colors">
                    <div className="flex items-center space-x-3 flex-1">
                      <span className="text-sm font-semibold text-gray-700 w-12">{item.day}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 ml-3 w-20 text-right">
                      ${item.amount.toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 bg-blue-50 -mx-6 px-6 py-4 rounded-b-lg">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-600 font-semibold">Total Weekly</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    ${weeklyTotal.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold">Daily Average</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    ${Math.round(weeklyTotal / Math.max(weeklySales.length, 1)).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold">Peak Day</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">
                    ${Math.max(...weeklySales.map(item => item.amount), 0).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Monthly Chart */}
        {activeChart === 'monthly' && (
          <div className="space-y-4">
            <div className="space-y-3">
              {monthlySales.map((item, index) => {
                const percentage = (item.amount / maxMonthlyAmount) * 100;
                const prevAmount = index > 0 ? monthlySales[index - 1].amount : item.amount;
                const growth = ((item.amount - prevAmount) / prevAmount) * 100;
                const isPositive = growth >= 0;

                return (
                  <div key={index} className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded transition-colors">
                    <div className="flex items-center space-x-3 flex-1">
                      <span className="text-sm font-semibold text-gray-700 w-12">{item.month}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-green-500 to-green-600 h-2.5 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-3">
                      <span className="text-sm font-semibold text-gray-900 w-24 text-right">
                        ${item.amount.toLocaleString()}
                      </span>
                      {index > 0 && (
                        <span className={`text-xs font-semibold w-16 text-right ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {isPositive ? '+' : ''}{growth.toFixed(1)}%
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 bg-green-50 -mx-6 px-6 py-4 rounded-b-lg">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-600 font-semibold">Total Monthly</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    ${monthlyTotal.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold">Average Monthly</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    ${monthlyAverage.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold">Growth Rate</p>
                  <p className={`text-2xl font-bold mt-1 ${monthlyGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {monthlyGrowth >= 0 ? '+' : ''}{monthlyGrowth.toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Breakdown (Pie Chart simulation) */}
        {activeChart === 'breakdown' && (
          <div className="space-y-4">
            <div className="text-center py-8">
              <div className="inline-flex flex-col items-center">
                <p className="text-4xl font-bold text-gray-900">
                  ${weeklyTotal.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mt-2">Weekly Revenue Distribution</p>
              </div>
            </div>

            <div className="space-y-2">
              {weeklySales.map((item, index) => {
                const percentage = weeklyTotal > 0 ? (item.amount / weeklyTotal) * 100 : 0;
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `hsl(${index * 45}, 70%, 50%)` }} />
                      <span className="text-sm font-medium text-gray-700">{item.day}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{percentage.toFixed(1)}%</p>
                      <p className="text-xs text-gray-600">${item.amount.toLocaleString()}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Card>
    </>
  );
}

export default Charts;
