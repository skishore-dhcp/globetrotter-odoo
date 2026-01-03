const supabaseUrl = "https://bspusiewpgusseviegpl.supabase.co";
const supabaseKey = "sb_publishable_dSW3ZDoFoo0NYDlzULF-_Q_BKBte7W2";

const supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

async function login() {
  const usernameInput = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!usernameInput || !password) {
    alert("Please fill all fields");
    return;
  }
  const email = `${usernameInput}@app.local`;

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Invalid username or password");
  } else {
    window.location.href = "dashboard.html";
  }
}

