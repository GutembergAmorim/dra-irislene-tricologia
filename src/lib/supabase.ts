import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
   throw new Error("Faltam as variáveis de ambiente do Supabase. Verifique o arquivo .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

