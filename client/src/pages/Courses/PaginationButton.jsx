import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

const PaginationButton = ({ totalPages, setSearchParams, currentPage }) => {
    const handlePagination = (page) => {
        setSearchParams("page=" + page);
    };

    const generatePaginationBtn = () => {
        let btn = [];
        for (let i = 1; i <= totalPages; i++) {
            btn.push(
                <PaginationItem onClick={() => handlePagination(i)}>
                    <PaginationLink isActive={i == currentPage}>
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }
        return btn;
    };
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem
                    onClick={() => {
                        if (currentPage == 1) return;
                        handlePagination(+currentPage - 1);
                    }}
                >
                    <PaginationPrevious />
                </PaginationItem>

                {generatePaginationBtn()}

                {totalPages > 3 && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                <PaginationItem
                    onClick={() => {
                        if (currentPage == totalPages) return;
                        handlePagination(+currentPage + 1);
                    }}
                >
                    <PaginationNext />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationButton;
