export default {
  toggleUnfoldBurger: ({ value }) => (state) => ({
    unfoldBurger: value,
  }),
  toggleGraph: () => (state) => ({
    showGraph: !state.showGraph,
  }),
  toggleSlice: ({ sliceName }) => (state) => {
    let previousBurger = state.currentBurger
    let isSliceInBurger = previousBurger.indexOf(sliceName)
    let newBurger =
      isSliceInBurger > -1
        ? [...previousBurger.slice(0, isSliceInBurger), ...previousBurger.slice(isSliceInBurger + 1)]
        : [...previousBurger, sliceName]

    return { currentBurger: newBurger }
  },
}
