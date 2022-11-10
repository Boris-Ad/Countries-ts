function getData(el: string[] | { name: string }[] = []) {
    const result = [];
    for (let i of el) {
        result.push(i instanceof Object ? i.name : i);
    }
    return result;
}
export default getData;