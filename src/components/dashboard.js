import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Menu, X, Home, Users, ShoppingCart, DollarSign, TrendingUp, Bell, Search, Settings, LogOut, ChevronDown } from 'lucide-react';

export default function AppDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  const revenueData = [
    { month: 'Jan', revenue: 4200, expenses: 2400 },
    { month: 'Feb', revenue: 5100, expenses: 2800 },
    { month: 'Mar', revenue: 4800, expenses: 2600 },
    { month: 'Apr', revenue: 6300, expenses: 3200 },
    { month: 'May', revenue: 7200, expenses: 3800 },
    { month: 'Jun', revenue: 8100, expenses: 4200 }
  ];

  const trafficData = [
    { name: 'Direct', value: 4500, color: '#3b82f6' },
    { name: 'Social', value: 3200, color: '#8b5cf6' },
    { name: 'Organic', value: 5800, color: '#10b981' },
    { name: 'Referral', value: 2100, color: '#f59e0b' }
  ];

  const stats = [
    { title: 'Total Revenue', value: '$45,231', change: '+12.5%', icon: DollarSign, positive: true },
    { title: 'Total Users', value: '8,249', change: '+8.2%', icon: Users, positive: true },
    { title: 'Total Orders', value: '1,423', change: '-3.1%', icon: ShoppingCart, positive: false },
    { title: 'Conversion Rate', value: '3.24%', change: '+5.7%', icon: TrendingUp, positive: true }
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Smith', product: 'Premium Plan', amount: '$299', status: 'Completed' },
    { id: '#ORD-002', customer: 'Emma Wilson', product: 'Basic Plan', amount: '$99', status: 'Processing' },
    { id: '#ORD-003', customer: 'Michael Brown', product: 'Enterprise', amount: '$999', status: 'Completed' },
    { id: '#ORD-004', customer: 'Sarah Davis', product: 'Premium Plan', amount: '$299', status: 'Pending' },
    { id: '#ORD-005', customer: 'James Johnson', product: 'Basic Plan', amount: '$99', status: 'Completed' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-6 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen && <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Dashboard</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {[
            { icon: Home, label: 'Overview', id: 'overview' },
            { icon: Users, label: 'Users', id: 'users' },
            { icon: ShoppingCart, label: 'Orders', id: 'orders' },
            { icon: TrendingUp, label: 'Analytics', id: 'analytics' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-3 rounded-lg transition-all ${
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                  : 'hover:bg-gray-700'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700 space-y-2">
          <button className="w-full flex items-center gap-4 p-3 hover:bg-gray-700 rounded-lg transition-colors">
            <Settings size={20} />
            {sidebarOpen && <span>Settings</span>}
          </button>
          <button className="w-full flex items-center gap-4 p-3 hover:bg-gray-700 rounded-lg transition-colors">
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 ml-6">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center gap-3 pl-4 border-l border-gray-300">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-800">John Doe</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.positive ? 'bg-blue-50' : 'bg-red-50'}`}>
                    <stat.icon size={24} className={stat.positive ? 'text-blue-600' : 'text-red-600'} />
                  </div>
                  <span className={`text-sm font-semibold ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Revenue Overview</h2>
                <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Last 6 months</option>
                  <option>Last 12 months</option>
                  <option>This year</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 4 }} />
                  <Line type="monotone" dataKey="expenses" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Traffic Sources */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Traffic Sources</h2>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {trafficData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {trafficData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{order.customer}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{order.product}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{order.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}