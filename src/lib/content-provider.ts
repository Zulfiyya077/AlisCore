import {
  blogPosts,
  caseStudies,
  getBlogPostBySlug,
  getCaseStudyBySlug,
  getIndustryBySlug,
  getServiceBySlug,
  industryPages,
  servicePages,
  type BlogPostContent,
  type CaseStudyContent,
  type IndustryPageContent,
  type ServicePageContent,
} from './marketing-content';

export interface ContentProvider {
  getServices(): Promise<ServicePageContent[]>;
  getServiceBySlug(slug: string): Promise<ServicePageContent | undefined>;
  getCaseStudies(): Promise<CaseStudyContent[]>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudyContent | undefined>;
  getIndustries(): Promise<IndustryPageContent[]>;
  getIndustryBySlug(slug: string): Promise<IndustryPageContent | undefined>;
  getBlogPosts(): Promise<BlogPostContent[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPostContent | undefined>;
}

const localContentProvider: ContentProvider = {
  async getServices() {
    return servicePages;
  },
  async getServiceBySlug(slug: string) {
    return getServiceBySlug(slug);
  },
  async getCaseStudies() {
    return caseStudies;
  },
  async getCaseStudyBySlug(slug: string) {
    return getCaseStudyBySlug(slug);
  },
  async getIndustries() {
    return industryPages;
  },
  async getIndustryBySlug(slug: string) {
    return getIndustryBySlug(slug);
  },
  async getBlogPosts() {
    return blogPosts;
  },
  async getBlogPostBySlug(slug: string) {
    return getBlogPostBySlug(slug);
  },
};

export function getContentProvider(): ContentProvider {
  const provider = process.env.CONTENT_PROVIDER || 'local';

  switch (provider) {
    case 'local':
    default:
      return localContentProvider;
  }
}
