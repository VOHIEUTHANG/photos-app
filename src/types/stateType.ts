export type PhotoType = {
  id: number;
  categoryId: number;
  photo: string;
  title: string;
};
export type ActionType = {
  type: string;
  payload: PhotoType;
};
