import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: '',
        activeTab: 'photos',
        results: [],
        loading: false,
        error: null
    },
    reducers: {
        setQuery(state, actions) {
            state.query = actions.payload
        },
        setActiveTabs(state, actions) {
            state.activeTab = actions.payload
        },
        setLoading(state) {
            // state.loading = actions.payload
            state.loading = true
            state.error = null
        },
        setResults(state, actions) {
            state.results = actions.payload
        },
        setError(state, actions) {
            state.error = actions.payload
            state.loading = false
        },
        clearResults(state){
            state.results = []
        }
    }
})

export const {setActiveTabs, setError, setLoading, setQuery, setResults, clearResults} = searchSlice.actions

export default searchSlice.reducer