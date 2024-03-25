export const getKeys = {
  singleAlert({ userId, alertId }: { userId: string; alertId: string }) {
    return { PK: `alert#userId#${userId}`, SK: `alertId#${alertId}` };
  },
  manyAlerts({ userId }: { userId: string }) {
    return { PK: `alert#userId#${userId}` };
  },
};
