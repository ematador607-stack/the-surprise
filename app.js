(function () {
  const STORAGE_KEY = "the-surprise-progress-v1";

  const state = {
    batch: 0,
    answers: {} // key: "batchIdx-qIdx" -> chosen option index
  };

  const el = {
    quizArea: document.getElementById("quizArea"),
    batchPill: document.getElementById("batchPill"),
    progressFill: document.getElementById("progressFill"),
    progressLabel: document.getElementById("progressLabel"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    resetBtn: document.getElementById("resetBtn"),
    historyBtn: document.getElementById("historyBtn"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modalTitle"),
    modalBody: document.getElementById("modalBody"),
    modalClose: document.getElementById("modalClose")
  };

  const batches = window.BATCHES || [];
  const TOTAL_BATCHES = Math.max(batches.length, 1);

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        state.answers = saved.answers || {};
      }
    } catch (e) { /* ignore */ }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: state.answers }));
    } catch (e) { /* ignore */ }
  }

  function currentBatch() { return batches[state.batch]; }
  function answerKey(qIdx) { return state.batch + "-" + qIdx; }

  function render() {
    const batch = currentBatch();
    el.batchPill.textContent = `Batch ${state.batch + 1} / ${TOTAL_BATCHES}`;
    el.prevBtn.disabled = state.batch === 0;
    el.nextBtn.disabled = state.batch >= TOTAL_BATCHES - 1;

    if (!batch) {
      el.quizArea.innerHTML = `<div class="question-card"><div class="q-text">Batch ${state.batch + 1} is coming soon.</div></div>`;
      updateProgress(0, 0);
      return;
    }

    const frag = document.createDocumentFragment();
    let answeredCount = 0;

    batch.questions.forEach((item, qIdx) => {
      const chosen = state.answers[answerKey(qIdx)];
      const isAnswered = chosen !== undefined;
      if (isAnswered) answeredCount++;

      const card = document.createElement("div");
      card.className = "question-card";

      const num = document.createElement("div");
      num.className = "q-number";
      num.textContent = `Question ${qIdx + 1} of ${batch.questions.length}`;
      card.appendChild(num);

      const qText = document.createElement("div");
      qText.className = "q-text";
      qText.textContent = item.q;
      card.appendChild(qText);

      const optionsWrap = document.createElement("div");
      optionsWrap.className = "options";

      item.options.forEach((opt, oIdx) => {
        const btn = document.createElement("button");
        btn.className = "option";
        if (isAnswered) {
          btn.classList.add("answered");
          if (oIdx === item.correct) btn.classList.add("correct");
          else if (oIdx === chosen) btn.classList.add("wrong");
        }
        btn.innerHTML = `<span class="key">${"ABCD"[oIdx]}</span><span>${opt}</span>`;
        btn.addEventListener("click", () => {
          if (state.answers[answerKey(qIdx)] !== undefined) return;
          state.answers[answerKey(qIdx)] = oIdx;
          saveProgress();
          render();
        });
        optionsWrap.appendChild(btn);
      });
      card.appendChild(optionsWrap);

      if (isAnswered) {
        const exp = document.createElement("div");
        exp.className = "explanation";
        exp.innerHTML = `<strong>Why:</strong> ${item.explanation}`;
        card.appendChild(exp);
      }

      frag.appendChild(card);
    });

    el.quizArea.innerHTML = "";
    el.quizArea.appendChild(frag);
    updateProgress(answeredCount, batch.questions.length);
  }

  function updateProgress(answered, total) {
    const pct = total ? (answered / total) * 100 : 0;
    el.progressFill.style.width = pct + "%";
    el.progressLabel.textContent = `${answered} / ${total} answered`;
  }

  // Navigation
  el.prevBtn.addEventListener("click", () => {
    if (state.batch > 0) {
      state.batch--;
      window.scrollTo({ top: 0, behavior: "smooth" });
      render();
    }
  });

  el.nextBtn.addEventListener("click", () => {
    if (state.batch < TOTAL_BATCHES - 1) {
      state.batch++;
      window.scrollTo({ top: 0, behavior: "smooth" });
      render();
    }
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.key === "ArrowLeft") el.prevBtn.click();
    if (e.key === "ArrowRight") el.nextBtn.click();
    const map = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
    const idx = map[e.key.toLowerCase()];
    if (idx !== undefined) {
      const cards = el.quizArea.querySelectorAll(".question-card");
      for (const card of cards) {
        const buttons = card.querySelectorAll(".option");
        if (buttons[idx] && !buttons[idx].classList.contains("answered")) {
          buttons[idx].click();
          buttons[idx].scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        }
      }
    }
  });

  // Reset
  el.resetBtn.addEventListener("click", () => {
    if (confirm("Reset all progress? This can't be undone.")) {
      state.answers = {};
      saveProgress();
      state.batch = 0;
      render();
    }
  });

  // History
  el.historyBtn.addEventListener("click", () => {
    el.modalTitle.textContent = "Score history";
    let html = "";
    for (let b = 0; b < batches.length; b++) {
      const batch = batches[b];
      if (!batch) continue;
      let correct = 0, answered = 0;
      batch.questions.forEach((item, qIdx) => {
        const chosen = state.answers[b + "-" + qIdx];
        if (chosen !== undefined) {
          answered++;
          if (chosen === item.correct) correct++;
        }
      });
      if (answered === 0) continue;
      html += `<div class="history-row"><span>Batch ${b + 1}</span><span class="score">${correct}/${batch.questions.length}</span></div>`;
    }
    el.modalBody.innerHTML = html || `<p style="color:var(--text-dim)">No answers yet.</p>`;
    el.modal.classList.add("open");
  });

  el.modalClose.addEventListener("click", () => el.modal.classList.remove("open"));
  el.modal.addEventListener("click", (e) => {
    if (e.target === el.modal) el.modal.classList.remove("open");
  });

  // Init
  loadProgress();
  render();
})();