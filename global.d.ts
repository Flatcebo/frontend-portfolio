type CategoryKey = "language" | "framework" | "markUp" | "database" | "tool";

interface SkillItem {
  title: string;
  imgUrl: string;
  star: boolean;
}

interface SkillCategory {
  language: SkillItem[];
  framework: SkillItem[];
  markUp: SkillItem[];
  database: SkillItem[];
  tool: SkillItem[];
}

interface SkillProps {
  skillData: SkillCategory[];
  categories: CategoryKey[];
}

declare const API_BASE_URL: string;
declare const mainColor = "#244998";
