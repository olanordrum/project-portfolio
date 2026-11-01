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
  accent_color: string;
  project_type: string;
  role: string;
  tags: string[];
};

export type PostField = {
  title: string;
  slug: string;
  summary?: string;
  content_md: string;
  featured: boolean;
};
