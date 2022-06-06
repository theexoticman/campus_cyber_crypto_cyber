contract EthCrossChainManager{
    
    function verifyHeaderAndExecuteTx( PARAMETERS ) 
    whenNotPaused public returns (bool){
        // [...] 
        _executeCrossChainTx(toContract, OTHER_PARAMETERS);
        // [...] 
    }
    function _executeCrossChainTx(address _toContract, OTHER_PARAMETERS) 
    internal returns (bool){
        // [...] 
        _toContract.call(HASH(METHOD), OTHER_PARAMETERS);
        // [...] 
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