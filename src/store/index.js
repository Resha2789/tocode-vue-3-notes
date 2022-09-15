/** @format */

import { createStore } from 'vuex'

export const store = createStore({
	state: {
		form: { value: '' },
		notes: [
			{ id: 1, title: 'Learn Vue 3', tags: ['works'] },
			{ id: 2, title: 'Finish course', tags: ['work', 'home'] }
		],
		tags: { all: ['work', 'travel', 'car', 'cool'], active: [] }
	},

	getters: {
		getFormValue({ form }) {
			return form.value
		},
		getNotes({ notes }) {
			return notes
		},
		getTags({ tags }) {
			return tags.all
		},
		getActiveTags({ tags }) {
			return tags.active
		}
	},
	mutations: {
		setFormValue({ form }, value) {
			form.value = value
		},
		setNotes(state, newNotes) {
			state.notes = newNotes
		},
		setNote({ notes }, note) {
			notes.push(note)
		},
		removeNote({ notes }, note) {
			notes.splice(note, 1)
		},
		setActiveTag({ tags }, tag) {
			tags.active.push(tag)
		},
		removeActiveTag({ tags }, tag) {
			tags.active.splice(tags.active.indexOf(tag), 1)
		},
		removeAllActiveTag({ tags }) {
			tags.active.length = 0
		}
	},
	actions: {
		setFormValue({ commit }, value) {
			commit('setFormValue', value)
		},
		setNote({ commit, getters }, [title, tags]) {
			const id = new Date().getTime()
			const note = { id, title, tags }
			commit('setNote', note)
			commit('removeAllActiveTag')
		},
		removeNote({ commit, state }, id) {
			const index = state.notes.findIndex(i => i.id === id)
			commit('removeNote', index)
		},
		setNotes({ commit }, newNotes) {
			commit('setNotes', newNotes)
		},
		updateActiveTag({ commit }, [tag, target]) {
			if (target.classList.contains('isActive')) {
				target.classList.remove('isActive')
				commit('removeActiveTag', tag)
			} else {
				target.classList.add('isActive')
				commit('setActiveTag', tag)
			}
		}
	}
})
