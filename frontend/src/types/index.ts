// ─── User & Auth ─────────────────────────────────────────────────────────────

export type Role = "super_admin" | "admin" | "mentor" | "member";

export type MemberStatus = "active" | "inactive" | "alumni" | "pending";

export type Tier = "silver" | "gold" | "platinum";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

// ─── Member ──────────────────────────────────────────────────────────────────

export interface Member {
  id: string;
  name: string;
  email: string;
  phone?: string;
  gender: "male" | "female";
  region: string;
  status: MemberStatus;
  level: number;
  mentorId?: string;
  mentorName?: string;
  tier?: Tier;
  joinedAt: string;
  avatarUrl?: string;
}

// ─── Mentor ──────────────────────────────────────────────────────────────────

export interface Mentor {
  id: string;
  name: string;
  email: string;
  phone?: string;
  memberCount: number;
  maxCapacity: number;
  avatarUrl?: string;
}

// ─── Activity ────────────────────────────────────────────────────────────────

export type ActivityStatus = "pending" | "approved" | "rejected";

export type ActivityType =
  | "workshop"
  | "community_service"
  | "meeting"
  | "training"
  | "other";

export interface Activity {
  id: string;
  memberId: string;
  memberName?: string;
  type: ActivityType;
  title: string;
  description?: string;
  date: string;
  status: ActivityStatus;
  evidenceUrl?: string;
  createdAt: string;
}

// ─── Evaluation ──────────────────────────────────────────────────────────────

export interface Evaluation {
  id: string;
  memberId: string;
  memberName: string;
  mentorId: string;
  attendance: number;      // 0–100
  participation: number;   // 0–100
  contribution: number;    // 0–100
  behavior: number;        // 0–100
  totalScore: number;
  notes?: string;
  status: "draft" | "submitted";
  createdAt: string;
}

// ─── Promotion ───────────────────────────────────────────────────────────────

export interface Promotion {
  id: string;
  memberId: string;
  memberName: string;
  currentLevel: number;
  targetLevel: number;
  evaluationId?: string;
  status: "pending" | "approved" | "rejected";
  adminNote?: string;
  requestedAt: string;
  resolvedAt?: string;
}

// ─── Notification ────────────────────────────────────────────────────────────

export type NotificationType =
  | "promotion"
  | "evaluation"
  | "activity"
  | "mentor_assigned"
  | "system";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

// ─── Timeline ────────────────────────────────────────────────────────────────

export interface TimelineEvent {
  id: string;
  title: string;
  description?: string;
  date: string;
  icon?: React.ReactNode;
  color?: "teal" | "amber" | "info" | "danger" | "muted";
}

// ─── Level ───────────────────────────────────────────────────────────────────

export interface Level {
  id: string;
  number: number;
  name: string;
  description?: string;
  requiredScore: number;
  criteria: LevelCriterion[];
}

export interface LevelCriterion {
  id: string;
  name: string;
  weight: number;
  description?: string;
}

// ─── Pagination ──────────────────────────────────────────────────────────────

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ─── API Filters ─────────────────────────────────────────────────────────────

export interface MemberFilters {
  status?: MemberStatus;
  level?: number;
  region?: string;
  gender?: "male" | "female";
  mentorId?: string;
  search?: string;
}
