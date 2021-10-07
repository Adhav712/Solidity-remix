// pragma solidity  0.4.17;

// contract Hashnotes{
//     string input;
    

//     function set(string memory x) public{
//         input = x;
//     }
    
//     function get()public view returns (string){
//         return input;
//     }
    
// }

pragma solidity ^0.6.3;

contract Hashnotes{
	string input = "adhavan";
	string input2;

	function set(string memory x) public{
		input2 = x;
	}

	function get() public view returns(string memory, string memory){
		return (input,input2);
	}

}
