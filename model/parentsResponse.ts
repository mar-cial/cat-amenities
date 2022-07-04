export interface ParentsResult {
  data: Datum[];
  date_recived: DateRecived;
}

export interface Datum {
  id: number;
  property_category_id: number;
  name: string;
  seo_friendly: string;
  active_record: boolean;
  created_at: Date;
  updated_at: Date;
  created_by: string;
}

// Typo from server
export interface DateRecived {}
