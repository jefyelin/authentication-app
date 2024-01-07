import { auth, signOut } from "@/auth";

export default async function SettingsPage() {
  const session = await auth();

  if (!session) {
    return null;
  }

  return (
    <>
      <h1>Settings page</h1>
      <span>{JSON.stringify(session)}</span>
      <form
        // @ts-ignore
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit" className="mt-2 border-2 border-black">
          Sign out
        </button>
      </form>
    </>
  );
}
