import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/Results.view";

function Results() {
  const pageSize = 5;
  const [pageNum, setPageNum] = useState(1);

  const reqProcess = usePagination(
    `{
        processPagination {
            totalPages
            processes {
                input
                output
            }
        }
    }`,
    pageNum,
    pageSize
  );

  if (reqProcess.loading) return <Loading />;
  if (reqProcess.error) return "ERROR";

  const { processes = [], totalPages = 0 } = reqProcess.data.processPagination;
  const onClickPage = (pageNum) => setPageNum(pageNum);

  return (
    <View
      processes={processes}
      pageNum={pageNum}
      totalPages={totalPages}
      onClickPage={onClickPage}
    />
  );
}

Results.propTypes = {};

export default Results;