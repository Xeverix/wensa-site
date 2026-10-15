importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAVm-gCpse93YL2Zgav8UE90k_QSsX1qYo',
  authDomain: 'dawai-52790.firebaseapp.com',
  projectId: 'dawai-52790',
  storageBucket: 'dawai-52790.firebasestorage.app',
  messagingSenderId: '1075093843950',
  appId: '1:1075093843950:web:e81a57f820632799c6a8ff',
});

// إشعارات الخلفية: الإشعار نفسه (العنوان والنص) يعرضه المتصفح تلقائياً من رسالة FCM.
firebase.messaging();

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url.includes('/app/') && 'focus' in c) return c.focus();
      }
      return self.clients.openWindow('/app/');
    })
  );
});
