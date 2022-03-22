// import { createMachine, interpret, assign } from 'xstate';

// const request = new Promise((resolve, reject) => {
    
// })
// const fetchMachine = createMachine({
//   id: 'Dog API',
//   initial: 'idle',
//   context: {
//     dog: null
//   },
//   states: {
//     idle: {
//       on: {
//         FETCH: { target: 'loading' }
//       }
//     },
//     loading: {
//       invoke: {
//         id: 'fetchDog',
//         src: (context, event) =>
          
//         onDone: {
//           target: 'resolved',
//           actions: assign({
//             dog: (_, event) => event.data
//           })
//         },
//         onError: {
//           target: 'rejected'
//         }
//       },
//       on: {
//         CANCEL: { target: 'idle' }
//       }
//     },
//     rejected: {
//       on: {
//         FETCH: { target: 'loading' }
//       }
//     },
//     resolved: {
//       type: 'final'
//     }
//   }
// });

// const dogService = interpret(fetchMachine)
//   .onTransition((state) => console.log(state.value))
//   .start();

// dogService.send({ type: 'FETCH' });