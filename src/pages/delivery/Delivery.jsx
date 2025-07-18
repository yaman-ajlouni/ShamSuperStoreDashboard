import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DeliveryNavbar from '../../components/delivery/deliveryNavbar/DeliveryNavbar'
import DeliverySidebar from '../../components/delivery/deliverySidebar/DeliverySidebar'

// Import Delivery Pages
import DeliveryDashboard from './deliveryDashboard/DeliveryDashboard'
import DeliveryOrders from './deliveryOrders/DeliveryOrders'
import ActiveDeliveries from './activeDeliveries/ActiveDeliveries'
import DeliveryHistory from './deliveryHistory/DeliveryHistory'

import './Delivery.scss'
import DeliveryEarnings from './deliveryEarnings/DeliveryEarnings'
import DeliveryReviews from './deliveryReviews/DeliveryReviews'
import DeliverySettings from './deliverySettings/DeliverySettings'

const PlaceholderPage = ({ pageName }) => (
    <div className="page-placeholder">
        <div className="placeholder-content">
            <h2>{pageName}</h2>
            <p>This page is coming soon!</p>
        </div>
    </div>
)

const Delivery = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            // Changed breakpoint: treat tablets as mobile for sidebar behavior
            const mobile = window.innerWidth <= 1024 // Changed from 768 to 1024
            setIsMobile(mobile)

            // Only auto-collapse on true desktop screens
            if (window.innerWidth > 1024) {
                // Reset mobile states when on desktop
                setIsSidebarOpen(false)
            } else {
                // Reset desktop states when on mobile/tablet
                setIsSidebarCollapsed(false)
                setIsSidebarOpen(false)
            }
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Add/remove body class when sidebar is open on mobile/tablet
    useEffect(() => {
        if (isMobile && isSidebarOpen) {
            document.body.classList.add('sidebar-open')
        } else {
            document.body.classList.remove('sidebar-open')
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('sidebar-open')
        }
    }, [isMobile, isSidebarOpen])

    // Handle sidebar toggle from navbar
    const handleToggleSidebar = () => {
        if (isMobile) {
            // Mobile/Tablet behavior: toggle overlay sidebar
            setIsSidebarOpen(!isSidebarOpen)
        } else {
            // Desktop behavior: toggle collapse/expand
            setIsSidebarCollapsed(!isSidebarCollapsed)
        }
    }

    // Close mobile sidebar
    const handleCloseMobileSidebar = () => {
        if (isMobile) {
            setIsSidebarOpen(false)
        }
    }

    // Close mobile sidebar when clicking on main content
    const handleMainContentClick = () => {
        if (isMobile && isSidebarOpen) {
            setIsSidebarOpen(false)
        }
    }

    return (
        <div className="delivery-layout">
            <DeliveryNavbar
                onToggleSidebar={handleToggleSidebar}
                isSidebarCollapsed={isSidebarCollapsed}
            />

            <div className="delivery-content">
                <DeliverySidebar
                    isCollapsed={isSidebarCollapsed}
                    isMobile={isMobile}
                    isOpen={isSidebarOpen}
                    onClose={handleCloseMobileSidebar}
                />

                <main
                    className={`main-content ${isSidebarCollapsed ? 'main-content--expanded' : ''} ${isMobile ? 'main-content--mobile' : ''}`}
                    onClick={handleMainContentClick}
                >
                    {/* Delivery Routes */}
                    <Routes>
                        {/* Dashboard */}
                        <Route path="/" element={<DeliveryDashboard />} />
                        <Route path="/dashboard" element={<Navigate to="/delivery" replace />} />

                        {/* Orders Management */}
                        <Route path="/orders" element={<DeliveryOrders />} />

                        {/* Delivery Management */}
                        <Route path="/active-deliveries" element={<ActiveDeliveries />} />
                        <Route path="/delivery-history" element={<DeliveryHistory pageName="Delivery History" />} />

                        {/* Earnings & Reports */}
                        <Route path="/earnings" element={<DeliveryEarnings />} />
                        <Route path="/reviews" element={<DeliveryReviews />} />

                        {/* Support & Settings */}
                        <Route path="/settings" element={<DeliverySettings />} />

                        {/* Error Pages */}
                        <Route path="/404" element={<PlaceholderPage pageName="Page Not Found" />} />

                        {/* Catch all route */}
                        <Route path="*" element={<Navigate to="/delivery/404" replace />} />
                    </Routes>
                </main>
            </div>
        </div>
    )
}

export default Delivery