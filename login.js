// STEP 5: Connect Supabase
const supabaseUrl = "https://bspusiewpgusseviegpl.supabase.co";
const supabaseKey = "sb_publishable_dSW3ZDoFoo0NYDlzULF-_Q_BKBte7W2";

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

// STEP 7: Login function
async function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill all fields");
    return;
  }

  // convert username to fake email
  const email = `${username}@app.local`;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Invalid username or password");
  } else {
    window.location.href = "dashboard.html";
  }
}
