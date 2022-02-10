import { ToysProps } from '../interfaces/interface'
import { storageService } from './srorage.service';

const makeId = (length: number = 10): string => {
    let txt = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}
const _makeLorem = (size: number = 50): string => {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    let txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

const createToys = (length: number = 20): ToysProps[] => {
    let toys = [];
    for (let i = 0; i < length; i++) {
        toys.push(_createToy())
    }
    storageService.saveToStorage('toys', toys);
    return toys;
}

const _getRandomIntInclusive = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


const _createToy = () => {
    return {
        id: makeId(),
        img: `https://robohash.org/${makeId()}`,
        name: _makeLorem(),
        description: _makeLorem(200),
        price: _getRandomIntInclusive(0, 1000),
        creationAt: new Date().toLocaleString(),
    }
}


export const utilService = {
    makeId,
    createToys
}