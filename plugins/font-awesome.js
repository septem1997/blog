import vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faGlasses, faFlask, faBriefcase, faCalendarAlt, faPhone, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBook, faGlasses, faFlask, faBriefcase, faCalendarAlt, faPhone, faEnvelope, faCode)

vue.component('font-awesome-icon', FontAwesomeIcon)
