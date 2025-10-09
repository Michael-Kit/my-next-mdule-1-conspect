// app/docs/[...slug]/page.tsx

type Props = {
  params: { slug?: string[] }; // slug може бути undefined
};

export default async function DocsPage({ params }: Props) {
  const path = params.slug?.join(" / ") || "home";

  return (
    <div>
      <h1>Docs page</h1>
      <p>Current path: {path}</p>
    </div>
  );
}
