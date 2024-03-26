async function checkForText(inputText) {
    // console.log("::: Running checkForText :::", inputText);
    if (!inputText){
      alert('Enter the text')
      return false
    } else {
      return true
    }
}



export { checkForText }
