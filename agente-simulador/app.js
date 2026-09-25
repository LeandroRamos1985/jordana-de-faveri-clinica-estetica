const knowledge = {
  name: "Dra. Jordana de Fáveri",
  address: "Rua Ângelo La Porta, 53, sala 407, Centro, Florianópolis/SC, 88020-600",
  phone: "(48) 3023-7732",
  hours: "de segunda a sexta, das 09:00 às 19:00",
  instagram: "https://www.instagram.com/drajordanadefaveri/"
};

const responses = [
  {
    test: /(onde|endereço|endereco|localização|localizacao|fica|chegar|mapa|rota)/,
    answer: `A clínica fica na ${knowledge.address}. O atendimento funciona ${knowledge.hours}. Você pode abrir a rota diretamente no Google Maps ou ligar para ${knowledge.phone}.`
  },
  {
    test: /(horário|horario|abre|fech|sábado|sabado|domingo)/,
    answer: `O horário público informado é ${knowledge.hours}. Sábados e domingos não aparecem como dias de atendimento. Para confirmar uma disponibilidade específica, fale com a equipe pelo telefone ${knowledge.phone}.`
  },
  {
    test: /(telefone|ligar|contato|falar com|equipe|humano|atendente|whatsapp)/,
    answer: `A equipe pode ser contatada pelo telefone ${knowledge.phone}. Este simulador ainda não envia mensagens nem conecta WhatsApp; ele prepara a conversa para uma futura integração com o agente da GPTMaker.`
  },
  {
    test: /(instagram|perfil|rede social)/,
    answer: `O perfil público informado é ${knowledge.instagram}. Lá você pode conhecer os conteúdos e acompanhar as publicações da Dra. Jordana.`
  },
  {
    test: /(primeira|consulta|visita|avaliação|avaliacao|conversa|agendar|agenda|marcar)/,
    answer: "A primeira conversa serve para entender o que você procura, ouvir suas expectativas e explicar possibilidades com calma. Este protótipo não agenda horários; a confirmação deve ser feita diretamente com a equipe."
  },
  {
    test: /(procedimento|tratamento|serviço|servico|fazem|oferecem|harmonização|harmonizacao|estética|estetica|facial)/,
    answer: "A ficha pública apresenta a clínica como um espaço de estética e harmonização facial. A indicação depende de uma avaliação individual; por isso, o agente deve esclarecer a dúvida e encaminhar a equipe sem prometer resultado ou procedimento específico."
  },
  {
    test: /(hormônio|hormonio|hormônios|hormonios|bioidêntico|bioidentico|reposição|reposicao)/,
    answer: "Esse é um tema publicado no perfil público da Dra. Jordana. O agente pode explicar o assunto em linguagem geral, mas não deve indicar reposição, dose ou tratamento. Para uma orientação individual, é necessário conversar com a profissional."
  },
  {
    test: /(preço|preco|valor|quanto custa|orçamento|orcamento)/,
    answer: "Os valores não estão informados nesta demonstração. Eles podem depender da avaliação e do plano indicado. Posso encaminhar sua intenção para a equipe confirmar as condições corretas."
  },
  {
    test: /(seguro|segurança|seguranca|risco|contraindicação|contraindicacao|resultado|garantia|dói|doi)/,
    answer: "Cada procedimento precisa ser avaliado individualmente. O agente não deve diagnosticar, garantir resultados ou substituir a orientação profissional. Posso organizar sua dúvida para a equipe responder com segurança."
  },
  {
    test: /(privacidade|dados|lgpd|informação|informacao)/,
    answer: "Nesta simulação, nada é enviado para um servidor. Em uma implantação real, o agente da GPTMaker deve informar como os dados são tratados, pedir consentimento quando necessário e encaminhar apenas o que for autorizado."
  }
];

const log = document.querySelector("[data-chat-log]");
const form = document.querySelector("[data-chat-form]");
const input = document.querySelector("[data-message]");
const suggestions = document.querySelector("[data-suggestions]");

function addMessage(text, role = "agent") {
  const item = document.createElement("article");
  item.className = `message ${role}`;
  const label = role === "agent" ? "Agente Jordana" : "Você";
  item.innerHTML = `<small>${label}</small><p></p>`;
  item.querySelector("p").textContent = text;
  log.append(item);
  log.scrollTop = log.scrollHeight;
}

function normalize(text) {
  return text.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function answerFor(question) {
  const clean = normalize(question);
  const hit = responses.find((item) => item.test.test(clean));
  if (hit) return hit.answer;
  return `Entendi sua pergunta: “${question}”. Posso organizar esse assunto para a equipe da ${knowledge.name}. Como esta é uma demonstração, não vou inventar uma resposta clínica nem confirmar algo que não esteja validado. Para continuar, ligue para ${knowledge.phone} ou escreva o que você gostaria de saber sobre localização, horários, primeira conversa, cuidados, valores ou atendimento.`;
}

function welcome() {
  log.replaceChildren();
  addMessage(`Olá! Eu sou o agente de atendimento da ${knowledge.name}. Posso responder dúvidas iniciais sobre a clínica, organizar sua intenção e indicar o próximo passo. O que você gostaria de saber?`);
}

function submitQuestion(question) {
  const value = question.trim();
  if (!value) return;
  addMessage(value, "user");
  input.value = "";
  window.setTimeout(() => addMessage(answerFor(value)), 280);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitQuestion(input.value);
});

input.addEventListener("input", () => {
  input.style.height = "auto";
  input.style.height = `${Math.min(input.scrollHeight, 120)}px`;
});

suggestions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-suggestion]");
  if (button) submitQuestion(button.dataset.suggestion);
});

document.querySelector("[data-reset]").addEventListener("click", welcome);
welcome();
