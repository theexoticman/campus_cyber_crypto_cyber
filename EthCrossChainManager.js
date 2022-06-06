contract EthCrossChainManager{
    
    function verifyHeaderAndExecuteTx( PARAMETERS ) 
    whenNotPaused public returns (bool){
        // [...] Parameters parsing, verifications and validations
        
        _executeCrossChainTx(toContract, OTHER_PARAMETERS);
        
        // [...]  verifications and validations and return statement
    }
}

contract EthCrossChainManager{

  function _executeCrossChainTx(address _toContract, OTHER_PARAMETERS) 
     internal returns (bool){
        // [...] Verifications and validations

        _toContract.call(HASH(METHOD_NAME), OTHER_PARAMETERS);
        
        // [...] More Verifications and validations and return statement
    }
}

contract EthCrossChainData {

    // Other privileges functions with limited access

    function putCurEpochConPubKeyBytes(bytes memory curEpochPkBytes) 
    public whenNotPaused onlyOwner returns (bool) 
    {
        ConKeepersPkBytes = curEpochPkBytes;
        return true;
    }

}