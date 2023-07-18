<script setup lang="ts">
	import { useEmailsStore } from '@/stores/emails'

	const emailsStore = useEmailsStore()

	const selectAllEmails = (e) => {
		const status = e.target.checked

		if (!status) {
			emailsStore.selectedEmails = new Set()
			return;
		}

		for (const email of emailsStore.archiveEmails) {
			emailsStore.selectedEmails.add(email.id)
		}
	}

	onUnmounted(() => {
		emailsStore.selectedEmails = new Set()
	})
</script>

<template>
	<div class="emails-container">
		<EmailPopup />
		<div class="header">
			<h2>Archive</h2>
			<div class="actions-row">
				<div class="select-all">
					<label class="select-box">
						<input type="checkbox" @change="selectAllEmails">
						Email Selected ({{ emailsStore.selectedEmails.size }})
						<span class="checkmark"></span>
					</label>
				</div>
				<div class="other-actions">
					<button class="no-border no-background" @click="emailsStore.markEmailsAsRead">Mark as read (r)</button>
				</div>
			</div>
		</div>
		<div class="emails-listing">
			<div @click.self="emailsStore.openEmailPopup(email)" :class="{ 'read': email.read }" class="single-email" v-for="email in emailsStore.archiveEmails">
				<label class="select-box">
					<input type="checkbox" @change="emailsStore.selectEmail($event, email.id)" :checked="emailsStore.selectedEmails.has(email.id)">
					<span class="checkmark"></span>
				</label>
				<p @click.self="emailsStore.openEmailPopup(email)" class="email-subject">{{ email.subject }}</p>
			</div>
		</div>
	</div>
</template>