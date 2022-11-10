import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface CounterState {
  value: string
}

const initialState: CounterState = {
  value: ''
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { setValue } = countriesSlice.actions

export default countriesSlice.reducer