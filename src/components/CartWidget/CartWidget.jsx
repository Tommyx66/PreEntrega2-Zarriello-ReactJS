import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget badge badge-pill badge-danger text-dark">
      <FaShoppingCart size={40} cursor="pointer" />
      <span className="badge badge-pill  badge-danger text-dark fs-6">3</span>
    </div>
  );
};


export default CartWidget;