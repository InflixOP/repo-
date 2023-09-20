// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract CertificateRegistry {
    struct Certificate {
        string name;
        string email;
        string category;
        string achievement;
        string doi;
        string issuedBy;
    }

    mapping(bytes32 => Certificate) public certificates;

    function addCertificate(string memory name,string memory email,string memory category,string memory achievement,string memory doi,string memory issuedBy) public {
        bytes32 certificateId = keccak256(abi.encodePacked(name,email,category, achievement,doi,issuedBy));
        certificates[certificateId] = Certificate(name,email,category, achievement,doi,issuedBy);
    }

}
