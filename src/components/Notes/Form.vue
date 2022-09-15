<!-- @format -->

<template>
	<div class="note-form-wrapper">
		<form
			class="note-form"
			@submit.prevent="
				handleSubmitNote([value, [...getActiveTags]]), (value = '')
			"
		>
			<textarea
				class="note-textarea"
				type="text"
				required
				placeholder="Type ur note"
				v-model="value"
			/>
			<TagList
				@onSubmit="handleSubmitTag"
				:items="getTags"
				:activeTags="getActiveTags"
				:isSetActive="true"
			/>
			<button class="btn btnSuccess btn-form" type="submit">New note</button>
		</form>
	</div>
</template>

<script>
import TagList from '@/components/UI/TagList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
	components: { TagList },
	data() {
		return {
			value: ''
		}
	},
	beforeMount() {
		this.value = this.getFormValue
	},
	beforeUnmount() {
		this.handleSubmitFromValue(this.value)
	},
	computed: {
		...mapGetters(['getFormValue', 'getTags', 'getActiveTags'])
	},
	methods: {
		...mapActions({
			handleSubmitNote: 'setNote',
			handleSubmitTag: 'updateActiveTag',
			handleSubmitFromValue: 'setFormValue'
		})
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
	align-items: center;
	max-width: 100%;
	width: 100%;
}
.btn-form {
	max-width: 200px;
}
.note-textarea {
	margin-bottom: 10px;
}
</style>
