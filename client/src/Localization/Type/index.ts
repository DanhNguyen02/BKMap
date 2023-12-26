export type Slide = {
  id: number,
  title: string,
  description: string,
  image: number
}

export type TData = {
  id: number;
  name: string;
};

export type TBuildingData = {
  id: number;
  title: string;
  image: string;
  latitude: number;
  longitude: number;
  description: string;
  rooms: RoomData;
  comments: Comment;
};

export type RoomData = {
  id: number;
  title: string;
  image: string;
  description: string;
  comments: Comment;
}[];

export type Comment = {
  userid: number;
  content: string;
}[];