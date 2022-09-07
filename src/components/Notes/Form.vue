<!-- @format -->

<template>
	<div class="note-form-wrapper">
		<form class="note-form" @submit.prevent="onSubmit">
			<textarea
				type="text"
				required
				placeholder="Type ur note"
				v-model="value"
			/>
			<TagList @onItemClick="handleTagClick" :items="tags" />
			<button class="btn btnPrimary" type="submit">Add new note</button>
		</form>
	</div>
</template>

<script>
import TagList from '@/components/UI/TagList.vue'

export default {
	components: { TagList },
	data() {
		return {
			value: '',
			tags: ['work', 'travel', 'car']
		}
	},

	methods: {
		onSubmit() {
			this.$emit('onSubmit', this.value)
			this.value = ''
		},
		handleTagClick(tag) {
			console.log(tag)
		}
	}
}
</script>

<style lng="scss">
.note-form-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.note-form {
	display: flex;
	flex-direction: column;
	max-width: 600px;
	width: 100%;
}
</style>
