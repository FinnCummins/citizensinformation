
const getResponse = async (message: string) => {
    const response = await fetch('https://y30t23prk2.execute-api.eu-west-1.amazonaws.com/funkyLambda', {
        method: 'POST',
        body: JSON.stringify({ question: message, conversation: [] }),
    });
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
};

export { getResponse };