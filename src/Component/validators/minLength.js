export default function minLength(minmumLength){
    return function(text){
        const givenLength = text.length;
        if(givenLength<minmumLength)return `Expected minimum length = ${minmumLength},Found = ${givenLength}`;
        return null;
    }
}