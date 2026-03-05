import React from 'react';
import { Box, TrendingUp, AlertCircle, Zap } from 'lucide-react';
import { KPIOverview } from '../../components/dashboard/KPIOverview';
import Card from '../../components/common/Card';

/**
 * WarehouseDashboard - Inventory and warehouse management
 */
export function WarehouseDashboard() {
  return (
    <div className="space-y-6" style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-6)' }}>
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Warehouse Management
        </h1>
        <p className="text-sm font-medium text-gray-600">
          Inventory levels and warehouse operations
        </p>
      </div>

      <KPIOverview
        metrics={[
          { title: 'Stock Items', value: '5,247', change: 12, subtitle: 'Total SKUs', color: 'blue', icon: Box, trendData: [4800, 4900, 5000, 5100, 5150, 5200, 5247] },
          { title: 'Storage Used', value: '87.3%', change: 2.1, subtitle: 'Utilization', color: 'orange', icon: TrendingUp, trendData: [82, 83.5, 84.5, 85.5, 86.2, 86.8, 87.3] },
          { title: 'Items In/Out', value: '342 / 289', change: 15, subtitle: 'Today', color: 'green', icon: Zap, trendData: [280, 300, 315, 320, 330, 335, 342] },
          { title: 'Damage  Reports', value: '8', change: -25, subtitle: 'This week', color: 'red', icon: AlertCircle, trendData: [12, 11, 10, 9, 8.5, 8.2, 8] }
        ]}
      />

      <Card className="border-t-4" style={{ borderTopColor: 'var(--color-primary-500)' }}>
        <h3 className="text-lg font-semibold mb-4">Inventory Status</h3>
        <div className="space-y-3">
          {[
            { category: 'Electronics', stock: 1248, status: 'Adequate' },
            { category: 'Documents', stock: 2156, status: 'Adequate' },
            { category: 'Fragile', stock: 487, status: 'Low' },
            { category: 'Hazmat', stock: 142, status: 'Critical' },
            { category: 'Food', stock: 1214, status: 'Adequate' }
          ].map((item, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded-lg flex justify-between">
              <div>
                <p className="font-semibold text-sm text-gray-900">{item.category}</p>
                <p className="text-xs text-gray-600">{item.stock} items</p>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded ${
                item.status === 'Adequate' ? 'bg-green-100 text-green-800' :
                item.status === 'Low' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default WarehouseDashboard;
