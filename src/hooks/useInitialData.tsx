import { isEmpty } from "lodash";
import { useMemo } from "react";

export interface IInitialData {
  [key: string]: any;
}

interface IUseInitialData {
  INITIAL_DATA: IInitialData;
  initialData: IInitialData;
}

const useInitialData = ({ INITIAL_DATA, initialData }: IUseInitialData) =>
  useMemo(() => {
    const isDataEmpty = isEmpty(initialData);

    const initialValues = isDataEmpty ? INITIAL_DATA : initialData;
    return {
      isDataEmpty,
      initialValues,
    };
  }, [INITIAL_DATA, initialData]);

export default useInitialData;
