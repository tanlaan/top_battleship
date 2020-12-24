const Ship = (name, length) => {
    const hits = new Array(length)

    const hit = (place) => {
        hits[place] = 'x'
    }
    const isSunk = () => { 
        return hits.filter(String).length === length 
    }

    return {
        name,
        length,
        hits,
        hit,
        isSunk
    }
}

export default Ship