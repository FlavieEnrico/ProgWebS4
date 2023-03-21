const getBugsData = async function() {
    const response = await fetch("https://acnhapi.com/v1/bugs")
    if (response.status == 200) {
        return response.json()
    } else {
        throw new Error(response.statusText)
    }
}

export {getBugsData}