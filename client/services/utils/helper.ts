import { Route } from '../routes';
import { ImageType } from './constants';

export const isBrowser = typeof window !== 'undefined';
export const isServer = !isBrowser;
export const isIOS = isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent);

export function routeToTitle(route: Route) {
  if (route.title) {
    return route.title;
  }
  // remove leading slash
  const name = route.pathname.replace(/.*\//, '');
  return titleize(name);
}

export function titleize(str: string) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getImage(image: ImageType) {
  const DIR = '/static/images';
  switch (image) {
    case ImageType.Error:
      return { alt: 'Error', src: [DIR, 'empty-state.png'].join('/') };
    case ImageType.Maintenance:
      return { alt: 'Maintenance', src: [DIR, 'maintenance.png'].join('/') };
    case ImageType.Logo:
      return { alt: 'Logo', src: [DIR, 'logo.png'].join('/') };

    default: {
      return { alt: 'Error', src: [DIR, 'some-default-image.png'].join('/') };
    }
  }
}
