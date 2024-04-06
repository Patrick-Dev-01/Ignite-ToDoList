import styles from '../components/task.module.css';
import checkedIcon from '../assets/checked.svg';
import uncheckedIcon from '../assets/unchecked.svg';
import trashIcon from '../assets/trash.svg';

interface TaskProps{
    id: number;
    content: string;  
    hasCompleted: boolean;
    handleCheckComplete: (id: number) => void;
    handleRemove: (id: number) => void;
}

export function Task({ id, content, hasCompleted, handleCheckComplete, handleRemove }: TaskProps){
    function handleHasCompleted(id: number){
        handleCheckComplete(id);
    }

    function handleDeleteTask(id: number){
        handleRemove(id)
    }

    return(
        <div className={ hasCompleted ? styles.taskBoxCompleted : styles.taskBox}>
            <button onClick={() => handleHasCompleted(id)}>
                { hasCompleted ? <img src={checkedIcon} alt="" /> : <img src={uncheckedIcon} alt="" />}
            </button>
            <p>{content}</p>
            <button onClick={() => handleDeleteTask(id)}>
                <img src={trashIcon} alt="" />
            </button>
        </div>
    )
}