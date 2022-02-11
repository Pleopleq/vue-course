import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespace: true,
  state() {
    return {
      coaches: [
        {
          id: 1,
          firstName: 'Felix',
          lastName: 'Anducho',
          description: 'asdf',
          rate: 8,
          roles: ['Front-End'],
        },
        {
          id: 2,
          firstName: 'Luis',
          lastName: 'Anducho',
          description: 'asdf',
          rate: 10,
          roles: ['Front-End', 'Back-End'],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
