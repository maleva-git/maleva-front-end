import { useState } from 'react';

export const Tabs = ({ tabs, defaultTab = 0, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (index) => {
    setActiveTab(index);
    if (onTabChange) onTabChange(index);
  };

  return (
    <div className="bg-white rounded-lg border border-blue-400">
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === index
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            {tab.icon && <span className="inline-block mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};
