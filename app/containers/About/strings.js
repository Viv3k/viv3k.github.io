/*
 * Comic page strigns
 *
 * This contains all the text for the Comins component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Comics';

export default defineMessages({
  aboutPage: {
    id: `${scope}.name`,
    defaultMessage: 'Hello, world!',
    desc: {
        id: `${scope}.desc`,
        defaultMessage: 'I\'m Vivek Darsanapu, CS graduate from IIT Madras, currently working at Glance.app. I love exploring new tech stacks and building stuff. I built this webpage to encapsulate my projects and other interests.'
    },
    goodbye: {
      id: `${scope}.goodbye`,
      defaultMessage: 'Have a nice day!',  
    },
    justBye: {
      id: `${scope}.justBye`,
      defaultMessage: 'Bye',  
    }
  }
});
