import Vue from 'vue'
import Backendless from 'backendless'

const APP_ID = 'FD40C95D-027C-5422-FF41-091B96722500'
const API_KEY = '233B7ECF-5D4A-4755-8686-EA2929862C72'

Backendless.initApp(APP_ID, API_KEY)

Vue.use(Backendless)
