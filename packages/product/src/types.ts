export interface NavItem {
    label: string;
    url: string;
}

export interface Item {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

export interface CartContextType {
    items: Item[];
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
}
