import { ethers } from "./ems.js";
document.addEventListener("DOMContentLoaded", () => {
    const transactionHashDiv = document.getElementById("transactionHash");
    const addCertificateButton = document.getElementById("addCertificate");
      addCertificateButton.addEventListener("click", async () => {
        try {
      const provider = new ethers.providers.JsonRpcProvider(
        "http://127.0.0.1:7545"
      );
      const privateKey =
        "0x7b14648e3156b2c224b4749bdc33a48f97912735c72066fe5b19ed5de86611a6";
      const wallet = new ethers.Wallet(privateKey, provider);
      const abi =[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"category","type":"string"},{"internalType":"string","name":"achievement","type":"string"},{"internalType":"string","name":"doi","type":"string"},{"internalType":"string","name":"issuedBy","type":"string"}],"name":"addCertificate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"certificates","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"category","type":"string"},{"internalType":"string","name":"achievement","type":"string"},{"internalType":"string","name":"doi","type":"string"},{"internalType":"string","name":"issuedBy","type":"string"}],"stateMutability":"view","type":"function"}]
      const binary ="608060405234801561001057600080fd5b50610caa806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063742f06881461003b578063a79ccca614610070575b600080fd5b61005560048036038101906100509190610546565b61008c565b60405161006796959493929190610603565b60405180910390f35b61008a600480360381019061008591906107c3565b6103f8565b005b60006020528060005260406000206000915090508060000180546100af90610927565b80601f01602080910402602001604051908101604052809291908181526020018280546100db90610927565b80156101285780601f106100fd57610100808354040283529160200191610128565b820191906000526020600020905b81548152906001019060200180831161010b57829003601f168201915b50505050509080600101805461013d90610927565b80601f016020809104026020016040519081016040528092919081815260200182805461016990610927565b80156101b65780601f1061018b576101008083540402835291602001916101b6565b820191906000526020600020905b81548152906001019060200180831161019957829003601f168201915b5050505050908060020180546101cb90610927565b80601f01602080910402602001604051908101604052809291908181526020018280546101f790610927565b80156102445780601f1061021957610100808354040283529160200191610244565b820191906000526020600020905b81548152906001019060200180831161022757829003601f168201915b50505050509080600301805461025990610927565b80601f016020809104026020016040519081016040528092919081815260200182805461028590610927565b80156102d25780601f106102a7576101008083540402835291602001916102d2565b820191906000526020600020905b8154815290600101906020018083116102b557829003601f168201915b5050505050908060040180546102e790610927565b80601f016020809104026020016040519081016040528092919081815260200182805461031390610927565b80156103605780601f1061033557610100808354040283529160200191610360565b820191906000526020600020905b81548152906001019060200180831161034357829003601f168201915b50505050509080600501805461037590610927565b80601f01602080910402602001604051908101604052809291908181526020018280546103a190610927565b80156103ee5780601f106103c3576101008083540402835291602001916103ee565b820191906000526020600020905b8154815290600101906020018083116103d157829003601f168201915b5050505050905086565b600086868686868660405160200161041596959493929190610994565b6040516020818303038152906040528051906020012090506040518060c001604052808881526020018781526020018681526020018581526020018481526020018381525060008083815260200190815260200160002060008201518160000190816104819190610ba2565b5060208201518160010190816104979190610ba2565b5060408201518160020190816104ad9190610ba2565b5060608201518160030190816104c39190610ba2565b5060808201518160040190816104d99190610ba2565b5060a08201518160050190816104ef9190610ba2565b5090505050505050505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61052381610510565b811461052e57600080fd5b50565b6000813590506105408161051a565b92915050565b60006020828403121561055c5761055b610506565b5b600061056a84828501610531565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156105ad578082015181840152602081019050610592565b60008484015250505050565b6000601f19601f8301169050919050565b60006105d582610573565b6105df818561057e565b93506105ef81856020860161058f565b6105f8816105b9565b840191505092915050565b600060c082019050818103600083015261061d81896105ca565b9050818103602083015261063181886105ca565b9050818103604083015261064581876105ca565b9050818103606083015261065981866105ca565b9050818103608083015261066d81856105ca565b905081810360a083015261068181846105ca565b9050979650505050505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106d0826105b9565b810181811067ffffffffffffffff821117156106ef576106ee610698565b5b80604052505050565b60006107026104fc565b905061070e82826106c7565b919050565b600067ffffffffffffffff82111561072e5761072d610698565b5b610737826105b9565b9050602081019050919050565b82818337600083830152505050565b600061076661076184610713565b6106f8565b90508281526020810184848401111561078257610781610693565b5b61078d848285610744565b509392505050565b600082601f8301126107aa576107a961068e565b5b81356107ba848260208601610753565b91505092915050565b60008060008060008060c087890312156107e0576107df610506565b5b600087013567ffffffffffffffff8111156107fe576107fd61050b565b5b61080a89828a01610795565b965050602087013567ffffffffffffffff81111561082b5761082a61050b565b5b61083789828a01610795565b955050604087013567ffffffffffffffff8111156108585761085761050b565b5b61086489828a01610795565b945050606087013567ffffffffffffffff8111156108855761088461050b565b5b61089189828a01610795565b935050608087013567ffffffffffffffff8111156108b2576108b161050b565b5b6108be89828a01610795565b92505060a087013567ffffffffffffffff8111156108df576108de61050b565b5b6108eb89828a01610795565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061093f57607f821691505b602082108103610952576109516108f8565b5b50919050565b600081905092915050565b600061096e82610573565b6109788185610958565b935061098881856020860161058f565b80840191505092915050565b60006109a08289610963565b91506109ac8288610963565b91506109b88287610963565b91506109c48286610963565b91506109d08285610963565b91506109dc8284610963565b9150819050979650505050505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610a4e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a11565b610a588683610a11565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000610a9f610a9a610a9584610a70565b610a7a565b610a70565b9050919050565b6000819050919050565b610ab983610a84565b610acd610ac582610aa6565b848454610a1e565b825550505050565b600090565b610ae2610ad5565b610aed818484610ab0565b505050565b5b81811015610b1157610b06600082610ada565b600181019050610af3565b5050565b601f821115610b5657610b27816109ec565b610b3084610a01565b81016020851015610b3f578190505b610b53610b4b85610a01565b830182610af2565b50505b505050565b600082821c905092915050565b6000610b7960001984600802610b5b565b1980831691505092915050565b6000610b928383610b68565b9150826002028217905092915050565b610bab82610573565b67ffffffffffffffff811115610bc457610bc3610698565b5b610bce8254610927565b610bd9828285610b15565b600060209050601f831160018114610c0c5760008415610bfa578287015190505b610c048582610b86565b865550610c6c565b601f198416610c1a866109ec565b60005b82811015610c4257848901518255600182019150602085019450602081019050610c1d565b86831015610c5f5784890151610c5b601f891682610b68565b8355505b6001600288020188555050505b50505050505056fea264697066735822122089e8b760c71b44c118c73e0860aa12911dbaf538999752372502007f9975c47964736f6c63430008120033";
      const senderaddress = "0xe15b678Eaf89818029492330f2A9F896b6F5EC4c";
      const contract = new ethers.Contract(senderaddress, abi, wallet);
      const name = "Name";
      const email="email"
      const category = "Category";
      const achievement="Achievement";
      const doi="Date of issue";
      const issuedBy = "Issuer";
      await contract.addCertificate(name, email,category,achievement,doi ,issuedBy);
      const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
      const contract1 = await contractFactory.deploy();
      await contract1.deployTransaction.wait(1);
      console.log(contract1.deployTransaction.hash)
      const transactionHash = contract1.deployTransaction.hash;
      transactionHashDiv.innerHTML = `Transaction Hash: ${transactionHash}`;
      alert("Certificate added successfully!");
    } catch (error) {
      console.error("Error adding certificate:", error.message);
      alert("Error: " + error.message);
    }
  });
});
