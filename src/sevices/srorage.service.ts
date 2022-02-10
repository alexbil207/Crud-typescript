import { ToysProps } from '../interfaces/interface'


const saveToStorage = (key: string, value: ToysProps[]): void => {
    localStorage.setItem(key, JSON.stringify(value));
}

const loadFromStorage = (key: string): ToysProps[] | null => {
    return JSON.parse(localStorage.getItem(key) as string);
}

export const storageService = {
    saveToStorage,
    loadFromStorage
}