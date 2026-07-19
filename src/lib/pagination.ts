/**
 * Paginate an array.
 */
export function paginate<T>(
  items: T[],
  currentPage: number,
  itemsPerPage: number
) {
  const totalItems = items.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  return {
    items: items.slice(startIndex, endIndex),

    currentPage,

    totalPages,

    totalItems,

    hasPrevious: currentPage > 1,

    hasNext: currentPage < totalPages,
  };
}