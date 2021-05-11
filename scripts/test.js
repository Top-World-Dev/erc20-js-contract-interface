function validateForm() {
    const contractInterface = new ContractInterface();
    contractInterface.contract('totalSupply', []).then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });
}