"use client";

import { UltraAdaptivePresetPage } from "@/components/UltraAdaptivePresetPage";

export default function AncestralKnowledgePathPage() {
  const template = `
Path Name: {{path_name}}
Founding Myth: {{founding_myth}}
Learning Method: {{learning_method}}
Core Discipline: {{core_discipline}}
Memory Technique: {{memory_technique}}
Teacher Role: {{teacher_role}}
Student Journey: {{student_journey}}
Primary Text: {{primary_text}}
Sacred Tool: {{sacred_tool}}
Trial of Mastery: {{trial_of_mastery}}
Emotional Requirement: {{emotional_requirement}}
Spiritual Alignment: {{spiritual_alignment}}
Knowledge Source: {{knowledge_source}}
Forbidden Knowledge: {{forbidden_knowledge}}
Graduation Rite: {{graduation_rite}}
Cultural Impact: {{cultural_impact}}
Weakness: {{weakness}}
Hidden Lesson: {{hidden_lesson}}
`;

  return (
    <UltraAdaptivePresetPage
      presetId="ancestral-knowledge-path"
      title="Ancestral Knowledge Path"
      subtitle="Ultra Adaptive education blueprint"
      template={template}
      sections={[
        { name: "Identity" },
        { name: "Learning" },
        { name: "Spirit" },
        { name: "Ritual" },
        { name: "Shadow" },
      ]}
      fields={[
        // Identity
        { key: "path_name", label: "Path Name", defaultValue: "Ancestral Knowledge Path", section: "Identity" },
        { key: "founding_myth", label: "Founding Myth", defaultValue: "Gifted by the First Ancestor", section: "Identity" },
        { key: "core_discipline", label: "Core Discipline", defaultValue: "Memory‑guided wisdom", section: "Identity" },

        // Learning
        { key: "learning_method", label: "Learning Method", defaultValue: "Dream‑walking lessons", section: "Learning" },
        { key: "memory_technique", label: "Memory Technique", defaultValue: "Echo‑binding", section: "Learning" },
        { key: "teacher_role", label: "Teacher Role", defaultValue: "Memory‑keepers", section: "Learning" },
        { key: "student_journey", label: "Student Journey", defaultValue: "Three‑phase awakening", section: "Learning" },
        { key: "primary_text", label: "Primary Text", defaultValue: "The Book of Echoes", section: "Learning" },

        // Spirit
        { key: "spiritual_alignment", label: "Spiritual Alignment", defaultValue: "Aligned with ancestral resonance", section: "Spirit" },
        { key: "knowledge_source", label: "Knowledge Source", defaultValue: "Ancestral memory wells", section: "Spirit" },
        { key: "hidden_lesson", label: "Hidden Lesson", defaultValue: "Knowledge is a burden and a gift", section: "Spirit" },

        // Ritual
        { key: "sacred_tool", label: "Sacred Tool", defaultValue: "Memory‑binding staff", section: "Ritual" },
        { key: "trial_of_mastery", label: "Trial of Mastery", defaultValue: "Facing one’s forgotten self", section: "Ritual" },
        { key: "graduation_rite", label: "Graduation Rite", defaultValue: "The Rite of Returning Voices", section: "Ritual" },

        // Shadow
        { key: "forbidden_knowledge", label: "Forbidden Knowledge", defaultValue: "The Lost Echo", section: "Shadow" },
        { key: "emotional_requirement", label: "Emotional Requirement", defaultValue: "Absolute inner stillness", section: "Shadow" },
        { key: "weakness", label: "Weakness", defaultValue: "Students may lose themselves in memory", section: "Shadow" },
        { key: "cultural_impact", label: "Cultural Impact", defaultValue: "Shaped generations of leaders", section: "Shadow" },
      ]}
    />
  );
}
