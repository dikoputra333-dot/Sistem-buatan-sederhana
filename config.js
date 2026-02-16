// config.js
// Isi ini sebelum deploy ke GitHub Pages
// Jangan pakai service_role key di frontend. Pakai anon key saja.
window.APP_CONFIG = {
  SUPABASE_URL: "https://zllscffspusqufjeegxn.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsbHNjZmZzcHVzcXVmamVlZ3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNjE1MzMsImV4cCI6MjA4NjgzNzUzM30.BQWRS7JNH9iN0v-iLTfFa6brLmpMqg59_eS5ACGUa0s",
  // Supaya login tetap bisa pakai "admin" (tanpa @), email akan jadi: admin@tabungan.local
  ID_EMAIL_SUFFIX: "@tabungan.local",
  AVG_MONTHS_FOR_FORECAST: 3
};
