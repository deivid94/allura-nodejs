import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados
} 

function trataError(error){
    throw new Error (chalk.red (error.code, 'o diretorio esta incorreto'))
}


async function pegaArquivo(caminhoDoArquivo){
    try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(extraiLinks(texto))
   
    }
    catch(error){
        trataError(error)
    }
}

pegaArquivo('./arquivo/texto.md')