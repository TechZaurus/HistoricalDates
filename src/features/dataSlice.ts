import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { paragraph, sentence } from "@ndaidong/txtgen";

export interface Data {
  categories: Array<Category>;
}

export interface Category {
  id: number;
  name: string;
  minYear: number;
  maxYear: number;
  events: Array<Event>;
}

export interface Event {
  year: number;
  description: string;
}

interface DataState {
  data: Data;
  currentCategory: undefined | Category;
}

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const eventCompare = (eventA: Event, eventB: Event) => {
  if (eventA.year < eventB.year) {
    return -1;
  }
  if (eventA.year > eventB.year) {
    return 1;
  }
  return 0;
};

const generateCategories = () => {
  let categories: Array<Category> = [];
  const numOfCategories = randomIntFromInterval(2, 6);
  for (let i = 0; i < numOfCategories; ++i) {
    const name = "Категория " + String(i + 1);
    const minYear = randomIntFromInterval(1960, 1990);
    const maxYear = randomIntFromInterval(minYear, 2024);
    const numOfEvents = randomIntFromInterval(4, 12);
    const events = [];
    for (let j = 0; j < numOfEvents; ++j) {
      const event: Event = {
        year: randomIntFromInterval(minYear, maxYear),
        description: paragraph(),
      };
      events.push(event);
    }
    events.sort(eventCompare);
    categories.push({
      id: i,
      name,
      minYear,
      maxYear,
      events,
    });
  }
  return categories;
};

const initialState: DataState = {
  data: { categories: generateCategories() },
  currentCategory: undefined,
};

export const dataSlice = createSlice({
  name: "historicalDates",
  initialState,
  reducers: {
    changeData(state, action: PayloadAction<Data>) {
      state.data.categories = [...action.payload.categories];
    },
    setCurrentCategory(state, action: PayloadAction<Category>) {
      state.currentCategory = action.payload;  
    },
  },
});

export const { setCurrentCategory } = dataSlice.actions;


export default dataSlice.reducer;
