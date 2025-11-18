/* eslint-disable lit-a11y/list */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
// import '@italia/icon';
// import '@italia/accordion';

const meta = {
  title: 'Componenti/Sidebar',
  tags: ['beta', 'a11y-issue', 'documentation'],
  decorators: [(story) => html` <div style="padding: 1rem; min-width:500px">${story()}</div> `],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ============================================
// SIDEBAR SEMPLICE
// ============================================

export const SidebarSemplice: Story = {
  name: 'Sidebar semplice',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: () => html`
    <aside class="sidebar-wrapper" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium active" aria-current="page" href="#">
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true">
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    <script>
      // Attendiamo che il DOM sia pronto
        const sidebar = document.querySelector('.sidebar-wrapper');
        if (!sidebar) return;

        // Disabilita i link disabilitati via js
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
    </script>
  `,
};

// ============================================
// SIDEBAR CON ICONE
// ============================================

export const SidebarConIcone: Story = {
  name: 'Sidebar con icone',
  render: () => html`
    <div class="sidebar-wrapper">
      <div class="sidebar-linklist-wrapper">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <h3>Header</h3>
            </li>
            <li>
              <a class="list-item medium active left-icon" aria-current="page" href="#">
                <it-icon name="it-calendar" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled left-icon" href="#" role="button" aria-disabled="true">
                <it-icon name="it-comment" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium left-icon" href="#">
                <it-icon name="it-camera" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium left-icon" href="#">
                <it-icon name="it-file" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item left-icon" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active left-icon" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled left-icon" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
};

// ============================================
// SIDEBAR CON LINEA A DESTRA
// ============================================

export const SidebarLineaDestra: Story = {
  name: 'Sidebar con linea a destra',
  render: () => html`
    <div class="sidebar-wrapper it-line-right-side">
      <div class="sidebar-linklist-wrapper">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <h3>Header</h3>
            </li>
            <li>
              <a class="list-item medium active" aria-current="page" href="#">
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true">
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
};

// ============================================
// SIDEBAR CON LINEA A SINISTRA
// ============================================

export const SidebarLineaSinistra: Story = {
  name: 'Sidebar con linea a sinistra',
  render: () => html`
    <div class="sidebar-wrapper it-line-left-side">
      <div class="sidebar-linklist-wrapper">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <h3>Header</h3>
            </li>
            <li>
              <a class="list-item medium active" aria-current="page" href="#">
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true">
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
};

// ============================================
// SIDEBAR ANNIDATA
// ============================================

export const SidebarAnnidata: Story = {
  name: 'Sidebar annidata',
  render: () => html`
    <div class="sidebar-wrapper">
      <div class="sidebar-linklist-wrapper">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <h3>Header</h3>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 1<it-icon name="it-expand" color="primary" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 1.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 2<it-icon name="it-expand" color="primary" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 2.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 3
                  <it-icon name="it-expand" color="primary" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 3.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 2</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
};

// ============================================
// SIDEBAR TEMA SCURO
// ============================================

export const SidebarTemaScuro: Story = {
  name: 'Sidebar tema scuro',
  render: () => html`
    <div class="sidebar-wrapper theme-dark">
      <div class="sidebar-linklist-wrapper">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <h3>Header</h3>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 1
                  <it-icon name="it-expand" color="white" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 1.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 2
                  <it-icon name="it-expand" color="white" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 2.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 3
                  <it-icon name="it-expand" color="white" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 3.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
};
