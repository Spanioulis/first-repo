// const list = [];
const list = JSON.parse(localStorage.getItem('List Expenses')) || [];

const addExpense = () => {
    const name = document.querySelector('#name');
    const quantity = document.querySelector('#quantity');

    if (name.value !== '' && quantity.value !== '') {
        list.push({ name: name.value, quantity: quantity.value });
        localStorage.setItem('List Expenses', JSON.stringify(list));
    } else {
        alert('Hay algún campo vacío!');
    }

    console.log(list);
};

const removeExpense = () => {
    const name = document.querySelector('#name');

    const newList = list.filter((item, index) => {
        if (item.name.toLowerCase() === name.value.toLowerCase()) {
            return list.slice(index, 1);
        } else {
            console.log('NO hay coincidencia');
        }
    });
    console.log(newList);
    return newList;
};

const showCompleteList = () => {
    console.log(list.map((item) => item.name));
    const table = document.querySelector('#table');
    table.innerHTML = list.map((item) => {
        return `
        Nombre: ${item.name} - Cantidad: ${item.quantity}
        <br>
        `;
    });
};
