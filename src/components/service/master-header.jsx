export default function masterHeader(data=null) {
    return {
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
        RequestVerificationToken:data,
        Authorization:`Bearer ${data}`,
        'Content-Type': 'application/json'};
}
