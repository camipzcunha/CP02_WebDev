var vinho = document.getElementById('vinhos');

function gerarReceitas(){
    console.log(vinho.value);
    switch (vinho.value){
        case 'vazio':
            tituloReceitas.innerHTML = ``;
            receita1.innerHTML = ``;
            receita2.innerHTML = ``;
            receita3.innerHTML = ``;
            break;
        case 'Luna-Dorata':
            tituloReceitas.innerHTML = `Pratos que combinam com Luna Dorata: `;
            receita1.innerHTML = `1. Ceviche de Peixe Branco;`;
            receita2.innerHTML = `2. Risoto de Camarão`;
            receita3.innerHTML = `3. Salada de Frutos do Mar.`;
            break;
        case 'Incanto-Toscano':
            tituloReceitas.innerHTML = `Pratos que combinam com Incanto Toscano: `;
            receita1.innerHTML = `1. Frutos do Mar Grelhados;`;
            receita2.innerHTML = `2. Salada de Verão com Queijo de Cabra`;
            receita3.innerHTML = `3. Risoto de Aspargos e Ervilhas.`;
            break;
        case 'Charme-Provence':
            tituloReceitas.innerHTML = `Pratos que combinam com Charme de Provence:`;
            receita1.innerHTML = `1. Salmão Grelhado com Molho de Ervas;`;
            receita2.innerHTML = `2. Salada Niçoise;`;
            receita3.innerHTML = `3. Risoto de Limão Siciliano com Camarões.`;
            break;
        case 'Douceur-Champagne':
            tituloReceitas.innerHTML = `Pratos que combinam com Douceur de Champagne:`;
            receita1.innerHTML = `1. Salmão ao Molho de Maracujá;`;
            receita2.innerHTML = `2. Carpaccio de Vieiras com Vinagrete Cítrico;`;
            receita3.innerHTML = `3. Camarões Grelhados com Molho de Manteiga de Alho.`;
            break;
        case 'Elegance-Loire':
            tituloReceitas.innerHTML = `Pratos que combinam com Élégance de la Loire:`;
            receita1.innerHTML = `1. Bouillabaisse (Sopa de Peixe Tradicional Francesa);`;
            receita2.innerHTML = `2. Salada de Endívias com Nozes e Queijo Roquefort;`;
            receita3.innerHTML = `3. Linguine ao Pesto de Manjericão com Tomates Cereja e Queijo Parmesão.`;
            break;
        case 'Vento-Veneto':
            tituloReceitas.innerHTML = `Pratos que combinam com Vento del Veneto:`;
            receita1.innerHTML = `1. Risoto de Limão Siciliano e Ervilhas;`;
            receita2.innerHTML = `2. Carpaccio de Abobrinha com Queijo Parmesão e Rúcula;`;
            receita3.innerHTML = `3. Linguine com Frutos do Mar e Molho de Tomate Fresco.`;
            break;
        case 'Dolce-Vita':
            tituloReceitas.innerHTML = `Pratos que combinam com Dolce Vita:`;
            receita1.innerHTML = `1. Frutos do Mar Grelhados com Molho de Limão e Ervas;`;
            receita2.innerHTML = `2. Salada de Camarão com Abacate e Molho de Manga;`;
            receita3.innerHTML = `3. Risoto de Espargos com Presunto Parma.`;
            break;
        case 'Mare-Amore':
            tituloReceitas.innerHTML = `Pratos que combinam com Mare d'Amore:`;
            receita1.innerHTML = `1. Peixe Branco Assado com Ervas e Limão;`;
            receita2.innerHTML = `2. Salada de Frutos do Mar com Vinagrete Cítrico;`;
            receita3.innerHTML = `3. Massa Fresca com Molho de Tomate e Frutos do Mar.`;
            break;
        case 'Riserva-Oro':
            tituloReceitas.innerHTML = `Pratos que combinam com Riserva Oro:`;
            receita1.innerHTML = `1. Frutos do Mar Grelhados com Molho de Manteiga de Limão;`;
            receita2.innerHTML = `2. Salada de Pêra, Nozes e Queijo Gorgonzola;`;
            receita3.innerHTML = `3. Risoto de Funghi Porcini.`;
            break;
    }
}
