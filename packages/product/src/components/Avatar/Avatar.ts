import { FC } from 'react';
import styles from './Avatar.module.css';

const Avatar: FC<{ icon: Blob }> = ({ icon }) => {

    return (
        <img src={icon} alt="avatar" className={styles.avatar} />
    );
};

export default Avatar;