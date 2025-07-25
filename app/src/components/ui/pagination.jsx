import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";

const Pagination = ({
    className,
    ...props
}) => (
    <nav
        role="navigation"
        aria-label="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props} />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn("flex flex-row items-center gap-1", className)}
        {...props} />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

const PaginationLink = ({
    className,
    isActive,
    size = "icon",
    ...props
}) => (
    <a
        aria-current={isActive ? "page" : undefined}
        className={cn('cursor-pointer', buttonVariants({
            variant: isActive ? "outline" : "ghost",
            size,
        }), className)}
        {...props} />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
    className,
    ...props
}) => (
    <PaginationLink
        aria-label="Go to previous page"
        size="default"
        className={cn("gap-1 pl-2.5 cursor-pointer", className)}
        {...props}>
        <ChevronLeft className="h-4 w-4" />
    </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
    className,
    ...props
}) => (
    <PaginationLink
        aria-label="Go to next page"
        size="default"
        className={cn("gap-1 pr-2.5 cursor-pointer", className)}
        {...props}>
        <ChevronRight className="h-4 w-4" />
    </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
    className,
    ...props
}) => (
    <span
        aria-hidden
        className={cn("flex h-9 w-9 items-center justify-center", className)}
        {...props}>
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More pages</span>
    </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"


function PaginationContainer({ count, page, onChange, ...props }) {
    const pages = Array.from({ length: count }, (_, i) => i + 1);
    var elipsis = 0;
    return (
        <Pagination {...props}>
            <PaginationPrevious
                onClick={() => onChange(page - 1)}
                disabled={page === 1}
            />
            <PaginationContent>
                {pages.map((p) => {
                    if (p === 1 || p === count || (p >= page - 2 && p <= page + 2)) {
                        return (
                            <PaginationItem key={p}>
                                <PaginationLink
                                    isActive={p === page}
                                    onClick={() => onChange(p)}
                                >
                                    {p}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    }
                    elipsis++;
                    if (elipsis <= 6) {
                        return <PaginationEllipsis key={p} />;
                    }
                })}
            </PaginationContent>
            <PaginationNext
                onClick={() => onChange(page + 1)}
                disabled={page === count}
            />
        </Pagination>
    );
}

export {
    Pagination,
    PaginationContent,
    PaginationLink,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
    PaginationContainer
}
