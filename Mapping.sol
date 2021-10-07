pragma  solidity ^0.5.11;

contract Mapping {
    mapping(uint => address) private login;
    mapping(address => uint) private addr;
    mapping(address => string) private tweet;
    mapping(uint => Info) public db;
    
    struct Info {
        string name;
        uint age;
    }
    
    function addInfo(uint _no, string memory _name,uint _age) public {
        db[_no] = Info(_name,_age);
    }
    
    // function getdb(uint _no) public view returns(string memory,uint){
    //     return db[_no];
    // }
    
    function getmappvalues(uint _i) public view returns (address){
        return login[_i];
    }
    
    function setmapvalues(address _addr , uint _i) public {
        login[_i] = _addr;
    }
    
    function getaddress(address _addr) public view returns (uint){
        return addr[_addr];
    }
    
    function setaddress(address _addr , uint _i) public {
        addr[_addr] = _i;
    }

    function gettweet(address _addr) public view returns (string memory) {
        return tweet[_addr];
    }
    
    function settweet(address _addr, string memory _str) public {
        tweet[_addr] = _str; 
    }
    
    
    function removeaddr(address _addr) public{
        delete addr[_addr];
    }
}
