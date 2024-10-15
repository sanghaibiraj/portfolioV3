/* eslint-disable import/prefer-default-export */

import {
  createScoutAction,
  createScoutSection,
  createScoutPage,
} from 'scoutbar';
import ARTICLE_DATA from '../AppData/articles';
import LENS_DATA from '../AppData/lens';
import PROJECTS_DATA from '../AppData/projects';

export const actions = (theme: () => void) => [
  createScoutAction({
    label: 'Home',
    href: '/',
    keyboardShortcut: ['h'],
  }),

  createScoutAction({
    label: 'Resume',
    href: '/resume',
    keyboardShortcut: ['r'],
  }),
  createScoutAction({
    label: 'Contact Me',
    href: '/contact',
    keyboardShortcut: ['c'],
  }),

  createScoutSection({
    label: 'About Biraj Sanghai',

    children: [
      createScoutAction({
        label: 'About Biraj Sanghai',
        href: '/about',
        keyboardShortcut: ['a'],
      }),
      // createScoutAction({
      //   label: "Biraj's Achievements",
      //   href: '/about#achievements',
      // }),
      // createScoutAction({
      //   label: 'Playlist',
      //   href: '/about#playlist',
      // }),
      // createScoutAction({
      //   label: "Adenekan's Lens",
      //   href: '/about#lens',
      // }),
    ],
  }),

  createScoutSection({
    label: 'BY Biraj01',

    children: [
      createScoutPage({
        label: 'Projects',
        children: PROJECTS_DATA.map((project) =>
          createScoutAction({
            label: project.title,
            href: project.link,
            description: project.description,
            icon: project.imageUrl,
          })
        ),
      }),
      // createScoutPage({
      //   label: 'Lens',
      //   children: LENS_DATA.map((project) =>
      //     createScoutAction({
      //       label: project.title,
      //       href: project.link,
      //       description: project.description,
      //       icon: project.imageUrl,
      //     })
      //   ),
      // }),
      // createScoutPage({
      //   label: 'Articles',
      //   children: ARTICLE_DATA.map((project) =>
      //     createScoutAction({
      //       label: project.title,
      //       href: project.link,
      //       description: project.description,
      //       icon: project.imageUrl,
      //     })
      //   ),
      // }),
    ],
  }),

  createScoutSection({
    label: 'Preference',

    children: [
      createScoutAction({
        label: 'Change Theme',
        action: () => theme(),
        keyboardShortcut: ['meta', 'l'],
      }),
    ],
  }),
];
