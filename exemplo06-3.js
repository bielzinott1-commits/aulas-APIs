import dados from "./dados/alunos.json" with { type: "json" };

console.log("\n=== Dados ===\n");

for (let i = 0; i < 6; i++) {

    let nome = dados[i].nome;
    let turma = dados[i].turma;
    let idade = dados[i].idade;

    console.log("Nome:", nome);
    console.log("Turma:", turma);
    console.log("idade:", idade)
    console.log("----------------");
}