import produce from 'immer'

const initialState = {
  slotsAndDetails: [
    {
      id: '3d799208-0583-4be4-b3fe-367d05bb2514',
      timeSlot: '9am-10am',
      details: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      }
    },
    {
      id: 'e20de441-6586-45ff-89f7-e461cefcd47e',
      timeSlot: '10am-11am',
      details: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      }
    },
    {
      id: 'de98f11d-bac0-444a-9676-e269365a9667',
      timeSlot: '11am-12pm',
      details: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      }
    },
    {
      id: '99fd7e7a-1c1c-4e30-9003-15b08c2d4b3c',
      timeSlot: '12pm-1pm',
      details: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      }
    },
    {
      id: 'a4c2ebfb-c55b-474c-baf7-c9526f179921',
      timeSlot: '1pm-2pm',
      details: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      }
    },
    {
      id: '699e79e1-d506-4b9d-9f92-c3f2517dc0ea',
      timeSlot: '2pm-3pm',
      details: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      }
    },
    {
      id: '6a743b23-bed0-4b45-a14e-a0f3fc82dae1',
      timeSlot: '3pm-4pm',
      details: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      }
    },
    {
      id: '339d406a-68f2-4036-aef0-4af472f115b0',
      timeSlot: '4pm-5pm',
      details: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      }
    }
  ]
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE':
      const index = state.slotsAndDetails.findIndex(v => v.timeSlot === action.timeSlot)
      return produce(state, draftState => {
        draftState.slotsAndDetails[index].details = action.values
      })
    default:
      return state
  }
}
