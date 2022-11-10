import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IOptions } from "../types"
import getTitleForSelect from "../utils/getTitleByCustomSelect"

export const useToTitleForCustomSelect = (defaultSelect: string, options: IOptions[]) => {
    const params = useParams()
    const [titleForSelect, setTitleForSelect] = useState(defaultSelect);
    useEffect(() => {
        if (params.select) {
            setTitleForSelect(getTitleForSelect(params.select, options, defaultSelect));
        }
    }, [params.select])

    return titleForSelect
}