
export function paginateUtil(items, pageSize, pageNumber){
    let startIndex = pageNumber*pageSize - pageSize;
    let endIndex = pageNumber*pageSize > items.length ? items.length : pageNumber*pageSize;
    return items.slice(startIndex, endIndex);
}