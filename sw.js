self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'Masters Augusta 2026', {
      body: data.body || '',
      icon: '/Augusta/logo.png',
      badge: '/Augusta/logo.png'
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/Augusta/'));
});
