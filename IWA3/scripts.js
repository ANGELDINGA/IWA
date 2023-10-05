// scripts.js
import {company} from './configuration.js'
import {year} from './configuration.js'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message

// ./ , added import, added curly brackets to company and year, export 