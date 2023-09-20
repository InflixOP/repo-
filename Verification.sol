// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;
contract YourContract {
    mapping(bytes32 => bool) private certificates;
    function addCertificate(bytes32 certificateHash) public {
        certificates[certificateHash] = true;
    }
    function certificateExists(bytes32 certificateHash) public view returns (bool) {
        return certificates[certificateHash];
    }
}
