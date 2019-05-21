import Prism from 'prismjs'
// import './styles/prism-monokai.css'
import './styles/global.css'

Prism.highlightAll()
Prism.plugins.NormalizeWhitespace.setDefaults({
	'break-lines': 80,
	'tabs-to-spaces': 2
})

Prism.plugins.toolbar.registerButton('select-code', function(env) {
	var button = document.createElement('button')
	button.innerHTML = 'Copy'

	button.addEventListener('click', function() {
		if (document.body.createTextRange) {
			// ms
			var range = document.body.createTextRange()
			range.moveToElementText(env.element)
			range.select()
			document.execCommand('copy')
		} else if (window.getSelection) {
			// moz, opera, webkit
			var selection = window.getSelection()
			var range = document.createRange()
			range.selectNodeContents(env.element)
			selection.removeAllRanges()
			selection.addRange(range)
			document.execCommand('copy')
			selection.removeRange(range)
		}
	})

	return button
})
