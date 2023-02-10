const sortCategory = (dataItems, categoryValue) => {
  switch (categoryValue) {
    case "Art": return dataItems.filter((item) => {
      return item.volumeInfo?.categories?.[0] === "Art";
    })
    case "Biography": return dataItems.filter((item) => {
      return item.volumeInfo?.categories?.[0] === "Biography"
    })
    case "Computers": return dataItems.filter((item) => {
      return  item.volumeInfo?.categories?.[0] === "Computers"
    })
    case "History": return dataItems.filter((item) => {
      return item.volumeInfo?.categories?.[0] === "History"
    })
    case "Medical": return dataItems.filter((item) => {
      return item.volumeInfo?.categories?.[0] === "Medical"
    })
    case "Poetry": return dataItems.filter((item) => {
      return item.volumeInfo?.categories?.[0] === "Poetry"
    })
    default: return dataItems;
  }


}
export default sortCategory;