import { ReactElement, useCallback, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { Column } from 'react-table';
import TableHOC from '../components/TableHOC';
import { Link } from 'react-router-dom';

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: 'User',
    accessor: 'user',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
  {
    Header: 'Discount',
    accessor: 'discount',
  },
  {
    Header: 'Quantity',
    accessor: 'quantity',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const arr: DataType[] = [
  {
    user: 'Charas',
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: 'Xavirors',
    amount: 6999,
    discount: 400,
    status: <span className="purple">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: 'Xavirors',
    amount: 6999,
    discount: 400,
    status: <span className="green">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
];

const Transactions = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      'dashboard-product-box',
      'Transactions',
      true
    ),
    []
  );
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};
export default Transactions;
