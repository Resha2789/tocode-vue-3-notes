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
			<button class="btn btnPrimary" type="submit">Add new note</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: ''
		}
	},

	methods: {
		onSubmit() {
			this.$emit('onSubmit', this.value)
			this.value = ''
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
