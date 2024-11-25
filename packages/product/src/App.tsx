import { FC } from 'react';
import Header from '@mentor/product/components/Header';
import Product from '@mentor/product/components/Product';
import { navItems } from '@mentor/product/data/constants';
import { CartProvider } from '@mentor/product/data/contexts';

const App: FC = () => {
    return (
        <CartProvider>
            <Header items={navItems} />
            <Product />
        </CartProvider>
    );
};

export default App;
