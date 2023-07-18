<script setup lang="ts">
	import { useEmailsStore } from '@/stores/emails'

	const emailsStore = useEmailsStore()

	onMounted(() => {
		window.addEventListener('keydown', emailsStore.handleKeyPress);
	})

	onUnmounted(() => {
		emailsStore.selectedEmails = new Set()
		window.removeEventListener('keydown', emailsStore.handleKeyPress);
	})
</script>

<template>
	<div class="main-wrapper">
		<div class="sidebar-container">
			<div class="company-logo">
				<img src="#"/>
			</div>
			<div class="links-container">
				<ul>
					<NuxtLink to="/inbox">
						<button class="logout no-border no-background">
							<font-awesome-icon icon="fa-solid fa-inbox" />
							Inbox
						</button>
						<span>{{ emailsStore.inboxEmails.length }}</span>
					</NuxtLink>
					<NuxtLink to="/archive">
						<button class="logout no-border no-background">
							<font-awesome-icon icon="fa-solid fa-archive" />
							Archive
						</button>
						<span>{{ emailsStore.archiveEmails.length }}</span>
					</NuxtLink>
				</ul>
			</div>
			<div class="actions-container">
				<div class="action">
					<button class="logout no-border no-background">
						<font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
						Logout
					</button>
				</div>
			</div>
		</div>
		<div class="page-content-container">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
.main-wrapper {
	display: flex;
	flex-direction: row;
	height: 100%;

	.sidebar-container {
		width: 20%;
		height: 100%;
		border-right: 1px solid #E5E7EB;
		padding: 30px 10px;
		position: fixed;
		font-family: PlusJakartaSans;

		> div {
			width: 100%;
		}

		.company-logo {
			margin-bottom: 20px;
		}

		.links-container {
			ul {
				list-style: none;

				a {
					display: inline-block;
					margin-bottom: 17px;
					font-size: 14px;
					color: #000;
					border-radius: 150px;
					background-color: transparent;
					font-family: inherit;
					padding: 11px 22px;
					position: relative;
					cursor: pointer;
					font-weight: bold;
					text-decoration: none;
					color: inherit;
					width: 100%;

					span {
						position: absolute;
						right: 20px;
					}
				}

				.router-link-exact-active {
					background-color: #D6E2FB;
				}
			}
		}

		.actions-container {
			position: absolute;
			bottom: 20px;
			padding-left: 10px;
		}
	}

	.page-content-container {
		width: 80%;
		position: absolute;
		right: 0;
	}
}

</style>