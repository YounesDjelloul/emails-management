<script setup lang="ts">
import { useEmailsStore } from '@/stores/emails'

const emailsStore = useEmailsStore()
</script>

<template>
	<div class="popup-container" :class="{ 'is-open': emailsStore.showEmailPopup }" @click.self="emailsStore.showEmailPopup = false">
		<div class="popup-content" :class="{ 'is-open': emailsStore.showEmailPopup }">
			<div class="header">
				<div class="actions-row">
					<div class="close-action">
						<button class="no-border no-background" @click="emailsStore.showEmailPopup = false">
							<font-awesome-icon icon="fa-solid fa-close" />
							Close (Esc)
						</button>
					</div>
					<div class="other-actions">
						<button class="no-border no-background" @click="emailsStore.markEmailAsRead">
							<font-awesome-icon icon="fa-solid fa-envelope-open" />
							Mark as read (r)
						</button>
						<button class="no-border no-background" @click="emailsStore.moveEmailToArchive">
							<font-awesome-icon icon="fa-solid fa-trash" />
							Archive (a)
						</button>
					</div>
				</div>
			</div>
			<div class="email-details">
				<h3 class="email-subject">{{ emailsStore.emailToShow.subject }}</h3>
				<p class="email-detail">{{ emailsStore.emailToShow.detail }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.popup-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1999;
	background-color: rgba(0, 0, 0, 0.6);
	opacity: 0;
  visibility: hidden;
  transition: opacity 2s, visibility 0s linear 0.3s;

	.popup-content {
		width: 60%;
    position: fixed;
    background: #fff;
    height: 100%;
		border-radius: 4px 0 0 4px;
		transition: right 0.3s;
		right: -400px;
		top: 0;

		.header {
			padding-top: 10px;
		}

		.email-details {
			padding: 0 25px;

			h3 {
				margin-bottom: 20px;
			}

			p {
				font-size: 14px;
			}
		}
	}
}

.popup-container.is-open {
	opacity: 1;
  visibility: visible;
  transition: opacity 0.3s;
}

.popup-container.is-open .popup-content {
	right: 0px;
  transition: right 0.3s;
}
</style>