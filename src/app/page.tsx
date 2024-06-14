import { createClient } from "@/utils/supabase/server";
import React from "react";

const Home = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  return <div>{data.user && data.user.email}</div>;
};

export default Home;
