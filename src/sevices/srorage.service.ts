import { ToysProps } from '../interfaces/interface'


const saveToStorage = (key: string, value: ToysProps[] | null): void => {
    localStorage.setItem(key, JSON.stringify(value));
}

const loadFromStorage = (key: string): ToysProps[] | null => {
    return JSON.parse(localStorage.getItem(key) as string);
}

const removeToyFromStorage = (id: string) => {
    let toys = loadFromStorage('toys');
    const idx = toys?.findIndex(toy => toy.id === id);
    if (idx) toys?.splice(idx, 1);
    saveToStorage('toys', toys)
}
export const storageService = {
    saveToStorage,
    loadFromStorage,
    removeToyFromStorage
}