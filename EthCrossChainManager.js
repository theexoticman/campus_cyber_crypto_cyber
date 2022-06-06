contract EthCrossChainManager{
    
    function verifyHeaderAndExecuteTx( PARAMETERS ) 
    whenNotPaused public returns (bool){
        // [...] Parameters parsing, verifications and validations
        
        _executeCrossChainTx(toContract, OTHER_PARAMETERS);
        
        // [...] Parameters parsing, verifications and validations
       
        return true;
    }

     function _executeCrossChainTx(address _toContract, OTHER_PARAMETERS) 
     internal returns (bool){
        // [...] Verifications and validations

        _toContract.call(HASH(CONTRACT_ METHOD_NAME), OTHER_PARAMETERS);
        
        // [...] More Verifications and validations
        return true;
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