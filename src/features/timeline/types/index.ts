import { ImageSourcePropType } from "react-native";

export interface Story {
  id: string;
  username: string;
  avatar: ImageSourcePropType | string;
  storyCount: number;
  isOwnStory?: boolean;
}

export interface PostImage {
  id: string;
  image: ImageSourcePropType | string;
  width: number;
  height: number;
}

export interface Post {
  id: string;
  user: {
    id: string;
    name: string;
    username: string;
    avatar: string;
    isVerified: boolean;
  };
  content: string;
  images?: PostImage[];
  timestamp: string;
  stats: {
    comments: number;
    views: number;
    likes: number;
    appreciates: number;
  };
  isLiked: boolean;
  isAppreciated: boolean;
  type: "post";
}

export interface ArticlePost {
  id: string;
  user: {
    id: string;
    name: string;
    username: string;
    avatar: string;
    isVerified: boolean;
    group?: string;
  };
  title: string;
  content: string;
  image?: PostImage;
  timestamp: string;
  readTime: string;
  stats: {
    comments: number;
    views: number;
    likes: number;
    shares: number;
  };
  isLiked: boolean;
  type: "article";
}

export interface TodoItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface TodoCardType {
  id: string;
  title: string;
  items: TodoItem[];
  type: "todo";
}

export type FeedItem = Post | ArticlePost | TodoCardType;

export interface TimelineState {
  stories: Story[];
  feedItems: FeedItem[];
  isLoading: boolean;
  refreshing: boolean;
}
