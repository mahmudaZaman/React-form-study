export default function maxLength(maximumLength){
    return function(text){
        const givenLength = text.length;
        if(givenLength>maximumLength)return `Expected maximumLength length = ${maximumLength},Found = ${givenLength}`;
        return null;
    }
}