const tooltip = document.querySelectorAll('[data-bs-toggle = "tooltip"]');

tooltip.forEach((element, index, array) => new bootstrap.Tooltip(element));