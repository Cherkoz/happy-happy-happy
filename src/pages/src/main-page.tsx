import { Timer } from '@my-app/components';

export function MainPage() {
  const targetDate = '2023-12-03T00:00:00';
  // const targetDate = '2023-12-03T00:00:00';

  return (
    <>
      <Timer targetDate={targetDate} />
    </>
  );
}
