import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '@italia/icon';

const meta = {
  title: 'Componenti/Sidebar',
  tags: ['beta'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ============================================
// SIDEBAR SEMPLICE
// ============================================

export const SidebarSemplice: Story = {
  name: 'Sidebar semplice',
  render: () => html`
    <div class="sidebar-wrapper">
      <div class="sidebar-linklist-wrapper">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <h3>Header</h3>
            </li>
            <li>
              <a class="list-item medium active" href="#"><span>Link lista 1 (attivo)</span></a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true"
                ><span>Link lista 2 (disabilitato)</span></a
              >
            </li>
            <li>
              <a class="list-item medium" href="#"><span>Link lista 3</span></a>
            </li>
            <li>
              <a class="list-item medium" href="#"><span>Link lista 4</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium" href="#"><span>Link secondario 1</span></a>
            </li>
            <li>
              <a class="list-item medium active" href="#"><span>Link secondario 2 (attivo)</span></a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true"
                ><span>Link secondario 3 (disabilitato)</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
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
              <a class="list-item medium active left-icon" href="#">
                <it-icon name="it-calendar" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 1 (selezionato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled left-icon" href="#" aria-disabled="true">
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
              <a class="list-item medium left-icon" href="#">
                <it-icon name="it-folder" color="primary" size="sm" class="left"></it-icon>
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item medium active left-icon" href="#">
                <it-icon name="it-settings" color="primary" size="sm" class="left"></it-icon>
                <span>Link secondario 2 (selezionato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled left-icon" href="#" aria-disabled="true">
                <it-icon name="it-star-outline" color="primary" size="sm" class="left"></it-icon>
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
              <a class="list-item medium active" href="#"><span>Link lista 1 (selezionato)</span></a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true"
                ><span>Link lista 2 (disabilitato)</span></a
              >
            </li>
            <li>
              <a class="list-item medium" href="#"><span>Link lista 3</span></a>
            </li>
            <li>
              <a class="list-item medium" href="#"><span>Link lista 4</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium" href="#"><span>Link secondario 1</span></a>
            </li>
            <li>
              <a class="list-item medium active" href="#"><span>Link secondario 2 (selezionato)</span></a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true"
                ><span>Link secondario 3 (disabilitato)</span></a
              >
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
              <a class="list-item medium active" href="#"><span>Link lista 1 (attivo)</span></a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true"
                ><span>Link lista 2 (disabilitato)</span></a
              >
            </li>
            <li>
              <a class="list-item medium" href="#"><span>Link lista 3</span></a>
            </li>
            <li>
              <a class="list-item medium" href="#"><span>Link lista 4</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium" href="#"><span>Link secondario 1</span></a>
            </li>
            <li>
              <a class="list-item medium active" href="#"><span>Link secondario 2 (attivo)</span></a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true"
                ><span>Link secondario 3 (disabilitato)</span></a
              >
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
            <it-collapse>
              <a class="list-item medium" href="#"><span>Link lista 1</span></a>
              <ul class="link-sublist">
                <li>
                  <a class="list-item" href="#"><span>Link lista 1.1 (attivo)</span></a>
                </li>
                <li>
                  <a class="list-item" href="#"><span>Link lista 1.2</span></a>
                </li>
                <li>
                  <a class="list-item" href="#"><span>Link lista 1.3</span></a>
                </li>
              </ul>
            </li>
            <li><a class="list-item medium" href="#"><span>Link lista 2</span></a></li>
            <li><a class="list-item medium" href="#"><span>Link lista 3</span></a></li>
          </ul>
        </div>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li><a class="list-item medium" href="#"><span>Link secondario 1</span></a></li>
            <li><a class="list-item medium" href="#"><span>Link secondario 2</span></a></li>
            <li><a class="list-item medium disabled" href="#" aria-disabled="true"><span>Link secondario 3 (disabilitato)</span></a></li>
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
              <a class="list-item medium" href="#"><span>Link lista 1</span></a>
              <ul class="link-sublist">
                <li>
                  <a class="list-item" href="#"><span>Link lista 1.1 (selezionato)</span></a>
                </li>
                <li>
                  <a class="list-item" href="#"><span>Link lista 1.2</span></a>
                </li>
                <li>
                  <a class="list-item" href="#"><span>Link lista 1.3</span></a>
                </li>
              </ul>
            </li>
            <li>
              <a class="list-item medium" href="#"><span>Link lista 2</span></a>
            </li>
            <li>
              <a class="list-item medium" href="#"><span>Link lista 3</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium" href="#"><span>Link secondario 1</span></a>
            </li>
            <li>
              <a class="list-item medium active" href="#"><span>Link secondario 2 (selezionato)</span></a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true"
                ><span>Link secondario 3 (disabilitato)</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
};
