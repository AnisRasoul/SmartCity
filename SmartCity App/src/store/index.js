// // src/store/index.js
// import Vue from 'vue';
// import { createStore } from 'vuex';

// Vue.use(Vuex);

// const state = {
//   busRoutes: {
//     line1: {
//       stations: [
//         { id: 1, coords: [3.463, 36.752], name: "Boumerdes Station" },
//         // ...other line1 stations...
//       ]
//     },
//     line2: {
//       stations: [
//         { id: 1, coords: [3.465, 36.75], name: "Sports Complex" },
//         // ...other line2 stations...
//       ]
//     },
//     line3: {
//       stations: [
//         { id: 1, coords: [3.4740978954476156, 36.75412267585005], name: "Bus stop 1" },
//         // ...other line3 stations...
//       ]
//     }
//   },
//   selectedRoute: null
// }

// const mutations = {
//   SET_SELECTED_ROUTE(state, routeName) {
//     state.selectedRoute = routeName;
//   }
// }

// const actions = {
//   selectRoute({ commit }, routeName) {
//     commit('SET_SELECTED_ROUTE', routeName);
//   }
// }

// const getters = {
//   getSelectedRoute: (state) => {
//     return state.selectedRoute ? state.busRoutes[state.selectedRoute] : null;
//   },
//   getAllRoutes: (state) => state.busRoutes
// }

// export default createStore({
//   state,
//   mutations,
//   actions,
//   getters
// })
