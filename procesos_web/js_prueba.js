
    const form = document.getElementById('checklistForm');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    const progress = document.getElementById('progress');
    const fechaEl = document.getElementById('membreteFecha');

    fechaEl.textContent = `Fecha: ${new Date().toLocaleDateString()}`;

    function updateProgress() {
      const total = checkboxes.length;
      const checked = form.querySelectorAll('input[type="checkbox"]:checked').length;
      progress.style.width = `${(checked / total) * 100}%`;
    }

    checkboxes.forEach(cb => cb.addEventListener('change', updateProgress));

    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        alert('Por favor, complete todos los campos obligatorios antes de exportar.');
        return;
      }
      window.print();
    });

    updateProgress();