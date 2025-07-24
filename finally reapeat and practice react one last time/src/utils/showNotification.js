function showNotification(message, type = "info", duration = 3000) {
  const container = document.getElementById("notification-container");
  if (!container) return;

  const notification = document.createElement("div");

  // Tailwind colors for different types
  const colors = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
  };

  notification.className = `
    ${colors[type] || colors.info}
    px-4 py-2 rounded shadow-lg text-sm animate-slide-in
  `;
  notification.textContent = message;

  container.appendChild(notification);

  // Auto-remove after duration
  setTimeout(() => {
    notification.classList.add("opacity-0", "translate-x-4", "transition-all");
    setTimeout(() => notification.remove(), 500); // Smooth fade out
  }, duration);
}

export default showNotification;