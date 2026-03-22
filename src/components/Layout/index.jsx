import { Outlet } from 'react-router-dom';
import TopBar from '../TopBar';
import styles from './style.module.css';

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <TopBar />
      <main className={styles.content}>
        <Outlet /> {/* aqui renderiza a página filha */}
      </main>
    </div>
  );
}