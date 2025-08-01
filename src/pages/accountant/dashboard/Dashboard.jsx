import { useState } from 'react'
import './Dashboard.scss'

const Dashboard = () => {
    // Sample data - in real app this would come from API
    const [dashboardData] = useState({
        // Financial Overview
        totalRevenue: 125430.50,
        totalCommissions: 18814.58,
        totalOrders: 1247,

        // Payment Breakdown
        sellerPayments: 89750.30,
        deliveryPayments: 16865.40,
        shamPayTransactions: 850,
        cashTransactions: 397,

        // Tax Information
        taxableIncome: 18814.58, // Only commissions count as site income
        estimatedTax: 4703.65,
        quarterlyTaxDue: 4703.65,

        // Recent Activity
        recentOrders: [
            { orderNumber: 'ORD-2025-001', storeNumber: 'STR-001', date: '2025-01-15', amount: 299.99, paymentMethod: 'ShamPay' },
            { orderNumber: 'ORD-2025-002', storeNumber: 'STR-003', date: '2025-01-15', amount: 150.00, paymentMethod: 'Cash' },
            { orderNumber: 'ORD-2025-003', storeNumber: 'STR-002', date: '2025-01-14', amount: 75.50, paymentMethod: 'ShamPay' },
            { orderNumber: 'ORD-2025-004', storeNumber: 'STR-001', date: '2025-01-14', amount: 425.00, paymentMethod: 'Cash' },
            { orderNumber: 'ORD-2025-005', storeNumber: 'STR-004', date: '2025-01-13', amount: 89.99, paymentMethod: 'ShamPay' }
        ],

        // Monthly Statistics
        monthlyStats: {
            currentMonth: 'January 2025',
            ordersThisMonth: 89,
            revenueThisMonth: 12543.50,
            commissionsThisMonth: 1881.45
        }
    })

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Accounting Dashboard</h1>
                <p>Financial overview and key metrics</p>
            </div>

            {/* Key Metrics Cards */}
            <div className="metrics-grid">
                <div className="metric-card revenue">
                    <div className="metric-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                    </div>
                    <div className="metric-content">
                        <h3>Total Revenue</h3>
                        <p className="metric-value">${dashboardData.totalRevenue.toLocaleString()}</p>
                        <span className="metric-label">All transactions</span>
                    </div>
                </div>

                <div className="metric-card commissions">
                    <div className="metric-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <div className="metric-content">
                        <h3>Site Commissions</h3>
                        <p className="metric-value">${dashboardData.totalCommissions.toLocaleString()}</p>
                        <span className="metric-label">Taxable income</span>
                    </div>
                </div>

                <div className="metric-card orders">
                    <div className="metric-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <div className="metric-content">
                        <h3>Total Orders</h3>
                        <p className="metric-value">{dashboardData.totalOrders.toLocaleString()}</p>
                        <span className="metric-label">All time</span>
                    </div>
                </div>
            </div>

            {/* Payment Breakdown Section */}
            <div className="dashboard-section">
                <div className="section-header">
                    <h2>Payment Distribution</h2>
                    <p>How revenue is distributed across the platform</p>
                </div>

                <div className="payment-breakdown">
                    <div className="breakdown-card">
                        <h4>Seller Payments</h4>
                        <p className="breakdown-amount">${dashboardData.sellerPayments.toLocaleString()}</p>
                        <span className="breakdown-percentage">71.5% of total revenue</span>
                    </div>

                    <div className="breakdown-card">
                        <h4>Delivery Payments</h4>
                        <p className="breakdown-amount">${dashboardData.deliveryPayments.toLocaleString()}</p>
                        <span className="breakdown-percentage">13.4% of total revenue</span>
                    </div>

                    <div className="breakdown-card">
                        <h4>Site Commission</h4>
                        <p className="breakdown-amount">${dashboardData.totalCommissions.toLocaleString()}</p>
                        <span className="breakdown-percentage">15.1% of total revenue</span>
                    </div>
                </div>
            </div>

            {/* Transaction Types Section */}
            <div className="dashboard-section">
                <div className="section-header">
                    <h2>Transaction Types</h2>
                    <p>Payment method breakdown</p>
                </div>

                <div className="transaction-types">
                    <div className="transaction-card">
                        <div className="transaction-icon shampay">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <div className="transaction-content">
                            <h4>ShamPay Transactions</h4>
                            <p className="transaction-count">{dashboardData.shamPayTransactions}</p>
                            <span className="transaction-note">We collect & distribute payments</span>
                        </div>
                    </div>

                    <div className="transaction-card">
                        <div className="transaction-icon cash">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="transaction-content">
                            <h4>Cash Transactions</h4>
                            <p className="transaction-count">{dashboardData.cashTransactions}</p>
                            <span className="transaction-note">Direct payment to seller/driver</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tax Information Section */}
            <div className="dashboard-section">
                <div className="section-header">
                    <h2>Tax Summary</h2>
                    <p>Current tax liability based on commission income</p>
                </div>

                <div className="tax-summary">
                    <div className="tax-card">
                        <h4>Taxable Income</h4>
                        <p className="tax-amount">${dashboardData.taxableIncome.toLocaleString()}</p>
                        <span className="tax-note">Commission income only</span>
                    </div>

                    <div className="tax-card">
                        <h4>Estimated Tax (25%)</h4>
                        <p className="tax-amount">${dashboardData.estimatedTax.toLocaleString()}</p>
                        <span className="tax-note">Quarterly liability</span>
                    </div>
                </div>
            </div>

            {/* Recent Orders Section */}
            <div className="dashboard-section">
                <div className="section-header">
                    <h2>Recent Orders</h2>
                    <p>Latest transactions (no personal buyer information)</p>
                </div>

                <div className="recent-orders">
                    <div className="orders-table">
                        <div className="table-header">
                            <span>Order #</span>
                            <span>Store #</span>
                            <span>Date</span>
                            <span>Amount</span>
                            <span>Payment Method</span>
                        </div>

                        {dashboardData.recentOrders.map((order, index) => (
                            <div key={index} className="table-row">
                                <span className="order-number">{order.orderNumber}</span>
                                <span className="store-number">{order.storeNumber}</span>
                                <span className="order-date">{order.date}</span>
                                <span className="order-amount">${order.amount}</span>
                                <span className={`payment-method ${order.paymentMethod.toLowerCase()}`}>
                                    {order.paymentMethod}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Monthly Stats */}
            <div className="dashboard-section">
                <div className="section-header">
                    <h2>This Month ({dashboardData.monthlyStats.currentMonth})</h2>
                    <p>Current month performance</p>
                </div>

                <div className="monthly-stats">
                    <div className="stat-item">
                        <span className="stat-label">Orders</span>
                        <span className="stat-value">{dashboardData.monthlyStats.ordersThisMonth}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Revenue</span>
                        <span className="stat-value">${dashboardData.monthlyStats.revenueThisMonth.toLocaleString()}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Commissions</span>
                        <span className="stat-value">${dashboardData.monthlyStats.commissionsThisMonth.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard