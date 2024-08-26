const apiKey = 'sk-kk9LLc2GvipZzkB0spR-fB4RU4q0XVf2d9Fkb144k2T3BlbkFJE_ZDdj9EuJWNWpv6CJezPx2ae2f1afFEaX7u1AVaYA'

// task 1: provide the OpenAI chat completion url
const url = 'replace_with_openai_url' 

function fetchBotReply(prompt) {
  fetch(url, {
      // task 2: define the appropriate http request mode
      method: 'replace_with_request_mode',
      headers: {
          // task 3: define the format of data being sent in http request
          'Content-Type': 'replace_with_data_format',
          'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
          // task 4: define the OpenAI model to use
          'model': 'replace_with_openai_model_name',
          'messages': [{'role': 'user', 
                        'content': prompt}],
          'temperature': 0.1 
      })
  }).then(response => response.json())
    .then(data => console.log(data))
}

//fetchBotReply("What day is after Monday?")



























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
                        'content': prompt}],
          'temperature': 0.1 
      })
  }).then(response => response.json())
    .then(data => console.log(data))
}