import { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import { OrderItemType, OrderType } from '../../types';
import { Link } from 'react-router-dom';

const img = 'https://m.media-amazon.com/images/I/41ZHywPHUaL.AC_SX250.jpg';

const orderItems: OrderItemType[] = [
  {
    name: 'Twisted Love By Ana Huang',
    photo: img,
    _id: 'asdsaasdas',
    quantity: 4,
    price: 2000,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: 'Abhishek Singh',
    address: '77 Black Street',
    city: 'Neyword',
    state: 'Nevada',
    country: 'India',
    pinCode: 2434341,
    status: 'Processing',
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: 'asdnasjdhbn',
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHander = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === 'Processing' ? 'Shipped' : 'Delivered',
    }));
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product-management">
        <section
          style={{
            padding: '2rem',
          }}
        >
          <h2>Order Items</h2>

          {order.orderItems.map((i) => (
            <ProductCard
              name={i.name}
              photo={i.photo}
              _id={i._id}
              quantity={i.quantity}
              price={i.price}
            />
          ))}
        </section>

        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{' '}
            <span
              className={
                status === 'Delivered'
                  ? 'green'
                  : status === 'Shipped'
                  ? 'purple'
                  : 'red'
              }
            >
              {status}
            </span>
          </p>

          <button onClick={updateHander}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);

export default TransactionManagement;
