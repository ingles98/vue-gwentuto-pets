export default {
    // addPet: ({ commit }, pet) => {
    //     commit('appendPet', pet)
    // }
    addPet: (context, payload) => {
        context.commit('appendPet', payload)
    }
}