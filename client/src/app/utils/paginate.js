export function paginate(items, currentPage, pageSize) {
    const startIndex = currentPage * pageSize;
    return [...items].splice(startIndex, pageSize);
}
