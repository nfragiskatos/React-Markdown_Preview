import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const initialMarkdown =
	'## Heading 2 \n### Heading 3 \n###### Heading 6 \n> Here is a quote \nI\'m a paragraph with **bold** text and *italic* text \n- first  \n- section \n- third \n1. first \n2. second \n3. third \n``` \n// Here is some code \nconsole.log("hello"); \n``` \n[google link](https://www.google.com) \n\n![image](http://www.schoolphotoproject.com/_picture-of-toys/yellow-rubber-duck-photo2-l.jpg)';

function App () {
	const [ markdown, setMarkdown ] = useState(initialMarkdown);
	return (
		<main>
			<section className='markdown'>
				<textarea className='input' value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
				<article className='result'>
					<ReactMarkdown>{markdown}</ReactMarkdown>
				</article>
			</section>
		</main>
	);
}

export default App;
