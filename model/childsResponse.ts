export interface ChildsResponse {
  count: number;
  next: string;
  previous: null;
  results: ChildsResult[];
}

export interface ChildsResult {
  id: number;
  name: string;
  seo_friendly: string;
  property_category: number;
  amenity_parent: number;
}
