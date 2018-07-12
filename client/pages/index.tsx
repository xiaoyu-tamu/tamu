import React from 'react';
import { Button, Paper, createStyles, Theme, withStyles } from '@material-ui/core';
import { ImageType } from 'services/utils/constants';
import { CardFeature } from 'components/Cards';
import { PageGrid } from 'components/Page';
import { Root, Metadata } from 'containers/Root';

const extraEmptyState = (
  <Button variant="raised" color="primary">
    yes
  </Button>
);

const metadata: Metadata = {
  isEmpty: false,
  isError: false,
  onEmpty: {
    imageType: ImageType.Error,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    children: extraEmptyState,
  },
  onError: {
    imageType: ImageType.Error,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    children: extraEmptyState,
  },
  bannerTitle: 'Aggies Portal',
  bannerDescription: 'All in One Course Manager For Texas A&M University.',
};

const features = [
  {
    title: 'Courses',
    image: '/static/images/homepage/home1.png',
    href: '/browse/courses',
    description: 'Checkout course description, pre-requirement and grade history.',
  },
  {
    title: 'Departments',
    href: '/browse/departments',

    image: '/static/images/homepage/home2.png',
    description: "From architecture to zoology, we've got you covered.",
  },
  {
    title: 'Colleges',
    href: '/browse/colleges',
    image: '/static/images/homepage/home3.png',
    description: 'Explore our different areas of study',
  },
  {
    title: 'GPA Report',
    href: '/analytics/gpa',
    image: '/static/images/homepage/home4.png',
    description: 'Explore our different areas of study',
  },
  {
    title: 'Grades Report',
    href: '/analytics/grades',
    image: '/static/images/homepage/home5.png',
    description: 'Explore our different areas of study',
  },
  {
    title: 'Offical Website',
    href: 'https://www.tamu.edu',
    image: '/static/images/homepage/home6.png',
    description: 'Explore our different areas of study',
  },
];

const styles = ({ mixins }: Theme) =>
  createStyles({
    main: {
      ...mixins.gutters(),
      paddingTop: 16,
      paddingBottom: 16,
    },
  });

export default withStyles(styles)(({ classes }) => (
  <Root metadata={metadata}>
    <Paper square className={classes.main}>
      <PageGrid>
        {features.map((feature) => <CardFeature key={feature.title} {...feature} />)}
      </PageGrid>
    </Paper>
  </Root>
));
