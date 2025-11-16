import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationDiv = () => {
  return (
    <Pagination className="mb-3">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="hover:bg-purple hover:text-white"
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="1" className="hover:bg-purple hover:text-white">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="1" className="hover:bg-purple hover:text-white">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="1" className="hover:bg-purple hover:text-white">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="hover:bg-purple hover:text-white"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationDiv;
