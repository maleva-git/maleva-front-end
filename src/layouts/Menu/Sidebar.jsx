import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, PanelLeftOpen, PanelLeftClose } from 'lucide-react';
import { menuConfig } from '../../data/menuConfig';
import { useAuth } from '../../hooks/useAuth';

export function Sidebar({ isCollapsed, onToggle }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { roleId } = useAuth();
  const [expandedCategories, setExpandedCategories] = useState(['FAVOURITES']);
  const [expandedSubCategories, setExpandedSubCategories] = useState([]);

  if (!roleId) {
    return null;
  }

  const toggleCategory = (category) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSubCategory = (subCategoryName) => {
    setExpandedSubCategories(prev => 
      prev.includes(subCategoryName) 
        ? prev.filter(c => c !== subCategoryName)
        : [...prev, subCategoryName]
    );
  };

  const handleItemClick = (path) => {
    navigate(path);
  };

  const isActiveItem = (path) => {
    return location.pathname === path;
  };

  return (
    <div 
      className={`flex flex-col h-full transition-all duration-300 border-r ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      
      {/* Sidebar Header */}
      <div 
        className="p-4 border-b"
        style={{ borderColor: 'var(--color-border-light)' }}
      >
        <div className="flex items-center justify-between">
         
          <button
            onClick={onToggle}
            className="p-2 rounded-lg transition-all duration-200"
            style={{
              color: 'var(--color-text-tertiary)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--color-hover-overlay)';
              e.target.style.color = 'var(--color-text-secondary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--color-text-tertiary)';
            }}
          >
            {isCollapsed ? (
              <PanelLeftOpen className="w-5 h-5" />
            ) : (
              <PanelLeftClose className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto py-3">
        {menuConfig.map((category) => {
          const isExpanded = expandedCategories.includes(category.category);
          const CategoryIcon = category.icon;

          return (
            <div key={category.category} className="mb-2">
              {/* Category Header */}
              <button
                onClick={() => !isCollapsed && toggleCategory(category.category)}
                className={`w-full flex items-center px-4 py-3 text-left transition-all duration-200 group ${
                  isCollapsed ? 'justify-center' : 'justify-between'
                }`}
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--color-primary-50)'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
              >
                <div className="flex items-center">
                  <div className="p-2 rounded-lg transition-all duration-200" style={{ backgroundColor: 'var(--color-gray-100)' }}>
                    <CategoryIcon className="w-4 h-4 transition-colors duration-200" style={{ color: 'var(--color-gray-600)' }} />
                  </div>
                  {!isCollapsed && (
                    <span className="ml-3 text-sm font-semibold transition-colors duration-200" style={{ color: 'var(--color-text-primary)' }}>
                      {category.category}
                    </span>
                  )}
                </div>
                {!isCollapsed && (
                  <div className="transition-all duration-200" style={{ color: 'var(--color-text-quaternary)' }}>
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                )}
              </button>

              {/* Category Items */}
              {isExpanded && !isCollapsed && (
                <div className="ml-6 mt-1 space-y-1">
                  {/* Direct Items */}
                  {category.items?.map((item) => {
                    const ItemIcon = item.icon;
                    const isActive = isActiveItem(item.path);
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleItemClick(item.path)}
                        className="w-full flex items-center px-4 py-2.5 text-left rounded-lg transition-all duration-200 group"
                        style={{
                          backgroundColor: isActive ? 'var(--color-primary-600)' : 'transparent',
                          color: isActive ? '#ffffff' : 'var(--color-text-secondary)',
                          boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
                        }}
                        onMouseEnter={(e) => { if (!isActive) { e.target.style.backgroundColor = 'var(--color-primary-50)'; e.target.style.color = 'var(--color-primary-700)'; } }}
                        onMouseLeave={(e) => { if (!isActive) { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--color-text-secondary)'; } }}
                      >
                        <ItemIcon className="w-4 h-4 transition-colors duration-200" style={{ color: isActive ? '#ffffff' : 'var(--color-text-quaternary)' }} />
                        <span className="ml-3 text-sm font-medium">{item.name}</span>
                        {isActive && <div className="ml-auto w-2 h-2 bg-white rounded-full opacity-80"></div>}
                      </button>
                    );
                  })}

                  {/* SubCategories */}
                  {category.subCategories?.map((subCategory) => {
                    const isSubExpanded = expandedSubCategories.includes(subCategory.name);
                    return (
                      <div key={subCategory.name} className="mt-1">
                        <button
                          onClick={() => toggleSubCategory(subCategory.name)}
                          className="w-full flex items-center px-4 py-2 text-left rounded-lg transition-all duration-200"
                          style={{ backgroundColor: 'transparent', color: 'var(--color-text-secondary)' }}
                          onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--color-gray-100)'; }}
                          onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                          <span className="text-xs font-semibold">{subCategory.name}</span>
                          <div className="ml-auto" style={{ color: 'var(--color-text-quaternary)' }}>
                            {isSubExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                          </div>
                        </button>
                        {isSubExpanded && (
                          <div className="ml-4 mt-1 space-y-1">
                            {subCategory.items?.map((item) => {
                              const ItemIcon = item.icon;
                              const isActive = isActiveItem(item.path);
                              return (
                                <button
                                  key={item.name}
                                  onClick={() => handleItemClick(item.path)}
                                  className="w-full flex items-center px-3 py-2 text-left rounded-lg transition-all duration-200"
                                  style={{
                                    backgroundColor: isActive ? 'var(--color-primary-600)' : 'transparent',
                                    color: isActive ? '#ffffff' : 'var(--color-text-secondary)',
                                    boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
                                  }}
                                  onMouseEnter={(e) => { if (!isActive) { e.target.style.backgroundColor = 'var(--color-primary-50)'; e.target.style.color = 'var(--color-primary-700)'; } }}
                                  onMouseLeave={(e) => { if (!isActive) { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--color-text-secondary)'; } }}
                                >
                                  <ItemIcon className="w-3 h-3 transition-colors duration-200" style={{ color: isActive ? '#ffffff' : 'var(--color-text-quaternary)' }} />
                                  <span className="ml-2 text-xs font-medium">{item.name}</span>
                                  {isActive && <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>}
                                </button>
                              );
                            })}
                            {subCategory.subCategories?.map((nestedSub) => {
                              const isNestedExpanded = expandedSubCategories.includes(nestedSub.name);
                              return (
                                <div key={nestedSub.name} className="mt-1">
                                  <button
                                    onClick={() => toggleSubCategory(nestedSub.name)}
                                    className="w-full flex items-center px-3 py-1.5 text-left rounded-lg transition-all duration-200"
                                    style={{ backgroundColor: 'transparent', color: 'var(--color-text-secondary)' }}
                                    onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--color-gray-100)'; }}
                                    onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                                  >
                                    <span className="text-xs font-semibold">{nestedSub.name}</span>
                                    <div className="ml-auto" style={{ color: 'var(--color-text-quaternary)' }}>
                                      {isNestedExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                                    </div>
                                  </button>
                                  {isNestedExpanded && (
                                    <div className="ml-4 mt-1 space-y-1">
                                      {nestedSub.items?.map((item) => {
                                        const ItemIcon = item.icon;
                                        const isActive = isActiveItem(item.path);
                                        return (
                                          <button
                                            key={item.name}
                                            onClick={() => handleItemClick(item.path)}
                                            className="w-full flex items-center px-2 py-1.5 text-left rounded-lg transition-all duration-200"
                                            style={{
                                              backgroundColor: isActive ? 'var(--color-primary-600)' : 'transparent',
                                              color: isActive ? '#ffffff' : 'var(--color-text-secondary)',
                                              boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
                                            }}
                                            onMouseEnter={(e) => { if (!isActive) { e.target.style.backgroundColor = 'var(--color-primary-50)'; e.target.style.color = 'var(--color-primary-700)'; } }}
                                            onMouseLeave={(e) => { if (!isActive) { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--color-text-secondary)'; } }}
                                          >
                                            <ItemIcon className="w-3 h-3 transition-colors duration-200" style={{ color: isActive ? '#ffffff' : 'var(--color-text-quaternary)' }} />
                                            <span className="ml-2 text-xs font-medium">{item.name}</span>
                                            {isActive && <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>}
                                          </button>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sidebar Footer */}
      {!isCollapsed && (
        <div 
          className="p-4 border-t"
          style={{ borderColor: 'var(--color-border-light)' }}
        >
          <div 
            className="rounded-xl p-4"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-primary-100) 100%)',
              border: '1px solid var(--color-primary-200)'
            }}
          >
            <div className="flex items-center">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary-600)' }}
              >
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <div className="ml-3">
                <p 
                  className="text-sm font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Maleva
                </p>
                <p 
                  className="text-xs"
                  style={{ color: 'var(--color-primary-600)' }}
                >
                  v2
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}