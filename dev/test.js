const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();
const start = Date.now();

// Creating Transaction 1
const transaction = bitcoin.CreateNewTransaction(10, "SIACPBXSNVPOJFMFQWCQTBSBDLSDWGXXLXZEJGJINKAUV", "HLWBGIULCILZXZTTXLFJLBRSWDPHRYDVPVYCGXGEBWARE")
const nonce = bitcoin.ProofOfWork(bitcoin.GetLastBlockHash(), transaction)
const hash = bitcoin.HashBlock(bitcoin.GetLastBlockHash(), transaction, nonce)
bitcoin.CreateNewBlock(nonce, bitcoin.GetLastBlockHash(), hash)

// Creating Transaction 2
const transaction2 = bitcoin.CreateNewTransaction(35, "FVUOPSJAYNJZFGPHEOZYCEPXHTPAQKRAYSVXZVSNWRGFC", "VVXJCBRTBCJRAQYODXVHVYSASNXYCMERDOTXTUSEGSUMY")
const nonce2 = bitcoin.ProofOfWork(bitcoin.GetLastBlockHash(), transaction2)
const hash2 = bitcoin.HashBlock(bitcoin.GetLastBlockHash(), transaction, nonce)
bitcoin.CreateNewBlock(nonce2, bitcoin.GetLastBlockHash(), hash2)

// Creating Transaction 4
const transaction4 = bitcoin.CreateNewTransaction(354, "UGNWBSBXAGQCWVVXJOQFQFHGEZUUXAXPMKRHYLQFQJJGF", "BPKPMRRCKROAGUGYDBNFRLMLTJHLGEVDFRGXSFKTNLRGV")
const nonce4 = bitcoin.ProofOfWork(bitcoin.GetLastBlockHash(), transaction4)
const hash4 = bitcoin.HashBlock(bitcoin.GetLastBlockHash(), transaction, nonce4)
bitcoin.CreateNewBlock(nonce, bitcoin.GetLastBlockHash(), hash4)

// Creating Transaction 5
const transaction5 = bitcoin.CreateNewTransaction(3.67, "KIXFBBJBSRQLTMDDOMQOPQSHHESGKLTZLAORDBHPEWRXB", "OVBKSSKNCHUTPEMPKVPBIAFQBUAAKQOLQGJNLIOIHYBRJ")
const nonce5 = bitcoin.ProofOfWork(bitcoin.GetLastBlockHash(), transaction5)
const hash5 = bitcoin.HashBlock(bitcoin.GetLastBlockHash(), transaction, nonce5)
bitcoin.CreateNewBlock(nonce, bitcoin.GetLastBlockHash(), hash5)

// Creating Transaction 6
const transaction6 = bitcoin.CreateNewTransaction(0.00076, "LZKDNTQZGCSERCQKNLSDFQMVCIOAINFEUTREJGEBTECPG", "KLDFCEKLVLVIFUAFEYEKVNINMXODAJXPKWSVGWZLPSJGN")
const nonce6 = bitcoin.ProofOfWork(bitcoin.GetLastBlockHash(), transaction6)
const hash6 = bitcoin.HashBlock(bitcoin.GetLastBlockHash(), transaction, nonce6)
bitcoin.CreateNewBlock(nonce, bitcoin.GetLastBlockHash(), hash6)

// Creating Transaction 7
const transaction7 = bitcoin.CreateNewTransaction(4.34, "XIYYKORCYOFJRZODRVURGMTHODGLKOZNYAQBHBSLCKLKI", "JTTDMNNMBXQWXDEGAFXDQLQGBNCJYPFIRMBBGOQHNAWGU")
const nonce7 = bitcoin.ProofOfWork(bitcoin.GetLastBlockHash(), transaction7)
const hash7 = bitcoin.HashBlock(bitcoin.GetLastBlockHash(), transaction, nonce7)
bitcoin.CreateNewBlock(nonce, bitcoin.GetLastBlockHash(), hash7)

// Creating Transaction 8
const transaction8 = bitcoin.CreateNewTransaction(13.7, "XTIAOHEMDHWILVUZJXITFWJBGPQEKMNWRQTIDRWKRPZUG", "GIRHAGZWAVJVOFVFDJAZXXVXEDQLPOQUJYAQQVNSUZXMO")
const nonce8 = bitcoin.ProofOfWork(bitcoin.GetLastBlockHash(), transaction8)
const hash8 = bitcoin.HashBlock(bitcoin.GetLastBlockHash(), transaction, nonce8)
bitcoin.CreateNewBlock(nonce, bitcoin.GetLastBlockHash(), hash8)

// Creating Transaction 9
const transaction9 = bitcoin.CreateNewTransaction(23, "MIFNKMFDJTSFVHXSAZDGEGZGMURSWURAMVROGZNNRWAVU", "PNAXNGQBFFTNUMOUMIXQBSHIYGEOCKOMYZVPNTYJFKMSE")
const nonce9 = bitcoin.ProofOfWork(bitcoin.GetLastBlockHash(), transaction9)
const hash9 = bitcoin.HashBlock(bitcoin.GetLastBlockHash(), transaction, nonce9)
bitcoin.CreateNewBlock(nonce, bitcoin.GetLastBlockHash(), hash9)

// Creating Transaction 10
const transaction10 = bitcoin.CreateNewTransaction(0.000016, "GXPCIKWYGNNYWVYKJHNVMMGWBRAATZROCDXEBWKSPUJAQ", "IJWUZYFAZPKFYFAZBHIDHKSDFHXPJMRBSMGIJBUNUWNPS")
const nonce10 = bitcoin.ProofOfWork(bitcoin.GetLastBlockHash(), transaction10)
const hash10 = bitcoin.HashBlock(bitcoin.GetLastBlockHash(), transaction, nonce10)
bitcoin.CreateNewBlock(nonce, bitcoin.GetLastBlockHash(), hash10)

console.log(bitcoin)

console.log(`Total Chain Was Created In: ${Date.now() - start} miliseconds | ${(Date.now() - start) / Math.pow(10, 3)} seconds`)