// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Profile,
  Bloglist
} from './';

export default {
  path: 'blog',
  name: 'Blog',
  childRoutes: [
    { path: '', name: 'Blog', component: Bloglist, isIndex: true },
    { path: 'profile', name: 'Profile', component: Profile, isIndex: true },
  ],
};
