# EcoCiclo · Protótipo navegável

**A moeda digital que transforma resíduos em desenvolvimento local.**

O EcoCiclo recompensa quem entrega recicláveis em ecopontos e cooperativas parceiras com **EcoMoedas**,
que só podem ser gastas nos pequenos comércios do próprio bairro. O reciclável sai do lixo, vira poder
de compra para o morador e volta como receita para o comércio local.

## O problema

Pouca gente separa e entrega os recicláveis porque não vê vantagem prática e imediata nisso. O resultado:

- **Moradores** sem incentivo para reciclar.
- **Cooperativas** recebendo pouco material já separado.
- **Pequenos comércios** sem um jeito barato de atrair e fidelizar clientes.

## Para que serve este protótipo

É a versão web do app Android do EcoCiclo, feita para **avaliação sem instalar nada**: abre no navegador
do computador ou do celular e mostra a jornada completa do usuário, do descarte até o uso das moedas.
Os dados são de demonstração e nada é enviado a um servidor.

## Jornada do usuário

1. **Entrar** com o usuário de teste (já vem preenchido).
2. **Mapa**: escolher um ecoponto e tocar em **Vou entregar aqui**.
3. **Validar**: ler o QR Code da pesagem pela câmera, simular a leitura ou digitar um código de teste.
4. **Lojas**: escolher um comércio do bairro e gerar um voucher ou transferir as EcoMoedas.
5. **Concluir jornada**: ver o resumo do ciclo (kg desviados do aterro e moedas usadas).

Também há o **Início** (saldo e impacto em kg) e **Ideias** (passo a passo para reaproveitar materiais).

### Códigos de teste

| Código | Entrega |
|---|---|
| `ECO-4821` | 3 kg de plástico |
| `ECO-7310` | 1,2 kg de metal |
| `ATL-0550` | 2 kg no ateliê de artesão (+50% de EcoMoedas) |

Os mesmos códigos funcionam no app Android.

### Regras de demonstração

- **EcoMoedas por kg:** papel 2, plástico 5, vidro 1,5, metal 8, demais materiais 1.
- **Ateliê de artesão:** entregar num ateliê rende +50% de EcoMoedas.

## Tecnologia

HTML, CSS e JavaScript puros, sem etapa de build. Mapa com [Leaflet](https://leafletjs.com/) e
OpenStreetMap; QR Code do voucher com [qrcodejs](https://github.com/davidshimjs/qrcodejs).

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Estrutura da página e moldura do celular |
| `style.css` | Visual, com as mesmas cores do app Android |
| `app.js` | Telas, navegação, dados e regras de demonstração |
| `config.js` | Chave opcional do MapTiler (vazia = OpenStreetMap) |

## Rodar e publicar

- **Localmente:** abra `index.html` no navegador. No Chrome, o OpenStreetMap bloqueia o mapa em páginas
  abertas direto do arquivo; rode um servidor local (`npx serve .`) ou use o link publicado.
- **Vercel:** importe este repositório como projeto sem framework e sem comando de build.

## Projetos relacionados

- **App Android** (Kotlin + Jetpack Compose): https://github.com/laisaf7/eco-ciclo
- **API** (Java + Spring Boot, Docker): https://github.com/laisaf7/gestao-residuos-api
