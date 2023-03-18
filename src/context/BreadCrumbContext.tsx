import { useState} from 'react';
import { createContext, useContext } from 'react';

interface BreadCrumbItem {
  id: number,
  fullName: string
}

interface CrumbContextTypes {
  breadCrumbsArr: BreadCrumbItem[],
  handleSetArr: (newUser: any) => void
}

export const CrumbContext = createContext<CrumbContextTypes>({
  breadCrumbsArr: [],
  handleSetArr: () => {}
});

export default function BreadCrumbContext({children}: any) {
    const [breadCrumbsArr, setBreadCrumbsArr] = useState<BreadCrumbItem[]>([]);

    const handleSetArr = (userCrumb: BreadCrumbItem) => {
        setBreadCrumbsArr([...breadCrumbsArr, {id: userCrumb.id, fullName: userCrumb.fullName}])
    }

    return (
      <CrumbContext.Provider value={{breadCrumbsArr, handleSetArr}}>
        {children}
      </CrumbContext.Provider>
    )
}