const cleanAttribute = (attribute: string) =>
  attribute
    .split('_')
    .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .join(' ')

export default cleanAttribute
