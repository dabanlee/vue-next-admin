import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { VueNextAdmin } from '@types'

const state: VueNextAdmin.AppState = {
    sideOpen: true,
}

const mutations: MutationTree<VueNextAdmin.AppState> = {
    OPEN_SIDEBAR: (state) => {
        state.sideOpen = true
    },
    CLOSE_SIDEBAR: (state) => {
        state.sideOpen = false
    },
    TOGGLE_SIDEBAR: (state) => {
        state.sideOpen = !state.sideOpen
    },
}

const actions: ActionTree<VueNextAdmin.AppState, VueNextAdmin.State> = {}

const getters: GetterTree<VueNextAdmin.AppState, VueNextAdmin.State> = {
    sideOpen: state => state.sideOpen,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}