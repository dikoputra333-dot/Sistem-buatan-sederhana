// config.js
// Isi ini sebelum deploy ke GitHub Pages
// Jangan pakai service_role key di frontend. Pakai anon key saja.
window.APP_CONFIG = {
  SUPABASE_URL: "https://zllscffspusqufjeegxn.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_am-abV_W6HSFQl4r-PuaZg_Fwv7cITZ",
  // Supaya login tetap bisa pakai "admin" (tanpa @), email akan jadi: admin@tabungan.local
  ID_EMAIL_SUFFIX: "@tabungan.local",
  AVG_MONTHS_FOR_FORECAST: 3
};
