import {
  bio,
  news,
  events,
  publications,
  teaching,
} from "./user-data/data.js";

function populateBio(items, id) {
  const el = document.getElementById(id);
  if (!el) return;
  items.forEach((item) => {
    const p = document.createElement("p");
    p.innerHTML = item;
    el.appendChild(p);
  });
}

function renderPublicationEntries(container, items) {
  if (!container || !items.length) return;
  items.forEach((item) => {
    const { authors, year, title, status, links, tags, citation } = item;
    const entry = document.createElement("article");
    entry.className = "pub-entry";

    const authorsEl = document.createElement("p");
    authorsEl.className = "pub-entry__authors";
    if (authors && authors.length) {
      const span = document.createElement("span");
      span.innerHTML =
        authors.length === 1
          ? `<strong>${authors[0]}</strong> (${year}).`
          : `<strong>${authors[0]}</strong>, ${authors.slice(1).join(", ")} (${year}).`;
      authorsEl.appendChild(span);
    } else if (year) {
      authorsEl.textContent = `(${year}).`;
    }
    entry.appendChild(authorsEl);

    const titleWrap = document.createElement("p");
    titleWrap.className = "pub-entry__title-wrap";
    const titleSpan = document.createElement("span");
    titleSpan.className = "pub-entry__title";
    titleSpan.textContent = title + (status ? " " : ".");
    titleWrap.appendChild(titleSpan);
    if (status) {
      const statusSpan = document.createElement("span");
      statusSpan.className = "pub-entry__status";
      statusSpan.textContent = `(${status}).`;
      titleWrap.appendChild(statusSpan);
    }
    entry.appendChild(titleWrap);

    const hasCitation = citation && (citation.heading || (citation.refs && citation.refs.length));
    if ((links && links.length) || hasCitation) {
      const ul = document.createElement("ul");
      ul.className = "pub-entry__links";
      if (links && links.length) {
        links.forEach(({ label, url }) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = url;
          a.target = "_blank";
          a.rel = "noopener";
          a.textContent = label;
          li.appendChild(a);
          ul.appendChild(li);
        });
      }
      if (hasCitation) {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "pub-entry__citation-btn";
        btn.textContent = "Citation";
        btn.addEventListener("click", () => openCitationModal(citation));
        li.appendChild(btn);
        ul.appendChild(li);
      }
      entry.appendChild(ul);
    }

    if (tags && tags.length) {
      const tagsEl = document.createElement("p");
      tagsEl.className = "pub-entry__tags";
      tagsEl.textContent = tags.join(", ");
      entry.appendChild(tagsEl);
    }

    container.appendChild(entry);
  });
}

function populatePublicationsSection(allItems) {
  const preprints = (allItems || []).filter((p) => p.category === "preprints");
  const thesis = (allItems || []).filter((p) => p.category === "thesis");
  const preprintsSection = document.getElementById("research-preprints-section");
  const thesisSection = document.getElementById("research-thesis-section");
  if (preprintsSection) preprintsSection.style.display = preprints.length ? "" : "none";
  if (thesisSection) thesisSection.style.display = thesis.length ? "" : "none";
  renderPublicationEntries(document.getElementById("publications-preprints"), preprints);
  renderPublicationEntries(document.getElementById("publications-thesis"), thesis);
}

function populateNewsSection(items) {
  const container = document.getElementById("news-list");
  if (!container) return;
  items.forEach((item) => {
    const { date, details } = item;
    if (!date && !details) return;
    const entry = document.createElement("article");
    entry.className = "news-entry news-entry--simple";
    if (date) {
      const dateEl = document.createElement("p");
      dateEl.className = "news-entry__date";
      dateEl.textContent = date.toUpperCase();
      entry.appendChild(dateEl);
    }
    if (details) {
      const detailsEl = document.createElement("p");
      detailsEl.className = "news-entry__details";
      detailsEl.innerHTML = details;
      entry.appendChild(detailsEl);
    }
    if (entry.childNodes.length) container.appendChild(entry);
  });
}

function populateEventsSection(items) {
  const container = document.getElementById("events-list");
  if (!container) return;
  items.forEach((item) => {
    const { date, title, link, details } = item;
    const entry = document.createElement("article");
    entry.className = "news-entry";
    const dateEl = document.createElement("p");
    dateEl.className = "news-entry__date";
    dateEl.textContent = date.toUpperCase();
    entry.appendChild(dateEl);
    if (title) {
      const titleEl = document.createElement("p");
      titleEl.className = "news-entry__title";
      if (link) {
        const a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = title.toUpperCase();
        titleEl.appendChild(a);
      } else {
        titleEl.textContent = title.toUpperCase();
      }
      entry.appendChild(titleEl);
    }
    if (details) {
      const detailsEl = document.createElement("p");
      detailsEl.className = "news-entry__details";
      detailsEl.innerHTML = details;
      entry.appendChild(detailsEl);
    }
    container.appendChild(entry);
  });
}

function populateTeachingSection(items) {
  const container = document.getElementById("teaching-list");
  if (!container) return;
  (items || []).forEach((item) => {
    const { title, date, text } = item;
    const entry = document.createElement("article");
    entry.className = "teaching-entry";
    if (title) {
      const titleEl = document.createElement("p");
      titleEl.className = "teaching-entry__title";
      titleEl.textContent = title;
      entry.appendChild(titleEl);
    }
    if (date) {
      const dateEl = document.createElement("p");
      dateEl.className = "teaching-entry__date";
      dateEl.textContent = date;
      entry.appendChild(dateEl);
    }
    if (text) {
      const textEl = document.createElement("p");
      textEl.className = "teaching-entry__text";
      textEl.innerHTML = text;
      entry.appendChild(textEl);
    }
    container.appendChild(entry);
  });
}

function ensureCopyNotificationEl() {
  let el = document.getElementById("copy-notification");
  if (el) return el;
  el = document.createElement("div");
  el.id = "copy-notification";
  el.className = "copy-notification";
  el.setAttribute("aria-live", "polite");
  document.body.appendChild(el);
  return el;
}

function showCopyNotification(message) {
  const el = ensureCopyNotificationEl();
  el.textContent = message || "Copied to clipboard";
  el.classList.add("copy-notification--visible");
  window.clearTimeout(el._hideTimeout);
  el._hideTimeout = window.setTimeout(() => {
    el.classList.remove("copy-notification--visible");
  }, 2500);
}

function copyTextToClipboard(text) {
  const toCopy = text != null ? String(text) : "";
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(toCopy);
  }
  return new Promise((resolve, reject) => {
    try {
      const ta = document.createElement("textarea");
      ta.value = toCopy;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-1000px";
      ta.style.left = "-1000px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      if (!ok) reject(new Error("copy-failed"));
      else resolve();
    } catch (e) {
      reject(e);
    }
  });
}

function openCitationModal(citation) {
  const modal = document.getElementById("citation-modal");
  const content = document.getElementById("citation-modal-content");
  if (!modal || !content || !citation) return;
  content.innerHTML = "";
  if (citation.heading) {
    const heading = document.createElement("p");
    heading.className = "citation-modal__heading";
    heading.textContent = citation.heading;
    content.appendChild(heading);
  }
  if (citation.refs && citation.refs.length) {
    const ol = document.createElement("ol");
    ol.className = "citation-modal__list";
    citation.refs.forEach((ref) => {
      if (!ref) return;
      const li = document.createElement("li");
      li.className = "citation-modal__ref";
      li.innerHTML = ref;
      ol.appendChild(li);
    });
    content.appendChild(ol);
  }

  const bibtexWrap = document.createElement("div");
  bibtexWrap.className = "citation-modal__bibtex-wrap";
  const bibtexBtn = document.createElement("button");
  bibtexBtn.type = "button";
  bibtexBtn.className = "citation-modal__bibtex-btn";
  bibtexBtn.textContent = "BibTeX";
  bibtexBtn.addEventListener("click", () => {
    const bibtex =
      citation.bibtex && String(citation.bibtex).trim().length
        ? citation.bibtex
        : "@misc{your_citation_key,\n  title = {TODO},\n  author = {TODO},\n  year = {TODO}\n}";
    copyTextToClipboard(bibtex)
      .then(() => showCopyNotification("BibTeX entry copied to clipboard"))
      .catch(() => showCopyNotification("Could not copy BibTeX"));
  });
  bibtexWrap.appendChild(bibtexBtn);
  content.appendChild(bibtexWrap);

  modal.classList.add("citation-modal--open");
  modal.setAttribute("aria-hidden", "false");
}

function closeCitationModal() {
  const modal = document.getElementById("citation-modal");
  if (!modal) return;
  modal.classList.remove("citation-modal--open");
  modal.setAttribute("aria-hidden", "true");
}

function setupCitationModalHandlers() {
  const modal = document.getElementById("citation-modal");
  const closeBtn = document.querySelector(".citation-modal__close");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeCitationModal();
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closeCitationModal);
}

// Populate all tabs
setupCitationModalHandlers();
populateBio(bio, "home-bio");
populatePublicationsSection(publications);
populateNewsSection(news);
populateEventsSection(events);
populateTeachingSection(teaching);

// Tab switching
document.querySelectorAll("[data-tab]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const tab = el.getAttribute("data-tab");
    if (!tab) return;
    document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
    const link = document.querySelector(`.nav-link[data-tab="${tab}"]`);
    const panel = document.getElementById(`panel-${tab}`);
    if (link) link.classList.add("active");
    if (panel) panel.classList.add("active");
  });
});
