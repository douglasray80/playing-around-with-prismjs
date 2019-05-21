import React from 'react'

const JSX = `
	const Component = ({ someProp }) => (
		<div>
			{someProp.text}
		</div>
	)
`
const JS = `
	function() {
		return 'I love my special gal!'
	}
`

function App() {
	return (
		<div>
			<h2>React - JSX</h2>
			<pre data-start={1} className='line-numbers'>
				<code className='language-jsx'>{JSX}</code>
			</pre>

			<h2>Bash</h2>
			<pre data-prompt='[douglas@dpr-desktop ~]$ ' className='command-line'>
				<code className='language-bash'>mkdir iLoveLexy</code>
			</pre>

			<h2>Javascript</h2>
			<pre data-start={1} className='line-numbers'>
				<code className='language-javascript'>{JS}</code>
			</pre>
		</div>
	)
}

export default App
