
export default function getId(url) {
    if (!url) return;
    const result = url.replace('https://swapi.dev/api/people/', '');
    return result.replace('/', '');
}