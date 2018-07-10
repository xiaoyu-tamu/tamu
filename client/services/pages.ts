export interface Page {
  title?: string;
  pathname: string;
  children?: Page[];
}

export const pages: Page[] = [
  {
    pathname: '/dashboard',
  },
  {
    pathname: '/browse',
    children: [
      {
        pathname: '/browse/colleges',
      },
      {
        pathname: '/browse/departments',
      },
      {
        pathname: '/browse/courses',
      },
    ],
  },
  {
    pathname: '/analytics',
    children: [
      {
        pathname: '/analytics/gpa',
      },
      {
        pathname: '/analytics/grades',
      },
    ],
  },
  {
    pathname: '/discover',
    children: [
      {
        pathname: '/discover/about',
      },
      {
        pathname: '/discover/roadmap',
      },
      {
        pathname: '/discover/changelog',
      },
    ],
  },
];
