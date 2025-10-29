import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AuthProvider, ThemeProvider, useAuth } from "./hooks";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MaterialsPage from "./pages/MaterialsPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import WorkerDetailPage from "./pages/WorkerDetailPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import MaterialsDetailsPage from "./pages/MaterialDetailPage";
import CartPage from "./pages/CartPage";
import BookingPage from "./pages/BookingPage";
import ThankYouPage from "./pages/ThankYouPage";

// ✅ ProtectedRoute ensures that only logged-in users can access certain pages
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    // Redirect to login and remember where the user came from
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/materials" element={<MaterialsPage />} />
              <Route path="/materials/:id" element={<MaterialsDetailsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route
                path="/services/:serviceId"
                element={<ServiceDetailPage />}
              />
              <Route
                path="/worker/:workerId"
                element={
                  <ProtectedRoute>
                    <WorkerDetailPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />

              {/* ✅ BookingPage now requires login */}
              <Route
                path="/booking/:id"
                element={
                  <ProtectedRoute>
                    <BookingPage />
                  </ProtectedRoute>
                }
              />

              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </HashRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
