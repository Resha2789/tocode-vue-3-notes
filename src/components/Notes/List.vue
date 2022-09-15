<!-- @format -->

<template>
	<div class="note-list">
		<div class="note-item" v-for="note in getNotes" :key="note.id">
			<div class="note-header">
				<p>{{ note.title }}</p>
				<p style="cursor: pointer" @click="removeNote(note.id)">&#x2716;</p>
			</div>
			<div class="note-footer">
				<TagList
					v-if="note.tags && note.tags.length > 0"
					:items="note.tags"
					:isPreview="true"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import TagList from '@/components/UI/TagList.vue'
import { mapGetters, mapActions } from 'vuex'
import { setLocalStorage, getLocalStorage } from '@/Utils/LocalStorage'

export default {
	components: { TagList },
	beforeMount() {
		this.setNotes(getLocalStorage('notes'))
	},
	beforeUpdate() {
		setLocalStorage('notes', this.getNotes)
	},
	computed: {
		...mapGetters(['getNotes'])
	},
	methods: {
		...mapActions(['setNotes', 'removeNote'])
	}
}
</script>

<style lang="scss">
.note-list {
	padding: 40px 0;
}

.note-item {
	width: 100%;
	padding: 18px 20px;
	margin-bottom: 20px;
	border-radius: 14px;
	background-color: #ffffff;
	transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
	box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
	&:hover {
		box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
		transform: translate(0, -6px);
		transition-delay: 0s !important;
	}
}

.note-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.note-footer {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
}
</style>
