import { RefObject } from 'react';
export declare function useOnClickOutside<T extends HTMLElement = HTMLDivElement>(ref: RefObject<T>, handler?: (e?: MouseEvent) => void): void;
