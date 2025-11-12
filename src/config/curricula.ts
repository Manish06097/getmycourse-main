import path from "path";

export type Curriculum = {
  id: string;
  name: string;
  schemaPath: string;
  templatePath: string;
  logicPath: string; // Path to the curriculum-specific logic module
  systemPromptOverride?: string;
};

export const curricula: Curriculum[] = [
  {
    id: "CHC33021",
    name: "CHC33021 Certificate III in Individual Support (Disability)",
    schemaPath: path.join(process.cwd(), "schemas", "CHC33021.json"),
    templatePath: path.join(process.cwd(), "templates", "blank_form-CHC33021.docx"),
    logicPath: "src/lib/curriculum-logic/CHC33021",
  },
  {
    id: "CHC30121",
    name: "CHC30121 Certificate III in Early Childhood Education and Care",
    schemaPath: path.join(process.cwd(), "schemas", "CHC30121.json"),
    templatePath: path.join(process.cwd(), "templates", "blank_form-CHC30121.docx"),
    logicPath: "src/lib/curriculum-logic/CHC30121",
  },
  {
    id: "CHC50121",
    name: "CHC50121 Diploma of Early Childhood Education and Care",
    schemaPath: path.join(process.cwd(), "schemas", "CHC50121.json"),
    templatePath: path.join(process.cwd(), "templates", "blank_form-CHC50121.docx"),
    logicPath: "src/lib/curriculum-logic/CHC50121",
  },
];
