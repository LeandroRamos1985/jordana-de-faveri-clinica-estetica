# Auditoria do comando mestre — Dra. Jordana de Fáveri

Data da preparação: 25/09/2026. Status geral: **Atenção — aguardando auditoria visual e dados reais de operação.**

Legenda: Aprovado = evidência real disponível; Atenção = preparado, mas depende de confirmação/configuração; Falhou = erro encontrado; Não aplicável = requisito não se aplica com justificativa.

| # | Item | Status inicial | Evidência / pendência |
|---:|---|---|---|
| 1 | CTA principal na primeira dobra | Aprovado | CTA “Descobrir meu próximo passo” no hero |
| 2 | CTAs claros e consistentes | Aprovado | CTAs de conversa, rotas e contato |
| 3 | CTA fixo no mobile | Aprovado | Barra “Conversar agora” em telas pequenas |
| 4 | Tempo de resposta | Atenção | Não prometido até confirmação da clínica |
| 5 | Página de obrigado | Atenção | Estado de sucesso local; página separada depende de integração |
| 6 | Validação de formulários | Aprovado | Validação de nome, e-mail, mensagem e consentimento |
| 7 | URLs amigáveis | Atenção | Rotas estáticas simples; slug final depende do repositório |
| 8 | Cases autorizados | Não aplicável | Nenhum case fornecido; seção não inventada |
| 9 | Avaliações reais | Aprovado | Excertos identificados como avaliações públicas do Maps |
| 10 | Mapa, endereço e rotas | Atenção | Endereço e rota pública; teste de clique pendente |
| 11 | Responsividade | Atenção | CSS mobile-first; auditoria real pendente |
| 12 | Meta title único | Aprovado | Home e privacy têm titles distintos |
| 13 | Meta description única | Aprovado | Metadata específica na home e privacy |
| 14 | H1 único | Atenção | H1 presente; confirmar por página no navegador |
| 15 | Sem duplicação desnecessária | Atenção | Revisão editorial final pendente |
| 16 | Alt text contextual | Atenção | Vídeo decorativo; imagens remotas são CSS/poster |
| 17 | Breadcrumbs | Não aplicável | Site curto, sem hierarquia profunda |
| 18 | FAQ e schema aplicável | Atenção | FAQ visível; FAQ Schema não adicionado sem necessidade |
| 19 | URLs amigáveis | Atenção | Página estática e privacy.html |
| 20 | Canonical | Aprovado | URL pública do GitHub Pages configurada |
| 21 | robots.txt | Aprovado | Sitemap aponta para a URL pública |
| 22 | sitemap.xml | Aprovado | Home e privacy.html com URL pública |
| 23 | 404 personalizada | Aprovado | 404.html criada |
| 24 | Favicon | Aprovado | SVG JF criado |
| 25 | Open Graph | Atenção | Metadata criada; imagem social explícita ainda não solicitada |
| 26 | Imagem social | Não aplicável | Não gerar sem solicitação explícita; og:image omitido |
| 27 | LocalBusiness schema | Atenção | BeautySalon JSON-LD preparado; revisão jurídica pendente |
| 28 | Search Console | Atenção | Sitemap e canonical preparados; verificação depende do domínio |
| 29 | Links quebrados | Atenção | Smoke test estático; navegador real pendente |
| 30 | Indexabilidade | Aprovado | Site público e indexável; robots/sitemap configurados |
| 31 | Compressão de imagens | Atenção | Sem ativos locais; poster remoto precisa de licença e otimização |
| 32 | Formatos modernos | Atenção | Poster remoto; converter ativo aprovado antes da produção |
| 33 | Lazy loading | Atenção | Vídeo usa metadata; imagens de conteúdo ainda não existem |
| 34 | Lighthouse | Atenção | Executar após servidor local e domínio de demonstração |
| 35 | Core Web Vitals | Atenção | Não há dados de campo; observar LCP/CLS/INP no teste |
| 36 | Fontes/CSS/JS | Atenção | CSS e JS sem build; Google Fonts remoto |
| 37 | HTTPS/SSL | Aprovado | GitHub Pages publicado em HTTPS |
| 38 | Headers de segurança | Atenção | Compatíveis com hospedagem estática; headers dependem do host |
| 39 | Anti-spam | Não aplicável | Formulário não envia dados na demonstração; implementar ao conectar |
| 40 | Tratamento seguro | Aprovado | Nenhum dado deixa o navegador nesta versão |
| 41 | Política de privacidade | Atenção | Documento demonstrativo criado; revisão jurídica necessária |
| 42 | Consentimento | Atenção | Checkbox local; consent management depende de analytics real |
| 43 | Dados no rodapé | Atenção | Dados públicos inseridos; confirmação comercial pendente |
| 44 | Analytics | Atenção | dataLayer local preparado; ferramenta não ativada |
| 45 | Eventos de conversão | Atenção | Eventos locais preparados; teste de destino real pendente |
| 46 | Cliques WhatsApp | Não aplicável | WhatsApp não confirmado |
| 47 | Envios monitoráveis | Atenção | Evento demo; envio real não configurado |
| 48 | UTM preservada | Atenção | Não implementada sem destino de lead |
| 49 | LeadPilot | Atenção | Integração não configurada sem credenciais |
| 50 | Teste de eventos | Atenção | Teste local pendente no navegador |
| 51 | Logo/identidade | Atenção | Monograma demonstrativo; logo oficial não fornecido |
| 52 | Informações reais | Atenção | Dados confirmados usados; catálogo ainda pendente |
| 53 | Telefone conferido | Aprovado | Número coincide com Maps; ligação não realizada |
| 54 | Endereço/horários | Aprovado | Coincidem com ficha atual do Maps |
| 55 | Serviços | Atenção | Texto conservador; catálogo oficial pendente |
| 56 | Fotos autorizadas | Aprovado | Poster original gerado para o projeto; não representa a clínica ou paciente real |
| 57 | Equipe/profissionais | Atenção | Sem credenciais ou equipe publicadas |
| 58 | Avaliações sem fabricação | Aprovado | Excertos de fonte pública, identificados |
| 59 | Conteúdo local | Aprovado | Centro de Florianópolis e Estação Milano incorporados |
| 60 | Conteúdo regulamentado | Atenção | Claims clínicos evitados; revisão profissional pendente |
| 61 | Teste desktop | Aprovado | Navegador real confirmou home, links, simulador e formulário |
| 62 | Teste mobile | Atenção | Executar auditoria visual real |
| 63 | Todos os formulários | Aprovado | Formulário preenchido com dados fictícios; estado local confirmado |
| 64 | Todos os CTAs | Aprovado | Hero, simulador, contato, rotas e política verificados no navegador |
| 65 | Links externos | Aprovado | Google Maps e links públicos resolvidos na página publicada |
| 66 | WhatsApp/telefone/e-mail | Atenção | Telefone linkado; WhatsApp e e-mail não confirmados |
| 67 | Auditoria SEO | Atenção | Metadata e schema preparados; Lighthouse pendente |
| 68 | Acessibilidade básica | Atenção | Labels, foco, skip link e reduced motion preparados; axe/manual pendente |
| 69 | Auditoria de performance | Atenção | Servidor e navegador ainda necessários |
| 70 | Auditoria de segurança | Atenção | Sem backend; headers dependem do host |
| 71 | Domínio/SSL | Aprovado | URL padrão do GitHub Pages vinculada e publicada |
| 72 | Site Quality Score | Atenção | Score final só após testes desktop/mobile e correções |

## Evidências de implementação

- index.html: estrutura semântica, vídeo com autoplay muted loop playsinline poster, JSON-LD, CTAs, FAQ, localização e formulário.
- styles.css: tokens, contraste, foco, responsividade, reduced motion e reserva de espaço.
- script.js: simulador, estados de erro/sucesso, eventos locais e menu móvel.
- tests/site-smoke.mjs: verificação automatizada de elementos essenciais.

## Bloqueadores antes de READY FOR PRODUCTION

1. Confirmar Instagram, WhatsApp, credenciais, serviços e logo oficial.
2. Substituir URLs example.github.io pelo domínio/repositório real.
3. Confirmar licença/autorização do vídeo e poster ou fornecer mídia própria.
4. Executar auditoria em navegador real desktop/mobile e corrigir achados.
5. Definir destino seguro para formulário, analytics e LeadPilot antes de ativar integrações.

## Verificações executadas nesta etapa

- `node tests/site-smoke.mjs`: **Aprovado** — site-smoke: ok.
- `node --check script.js`: **Aprovado** — sintaxe JavaScript válida.
- Servidor local e requisições HTTP para `/`, `/privacy.html`, `/404.html`, `/styles.css` e `/script.js`: **Aprovado** — respostas 200.
- Navegador integrado em desktop/mobile: **Atenção** — o ambiente bloqueou a abertura de páginas locais por política de URL; não foi possível registrar screenshots ou interação real nesta etapa.
- Página pública em navegador real: **Aprovado** — https://leandroramos1985.github.io/jordana-de-faveri-clinica-estetica/ abriu com conteúdo, navegação e formulário.
- Simulador público: **Aprovado** — três escolhas produziram resumo local com “Conhecer a clínica”, “Primeira visita” e “Manhã”.
- Formulário público: **Aprovado** — dados fictícios e consentimento produziram o estado “Demonstração local: nada foi enviado”.
- Auditoria mobile: **Atenção** — CSS responsivo está implementado, mas o ambiente não ofereceu viewport móvel automatizado nesta sessão.

