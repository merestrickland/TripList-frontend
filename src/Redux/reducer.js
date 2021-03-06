


const initialState = {
  // trips: [],
  users: [],
  filteredUsers: [],
  currentUser: {},
  currentUserTrips: [],
  token: '',
  trips: [],
  selectedTrip: {
    name: '',
    location: '',
    list_items: []
  }
}




const reducer = (state = initialState, action) => {
    switch (action.type) {

      case 'SET_TRIP':
        return {...state, selectedTrip: action.payload}

        case 'GET_TRIPS': 
          return {...state, trips: action.payload}
          
        case 'SET_USER_TRIPS':
        // This is supposed to take the current users trips, and set them to their own state. 
        // console.log(state.currentUserTrips)
          return {...state, currentUser: {...state.currentUser, trips: [...state.currentUser.trips, action.payload]}}

        case 'ADD_LIST_ITEM':
        // console.log(state)
        return {...state, selectedTrip: {...state.selectedTrip, list_items: [...state.selectedTrip.list_items, action.payload]}}

        case 'REMOVE_LIST_ITEM':
          return {...state, selectedTrip: {...state.selectedTrip, list_items: state.selectedTrip.list_items.filter(item => { return item.id !== action.payload})
          }}


        case 'REMOVE_TRIP':
          // let idOfTripToRemove = action.payload 
          // let filteredArray = state.trips.filter(trip => trip.id !== idOfTripToRemove)
          return {...state, currentUser: {...state.currentUser, trips: state.currentUser.trips.filter(trip => { return trip.id !== action.payload})}}
            // trips: state.trips.filter(trip => {
            //   return trip.id !== action.payload})}  



        



        case 'GET_USERS':
          return {...state, users: action.payload}
        case 'FILTER_USERS':
          return {...state, filteredUsers: action.payload}
        case 'USER_SHOW':
          return {...state, userShow: action.payload}
        case 'LOGIN_USER':
          return {...state, currentUser: action.payload}
        case 'LOGIN':
       
        console.log("action", action)
          let loginInfo = {
            email: action.payload.user.email,
            first_name: action.payload.user.first_name, 
            last_name: action.payload.user.last_name,
            trips: action.payload.user.trips
          }
          localStorage.setItem('token', action.payload.token)
          return {
            currentUser: {...loginInfo},
            token: action.payload.token
          }
        default:
            return state
        
    }

}

export default reducer 