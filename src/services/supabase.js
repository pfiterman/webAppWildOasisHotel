import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseURL = "https://bwkwzxggtcracfbnqfrd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3a3d6eGdndGNyYWNmYm5xZnJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4MTAxNDUsImV4cCI6MjA0MTM4NjE0NX0.pHFY0GhBEZSlY1iY0Lr2P-2Tsc9qsqsiDBGhjYZyAvE";
const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
