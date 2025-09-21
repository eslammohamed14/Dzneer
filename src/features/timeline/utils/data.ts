import { images } from "../../../common";
import { Post, Story, TodoCardType } from "../types";

export const mockStories: Story[] = [
  {
    id: "1",
    username: "Your Story",
    avatar: images.friend,
    storyCount: 1,
    isOwnStory: true,
  },
  {
    id: "2",
    username: "Josephinaed",
    avatar: images.friend,
    isOwnStory: false,
    storyCount: 2,
  },
  {
    id: "3",
    username: "Josephinaed",
    avatar: images.friend,
    isOwnStory: false,
    storyCount: 3,
  },
  {
    id: "4",
    username: "Josephinaed",
    avatar: images.friend,
    isOwnStory: false,
    storyCount: 1,
  },
  {
    id: "5",
    username: "Josephinaed",
    avatar: images.friend,
    isOwnStory: false,
    storyCount: 4,
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
        image: images.image2,
        width: 300,
        height: 300,
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
    timestamp: "Yesterday",
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
        image: images.image,
        width: 300,
        height: 200,
      },
      {
        id: "2",
        image: images.image2,
        width: 300,
        height: 200,
      },
    ],
    timestamp: "3 Weeks ago",
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

export const mockTodoCard: TodoCardType = {
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
