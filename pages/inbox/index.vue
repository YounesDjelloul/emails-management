<script setup lang="ts">
	import { useEmailsStore } from '@/stores/emails'

	const emailsStore = useEmailsStore()

	const selectAllEmails = (e) => {
		const status = e.target.checked

		if (!status) {
			emailsStore.selectedEmails = new Set()
			return;
		}

		for (const email of emailsStore.inboxEmails) {
			emailsStore.selectedEmails.add(email.id)
		}
	}
</script>

<template>
	<div class="emails-container">
		<EmailPopup />
		<div class="header">
			<h2>Inbox</h2>
			<div class="actions-row">
				<div class="select-all">
					<label class="select-box">
						<input type="checkbox" @change="selectAllEmails">
						Email Selected ({{ emailsStore.selectedEmails.size }})
						<span class="checkmark"></span>
					</label>
				</div>
				<div class="other-actions">
					<button class="no-border no-background" @click="emailsStore.markEmailsAsRead">
						<font-awesome-icon icon="fa-solid fa-envelope-open" />	
						Mark as read (r)
					</button>
					<button class="no-border no-background" @click="emailsStore.moveEmailsToArchive">
						<font-awesome-icon icon="fa-solid fa-trash" />
						Archive (a)
					</button>
				</div>
			</div>
		</div>
		<div class="emails-listing">
			<div @click.self="emailsStore.openEmailPopup(email)" :class="{ 'read': email.read }" class="single-email" v-for="email in emailsStore.inboxEmails">
				<label class="select-box">
					<input type="checkbox" @change="emailsStore.selectEmail($event, email.id)" :checked="emailsStore.selectedEmails.has(email.id)">
					<span class="checkmark"></span>
				</label>
				<p @click.self="emailsStore.openEmailPopup(email)" class="email-subject">{{ email.subject }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import url('@/assets/scss/components/emails.scss');
</style>