<!-- @format -->

<template>
	<div class="view-sm isCenter">
		<Form @onSubmit="handleSubmit" />
		<List @onRemove="handleRemove" :items="notes" />
	</div>
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

export default {
	components: { Form, List },
	data() {
		return {
			notes: [
				{ title: 'Learn Vue 3', tags: ['works'] },
				{ title: 'Finish course', tags: ['work', 'home'] }
			]
		}
	},
	mounted() {
		this.getNotes()
	},
	watch: {
		notes: {
			handler(updateList) {
				localStorage.setItem('notes', JSON.stringify(updateList))
			},
			deep: true
		}
	},
	methods: {
		getNotes() {
			const localNotes = localStorage.getItem('notes')
			if (localNotes) {
				this.notes = JSON.parse(localNotes)
			}
		},
		handleSubmit([title, tags]) {
			console.log(title, tags)
			const note = {
				title,
				tags
			}
			this.notes.push(note)
		},
		handleRemove(index) {
			this.notes.splice(index, 1)
		}
	}
}
</script>
