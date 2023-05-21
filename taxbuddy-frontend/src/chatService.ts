
const getResponse = async (message: string, messages: any) => {
    const response = await fetch('https://y30t23prk2.execute-api.eu-west-1.amazonaws.com/funkyLambda', {
        method: 'POST',
        body: JSON.stringify({ question: message, conversation: messages }),
    });
    const jsonData = await response.json();
    return jsonData;
};

export { getResponse };