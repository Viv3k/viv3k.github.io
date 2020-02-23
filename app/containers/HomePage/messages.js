/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  introductionPlaceholder: {
    id: `${scope}.placeholder.header`,
    defaultMessage: 'Still cooking 🍳',
  },
  welcomePlaceholder: {
    id: `${scope}.placeholder.message`,
    defaultMessage:
      'Welcome to weblog of a random dev',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Go to comics!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
