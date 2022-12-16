// const list = [];
const list = JSON.parse(localStorage.getItem('List Expenses')) || [];

const addExpense = () => {
    let name = document.querySelector('#name');
    let quantity = document.querySelector('#quantity');

    if (name.value !== '' && quantity.value !== '') {
        list.push({ name: name.value, quantity: Number(quantity.value) });
        localStorage.setItem('List Expenses', JSON.stringify(list));
        name.value = '';
        quantity.value = '';
    } else {
        alert('Hay algún campo vacío!');
    }
    console.log(list);
    showCompleteList();
};

const removeExpense = () => {
    const name = document.querySelector('#name');
    let product = list.find((item) => item.name.toLowerCase() === name.value.toLowerCase());

    if (product) {
        let position = list.indexOf(product);
        list.splice(position, 1);
        localStorage.setItem('List Expenses', JSON.stringify(list));
        name.value = '';
        quantity.value = '';
    } else {
        alert('No existe este ticket en tu listado.');
    }
    showCompleteList();
};

const showCompleteList = () => {
    const table = document.querySelector('#table');
    table.innerHTML = list.map((item) => {
        return `
        Nombre: ${item.name} - Cantidad: ${item.quantity}
        <br>
        `;
    });
    total();
};

const total = () => {
    const totalGastos = document.querySelector('#gastos');
    const gastos = list.reduce((acc, curr) => acc + curr.quantity, 0);
    totalGastos.innerHTML = gastos;
};
