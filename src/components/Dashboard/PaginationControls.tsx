import { FC, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Pagination } from '@nextui-org/react';

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps & { totalPages: number }> = (
    {
        hasNextPage,
        hasPrevPage,
        totalPages,
    }
) => {
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();
    const searchParams = useSearchParams();

    const currPage = searchParams.get('currPage') ?? '1';
    const itemsPerPage = searchParams.get('itemsPerPage') ?? '5';

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        router.push(`/dashboard?currPage=${page}&itemsPerPage=${itemsPerPage}`);
    };

    return (
        <div className='flex gap-2'>
            <Button
                color ="warning"
                variant="shadow"
                className='text-white p-1'
                isDisabled={!hasPrevPage}
                onPress={() => {
                    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
                    router.push(`/dashboard?currPage=${Number(currPage) - 1}&itemsPerPage=${itemsPerPage}`)
                }}>
                Prev
            </Button>

            <div className="flex justify-center items-center">
                <Pagination 
                        key={'warning'} 
                        total={totalPages} 
                        initialPage={1} 
                        color={'warning'} 
                        page={currentPage} 
                        onChange={handlePageChange} 
                        showShadow={true}
                />
            </div>

            <Button
                color="warning"
                variant="shadow"
                className="text-white p-1"
                isDisabled={!hasNextPage}
                onPress={() => {
                    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
                    router.push(`/dashboard?currPage=${Number(currPage) + 1}&itemsPerPage=${itemsPerPage}`)
                }}>
                Next
            </Button>
        </div>
    )
}

export default PaginationControls;