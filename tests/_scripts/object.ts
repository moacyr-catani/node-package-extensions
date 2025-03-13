import "../../src/index.ts";


interface ObjetoTeste
{
    Id:        string;
    Name:      string;
    SurName:   string;
    CreatedAt: string;
    Node1:     any
}


const objObjetoTeste: ObjetoTeste = 
{
    Id:        "ABCD1234",
    Name:      "Name teste",
    SurName:   "Surname teste", 
    CreatedAt: "2021-01-02 12:13:55",
    Node1:
    {
        Leaf1: "teste"
    }
}


console.log(Object.$_getValue(objObjetoTeste, "Node1.Leaf1"));
