import * as types from "./../action/actionTypes";

const initialState = {
  places: [],
  slectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri:
              "https://vietnamarch.com.vn/wp-content/uploads/2017/05/mau-ban-an-dep-chat-luong-cao-01-650x542.jpg"
          }
        })
      };
    case types.SELECT_PLACE:
      return {
        ...state,
        slectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };
    default:
      return state;
  }
};

export default reducer;
