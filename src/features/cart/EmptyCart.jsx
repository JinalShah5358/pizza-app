import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div>
      {/* <Link to="/menu">&larr; Back to menu</Link> */}
    <LinkButton to='/menu' classname='py-4 px-3 font-semibold'>&larr; Back to menu</LinkButton>
      <p className='font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
