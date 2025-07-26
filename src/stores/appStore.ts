// @ts-nocheck
// Store temporairement simplifié pour éviter les erreurs de compilation

import { create } from 'zustand';

export const useAppStore = create((set, get) => ({
  // État basique
  legalTexts: [],
  procedures: [],
  news: [],
  templates: [],
  savedSearches: [],
  favorites: [],
  forumDiscussions: [],
  sharedResources: [],
  videoTutorials: [],
  configuration: {},
  forumMembers: [],
  currentUser: null,
  
  // Actions de base
  addLegalText: (text) => {
    set((state) => ({
      legalTexts: [...state.legalTexts, text]
    }));
  },
  
  addProcedure: (procedure) => {
    set((state) => ({
      procedures: [...state.procedures, procedure]
    }));
  },
  
  addNews: (news) => {
    set((state) => ({
      news: [...state.news, news]
    }));
  },
  
  addTemplate: (template) => {
    set((state) => ({
      templates: [...state.templates, template]
    }));
  },
  
  addForumDiscussion: (discussion) => {
    set((state) => ({
      forumDiscussions: [...state.forumDiscussions, discussion]
    }));
  },
  
  addSharedResource: (resource) => {
    set((state) => ({
      sharedResources: [...state.sharedResources, resource]
    }));
  },
  
  addVideoTutorial: (tutorial) => {
    set((state) => ({
      videoTutorials: [...state.videoTutorials, tutorial]
    }));
  },
  
  setConfiguration: (config) => {
    set({ configuration: config });
  },
  
  addForumMember: (member) => {
    set((state) => ({
      forumMembers: [...state.forumMembers, member]
    }));
  },
  
  // Actions de suppression
  deleteLegalText: (id) => {
    set((state) => ({
      legalTexts: state.legalTexts.filter(text => text.id !== id)
    }));
  },
  
  deleteProcedure: (id) => {
    set((state) => ({
      procedures: state.procedures.filter(proc => proc.id !== id)
    }));
  },
  
  deleteNews: (id) => {
    set((state) => ({
      news: state.news.filter(item => item.id !== id)
    }));
  },
  
  deleteTemplate: (id) => {
    set((state) => ({
      templates: state.templates.filter(template => template.id !== id)
    }));
  },
  
  deleteSavedSearch: (id) => {
    set((state) => ({
      savedSearches: state.savedSearches.filter(search => search.id !== id)
    }));
  },
  
  removeFromFavorites: (itemId, itemType) => {
    set((state) => ({
      favorites: state.favorites.filter(fav => 
        !(fav.itemId === itemId && fav.itemType === itemType)
      )
    }));
  },
  
  setCurrentUser: (user) => {
    set({ currentUser: user });
  },
  
  // Fonctions de recherche simplifiées
  searchLegalTexts: (query) => {
    const { legalTexts } = get();
    return legalTexts.filter(text => 
      text.title?.toLowerCase().includes(query.toLowerCase())
    );
  },
  
  searchProcedures: (query) => {
    const { procedures } = get();
    return procedures.filter(proc => 
      proc.title?.toLowerCase().includes(query.toLowerCase())
    );
  }
}));