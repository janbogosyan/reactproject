
import style from './Card.module.css';

const Card = props => {
    return (
        <div className={`${style.card} ${props.classNameJan}`}>
            {props.children}
        </div>
    );
};

export default Card;