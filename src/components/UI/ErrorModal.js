
import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';


const ErrorModal = props => {

    return (
        <>
            <div className={styles.backdrop} onClick={props.onConfirm}/>
            <Card classNameJan={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </>
    );
};

export default ErrorModal;