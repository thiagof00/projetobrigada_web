import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './style.module.css';


export default function TopBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const NAV_LINKS = [
  { label: 'Início', path: '/home' },
  { label: 'Cadastro', path: '/cadastrar' },
  { label: 'Inativos', path: '/inativos' },
  { label: 'Ocorrencias', path: '/ocorrencias' },
  ];


  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.more}>
          <button onClick={() => setSidebarOpen(true)}>☰</button>
        </div>

        {/* Dropdown */}
        <div className={styles.info} ref={dropdownRef}>
          <button
            className={styles.infoButton}
            onClick={() => setDropdownOpen(prev => !prev)}
          >
            <span>Bem vindo, thiago</span>
            <span className={`${styles.arrow} ${dropdownOpen ? styles.arrowUp : ''}`}>▾</span>
          </button>

          {dropdownOpen && (
            <div className={styles.dropdown}>
              <button className={styles.dropdownItem} onClick={() => navigate('/configuracoes')}>
                Configurações
              </button>
              <div className={styles.dropdownDivider} />
              <button className={`${styles.dropdownItem} ${styles.dropdownItemDanger}`} onClick={() => navigate('/')}>
                Sair
              </button>
            </div>
          )}
        </div>
      </div>

      {sidebarOpen && (
        <>
          <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
          <nav className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
            </div>
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
                onClick={() => handleNavigate(link.path)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </>
      )}
    </>
  );
}