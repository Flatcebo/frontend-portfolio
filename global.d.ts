type CategoryKey = "language" | "framework" | "markUp" | "database" | "tool";

interface SkillItem {
  title: string;
  imgUrl: string;
  star?: boolean;
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

interface PfCategory {
  title: string;
  intro: string;
  part: string[];
  period: string;
  language: string;
  frontStacks: string[];
  backStacks: string[];
  imgUrl: string;
  url: string;
  gitUrl: string;
  task: PfTask[];
  desc: string;
}

interface PfTask {
  front: string[];
  back: string[];
}

declare const API_BASE_URL: string;
declare const mainColor = "#244998";
