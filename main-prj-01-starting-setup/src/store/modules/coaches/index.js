import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespace: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Felix',
          lastName: 'Anducho',
          description: 'asdf',
          cost: 15,
          rate: 8,
          roles: ['frontend'],
        },
        {
          id: 'c2',
          firstName: 'Luis',
          lastName: 'Anducho',
          description: 'asdf',
          cost: 50,
          rate: 10,
          roles: ['backend'],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
