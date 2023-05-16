export function paginate<T>(items: T[], currentPage: number, pageSize: number) {
    const startIndex = currentPage * pageSize;
    return [...items].splice(startIndex, pageSize);
}
