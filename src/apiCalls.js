export const postNewResponses = (newPrompt) => {
    return fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        body: JSON.stringify({
            prompt: `${newPrompt}`,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penality: 0.0,
        })
    })
    .then(response => checkResponse(response))
}

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error(`Error`)
    } else {
        return response.json()
    }
}

