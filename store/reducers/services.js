import SERVICES from '../../data/dummy-data';

const initialState = {
  availableServices: SERVICES,
  userServices: SERVICES.filter(serv => serv.ownerId === 'u1'),
};

export default (state = initialState, action) => {
  return state;
};
