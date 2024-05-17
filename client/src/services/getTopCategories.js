const countCategories = (events) => {  
  let categoryCounts = {}
  events.forEach(event => {
    const categoryName = event.category.name
    if (categoryCounts[categoryName]) {
      categoryCounts[categoryName]++;
    } else {
      categoryCounts[categoryName] = 1
    }
  });
  return categoryCounts
}
  
const getTopCategories = (events, limit) => {
  const categoryCounts = countCategories(events)
  const categoryCountsArray = Object.entries(categoryCounts)
  categoryCountsArray.sort((a,b) => b[1] - a[1])
  const topCategories = categoryCountsArray.slice(0, limit)
  return topCategories.map(([category]) => category)
}

export default getTopCategories