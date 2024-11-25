import { FC } from 'react';
import Cart from '@mentor/product/components/Cart';
import Avatar from '@mentor/product/components/Avatar';
import logo from '@mentor/product/assets/logo.svg';
import styles from './Header.module.css';
import type { NavItem } from '@mentor/product/types';

const Header: FC<{ navItems: NavItem[] } = ({ navItems }) => {
    return (
        <div className={styles.header}>
            {/* MobileMenu */}
            <img src={logo} className={styles.logo} alt="company logo" />

            <nav className={styles.navMenu}>
                <ul>
                    {navItems?.map(navItem => (
                        <li>
                            <a href={navItem.url}>{navItem.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <Cart />

            <Avatar />
        </div>
    );
};

export default Header;
