import { create } from 'zustand';

const useFilterStore = create((set, get) => ({
  items: [],
  filteredItems: [],
  selectedTags: [],
  searchInput: '',
  suggestions: [],
  setItems: (items) => set({ items, filteredItems: items }),
  setSearchInput: (input) => {
    set({ searchInput: input });
    get().updateSuggestions();
  },
  addTag: (tag) => {
    const { selectedTags } = get();
    if (tag && !selectedTags.includes(tag)) {
      const newSelectedTags = [...selectedTags, tag];
      set({ selectedTags: newSelectedTags });
      get().filterItems();
    }
    set({ searchInput: '', suggestions: [] });
  },
  removeTag: (tagToRemove) => {
    const newSelectedTags = get().selectedTags.filter(tag => tag !== tagToRemove);
    set({ selectedTags: newSelectedTags });
    get().filterItems();
  },
  updateSuggestions: () => {
    const { searchInput, items } = get();
    if (searchInput.trim() === '') {
      set({ suggestions: [] });
      return;
    }
    const allTags = [...new Set(items.flatMap(item => item.tags || []))];
    const filteredSuggestions = allTags.filter(tag =>
      tag.toLowerCase().startsWith(searchInput.toLowerCase())
    );
    set({ suggestions: filteredSuggestions });
  },
  filterItems: () => {
    const { selectedTags, items } = get();
    if (selectedTags.length === 0) {
      set({ filteredItems: items });
    } else {
      const filtered = items.filter(item =>
        selectedTags.every(tag => item.tags && item.tags.includes(tag))
      );
      set({ filteredItems: filtered });
    }
  }
}));

export default useFilterStore;
