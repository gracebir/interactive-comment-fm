'use client'

import { AppContextType, DataType } from '@/util/type'
import {  Dispatch, SetStateAction, createContext, useState } from 'react'

const initialState: AppContextType = {
    setDatas: {} as Dispatch<SetStateAction<DataType>>,
    datas: {} as DataType
}

type ContextProps = {
    children: React.ReactNode
}

export const AppContext = createContext(initialState)

export const DataProdiver = ({ children }: ContextProps) => {
    const [datas, setDatas] = useState<DataType>({} as DataType)

    return (
        <AppContext.Provider value={{
            datas,
            setDatas
        }}>
            {children}
        </AppContext.Provider>
    )
}