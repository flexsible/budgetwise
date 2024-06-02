import { supabase } from './supabaseConfig'

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

export const image = {
  avatar: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/nyoman-img.png',
  avatar2: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/FB_IMG_1713200915872.jpg',
  avatar3: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/profile.jpeg',
  coins: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/Coins.png',
  hero_logo: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/Home_logo.png',
  line: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/Line.png?t=2024-06-02T13%3A33%3A13.996Z',
  line2: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/Line2.png',
  shape: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/Line2.png',
  shape2: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/Shape2.png',
  shape3: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/Shape3.png',
  shape4: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/Shape4.png',
  star: 'https://jakimybhtjdbdhptzkxw.supabase.co/storage/v1/object/public/Images/Star.png'
}
