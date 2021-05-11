# Javascript library 

Make sure you have [Node.js](http://nodejs.org/) installed.

1. Change the Contract address and ABI file http link in the contractInterface.js file.
2. Run `Gulp` to generate a contractInterface magnification file.
3. Include script files web.min.js and contractInterface-min.js in HTML header or at the bottom of the HTML body.
4. Call the ContractInterface contract function with the contract-function-name and arguments array.
    
    ```
        const contractInterface = new ContractInterface();
        
        contractInterface.contract('totalSupply', []).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
        
        contractInterface.contract('deposit', ['0x602a78c7ebf92bdd438b4334b376635bbbb53ec7', 2]).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    ```
  