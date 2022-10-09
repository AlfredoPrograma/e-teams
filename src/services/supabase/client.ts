import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  process.env.REACT_APP_SUPABASE_URL as string,
  process.env.REACT_APP_SUPABASE_ANON_KEY as string,
);

export { supabaseClient };
