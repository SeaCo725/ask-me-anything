const dateDifference = (hours, days = 0, months = 0, years = 0) => {
  const now = new Date();
  
  now.setHours(now.getHours() + hours);
  now.setDate(now.getDate() + days);
  now.setMonth(now.getMonth() + months);
  now.setFullYear(now.getFullYear() + years);
  
  return now.toISOString();
};

export default dateDifference