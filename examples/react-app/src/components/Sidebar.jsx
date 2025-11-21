export function Sidebar() {
  return (
    <aside className="sidebar-wrapper" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div className="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" className="link-list-wrapper">
          <ul className="link-list">
            <li>
              <a className="list-item medium active" aria-current="page" href="#">
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a className="list-item medium disabled" href="#" aria-disabled="true">
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a className="list-item medium" href="#">
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a className="list-item medium" href="#">
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" className="link-list-wrapper">
          <ul className="link-list">
            <li>
              <a className="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a className="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a className="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
  useEffect(() => {
    const sidebar = document.querySelector('.sidebar-wrapper');
    if (!sidebar) return;
    sidebar.querySelectorAll('[aria-disabled="true"]').forEach((el) => {
      // Per i click del mouse
      el.addEventListener('click', (event) => {
        console.log('Link disabilitato cliccato');
        event.preventDefault();
        event.stopPropagation();
      });
      // Per gli utenti da tastiera
      el.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          console.log('Link disabilitato attivato da tastiera');
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    // Cleanup listeners on unmount
    return () => {
      sidebar.querySelectorAll('[aria-disabled="true"]').forEach((el) => {
        el.replaceWith(el.cloneNode(true));
      });
    };
  }, []);
