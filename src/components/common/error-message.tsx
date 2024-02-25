export const ErrorMessage = ({ error }: { error?: string }) => {
  return error ? (
    <div className="rounded p-2 bg-red-200 border border-red-400">{error}</div>
  ) : null;
};
