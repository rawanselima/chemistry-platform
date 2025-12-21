import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


interface PaginationProps {
  currentPage: number;
  paginationRange: (string | number)[];
  nextPage: () => void;
  prevPage: () => void;
  setCurrentPage: (page: number) => void;
  totalPageCount: number;
}

const PaginationDiv = ({
  currentPage,
  paginationRange,
  nextPage,
  prevPage,
  setCurrentPage,
  totalPageCount,
}: PaginationProps) => {
  return (
    <Pagination className="mb-3">
      <PaginationContent>
        {/* Prev */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              prevPage();
            }}
            className={
              currentPage === 1
                ? "pointer-events-none opacity-50"
                : "hover:bg-purple hover:text-white"
            }
          />
        </PaginationItem>

        {/* Page Numbers */}
        {paginationRange.map((page, index) => {
          if (page === "...") {
            return (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(Number(page));
                }}
                className="hover:bg-purple hover:text-white"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              nextPage();
            }}
            className={
              currentPage === totalPageCount
                ? "pointer-events-none opacity-50"
                : "hover:bg-purple hover:text-white"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationDiv;
