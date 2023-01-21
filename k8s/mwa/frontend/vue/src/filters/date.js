export default (value) => {
  // see: https://forum.vuejs.org/t/how-to-format-date-for-display/3586/26
  const date = new Date(value)
  return date.toLocaleDateString(['de-AT'],
    { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}
