<!-- @format -->

<template>
	<div class="view-sm isCenter">
		<Form />
		<List />
	</div>
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

export default {
	components: { Form, List }
}
</script>
