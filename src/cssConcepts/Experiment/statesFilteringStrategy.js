


/*
    const states = {
        "AN":"Andaman and Nicobar Islands",
    }
    filter over state key and full name as well

    const states = {
    "AN":"Andaman and Nicobar Islands",
    "AP":"Andhra Pradesh",
    "AR":"Arunachal Pradesh",
    "AS":"Assam",
    "BR":"Bihar",
    "CG":"Chandigarh",
    "CH":"Chhattisgarh",
    "DN":"Dadra and Nagar Haveli",
    "DD":"Daman and Diu", and
    "DL":"Delhi",
    "GA":"Goa",
    "GJ":"Gujarat",
    "HR":"Haryana",
    "HP":"Himachal Pradesh",
    "JK":"Jammu and Kashmir",
    "JH":"Jharkhand",
    "KA":"Karnataka",
    "KL":"Kerala",
    "LA":"Ladakh",
    "LD":"Lakshadweep",
    "MP":"Madhya Pradesh",
    "MH":"Maharashtra",
    "MN":"Manipur",
    "ML":"Meghalaya",
    "MZ":"Mizoram",
    "NL":"Nagaland",
    "OR":"Odisha",
    "PY":"Puducherry",
    "PB":"Punjab",
    "RJ":"Rajasthan",
    "SK":"Sikkim",
    "TN":"Tamil Nadu",
    "TS":"Telangana",
    "TR":"Tripura",
    "UP":"Uttar Pradesh",
    "UK":"Uttarakhand",
    "WB":"West Bengal"
  }

*/

export const filterStates = (_userInput, statesList) => {
    if (!_userInput || !statesList) return []
    const userInput = _userInput.trim().toLowerCase()
    if (!userInput.length) return []

    const keys = Object.keys(statesList)
    const result = []

    keys.forEach((key) => {
        const textsToInclude = [key.toLowerCase() , statesList[key].toLowerCase()]
        const userInputPresent = textsToInclude.some((str) => {
            return str.includes(userInput)
        })
        if (userInputPresent) result.push(statesList[key])
    })

    return result
}