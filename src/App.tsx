import { FormEvent, useState } from 'react';
import { Header } from './components/Header';

import plusIcon from './assets/plus.svg';
import clipBoardIcon from './assets/Clipboard.svg';
import { Task } from './components/Task'; 

import styles from './App.module.css'
import './globals.css';

interface TaskType{
  id: number;
  content: string;  
  hasCompleted: boolean;
}

function App() {
  const [taskId, setTaskId] = useState<number>(0);
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();

    const newTask = { id: taskId, content: newTaskText, hasCompleted: false }

    setTaskId(taskId + 1);
    setTasks([...tasks, newTask]);
  }

  function handleCheckCompleted(taskId: number){
    setTasks(state => state.map(task => {
      if(task.id === taskId){
        return { ...task, hasCompleted: true }
      }

      return task;
    }));
  }

  function handleRemove(taskId: number){
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div className='App'>
      <Header />

      <main>
        <form onSubmit={handleCreateNewTask} action="">
          <input type="text" placeholder='Adicione uma tarefa' onChange={(e) => setNewTaskText(e.currentTarget.value)} />
          <button type='submit'>
            Criar
            <img className={styles.plusIcon} src={plusIcon} alt="" /> 
          </button>
        </form>

        <div className={styles.tasks}>
          <strong className={styles.tasksCreated}>
            Tarefas criadas <span>{tasks.length}</span> 
          </strong>

          <strong className={styles.tasksCompleted}>
            Concluídas 
                  { tasks.some(task => task.hasCompleted) ? 
                    <>
                      <span className={styles.numbersCompleted}>
                        {tasks.filter(task => task.hasCompleted === true).length} de {tasks.length}
                      </span>
                    </>
                    : <span>0</span>
                  }
          </strong>
        </div>

        <div className={styles.taskList}>
          {tasks.length !== 0 ? (
            tasks.map(task => {
              return <Task 
                          key={task.id} 
                          id={task.id} 
                          content={task.content} 
                          hasCompleted={task.hasCompleted}
                          handleCheckComplete={handleCheckCompleted}
                          handleRemove={handleRemove}
                      />
            })
          ) : (
            <div className={styles.noTasksCreated}>
            <img src={clipBoardIcon} alt="" />

            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
