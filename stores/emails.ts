import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useEmailsStore = defineStore('emails', () => {

  // Mock Data
  const stateData = ref([{"id":8,"subject":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.","detail":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","status":"inbox","read":false},
  {"id":74,"subject":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","detail":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","status":"inbox","read":false},
  {"id":57,"subject":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.","detail":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","status":"archive","read":false},
  {"id":80,"subject":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","detail":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.","status":"inbox","read":false},
  {"id":10,"subject":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","detail":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","status":"inbox","read":true},
  {"id":90,"subject":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","detail":"In congue. Etiam justo. Etiam pretium iaculis justo.","status":"archive","read":true},
  {"id":27,"subject":"Sed ante. Vivamus tortor. Duis mattis egestas metus.","detail":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","status":"archive","read":true},
  {"id":40,"subject":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","detail":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","status":"inbox","read":false},
  {"id":80,"subject":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","detail":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","status":"archive","read":true},
  {"id":77,"subject":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.","detail":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","status":"archive","read":true},
  {"id":97,"subject":"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","detail":"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.","status":"inbox","read":true},
  {"id":19,"subject":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","detail":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.","status":"archive","read":true},
  {"id":53,"subject":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","detail":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.","status":"archive","read":false},
  {"id":41,"subject":"Phasellus in felis. Donec semper sapien a libero. Nam dui.","detail":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","status":"inbox","read":false},
  {"id":26,"subject":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.","detail":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","status":"inbox","read":false},
  {"id":63,"subject":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","detail":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.","status":"archive","read":true},
  {"id":86,"subject":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.","detail":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","status":"inbox","read":true},
  {"id":74,"subject":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.","detail":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","status":"archive","read":false},
  {"id":36,"subject":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.","detail":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","status":"archive","read":false},
  {"id":75,"subject":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.","detail":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.","status":"inbox","read":true}])

  const inboxEmails = computed(() => stateData.value.filter((email) => email.status == 'inbox'))
  const archiveEmails = computed(() => stateData.value.filter((email) => email.status == 'archive'))
  const showEmailPopup = ref(false)
  const selectedEmails = ref(new Set())
  const emailToShow = ref({})

  const selectEmail = (e, emailId: number) => {
		const status = e.target.checked

		status ?
			selectedEmails.value.add(emailId)
			: selectedEmails.value.delete(emailId)
	}

  const openEmailPopup = (email: object) => {
		emailToShow.value = email
		showEmailPopup.value = true
	}

  const markEmailsAsRead = () => {
		if (selectedEmails.value.size == 0) {
			return;
		}

		for (const emailIndex in stateData.value) {
			const email = stateData.value[emailIndex]

			if (selectedEmails.value.has(email.id)) {
				stateData.value[emailIndex].read = true
			}
		}

		selectedEmails.value = new Set()
	}

  const moveEmailsToArchive = () => {
		if (selectedEmails.value.size == 0) {
			return;
		}

		for (const emailIndex in stateData.value) {
			const email = stateData.value[emailIndex]

			if (selectedEmails.value.has(email.id)) {
				stateData.value[emailIndex].status = 'archive'
			}
		}

		selectedEmails.value = new Set()
	}

  const markEmailAsRead = () => {
    for (const emailIndex in stateData.value) {
      const email = stateData.value[emailIndex]
  
      if (email.id == emailToShow.value.id) {
        stateData.value[emailIndex].read = true
        break
      }
    }
  
    cleanEmailPopup()
  }
  
  const moveEmailToArchive = () => {
    for (const emailIndex in stateData.value) {
      const email = stateData.value[emailIndex]
  
      if (email.id == emailToShow.value.id) {
        stateData.value[emailIndex].status = 'archive'
        break
      }
    }
  
    cleanEmailPopup()
  }

  function cleanEmailPopup() {
    showEmailPopup.value = false
    emailToShow.value = {}
  }

  const keyActions = {
    "82_all": markEmailsAsRead,
    "82_one": markEmailAsRead,
    "65_all": moveEmailsToArchive,
    "65_one": moveEmailToArchive
  }

  const handleKeyPress = (e) => {
		let keyCode = e.keyCode
		const allowedKeyCodes = [82, 65]

		if (!allowedKeyCodes.includes(keyCode)) {
			return;
		}

		if (Object.keys(emailToShow.value).length == 0) {
			keyCode += '_all'
		} else {
			keyCode += '_one'
		}

		keyActions[keyCode]()
	}

  return {
    stateData,
    inboxEmails,
    archiveEmails,
    showEmailPopup,
    selectedEmails,
    emailToShow,
    keyActions,

    selectEmail,
    openEmailPopup,
    markEmailsAsRead,
    moveEmailsToArchive,
    cleanEmailPopup,
    handleKeyPress,
  } as const
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEmailsStore, import.meta.hot))
}
