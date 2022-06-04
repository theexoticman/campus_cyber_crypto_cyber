function batchTransfer(address[] _receivers, uint256 _value) public whenNotPaused returns (bool) {
    uint nb = _receivers.length;
    
    // Integer overflow
    uint256 amount = uint256(nb) * _value;
    
    //Test
    require(nb > 0 && nb <= 20);
    require(_value > 0 && balances[msg.sender] >= amount);

    // Update the balance
    balances[msg.sender] = balances[msg.sender].sub(amount);
    
    // Transfer the funds
    [...]

    return true;
 }