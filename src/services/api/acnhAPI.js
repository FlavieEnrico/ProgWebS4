const getBugsData = async function() {
    const response = await fetch("https://acnhapi.com/v1/bugs")
    if (response.status == 200) {
        const data = await response.json()
        return Object.values(data).map(bug => ({...bug, name: bug.name["name-USen"] + ""}))
    } else {
        throw new Error(response.statusText)
    }
}

export {getBugsData}

const getBugDataByName = async function(bugId) {
    const response = await fetch(`https://acnhapi.com/v1/bugs/${bugId}`)
    if (response.status === 200) {
      const bugData = await response.json()
      return { ...bugData, name: bugData.name['name-USen'] }
    } else {
      throw new Error(response.statusText)
    }
  }
  

export {getBugDataByName}

const capitalizeString = async function(str) {
    // split the string into an array of words
    let words = str.split(" ");

    // iterate through each word and capitalize the first letter
    for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    // join the words back together into a single string
    return words.join(" ");
}

export {capitalizeString}

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