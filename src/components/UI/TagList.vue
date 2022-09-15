<!-- @format -->

<template>
	<div class="tags-list">
		<div
			class="tag-item"
			v-for="item in items"
			:key="item"
			:class="classSet(item)"
			@click="onSubmit([item, $event.target])"
		>
			{{ item }}
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	props: {
		items: {
			type: Array
		},
		activeTags: {
			type: Array
		},
		isPreview: {
			type: Boolean,
			default: false
		},
		isSetActive: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		onSubmit([item, target]) {
			console.log(target)
			this.$emit('onSubmit', [item, target])
		},

		classSet(item) {
			const pClass = []
			if (this.isPreview) {
				pClass.push('isPreview')
			}
			if (this.isSetActive) {
				if (this.activeTags.find(tag => tag == item)) {
					pClass.push('isActive')
				}
			}
			return pClass
		}
	}
}
</script>

<style lang="scss">
.tags-list {
	padding: 10px 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.tag-item {
	padding: 8px 22px;
	margin-right: 10px;
	background-color: #fff;
	border-radius: 22px;
	user-select: none;
	cursor: pointer;
	&.isActive {
		background-color: #444ce0;
		color: #fff;
	}
	&.isPreview {
		padding: 0;
		color: #444ce0;
		cursor: default;
		&:before {
			content: '#';
		}
	}
	&:last-child {
		margin-right: 0;
	}
}
</style>
