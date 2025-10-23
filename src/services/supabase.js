import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
