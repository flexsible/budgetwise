async function signUpNewUser () {
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https://example.com/welcome'
    }
  })
}

async function signInWithEmail () {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password'
  })
}

export const HistoryData = async () => {
  try {
    const response = await fetch('https://api.example.com/history')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch history data:', error)
    return []
  }
}
