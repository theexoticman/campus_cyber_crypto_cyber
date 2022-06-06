contract EthCrossChainManager{
    function verifyHeaderAndExecuteTx( PARAMETERS ) whenNotPaused public returns (bool){
        // Parameters parsing, verifications and validations
        [...]

        _executeCrossChainTx(toContract, toMerkleValue.makeTxParam.method, toMerkleValue.makeTxParam.args, toMerkleValue.makeTxParam.fromContract, toMerkleValue.fromChainID);
        
        // Parameters parsing, verifications and validations
        [...]
       
        return true;
    }

     function _executeCrossChainTx(address _toContract, bytes memory _method, bytes memory _args, bytes memory _fromContractAddr, uint64 _fromChainId) internal returns (bool){
        // Verifications and validations
        [...]

        _toContract.call(abi.encodePacked(bytes4(keccak256(abi.encodePacked(_method, "(bytes,bytes,uint64)"))), abi.encode(_args, _fromContractAddr, _fromChainId)));
        
        // More Verifications and validations
        [...]

        return true;
    }
}

contract EthCrossChainData {

    // Other privileges functions with limited access

    function putCurEpochConPubKeyBytes(bytes memory curEpochPkBytes) public whenNotPaused onlyOwner returns (bool) {
        ConKeepersPkBytes = curEpochPkBytes;
        return true;
    }

}