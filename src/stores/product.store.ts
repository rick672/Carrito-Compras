import { defineStore } from 'pinia'
import { reactive } from 'vue';

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
}

interface SelectedProduct extends Product {
    quantity: number;
}

interface ProductStore {
    availableProducts: Product[];
    selectedProduct: SelectedProduct[];
    quantity: () => number;
}

export const useProductStore = defineStore('product', () => {
    const products: ProductStore = reactive({
        availableProducts: [
            {
                id: 1,
                img: 'https://www.tiendaamiga.com.bo/media/catalog/product/cache/23bac777b9d0ccb47a596f9b5dbdcdda/m/k/mkplta6.jpeg',
                name: 'Reloj acero',
                price: 2719,
            },
            {
                id: 2,
                img: 'https://www.tiendaamiga.com.bo/media/catalog/product/cache/23bac777b9d0ccb47a596f9b5dbdcdda/r/e/relojmkdorado.jpeg',
                name: 'Reloj inox',
                price: 2500,
            },
            {
                id: 3,
                img: 'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/r/e/reloj_fossil_paradama_jacqueline_pulso_2_.jpeg',
                name: 'Reloj Fossil',
                price: 1669,
            },
            {
                id: 4,
                img: 'https://www.tiendaamiga.com.bo/media/catalog/product/cache/23bac777b9d0ccb47a596f9b5dbdcdda/r/e/reloj_fossil_dama_an_logo_1.jpg',
                name: 'Reloj Dama',
                price: 1849,
            },
            {
                id: 5,
                img: 'https://www.tiendaamiga.com.bo/media/catalog/product/cache/23bac777b9d0ccb47a596f9b5dbdcdda/r/e/reloj1.png',
                name: 'Reloj Rosa',
                price: 1449,
            },
            {
                id: 6,
                img: 'https://s.alicdn.com/@sc04/kf/H502f8dcd9b3f4d8f8776be4dd21646b2h.png?avif=close',
                name: 'Reloj ',
                price: 1459,
            },
            {
                id: 7,
                img: 'https://s.alicdn.com/@sc04/kf/H8c02570c4b90454395acbfc343dd9e00H.jpg_720x720q50.jpg',
                name: 'Reloj ',
                price: 1459,
            },
            {
                id: 8,
                img: 'https://s.alicdn.com/@sc04/kf/H1027af6ef8ea41e3a055447a1344c224d.jpg_720x720q50.jpg',
                name: 'Reloj ',
                price: 1459,
            }
        ],
        selectedProduct: [],
        quantity: () => products.selectedProduct.length > 0 
            ? products.selectedProduct.map(product => product.quantity).reduce((a, b) => a + b, 0)
            : 0,
    })
    // agregar un producto 
    const addProduct = (product: Product) => {
        const productExist = products.selectedProduct.find(
            (selected) => selected.id === product.id
        )
        if (productExist) {
            productExist.quantity++
            return
        } else {
            products.selectedProduct.push({
                ...product,
                quantity: 1,
            })
        }
    }

    // eliminar un producto
    // const removeProduct = (product: Product) => {
    //     const productExist = products.selectedProduct.find(
    //         (selected) => selected.name === product.name
    //     )
    // }
    const removeProduct = (product: Product) => {
        const index = products.selectedProduct.findIndex(
            (selected) => selected.id === product.id
        )
        if (index !== -1) {
            const selected = products.selectedProduct[index]
            if (selected.quantity > 1) {
                selected.quantity--
            } else {
                products.selectedProduct.splice(index, 1)
            }
        }
    }

    return {
        products,
        addProduct,
        removeProduct,
    }
})