import booksImg from '../../assets/books.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>Welcome to the new library!</h1>
            <div className={classes.menu}>
                <button>Books</button>
                <button>Authors</button>
                <button>Genres</button>
            </div>
            
        </header>
        <div className={classes['main-image']}>
            <img src={booksImg} alt="Some books"></img>
        </div>
    </>
};

export default Header;