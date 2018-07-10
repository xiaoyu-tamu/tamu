import { Page } from '../pages';

export const isBrowser = typeof window !== 'undefined';
export const isServer = !isBrowser;
export const isIOS = isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent);

export function pageToTitle(page: Page) {
  if (page.title) {
    return page.title;
  }
  // remove leading slash
  const name = page.pathname.replace(/.*\//, '');
  return titleize(name);
}

export function titleize(str: string) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
