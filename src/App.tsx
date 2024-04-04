import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Products = lazy(() => import('./pages/Products'));
const Customers = lazy(() => import('./pages/Customers'));
const Transactions = lazy(() => import('./pages/Transactions'));
const NewProduct = lazy(() => import('./pages/management/NewProduct'));
const ProductManagement = lazy(
  () => import('./pages/management/ProductManagement')
);
const TransactionManagement = lazy(
  () => import('./pages/management/TransactionManagement')
);

const BarChart = lazy(() => import('./pages/charts/BarChart'));
const LineChart = lazy(() => import('./pages/charts/LineChart'));
const PieChart = lazy(() => import('./pages/charts/PieChart'));

const Stopwatch = lazy(() => import('./pages/apps/Stopwatch'));
const Coupons = lazy(() => import('./pages/apps/Coupons'));
const Toss = lazy(() => import('./pages/apps/Toss'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Link to="/admin/dashboard">
                <button>Visit Dashboard</button>
              </Link>
            }
          />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/transactions" element={<Transactions />} />

          {/* Chart */}
          <Route path="/admin/charts/bar" element={<BarChart />} />
          <Route path="/admin/charts/pie" element={<PieChart />} />
          <Route path="/admin/charts/line" element={<LineChart />} />
          {/* Apps */}
          <Route path="/admin/apps/toss" element={<Toss />} />
          <Route path="/admin/apps/coupons" element={<Coupons />} />
          <Route path="/admin/apps/stopwatch" element={<Stopwatch />} />
          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
