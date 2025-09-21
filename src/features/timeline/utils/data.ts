import { Post, Story, TodoCard } from "../types";

export const mockStories: Story[] = [
  {
    id: "1",
    username: "You",
    avatar: "https://via.placeholder.com/60x60/6366F1/FFFFFF?text=You",
    isViewed: false,
  },
  {
    id: "2",
    username: "josephine",
    avatar: "https://via.placeholder.com/60x60/10B981/FFFFFF?text=JF",
    isViewed: false,
  },
  {
    id: "3",
    username: "josephine",
    avatar: "https://via.placeholder.com/60x60/F59E0B/FFFFFF?text=JF",
    isViewed: false,
  },
  {
    id: "4",
    username: "josephine",
    avatar: "https://via.placeholder.com/60x60/EF4444/FFFFFF?text=JF",
    isViewed: false,
  },
  {
    id: "5",
    username: "alex",
    avatar: "https://via.placeholder.com/60x60/8B5CF6/FFFFFF?text=AL",
    isViewed: true,
  },
];

export const mockPosts: Post[] = [
  {
    id: "1",
    user: {
      id: "1",
      name: "Josephine Fangula",
      username: "josephine",
      avatar: "https://via.placeholder.com/40x40/10B981/FFFFFF?text=JF",
      isVerified: true,
    },
    content:
      "not everyone can be a millionaire, not everyone can have the beauty queens, not everyone can be happy it's a competition",
    images: [
      {
        id: "1",
        uri: "https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Nature+Walk",
        width: 300,
        height: 200,
      },
    ],
    timestamp: "2h",
    stats: {
      comments: 34,
      views: 87,
      likes: 16,
      appreciates: 3,
    },
    isLiked: false,
    isAppreciated: false,
    type: "post",
  },
  {
    id: "2",
    user: {
      id: "1",
      name: "Josephine Fangula",
      username: "josephine",
      avatar: "https://via.placeholder.com/40x40/10B981/FFFFFF?text=JF",
      isVerified: true,
    },
    content:
      "not everyone can be a millionaire, not everyone can have the beauty queens, not everyone can be happy it's a competition",
    timestamp: "2h",
    stats: {
      comments: 34,
      views: 87,
      likes: 16,
      appreciates: 3,
    },
    isLiked: false,
    isAppreciated: false,
    type: "post",
  },
  {
    id: "3",
    user: {
      id: "1",
      name: "Josephine Fangula",
      username: "josephine",
      avatar: "https://via.placeholder.com/40x40/10B981/FFFFFF?text=JF",
      isVerified: true,
    },
    content:
      "not everyone can be a millionaire, not everyone can have the beauty queens, not everyone can be happy it's a competition",
    images: [
      {
        id: "1",
        uri: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Blue+Car",
        width: 300,
        height: 200,
      },
    ],
    timestamp: "3h",
    stats: {
      comments: 34,
      views: 87,
      likes: 16,
      appreciates: 3,
    },
    isLiked: false,
    isAppreciated: false,
    type: "post",
  },
];

export const mockTodoCard: TodoCard = {
  id: "todo-1",
  title: "3 Important Things to Get Done Today",
  items: [
    {
      id: "1",
      text: "Read page 20 from marketing book",
      isCompleted: false,
    },
    {
      id: "2",
      text: "Important task to get done today",
      isCompleted: true,
    },
    {
      id: "3",
      text: "Here is an example of putting long tasks that skip the first line",
      isCompleted: false,
    },
  ],
  type: "todo",
};

export const mockFeedItems = [
  mockPosts[0],
  mockPosts[1],
  mockPosts[2],
  mockTodoCard,
];
