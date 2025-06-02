if (import.meta.main) {
  const message_text = Deno.env.get("MESSAGE_TEXT");
  const username = Deno.env.get("USERNAME");
  const first_name = Deno.env.get("FIRST_NAME");
  const user_id = Deno.env.get("USER_ID");
  const chat_id = Deno.env.get("CHAT_ID");
  const timestamp = Deno.env.get("TIMESTAMP");

  console.log("Received Telegram message:");
  console.log("Text:", message_text);
  console.log("Username:", username);
  console.log("Name:", first_name);
  console.log("User ID:", user_id);
  console.log("Chat ID:", chat_id);
  console.log("Timestamp:", timestamp);
}
