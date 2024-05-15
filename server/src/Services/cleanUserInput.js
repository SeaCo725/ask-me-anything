const cleanUserInput = formInput => {
  Object.keys(formInput).forEach(field => {
    if(formInput[field] === "") {
      delete formInput[field]
    }
    const parsedField = parseInt(formInput[field])
    if (!isNaN(parsedField)) {
      formInput[field] = parsedField
    }
  })
  return formInput
}

export default cleanUserInput