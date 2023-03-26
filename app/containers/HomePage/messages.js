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
  aboutPage: {
    id: `${scope}.name`,
    defaultMessage: 'Hello,',
    desc: {
        id: `${scope}.desc`,
        defaultMessage: 'I\'m Vivek Darsanapu, CS graduate from IIT Madras, currently working at glance.com. I play around exploring new tech stacks and building stuff. I built this webpage to encapsulate my projects and other interests. Watch this space for the stuff I do'
    },
    goodbye: {
      id: `${scope}.goodbye`,
      defaultMessage: 'Have a nice day!',  
    },
    justBye: {
      id: `${scope}.justBye`,
      defaultMessage: 'Bye!?',  
    },
    quote1: {
      id: `${scope}.quote1`,
      defaultMessage: ['A cow doesn\'t know pain of laying an egg.',  
                 'You can call TajMahal is an over-engineered tombstone. Objective matters.',  
                  'Everything is a normal distribution.', 
                  'Let\'s call it a grand success.',
                  'Okay, Thanks, Bye',
                  'You are using GUI for Git? What are you five years old?',
                  'This server is seems to like going down on everything.',
      ],
    },
    note: {
      id: `${scope}.note`,
      defaultMessage: 'workplace gems',  
    }
  }
});
