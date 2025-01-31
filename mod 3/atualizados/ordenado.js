// Arquivo: ordenando.js

// a) Função swap
const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
};

// b) Função shuffle
const shuffle = (array, swaps) => {
    for (let i = 0; i < swaps; i++) {
        const idx1 = Math.floor(Math.random() * array.length);
        const idx2 = Math.floor(Math.random() * array.length);
        swap(array, idx1, idx2);
    }
};

// c) Função bubble_sort
const bubble_sort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

// d) Função selection_sort
const selection_sort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        swap(array, i, minIdx);
    }
};

// e) Função particionamento
const particionamento = (array, start, end) => {
    const pivot = array[end];
    let pivotIdx = start;

    for (let i = start; i < end; i++) {
        if (array[i] < pivot) {
            swap(array, i, pivotIdx);
            pivotIdx++;
        }
    }
    swap(array, pivotIdx, end);
    return pivotIdx;
};

// f) Função quick_sort
const quick_sort = (array, start = 0, end = array.length - 1) => {
    if (start < end) {
        const pivotIdx = particionamento(array, start, end);
        quick_sort(array, start, pivotIdx - 1);
        quick_sort(array, pivotIdx + 1, end);
    }
};
