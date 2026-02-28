export const DB_NAME = "taskmanagement";

export const UserRoleEnum = {
    ADMIN: "ADMIN",
    PROJECT_ADMIN: "PROJECT_ADMIN",
    MEMBER: "MEMBER"
};
export const AvaialbleRoles = Object.values(UserRoleEnum);

export const TaskStatusEnum = {
    PENDING: "PENDING",
    IN_PROGRESS: "IN_PROGRESS",
    COMPLETED: "COMPLETED"
};

export const AvaialbleTaskStatuses = Object.values(TaskStatusEnum);
