// app/docs/[...slug]/page.tsx
type Props = {
  params: { slug?: string[] };
};

export default function DocsPage({ params }: Props) {
  const slug = params.slug ?? [];

  return (
    <div>
      <h1>Docs page</h1>
      <p>Current path: {slug.length > 0 ? slug.join(" / ") : "home"}</p>
    </div>
  );
}
