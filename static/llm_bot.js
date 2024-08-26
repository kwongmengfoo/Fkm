// define the html elements that we are going to manipulate to set up the chat interface
const setupTextarea = document.getElementById('setup-textarea') 
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

// event listener to define action after `send` button has been clicked
document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {

    // status to notify user that user messenger is being processed
    movieBossText.innerHTML = `Ok, just wait a second while my digital brain digests that... 
                               <br><br><img src="./static/loading.svg" 
                               class="loading" id="loading">`

    // call `fetchBotReply` function to send user message to OpenAI GPT LLM
    // and get LLM response
    fetchBotReply('')
  }
})

//------------------------------------------------------------------
// pass the content of `fetch_task.js` below
//------------------------------------------------------------------

const apiKey = 'sk-kk9LLc2GvipZzkB0spR-fB4RU4q0XVf2d9Fkb144k2T3BlbkFJE_ZDdj9EuJWNWpv6CJezPx2ae2f1afFEaX7u1AVaYA'

// task 1: provide the OpenAI chat completion url
const url = 'https://api.openai.com/v1/chat/completions' 

function fetchBotReply(prompt) {
  fetch(url, {
      // task 2: define the appropriate http request mode
      method: 'POST',
      headers: {
          // task 3: define the format of data being sent in http request
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
          // task 4: define the OpenAI model to use
          'model': 'gpt-3.5-turbo',
          'messages': [{'role': 'user', 
                        'content': setupTextarea.value}],
          'temperature': 0.1 
      })
  }).then(response => response.json())
    .then(data => movieBossText.innerText = 
                     data.choices[0].message.content.trim())
  // clear user message to prepare for the next chat message
  setupTextarea.value = ''
}




