export default function startsWith(startingLetter) {
    return function (text) {
        const givenLetter = text ? text[0] : null;
        if (startingLetter !== givenLetter) return `Expected starting letter = ${startingLetter},Found = ${givenLetter}`;
        return null;
    }
}