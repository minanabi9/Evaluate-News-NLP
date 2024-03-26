async function handleSubmit(event) {
    event.preventDefault()

    let prtData = await getData()
    document.querySelector('#title').innerHTML = `Form Results:`
    document.querySelector('#processing_button').innerHTML = ``
    document.querySelector('#result_code').innerHTML = `Status Code: ${prtData.status_code}`
    document.querySelector('#result_message').innerHTML = `Status Message: ${prtData.status_message}`
    document.querySelector('#result_text').innerHTML = `Sentence Text: ${prtData.sentence_text}`
    document.querySelector('#result_subjectivity').innerHTML = `Subjectivity: ${prtData.subjectivity}`
    document.querySelector('#result_confidence').innerHTML = `Confidence: ${prtData.confidence}`
    document.querySelector('#result_agreement').innerHTML = `Agreement: ${prtData.agreement}`
    document.querySelector('#result_irony').innerHTML = `Irony: ${prtData.irony}`
}

async function getData(){
  const res = await fetch('http://localhost:8081/Data');
  try{
    const data = await res.json();
    // alert(res)
    return data;
  }catch(e){
    console.log(`error: ${e}`);
  }
}

export { handleSubmit }
