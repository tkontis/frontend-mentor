import { FC, useContext, useState } from 'react';
import styles from './Cart.module.css';
import cart from '@mentor/product/assets/icon-cart.svg';
import { Item } from '@mentor/product/types';
import { CartContext } from '@mentor/product/data/contexts';

const Cart: FC = () => {
    const [cartPopupOpen, setCartPopupOpen] = useState(false);
    const { items, addItem, removeItem } = useContext(CartContext);

    const handleClick = () => {
        setCartPopupOpen(prevCartMenuOpen => !prevCartMenuOpen);
    };

    return (
        <>
            <img alt="cart menu" src={cart} className={styles.cart} onClick={handleClick} />
            {cartPopupOpen && <CartPopup items={items} />}
        </>
    );
};

const CartPopup: FC<{ items: Item[] }> = ({ items }) => {
    const isCartEmpty = items?.length;

    return (
        <div>
            <title>
                <h1>Cart</h1>
            </title>

            {isCartEmpty ? (
                <div>Your cart is empty.</div>
            ) : (
                items.map((item: Item) => <Item data={item} />)
            )}

            {!isCartEmpty && <button>Checkout</button>}
        </div>
    );
};

export default Cart;
