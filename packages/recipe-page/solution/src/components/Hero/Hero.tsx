import { FC } from 'react';
import styles from './Hero.module.css';

type HeroProps = { src: string; alt?: string };

const Hero: FC<HeroProps> = ({ src, alt }) => <img alt={alt} src={src} className={styles.hero} />;

export default Hero;
