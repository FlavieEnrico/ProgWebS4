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