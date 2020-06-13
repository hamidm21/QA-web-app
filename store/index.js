export const state = () => ({
  register_info: {
    cell_phone: '',
    password: ''
  },
  activation: {
    resend: false,
    time: '',
  },
  user: {
    dashboard: {
      page: "dashboard"
    }
  },
  question: {
    add: {
      selectedDate: '',
      Files: []
    }
  },
  others: {
    offer: {
      selectedDate: ''
    }
  },
  dashboard: {
    notifs: [],
    unReads: 0
  }
})

export const mutations = {
  setRegisterInfo (state, reg_info) {
    state.register_info.cell_phone = reg_info.cell_phone;
    state.register_info.password = reg_info.password;
  },
  toggleResend (state) {
    state.activation.resend = !state.activation.resend;
  },
  setTime (state, time) {
    state.activation.time = time;
  },
  setUserDashPage (state, page) {
    state.user.dashboard.page = page;
  },
  setFormDate (state, date) {
    state.question.add.selectedDate = date;
  },
  setOfferDate (state, date) {
    state.others.offer.selectedDate = date;
  },
  addToFiles(state, file) {
    state.question.add.Files.push(file);
  },
  removeFromFiles(state, id) {
    state.question.add.Files = state.question.add.Files.filter(x => x.id !== id);
  },
  removeAllFiles(state) {
    state.question.add.Files = [];
  },
  setNotifs(state, notifs) {
    state.dashboard.notifs = notifs;
  },
  unSetNotifs(state, notif) {
    state.dashboard.notifs = state.dashboard.notifs.filter(x => x.id !== notif);
  }
  ,setUnReadNotifs(state, unReads) {
    state.dashboard.unReads = unReads;
  }
}