export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      recipes: {
        Row: {
          id: string
          created_at: string
          user_id: string
          title: string
          ingredients: string[]
          instructions: string[]
          cooking_time_minutes: number | null
          difficulty: 'Easy' | 'Medium' | 'Hard' | null
          category: string | null
          updated_at: string
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          title: string
          ingredients: string[]
          instructions: string[]
          cooking_time_minutes?: number | null
          difficulty?: 'Easy' | 'Medium' | 'Hard' | null
          category?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          title?: string
          ingredients?: string[]
          instructions?: string[]
          cooking_time_minutes?: number | null
          difficulty?: 'Easy' | 'Medium' | 'Hard' | null
          category?: string | null
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}



