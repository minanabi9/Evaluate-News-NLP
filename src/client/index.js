import { checkForText } from './js/textChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.css'
import './styles/base.css'
import './styles/form.css'
import './styles/footer.css'
import './styles/header.css'


// console.log(checkForText);

// alert("I  EXIST")
// console.log("CHANGE!!");

export {
  checkForText,
  handleSubmit
}


const button = document.querySelector('#submit');
button.addEventListener('click', () => {
  // alert('but')
  const text = document.querySelector('#text').value;
  // alert(text)
  if (Client.checkForText(text)) {
    sendText(text)
    handleResult(event)
  }
})

async function sendText(text) {
  // alert('SEND TEXT')
  await fetch('http://localhost:8081/Text', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      text: text
    }),
  })
  // alert(JSON.stringify({text: text}))
}

function handleResult(event) {
  event.preventDefault()
  document.querySelector('#title').innerHTML = `Click to The Below Button to Show Form Result: `
  document.querySelector('#processing_button').innerHTML = `<input type="button" id="button" value="Show Results">`
  document.querySelector('#result_code').innerHTML = ``
  document.querySelector('#result_message').innerHTML = ``
  document.querySelector('#result_text').innerHTML = ``
  document.querySelector('#result_subjectivity').innerHTML = ``
  document.querySelector('#result_confidence').innerHTML = ``
  document.querySelector('#result_agreement').innerHTML = ``
  document.querySelector('#result_irony').innerHTML = ``
  const processing_button = document.querySelector('#button');
  processing_button.addEventListener('click', () => {
    document.querySelector('#title').innerHTML = ``
    document.querySelector('#processing_button').innerHTML = `Data Processing ...`
    setTimeout(() => {
      Client.handleSubmit(event)
    }, 1000)
  })
}