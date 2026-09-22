export type Post = {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  content_md: string;
  created_at: string;
  updated_at: string;
  featured: boolean;
  project_date: string;
};

export type PostField = {
  title: string;
  slug: string;
  summary?: string;
  content_md: string;
  featured: boolean;
};
