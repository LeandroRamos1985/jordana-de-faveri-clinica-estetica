# Design system — Dra. Jordana de Fáveri

Direção editorial de luxo sereno para clínica de estética local.

## Princípios

- Acolhimento antes de procedimento.
- Tipografia com contraste editorial, sem reduzir legibilidade.
- Movimento lento e contextual; o vídeo apoia atmosfera, não compete com a ação.
- Informação pública separada de confirmação comercial.

## Tokens

- Paper: `#f5f1eb`
- Cream: `#ece4d9`
- Ink: `#28231f`
- Dark: `#29241f`
- Gold: `#b79368`
- Serif: Playfair Display
- Sans: DM Sans
- Spacing: 8 / 16 / 24 / 40 / 64 / 96 / 160px
- Radius: 0px para cartões e campos; 50% somente para marcas e pontos

## Componentes

- Hero com vídeo, poster, overlay, CTA e fallback de reduced motion.
- Navegação desktop e menu móvel com foco visível.
- Cards de cuidado com arte abstrata CSS para evitar atribuir fotos não autorizadas à clínica.
- Simulador com escolhas em três etapas e resumo local.
- Formulário com labels, validação inline, consentimento e status anunciado.
- FAQ nativo com `details/summary`.

## Acessibilidade e performance

- Base 16px, corpo com line-height confortável, foco visível e skip link.
- Alvos de toque com área mínima aproximada de 44px.
- `preload="metadata"`, poster, `playsinline` e `prefers-reduced-motion` para o vídeo.
- Nenhuma imagem de paciente ou profissional é apresentada sem autorização.
