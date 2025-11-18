export function Sidebar() {
  return (
    <div className="sidebar-wrapper it-line-right-side">
      <div className="sidebar-linklist-wrapper">
        <div className="link-list-wrapper">
          <ul className="link-list">
            <li>
              <h3>Menu di navigazione</h3>
            </li>
            <li>
              <a className="list-item medium active left-icon" aria-current="page" href="#">
                <it-icon name="it-calendar" color="primary" size="sm" className="left"></it-icon>
                <span>Pagina attiva</span>
              </a>
            </li>
            <li>
              <a className="list-item medium left-icon" href="#">
                <it-icon name="it-comment" color="primary" size="sm" className="left"></it-icon>
                <span>Sezione 1</span>
              </a>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" className="list-item-title-icon-wrapper">
                  <it-icon name="it-camera" color="primary" size="sm"></it-icon>
                  Sezione 2
                  <it-icon name="it-expand" color="primary" size="sm"></it-icon>
                </span>
                <ul className="link-sublist" slot="content">
                  <li>
                    <a className="list-item" href="#">
                      <span>Sottosezione 2.1</span>
                    </a>
                  </li>
                  <li>
                    <a className="list-item" href="#">
                      <span>Sottosezione 2.2</span>
                    </a>
                  </li>
                  <li>
                    <a className="list-item" href="#">
                      <span>Sottosezione 2.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <a className="list-item medium left-icon" href="#">
                <it-icon name="it-file" color="primary" size="sm" className="left"></it-icon>
                <span>Sezione 3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-linklist-wrapper linklist-secondary">
        <div className="link-list-wrapper">
          <ul className="link-list">
            <li>
              <a className="list-item medium left-icon" href="#">
                <it-icon name="it-settings" color="primary" size="sm" className="left"></it-icon>
                <span>Impostazioni</span>
              </a>
            </li>
            <li>
              <a className="list-item medium left-icon" href="#">
                <it-icon name="it-help-circle" color="primary" size="sm" className="left"></it-icon>
                <span>Aiuto</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
