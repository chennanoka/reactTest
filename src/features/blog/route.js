// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  Bloglist
} from './';

export default {
  path: 'blog',
  name: 'Blog',
  childRoutes: [
    { path: 'default-page', name: 'Blog', component: Bloglist, isIndex: true },
  ],
};
