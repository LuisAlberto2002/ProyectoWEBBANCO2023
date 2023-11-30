const url='http://localhost:3000/clientes/saldo';

$.get(url, data,
    function (data) {
        console.log(data);
    },
    "dataType"
);