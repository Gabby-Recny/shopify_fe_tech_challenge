export const cleanResponseData = (data) => {
    // console.log('Data cleanData Line 2', data)
    return {
        id: data.id,
        created: data.created,
        generatedResponse: data.choices[0].text
    }
}



    //Response Object from Fulfilled Promise
//     Response data 
// {id: 'cmpl-592Ly8MOcSnOCdJ8cFVYCxat4jilf', object: 'text_completion', created: 1652835682, model: 'text-curie-001', choices: Array(1)}
// choices: Array(1)
// 0: {text: '\n1. Be successful.\n\n2. Be liked by people.\n\n3. Be respected by people.\n\n4. Be feared by people.', index: 0, logprobs: null, finish_reason: 'stop'}
// length: 1
// [[Prototype]]: Array(0)


// created: 1652835682
// id: "cmpl-592Ly8MOcSnOCdJ8cFVYCxat4jilf"
// model: "text-curie-001"
// object: "text_completion"
// [[Prototype]]: Object