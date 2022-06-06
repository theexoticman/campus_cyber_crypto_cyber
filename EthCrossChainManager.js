contract EthCrossChainManager{
    function verifyHeaderAndExecuteTx( PARAMETERS ) whenNotPaused public returns (bool){
        // Parameters parsing, verifications and validations
        [...]

        _executeCrossChainTx(toContract, OTHER_PARAMETERS);
        
        // Parameters parsing, verifications and validations
        [...]
       
        return true;
    }

     function _executeCrossChainTx(address _toContract, OTHER_PARAMETERS) internal returns (bool){
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