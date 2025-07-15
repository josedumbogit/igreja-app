import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qiycgdawfxqyaldhbekb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpeWNnZGF3ZnhxeWFsZGhiZWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNjAxODQsImV4cCI6MjA2NzczNjE4NH0.M0F9HpL8-7P4tV1NrFRAPX2WIHA_3pL9xWjBFXI9l6s'
export const supabase = createClient(supabaseUrl, supabaseKey)