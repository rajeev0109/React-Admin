import { ReactElement, useCallback, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import TableHOC from '../components/TableHOC';
import { Column } from 'react-table';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

interface DataType {
  photo: ReactElement;
  name: string;
  author: string;
  price: number;
  stock: number;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: 'Photo',
    accessor: 'photo',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Author',
    accessor: 'author',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Stock',
    accessor: 'stock',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const img = 'https://m.media-amazon.com/images/I/41ZHywPHUaL.AC_SX250.jpg';

const img2 = 'https://m.media-amazon.com/images/I/51dvGAGQ-mL.AC_SX250.jpg';

const arr: DataType[] = [
  {
    photo: <img src={img} alt="Books" />,
    name: 'Twisted Love By Ana Huang',
    author: 'Ana Huang',
    price: 391,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Books" />,
    name: 'प्रोफेसर की डायरी',
    author: 'Ana Huang',
    price: 187,
    stock: 10,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Books" />,
    name: 'Twisted Love',
    author: 'Ana Huang',
    price: 391,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Books" />,
    name: 'प्रोफेसर की डायरी',
    author: 'Ana Huang',
    price: 187,
    stock: 10,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Books" />,
    name: 'Twisted Love',
    author: 'Ana Huang',
    price: 391,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Books" />,
    name: 'प्रोफेसर की डायरी',
    author: 'Ana Huang',
    price: 187,
    stock: 10,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Books" />,
    name: 'Twisted Love',
    author: 'Ana Huang',
    price: 391,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Books" />,
    name: 'प्रोफेसर की डायरी',
    author: 'Ana Huang',
    price: 187,
    stock: 10,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      'dashboard-product-box',
      'Products',
      true
    ),
    []
  );
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
      <main>{Table()}</main>
    </div>
  );
};

export default Products;
