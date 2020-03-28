/*
 * Comic page strigns
 *
 * This contains all the text for the Comins component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Comics';

export default defineMessages({
  xkcd: {
    id: `${scope}.name`,
    defaultMessage: 'xkcd',
    desc: {
        id: `${scope}.desc`,
        defaultMessage: 'A webcomic of romance, sarcasm, math, and language.'
    }
  },
  cnh: {
    id: `${scope}.name`,
    defaultMessage: 'Cyanide and happiness',
    desc: {
      id: `${scope}.desc`,
      defaultMessage: 'Rob DenBleyker ❤️',
    }
  },
  turnoff: {
    id: `${scope}.name`,
    defaultMessage: 'turnoff.us',
    desc: {
      id: `${scope}.desc`,
      defaultMessage: 'Daniel Stori',
    }
  },
  nathan: {
    id: `${scope}.name`,
    defaultMessage: 'Strange planet',
    desc: {
      id: `${scope}.desc`,
      defaultMessage: 'Nathan Pyle\'s Strange Planet holds up a mirror to weird human behaviour',
    },
  },
  monkey: {
    id: `${scope}.name`,
    defaultMessage: 'Monkey User',
    desc: {
      id: `${scope}.desc`,
      defaultMessage: 'Software development satire in a web comic.',
    },
  },
  sarah: {
    id: `${scope}.name`,
    defaultMessage: 'Sarah\'s Scribbles',
    desc: {
      id: `${scope}.desc`,
      defaultMessage: '\'Adulthood is a Myth\'',
    }
  },
});
