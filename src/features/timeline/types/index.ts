export interface Story {
  id: string;
  username: string;
  avatar: string;
  isViewed: boolean;
}

export interface PostImage {
  id: string;
  uri: string;
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

export interface TodoItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface TodoCard {
  id: string;
  title: string;
  items: TodoItem[];
  type: "todo";
}

export type FeedItem = Post | TodoCard;

export interface TimelineState {
  stories: Story[];
  feedItems: FeedItem[];
  isLoading: boolean;
  refreshing: boolean;
}
