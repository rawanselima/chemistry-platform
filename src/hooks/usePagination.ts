import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const DOTS = "...";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  siblingCount?: number;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = ({
  totalItems,
  itemsPerPage,
  siblingCount = 1,
  enableSearchParams = false,
}: PaginationProps & {
  enableSearchParams?: boolean;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [internalPage, setInternalPage] = useState(1);

  const currentPage = enableSearchParams
    ? Number(searchParams.get("page")) || 1
    : internalPage;

  const totalPageCount = Math.ceil(totalItems / itemsPerPage);

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return range(1, totalPageCount);
  }, [totalItems, itemsPerPage, siblingCount, currentPage, totalPageCount]);

  const handlePageChange = (val: number | ((prev: number) => number)) => {
    const newPage = typeof val === "function" ? val(currentPage) : val;
    if (enableSearchParams) {
      setSearchParams((prev) => {
        prev.set("page", String(newPage));
        return prev;
      });
    } else {
      setInternalPage(newPage);
    }
  };

  const nextPage = () => {
    handlePageChange((prev) => Math.min(prev + 1, totalPageCount));
  };

  const prevPage = () => {
    handlePageChange((prev) => Math.max(prev - 1, 1));
  };

  return {
    currentPage,
    paginationRange,
    nextPage,
    prevPage,
    setCurrentPage: handlePageChange,
    totalPageCount,
  };
};

export default usePagination;
