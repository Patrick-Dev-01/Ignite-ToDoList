import styles from './header.module.css';
import toDoLogo from '../assets/Logo.svg';

export function Header(){
    return(
        <header className={styles.header}>
            <img src={toDoLogo} alt="To Do" />
        </header>
    )
}