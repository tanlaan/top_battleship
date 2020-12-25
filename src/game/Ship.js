const Ship = (length) => {
    const hits = new Array(length)

    const hit = (place) => {
        hits[place] = 'x'
    }
    const isSunk = () => { 
        return hits.filter(String).length === length 
    }

    return {
        length,
        hits,
        hit,
        isSunk
    }
}

export default Ship