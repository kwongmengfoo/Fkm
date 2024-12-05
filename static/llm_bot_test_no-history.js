const apiKey = 'sk-kk9LLc2GvipZzkB0spR-fB4RU4q0XVf2d9Fkb144k2T3BlbkFJE_ZDdj9EuJWNWpv6CJezPx2ae2f1afFEaX7u1AVaYA'

// define variable to hold LLM system response
var system_prompt = {'role': 'system',
                     'content': 'You are a helpful assistant. ' + 
                                'Always be polite and provide your answer in a concise manner.'}

// define variable to hold LLM response
var llm_response = ''

// task 1: provide the OpenAI chat completion url
const url = 'https://api.openai.com/v1/chat/completions' 

function fetchBotReply(prompt) {
  // prepare user query
  var user_query = {'role': 'user', 
                    'content': prompt}
  // send user query to LLM via api call
  fetch(url, {
      // task 2: define the appropriate http request mode
      method: 'POST',
      headers: {
          // task 3: define the format of data being sent in http request
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
          // task 4: define the OpenAI LLM to use
          'model': 'gpt-4o-mini',
          'messages': [system_prompt,
                       user_query],
          'temperature': 0.1
      })
  }).then(response => response.json())
    .then(data => { llm_response = data.choices[0].message.content.trim()
                    // send llm response to console
                    console.log(llm_response) })
}

// =============
// Chat examples
// =============
//
// fetchBotReply('What is the capital of Spain?')
// fetchBotReply('Tell me more about it.')
// fetchBotReply('When is the best time to visit?')
// fetchBotReply('What football club is there?')


