import { cloneElement, ReactElement } from 'react';

export const addKeysToElementList = (elements: ReactElement[], keys?: (string | number)[]) =>
    elements.map((element, index) => cloneElement(element, { key: keys?.[index] ?? index }));
