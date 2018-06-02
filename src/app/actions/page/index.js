export default {
  showHomeTextTriggered: () => (state, actions) => {
    setTimeout(actions.showHomeText, 3500)
  },
  showHomeText: () => (state) => ({
    showHomeText: true,
  }),
}
