export interface ActivityLog<T> {
  id: string;
  entityType: string;
  data: T;
  action: string;
  createdAt: string; // ISO datetime string
}
