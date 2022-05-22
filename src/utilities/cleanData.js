export const cleanResponseData = (data) => {
    return {
        generatedResponse: data.choices[0].text
    }
}
