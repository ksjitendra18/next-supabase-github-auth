import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/client";

export async function signInWithGithub() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: process.env.NEXT_PUBLIC_SUPABASE_AUTH_CALLBACK,
      scopes: "read:user",
    },
  });

  if (error) {
    redirect("/error");
  }

  redirect(data.url);
}
