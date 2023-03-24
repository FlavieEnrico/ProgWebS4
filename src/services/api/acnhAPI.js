const getBugsData = async function() {
    const response = await fetch("https://acnhapi.com/v1/bugs")
    if (response.status == 200) {
        return response.json()
    } else {
        throw new Error(response.statusText)
    }
}

export {getBugsData}

const getFishesData = async function() {
    const response = await fetch("https://acnhapi.com/v1/fish")
    if (response.status == 200) {
        return response.json()
    } else {
        throw new Error(response.statusText)
    }
}

export {getFishesData}

const getSeaCreaturesData = async function() {
    const response = await fetch("https://acnhapi.com/v1/sea")
    if (response.status == 200) {
        return response.json()
    } else {
        throw new Error(response.statusText)
    }
}

export {getSeaCreaturesData}