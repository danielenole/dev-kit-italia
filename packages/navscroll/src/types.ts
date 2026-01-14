export const POSITION = ['top', 'bottom'];
export const LINE_POSITION = [null, 'left', 'right'];
export const DARK_MODE = [null, 'mobile', 'desktop', 'always'];

export type Position = (typeof POSITION)[number];
export type LinePosition = (typeof LINE_POSITION)[number];
export type DarkMode = (typeof DARK_MODE)[number];
