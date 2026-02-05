// .storybook/addons/changelog-tab.tsx
import React from 'react';
import { addons, types } from 'storybook/manager-api';
import { useParameter } from 'storybook/manager-api';

const ADDON_ID = 'custom-changelog';
const PANEL_ID = `${ADDON_ID}/panel`;

function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\- (.+)$/gim, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
}

const ChangelogPanel: React.FC<{ active: boolean; key: string }> = ({ active, key }) => {
  const changelog = useParameter<string>('changelog', '');

  if (!active) return null;

  if (!changelog) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
        Nessun changelog disponibile per questo componente
      </div>
    );
  }

  const html = markdownToHtml(changelog);

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: '1.6',
        overflowY: 'auto',
        height: '100%',
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Changelog',
    render: ({ active, key }) => <ChangelogPanel active={active} key={key} />,
  });
});