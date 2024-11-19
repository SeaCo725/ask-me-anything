//cleans data to convert strings to integers where possible and remove empty strings

const cleanUserInput = formInput => {
  Object.keys(formInput).forEach(field => {
    if(formInput[field] === "") {
      delete formInput[field]
    }
    if (field.includes('Id') || field.includes('id')) {
      const parsedField = parseInt(formInput[field])
      if (!isNaN(parsedField)) {
        formInput[field] = parsedField
      }
    }
  })
  return formInput
}

export default cleanUserInput