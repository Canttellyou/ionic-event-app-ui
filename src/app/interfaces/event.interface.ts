export interface Event {
  id: number;
  name: string;
  date: string;
  image: string;
  location: string;
  performers?: string[];
  headliners?: string[];
  category_id: string;
  description: string;
}
