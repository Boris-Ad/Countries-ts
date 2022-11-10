import { IOptions } from "../types";

export default function getTitleForSelect(params: string, options: IOptions[], defaultSelect: string) {
    const res = options.find(item => item.value === params)?.title;
    if (res) return res;
    return defaultSelect;
};
