// Estado global de la aplicación
const AppState = {
  currentQuestionIndex: 0,
  userAnswers: {},       // idPregunta (1 a 14): valor (1 a 5)
  userPriorities: [],    // Array con los IDs de las prioridades elegidas en orden [p1, p2, p3]
  selectedOptionValue: null, // Selección temporal en preguntas 1 a 14
  lastResults: null,     // Resultados calculados
  isCompleted: false
};

// Elementos DOM principales
const DOM = {
  welcomeScreen: document.getElementById("welcome-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultsScreen: document.getElementById("results-screen"),
  btnStart: document.getElementById("btn-start"),
  
  // Quiz DOM
  progressCategory: document.getElementById("progress-category"),
  progressCount: document.getElementById("progress-count"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  questionTopic: document.getElementById("question-topic"),
  questionStatement: document.getElementById("question-statement"),
  questionContext: document.getElementById("question-context"),
  optionsGrid: document.getElementById("options-grid"),
  explanationContainer: document.getElementById("explanation-container"),
  explanationText: document.getElementById("explanation-text"),
  btnPrev: document.getElementById("btn-prev"),
  btnConfirm: document.getElementById("btn-confirm"),

  // Results DOM
  winnerColorBar: document.getElementById("winner-hero-card"),
  winnerPartyName: document.getElementById("winner-party-name"),
  winnerLeader: document.getElementById("winner-leader"),
  winnerPercent: document.getElementById("winner-percent"),
  winnerTagline: document.getElementById("winner-tagline"),
  winnerDesc: document.getElementById("winner-desc"),
  rankingList: document.getElementById("ranking-list"),
  compassWrapper: document.getElementById("compass-wrapper"),
  profileTitleBadge: document.getElementById("profile-title-badge"),
  profileHeadline: document.getElementById("profile-headline"),
  profileNarrativeText: document.getElementById("profile-narrative-text"),
  profilePillarsGrid: document.getElementById("profile-pillars-grid"),
  reviewList: document.getElementById("review-list"),
  btnRestart: document.getElementById("btn-restart"),
  btnCopy: document.getElementById("btn-copy"),
  toast: document.getElementById("toast")
};

// Inicialización de Eventos
document.addEventListener("DOMContentLoaded", () => {
  DOM.btnStart.addEventListener("click", startQuiz);
  DOM.btnConfirm.addEventListener("click", confirmAndNext);
  DOM.btnPrev.addEventListener("click", goToPrevQuestion);
  DOM.btnRestart.addEventListener("click", restartQuiz);
  DOM.btnCopy.addEventListener("click", shareResults);
});

// Comenzar Cuestionario
function startQuiz() {
  DOM.welcomeScreen.style.display = "none";
  DOM.quizScreen.style.display = "block";
  DOM.resultsScreen.style.display = "none";
  AppState.currentQuestionIndex = 0;
  AppState.userAnswers = {};
  AppState.userPriorities = [];
  AppState.selectedOptionValue = null;
  renderQuestion();
}

// Renderizar Pregunta Actual (Gestión unificada de preguntas 1-14 y Pregunta 15 de prioridades)
function renderQuestion() {
  const q = QUESTIONS[AppState.currentQuestionIndex];
  const total = QUESTIONS.length;
  const currentNum = AppState.currentQuestionIndex + 1;

  // Actualizar indicadores de progreso
  DOM.progressCategory.textContent = q.category;
  DOM.progressCount.textContent = `Pregunta ${currentNum} de ${total}`;
  const percentProgress = ((currentNum - 1) / total) * 100;
  DOM.progressBarFill.style.width = `${percentProgress}%`;

  // Encabezado y contexto pedagógico
  DOM.questionTopic.textContent = q.topic;
  DOM.questionStatement.textContent = q.statement;

  if (q.contextNote) {
    DOM.questionContext.innerHTML = q.contextNote;
    DOM.questionContext.style.display = "block";
  } else {
    DOM.questionContext.style.display = "none";
  }

  // Estado del botón anterior
  DOM.btnPrev.disabled = AppState.currentQuestionIndex === 0;

  // Distinguir entre Pregunta de Prioridades (Q15) y Preguntas normales (Q1 a Q14)
  if (q.isPriorityQuestion) {
    renderPriorityQuestion(q);
  } else {
    renderStandardQuestion(q);
  }

  // Desplazamiento suave a la parte superior de la pregunta
  window.scrollTo({ top: DOM.quizScreen.offsetTop - 25, behavior: "smooth" });
}

// --------------------------------------------------------------------------
// RENDERIZADO DE PREGUNTA ESTÁNDAR (5 Opciones con Explicación Dinámica)
// --------------------------------------------------------------------------
function renderStandardQuestion(q) {
  const previousAnswer = AppState.userAnswers[q.id] || null;
  AppState.selectedOptionValue = previousAnswer;

  DOM.optionsGrid.className = "options-grid";
  DOM.optionsGrid.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `option-btn ${previousAnswer === opt.value ? "selected" : ""}`;
    btn.dataset.value = opt.value;

    btn.innerHTML = `
      <div class="option-left">
        <div class="radio-indicator">
          <div class="radio-indicator-dot"></div>
        </div>
        <span class="option-text">${opt.label}</span>
      </div>
      <span class="option-emoji">${opt.emoji}</span>
    `;

    btn.addEventListener("click", () => handleOptionClick(opt, q));
    DOM.optionsGrid.appendChild(btn);
  });

  // Gestionar estado de la explicación y botón de confirmar
  if (previousAnswer !== null) {
    const matchedOpt = q.options.find(o => o.value === previousAnswer);
    if (matchedOpt) {
      showExplanation(matchedOpt.explanation);
      DOM.btnConfirm.disabled = false;
    }
  } else {
    hideExplanation();
    DOM.btnConfirm.disabled = true;
  }

  DOM.btnConfirm.innerHTML = `Confirmar y siguiente ➔`;
}

// Manejar clic en una opción normal
function handleOptionClick(opt, question) {
  AppState.selectedOptionValue = opt.value;

  // Actualizar clases activas en botones
  const allBtns = DOM.optionsGrid.querySelectorAll(".option-btn");
  allBtns.forEach(btn => {
    if (parseInt(btn.dataset.value, 10) === opt.value) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });

  // Mostrar la explicación correspondiente DEBAJO de las opciones
  showExplanation(opt.explanation);

  // Habilitar botón de confirmar
  DOM.btnConfirm.disabled = false;
}

// --------------------------------------------------------------------------
// RENDERIZADO DE PREGUNTA 15: PRIORIDADES DE PAÍS
// --------------------------------------------------------------------------
function renderPriorityQuestion(q) {
  DOM.optionsGrid.className = "priority-grid-wrapper";
  DOM.optionsGrid.innerHTML = `
    <div class="priority-instruction">
      <span>⭐</span> Selecciona hasta 3 temas clave en orden de importancia (Llevas <span id="priority-counter" style="color:#ffffff; font-weight:800;">${AppState.userPriorities.length}/3</span> seleccionados):
    </div>
    <div id="priority-cards-container" class="priority-grid"></div>
  `;

  const container = document.getElementById("priority-cards-container");

  q.priorityOptions.forEach((pOpt) => {
    const card = document.createElement("div");
    card.className = "priority-card";
    card.dataset.id = pOpt.id;

    // Verificar si ya estaba seleccionada
    const rankIndex = AppState.userPriorities.indexOf(pOpt.id);
    if (rankIndex !== -1) {
      card.classList.add("selected");
    }

    const rankLabel = rankIndex !== -1 ? `${rankIndex + 1}ª Prioridad` : "";

    card.innerHTML = `
      <div class="priority-card-left">
        <span class="priority-icon">${pOpt.icon}</span>
        <span class="priority-label">${pOpt.label}</span>
      </div>
      <span class="priority-rank-badge">${rankLabel}</span>
    `;

    card.addEventListener("click", () => handlePriorityToggle(pOpt, q));
    container.appendChild(card);
  });

  updatePriorityExplanation();
  DOM.btnConfirm.innerHTML = `Confirmar y ver resultados ✨`;
}

// Manejar selección / deselección de prioridades
function handlePriorityToggle(pOpt, q) {
  const existingIdx = AppState.userPriorities.indexOf(pOpt.id);

  if (existingIdx !== -1) {
    // Si ya estaba seleccionada, la retiramos
    AppState.userPriorities.splice(existingIdx, 1);
  } else {
    // Si no estaba seleccionada y aún hay espacio (máximo 3)
    if (AppState.userPriorities.length < 3) {
      AppState.userPriorities.push(pOpt.id);
    } else {
      // Reemplaza la 3ª prioridad
      AppState.userPriorities[2] = pOpt.id;
    }
  }

  // Refrescar tarjetas visualmente
  const cards = document.querySelectorAll(".priority-card");
  cards.forEach(c => {
    const id = c.dataset.id;
    const rankIdx = AppState.userPriorities.indexOf(id);
    const badge = c.querySelector(".priority-rank-badge");

    if (rankIdx !== -1) {
      c.classList.add("selected");
      badge.textContent = `${rankIdx + 1}ª Prioridad`;
      badge.style.display = "inline-block";
    } else {
      c.classList.remove("selected");
      badge.textContent = "";
      badge.style.display = "none";
    }
  });

  // Actualizar contador
  const counter = document.getElementById("priority-counter");
  if (counter) {
    counter.textContent = `${AppState.userPriorities.length}/3`;
  }

  updatePriorityExplanation();
}

function updatePriorityExplanation() {
  const q = QUESTIONS.find(item => item.isPriorityQuestion);
  if (!q) return;

  if (AppState.userPriorities.length > 0) {
    const names = AppState.userPriorities.map((id, idx) => {
      const found = q.priorityOptions.find(o => o.id === id);
      return `<strong>${idx + 1}º</strong> ${found ? found.label : id}`;
    }).join(", ");

    showExplanation(`Has establecido como tus prioridades estratégicas: ${names}. Estos asuntos tendrán una ponderación reforzada en tu porcentaje final de coincidencia política.`);
    DOM.btnConfirm.disabled = false;
  } else {
    showExplanation(`Por favor, pulsa sobre 1, 2 o 3 temas de la lista a los que concedas máxima urgencia política en España.`);
    DOM.btnConfirm.disabled = true;
  }
}

// Mostrar caja de explicación
function showExplanation(text) {
  DOM.explanationText.innerHTML = text;
  DOM.explanationContainer.style.display = "block";
}

// Ocultar caja de explicación
function hideExplanation() {
  DOM.explanationContainer.style.display = "none";
  DOM.explanationText.innerHTML = "";
}

// Confirmar respuesta y avanzar
function confirmAndNext() {
  const currentQ = QUESTIONS[AppState.currentQuestionIndex];

  if (currentQ.isPriorityQuestion) {
    if (AppState.userPriorities.length === 0) return;
    // Cuestionario completo -> calcular resultados
    calculateAndShowResults();
  } else {
    if (AppState.selectedOptionValue === null) return;
    AppState.userAnswers[currentQ.id] = AppState.selectedOptionValue;

    if (AppState.currentQuestionIndex < QUESTIONS.length - 1) {
      AppState.currentQuestionIndex++;
      AppState.selectedOptionValue = null;
      renderQuestion();
    } else {
      calculateAndShowResults();
    }
  }
}

// Volver a la pregunta anterior
function goToPrevQuestion() {
  if (AppState.currentQuestionIndex > 0) {
    AppState.currentQuestionIndex--;
    const prevQ = QUESTIONS[AppState.currentQuestionIndex];
    if (!prevQ.isPriorityQuestion) {
      AppState.selectedOptionValue = AppState.userAnswers[prevQ.id] || null;
    }
    renderQuestion();
  }
}

// ==========================================================================
// CÁLCULO DE RESULTADOS Y AFINIDAD CON PONDERACIÓN DE PRIORIDADES
// ==========================================================================
function calculateAndShowResults() {
  DOM.progressBarFill.style.width = "100%";
  DOM.quizScreen.style.display = "none";
  DOM.resultsScreen.style.display = "block";

  // 1. Mapear pesos adicionales de cada pregunta según las prioridades del usuario
  const questionMultipliers = {};
  const standardQuestions = QUESTIONS.filter(q => !q.isPriorityQuestion);
  standardQuestions.forEach(q => { questionMultipliers[q.id] = 1.0; });

  const priorityQuestion = QUESTIONS.find(q => q.isPriorityQuestion);
  if (priorityQuestion && AppState.userPriorities.length > 0) {
    AppState.userPriorities.forEach((pId, rankIndex) => {
      const opt = priorityQuestion.priorityOptions.find(o => o.id === pId);
      if (opt && opt.relatedQuestions) {
        // 1ª prioridad: +1.5; 2ª prioridad: +1.0; 3ª prioridad: +0.6
        const boost = rankIndex === 0 ? 1.5 : (rankIndex === 1 ? 1.0 : 0.6);
        opt.relatedQuestions.forEach(qId => {
          if (questionMultipliers[qId]) {
            questionMultipliers[qId] += boost;
          }
        });
      }
    });
  }

  // 2. Calcular afinidad ponderada para cada partido
  const partyScores = {};
  const partyIds = Object.keys(PARTIES);

  partyIds.forEach(pId => {
    let weightedSimSum = 0;
    let totalWeightSum = 0;

    standardQuestions.forEach(q => {
      const userVal = AppState.userAnswers[q.id] || 3;
      const partyIdealVal = q.partyWeights[pId];
      const diff = Math.abs(userVal - partyIdealVal);
      const similarity = 1 - (diff / 4); // entre 0 y 1

      const weight = questionMultipliers[q.id] || 1.0;
      weightedSimSum += similarity * weight;
      totalWeightSum += weight;
    });

    const rawPercent = (weightedSimSum / totalWeightSum) * 100;
    partyScores[pId] = Math.round(Math.min(99, Math.max(8, rawPercent)));
  });

  // Ordenar partidos por puntuación de mayor a menor
  const sortedParties = partyIds.sort((a, b) => partyScores[b] - partyScores[a]);
  const winnerPartyId = sortedParties[0];
  const winnerParty = PARTIES[winnerPartyId];
  const winnerPercent = partyScores[winnerPartyId];

  // Guardar en AppState para compartir
  AppState.lastResults = {
    winnerParty,
    winnerPercent,
    sortedParties,
    partyScores
  };

  // 3. Renderizar Tarjeta Ganadora
  DOM.winnerColorBar.style.setProperty("--winner-color", winnerParty.color);
  DOM.winnerColorBar.style.borderColor = winnerParty.color;
  DOM.winnerPartyName.textContent = winnerParty.name;
  DOM.winnerPartyName.style.color = winnerParty.color;
  DOM.winnerLeader.textContent = `Líder: ${winnerParty.leader}`;
  DOM.winnerPercent.textContent = winnerPercent;
  DOM.winnerTagline.textContent = winnerParty.tagline;
  DOM.winnerDesc.textContent = winnerParty.description;

  // 4. Renderizar Ranking de todos los partidos
  renderRankingList(sortedParties, partyScores);

  // 5. Calcular Coordenadas en la Brújula Política 2D
  const userCoords = calculateUserCoords(questionMultipliers);
  renderCompass(userCoords);

  // 6. Generar Explicación Cualitativa del Perfil Político General
  generatePoliticalProfile(userCoords, sortedParties, partyScores);

  // 7. Renderizar Desglose Completo de Respuestas
  renderAnswersReview();

  // Scroll arriba
  window.scrollTo({ top: DOM.resultsScreen.offsetTop - 30, behavior: "smooth" });
}

// Renderizar la lista comparativa de partidos con barras animadas
function renderRankingList(sortedParties, partyScores) {
  DOM.rankingList.innerHTML = "";

  sortedParties.forEach((pId, idx) => {
    const party = PARTIES[pId];
    const score = partyScores[pId];

    const row = document.createElement("div");
    row.className = "party-row";
    row.innerHTML = `
      <div class="party-row-top">
        <div class="party-identity">
          <div class="party-badge-sq" style="background-color: ${party.color};">
            ${party.logoLetter}
          </div>
          <div class="party-name-leader">
            <span class="party-name-text">${party.name}</span>
            <span class="party-leader-text">${party.leader} · ${party.tagline}</span>
          </div>
        </div>
        <div class="party-affinity-score" style="color: ${party.color};">
          ${score}%
        </div>
      </div>
      <div class="party-progress-track">
        <div class="party-progress-bar" id="pbar-${pId}" style="background-color: ${party.color}; width: 0%;"></div>
      </div>
    `;

    DOM.rankingList.appendChild(row);

    setTimeout(() => {
      const pbar = document.getElementById(`pbar-${pId}`);
      if (pbar) {
        pbar.style.width = `${score}%`;
      }
    }, 120 + idx * 70);
  });
}

// Calcular Coordenadas Ponderadas en los Ejes Económico (X) y Social/Moral (Y)
function calculateUserCoords(questionMultipliers) {
  let ecoSum = 0;
  let ecoWeightSum = 0;
  let socSum = 0;
  let socWeightSum = 0;

  const standardQuestions = QUESTIONS.filter(q => !q.isPriorityQuestion);

  standardQuestions.forEach(q => {
    const val = AppState.userAnswers[q.id] || 3;
    const normalizedVal = (val - 3) / 2; // de [-1, +1]
    const priorityWeight = questionMultipliers[q.id] || 1.0;

    if (q.axisWeight.eco !== 0) {
      ecoSum += normalizedVal * q.axisWeight.eco * priorityWeight;
      ecoWeightSum += Math.abs(q.axisWeight.eco) * priorityWeight;
    }
    if (q.axisWeight.soc !== 0) {
      socSum += normalizedVal * q.axisWeight.soc * priorityWeight;
      socWeightSum += Math.abs(q.axisWeight.soc) * priorityWeight;
    }
  });

  const rawX = ecoWeightSum > 0 ? (ecoSum / ecoWeightSum) : 0;
  const rawY = socWeightSum > 0 ? (socSum / socWeightSum) : 0;

  const clamp = (num) => Math.max(-0.95, Math.min(0.95, num));

  return {
    x: clamp(rawX), // -1: Izquierda / Intervención estatal, +1: Libre mercado / Bajas de impuestos
    y: clamp(rawY)  // -1: Progresista / Laico / Federal, +1: Conservador / Orden / Identidad
  };
}

// Renderizar la Brújula Política 2D
function renderCompass(userCoords) {
  const existingDots = DOM.compassWrapper.querySelectorAll(".compass-dot");
  existingDots.forEach(d => d.remove());

  const toPercent = (val, invert = false) => {
    let p = ((val + 1) / 2) * 80 + 10;
    if (invert) p = 100 - p;
    return p;
  };

  // Posicionar los 6 partidos
  Object.keys(PARTIES).forEach(pId => {
    const p = PARTIES[pId];
    const dot = document.createElement("div");
    dot.className = "compass-dot";
    dot.style.backgroundColor = p.color;
    dot.style.left = `${toPercent(p.coords.x)}%`;
    dot.style.top = `${toPercent(p.coords.y, true)}%`;
    dot.title = `${p.name} (${p.leader})`;
    dot.textContent = p.logoLetter;
    DOM.compassWrapper.appendChild(dot);
  });

  // Posicionar el punto del usuario
  const userDot = document.createElement("div");
  userDot.className = "compass-dot compass-dot-user";
  userDot.style.left = `${toPercent(userCoords.x)}%`;
  userDot.style.top = `${toPercent(userCoords.y, true)}%`;
  userDot.title = `Tu posición ideológica en España`;
  userDot.innerHTML = `<span style="font-size:12px; font-weight:900;">TÚ</span>`;
  DOM.compassWrapper.appendChild(userDot);
}

// Generar Perfil Ideológico Cualitativo Completo
function generatePoliticalProfile(coords, sortedParties, partyScores) {
  const winnerParty = PARTIES[sortedParties[0]];
  const lowestParty = PARTIES[sortedParties[sortedParties.length - 1]];

  let profileArchetype = "";
  let badgeText = "";
  let ecoDesc = "";
  let socDesc = "";
  let stateDesc = "";
  let priorityHighlight = "";

  // Evaluación económica matizada
  if (coords.x < -0.3) {
    ecoDesc = "En materia económica y social, tu postura defiende la <strong>primacía del interés público sobre el libre mercado</strong>: apoyas blindar la sanidad y la educación frente a la gestión privada, intervenir el precio del alquiler ante la especulación inmobiliaria y sostener un escudo social garantista para erradicar la precariedad.";
  } else if (coords.x > 0.3) {
    ecoDesc = "En el terreno económico, confías firmemente en la <strong>iniciativa privada, el libre mercado y la seguridad jurídica</strong>: consideras que la riqueza la generan las empresas y los autónomos sin asfixia burocrática, defiendes una reducción sustancial de impuestos y abogas por la propiedad privada frente a las trabas del Estado.";
  } else {
    ecoDesc = "En lo económico, te sitúas en un <strong>pragmatismo mixto y moderado</strong>: reconoces la necesidad de unos servicios esenciales públicos de calidad, pero sin distorsionar en exceso los precios de mercado y apostando por la eficiencia en el gasto antes que por subidas fiscales continuas.";
  }

  // Evaluación moral y social matizada
  if (coords.y > 0.3) {
    socDesc = "En el plano social, ético y de convivencia, te identificas con principios de <strong>orden, protección de la familia tradicional y soberanía</strong>: priorizas el control riguroso de fronteras, el endurecimiento penal inmediato frente a la okupación y la delincuencia, y cuestionas las doctrinas de discriminación positiva o imposiciones morales estatales.";
  } else if (coords.y < -0.3) {
    socDesc = "En el plano moral y de derechos civiles, te posicionas en el <strong>progresismo laico y los derechos individuales</strong>: defiendes el aborto y la eutanasia como libertades personales incuestionables, la erradicación del machismo mediante leyes específicas y un compromiso ineludible con la transición ecológica frente al cambio climático.";
  } else {
    socDesc = "En los debates morales y de igualdad, muestras un <strong>enfoque ponderado e institucional</strong>: buscas el equilibrio entre proteger a los sectores vulnerables y garantizar la presunción de inocencia, favoreciendo el consenso civil sin confrontaciones ideológicas extremas.";
  }

  // Evaluación institucional (Pregunta 14 de ruptura / casta política)
  const ansCasta = AppState.userAnswers[14] || 3;
  if (ansCasta >= 4) {
    stateDesc = "Destaca en tu visión una <strong>profunda indignación con la clase política tradicional</strong> y la partitocracia bipartidista, reclamando auditorías implacables, despolitización urgente de la justicia y el cierre de chiringuitos y organismos superfluos.";
  } else {
    stateDesc = "Asimismo, confías en los <strong>cauces constitucionales y parlamentarios</strong>, prefiriendo reformas dentro de la ley y acuerdos de Estado antes que discursos de polarización o ruptura.";
  }

  // Mención de las prioridades elegidas en la Pregunta 15
  const priorityQ = QUESTIONS.find(q => q.isPriorityQuestion);
  if (priorityQ && AppState.userPriorities.length > 0) {
    const listText = AppState.userPriorities.map((id, i) => {
      const opt = priorityQ.priorityOptions.find(o => o.id === id);
      return `<strong>${i + 1}º</strong> ${opt ? opt.label : id}`;
    }).join(", ");
    priorityHighlight = `Tus máximas prioridades declaradas para el país son: ${listText}. Estas inquietudes han actuado como eje prioritario en tu grado de afinidad con cada formación política.`;
  }

  // Determinación del Arquetipo
  if (coords.x > 0.25 && coords.y > 0.25) {
    if (ansCasta >= 4) {
      badgeText = "Derecha Anti-Establishment / Regeneradora";
      profileArchetype = "Patriota Regenerador de Mano Dura";
    } else {
      badgeText = "Derecha Conservadora e Identitaria";
      profileArchetype = "Conservador Constitucional de Orden";
    }
  } else if (coords.x > 0.2 && coords.y <= 0.25 && coords.y >= -0.25) {
    badgeText = "Centro-Derecha Liberal";
    profileArchetype = "Liberal Reformista Pro-Mercado";
  } else if (coords.x < -0.25 && coords.y < -0.25) {
    if (ansCasta >= 4) {
      badgeText = "Izquierda Rupturista y Transformadora";
      profileArchetype = "Progresista Transformador de Base Social";
    } else {
      badgeText = "Izquierda Socialdemócrata y Verde";
      profileArchetype = "Socialdemócrata del Estado del Bienestar";
    }
  } else if (coords.x <= 0.1 && coords.y < -0.2) {
    badgeText = "Centro-Izquierda Cívico";
    profileArchetype = "Progresista de Derechos Sociales y Servicios";
  } else {
    badgeText = "Centro Transversal Pragmático";
    profileArchetype = "Moderado Pragmático de Convivencia";
  }

  DOM.profileTitleBadge.textContent = badgeText;
  DOM.profileHeadline.textContent = `Tu perfil político es: ${profileArchetype}`;

  DOM.profileNarrativeText.innerHTML = `
    <p>${ecoDesc}</p>
    <p>${socDesc}</p>
    <p>${stateDesc}</p>
    ${priorityHighlight ? `<p style="padding: 10px 14px; background: rgba(139, 92, 246, 0.12); border-radius: 8px; border-left: 3px solid #8b5cf6;">${priorityHighlight}</p>` : ""}
    <p style="margin-top: 14px; padding: 12px 16px; background: rgba(255,255,255,0.03); border-radius: 8px; border-left: 3px solid ${winnerParty.color};">
      <strong>Coincidencia principal:</strong> Encuentras tu máxima sintonía con <strong>${winnerParty.name} (${partyScores[winnerParty.id]}%)</strong>, liderado por ${winnerParty.leader}, reflejando sintonía con sus prioridades clave. Por contra, tu mayor discrepancia ideológica se da con <strong>${lowestParty.name} (${partyScores[lowestParty.id]}%)</strong> debido a modelos de país y visiones del Estado incompatibles.
    </p>
  `;

  // Pilares temáticos
  DOM.profilePillarsGrid.innerHTML = `
    <div class="pillar-item">
      <div class="pillar-icon">🏠</div>
      <div class="pillar-label">Vivienda y Alquiler</div>
      <div class="pillar-desc">${(AppState.userAnswers[6] || 3) >= 4 ? "Partidario de topar precios y movilizar vivienda pública." : "Partidario de dar seguridad jurídica al propietario y liberalizar suelo."}</div>
    </div>
    <div class="pillar-item">
      <div class="pillar-icon">🛡️</div>
      <div class="pillar-label">Okupación y Seguridad</div>
      <div class="pillar-desc">${(AppState.userAnswers[5] || 3) >= 4 ? "Mano dura penal y desalojo exprés en 24h sin dilaciones." : "Garantías procesales y protección ante la exclusión habitacional."}</div>
    </div>
    <div class="pillar-item">
      <div class="pillar-icon">⚖️</div>
      <div class="pillar-label">Familia e Igualdad</div>
      <div class="pillar-desc">${(AppState.userAnswers[3] || 3) >= 4 ? "Apoyo al marco específico de violencia de género y feminismo institucional." : "Preferencia por una ley intrafamiliar neutra que proteja por igual sin distinción de sexo."}</div>
    </div>
    <div class="pillar-item">
      <div class="pillar-icon">🏛️</div>
      <div class="pillar-label">Instituciones y Casta</div>
      <div class="pillar-desc">${ansCasta >= 4 ? "Rechazo frontal a la partitocracia y demanda de castigo a políticos corruptos." : "Confianza en las reformas constitucionales y el Estado de Derecho del 78."}</div>
    </div>
  `;
}

// Renderizar Desglose Detallado de Respuestas
function renderAnswersReview() {
  DOM.reviewList.innerHTML = "";

  // Preguntas 1 a 14
  const standardQuestions = QUESTIONS.filter(q => !q.isPriorityQuestion);
  standardQuestions.forEach(q => {
    const userVal = AppState.userAnswers[q.id];
    const selectedOpt = q.options.find(o => o.value === userVal) || q.options[2];

    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <div class="review-item-header">
        <div>
          <span class="review-q-num">Pregunta ${q.id} · ${q.topic}</span>
          <div class="review-q-title">${q.statement}</div>
        </div>
        <span class="review-user-choice">${selectedOpt.emoji} ${selectedOpt.label}</span>
      </div>
      <div class="review-user-meaning">
        <strong>Lo que indicaste:</strong> ${selectedOpt.explanation}
      </div>
    `;

    DOM.reviewList.appendChild(item);
  });

  // Pregunta 15 (Prioridades)
  const priorityQ = QUESTIONS.find(q => q.isPriorityQuestion);
  if (priorityQ && AppState.userPriorities.length > 0) {
    const item = document.createElement("div");
    item.className = "review-item";

    const prioritiesFormatted = AppState.userPriorities.map((id, idx) => {
      const opt = priorityQ.priorityOptions.find(o => o.id === id);
      return `<li style="margin-bottom: 4px;"><strong>${idx + 1}ª Prioridad:</strong> ${opt ? opt.icon + " " + opt.label : id}</li>`;
    }).join("");

    item.innerHTML = `
      <div class="review-item-header">
        <div>
          <span class="review-q-num">Pregunta 15 · ${priorityQ.topic}</span>
          <div class="review-q-title">${priorityQ.statement}</div>
        </div>
        <span class="review-user-choice">⭐ ${AppState.userPriorities.length} Prioridades Elegidas</span>
      </div>
      <div class="review-user-meaning" style="border-left-color: #8b5cf6;">
        <strong>Tus prioridades de país para ponderar el voto:</strong>
        <ul style="padding-left: 20px; margin-top: 6px; list-style-type: none;">
          ${prioritiesFormatted}
        </ul>
      </div>
    `;

    DOM.reviewList.appendChild(item);
  }
}

// Reiniciar cuestionario
function restartQuiz() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  startQuiz();
}

// Compartir resultados
function shareResults() {
  let textToCopy = "He completado el Test de Afinidad Electoral en España. ¡Descubre qué partido político encaja mejor con tu forma de pensar!";
  
  if (AppState.lastResults && AppState.lastResults.winnerParty) {
    const { winnerParty, winnerPercent } = AppState.lastResults;
    textToCopy = `🗳️ En el Test Electoral de España mi mayor afinidad política es con ${winnerParty.name} (${winnerPercent}%). ¡Descubre cuál es el tuyo!`;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => showToast("¡Resultado copiado al portapapeles!"))
      .catch(() => showToast("Listo para compartir"));
  } else {
    showToast("¡Gracias por completar el test!");
  }
}

// Toast flotante
function showToast(msg) {
  DOM.toast.textContent = msg;
  DOM.toast.classList.add("visible");
  setTimeout(() => {
    DOM.toast.classList.remove("visible");
  }, 2800);
}
