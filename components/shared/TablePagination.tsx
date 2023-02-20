import { Button, ButtonGroup } from "@chakra-ui/react";
import { ArrowLeft24Regular, ArrowRight24Regular } from "@fluentui/react-icons";
import { Dispatch, SetStateAction } from "react";

const TablePagination = ({
  page,
  setPage,
  total,
}: {
  page: number;
  total: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const limit = process.env.NEXT_PUBLIC_PAGE_LIMIT;
  const totalPage = Math.ceil(total / limit);
  const isPrevDisabled = !Boolean(page - 1);
  const isNextDisabled = page + 1 > totalPage;

  const handlePrev = (currentPage: number) => {
    const prePage = currentPage - 1 ? currentPage - 1 : 1;
    return setPage(prePage);
  };

  const handleNext = (currentPage: number, totalPage: number) => {
    const nextPage = currentPage + 1 > totalPage ? totalPage : currentPage + 1;
    return setPage(nextPage);
  };

  return (
    <ButtonGroup marginTop={10}>
      <Button
        p="2"
        bg="white"
        variant="outline"
        borderColor="lightGray"
        isDisabled={isPrevDisabled}
        onClick={() => handlePrev(page)}
      >
        <ArrowLeft24Regular />
      </Button>
      <Button variant="outline" p="2" borderColor="lightGray" bg="white">
        Page {page} of {totalPage ? totalPage : 1}
      </Button>
      <Button
        p="2"
        bg="white"
        variant="outline"
        borderColor="lightGray"
        isDisabled={isNextDisabled}
        onClick={() => handleNext(page, totalPage)}
      >
        <ArrowRight24Regular />
      </Button>
    </ButtonGroup>
  );
};

export default TablePagination;
