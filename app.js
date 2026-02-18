const SUPABASE_URL = sb_publishable_JcqGFr-9xI4o7tibbmxM8g_8wb5Px_L;
const SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2dHB5bWhjaWNodWpnaW50YXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0NDM4ODQsImV4cCI6MjA4NzAxOTg4NH0.F61bcqnLzgkgKzxTYir8_1UVvjkLDCaVBcgmM5ONAfw;

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

async function testeConexao() {
  const { data, error } = await supabase
    .from("employees")
    .select("*");

  console.log("DADOS:", data);
  console.log("ERRO:", error);
}

testeConexao();
